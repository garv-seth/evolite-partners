import { Resend } from "resend";

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function urgencyConfig(urgency) {
  const map = {
    hot: { label: "HOT LEAD", color: "#ef4444", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.4)" },
    warm: { label: "WARM LEAD", color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.4)" },
    cold: { label: "COLD", color: "#6b7280", bg: "rgba(107,114,128,0.08)", border: "rgba(107,114,128,0.3)" },
  };
  return map[String(urgency).toLowerCase()] ?? map.warm;
}

export async function POST(req) {
  try {
    // Optional webhook secret verification
    const secret = process.env.VAPI_WEBHOOK_SECRET;
    if (secret) {
      const provided = req.headers.get("x-vapi-secret");
      if (provided !== secret) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const body = await req.json();
    const msg = body?.message;

    // Vapi tool call event
    if (!msg || msg.type !== "tool-calls") {
      return Response.json({ results: [] });
    }

    const toolCallList = msg.toolCallList ?? [];
    const results = [];

    for (const toolCall of toolCallList) {
      const toolName = toolCall?.function?.name;
      let args = {};
      try {
        args = JSON.parse(toolCall?.function?.arguments ?? "{}");
      } catch {
        // args stays empty
      }

      if (toolName === "captureAndSchedule") {
        const {
          callerName,
          callerEmail,
          primaryNeed,
          businessStage,
          annualRevenue,
          urgency,
          callSummary,
        } = args;

        // Try to generate a single-use Calendly scheduling link
        let calendlyLink =
          process.env.CALENDLY_LINK ?? "https://calendly.com/evolitepartners";
        const calendlyToken = process.env.CALENDLY_API_KEY;
        const eventTypeUri = process.env.CALENDLY_EVENT_TYPE_URI;
        if (calendlyToken && eventTypeUri) {
          try {
            const clRes = await fetch("https://api.calendly.com/scheduling_links", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${calendlyToken}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                max_event_count: 1,
                owner: eventTypeUri,
                owner_type: "EventType",
              }),
            });
            if (clRes.ok) {
              const clData = await clRes.json();
              calendlyLink = clData?.resource?.booking_url ?? calendlyLink;
            }
          } catch {
            // fall through to default link
          }
        }

        let resultMessage =
          "I was unable to process the scheduling request. Please ask the caller to visit evolitepartners.com to book directly.";

        // Only send emails if we have a valid email
        if (callerEmail && EMAIL_RE.test(callerEmail)) {
          const resend = new Resend(process.env.RESEND_API_KEY);
          const urg = urgencyConfig(urgency);

          // 1. Email to caller with Calendly scheduling link
          const callerEmailResult = await resend.emails.send({
            from: process.env.RESEND_FROM ?? "Evolite Partners <contact@evolitepartners.com>",
            to: [callerEmail],
            subject: "Your Evolite Partners PRIDE Assessment — Schedule Your Call",
            html: `
              <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; background: #06091a; color: #f3f4f6; padding: 32px; border-radius: 12px; border: 1px solid rgba(201,168,76,0.3);">
                <div style="border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 20px; margin-bottom: 28px;">
                  <h1 style="font-size: 1.2rem; color: #c9a84c; margin: 0 0 4px; letter-spacing: 0.15em;">EVOLITE PARTNERS</h1>
                  <p style="font-size: 0.75rem; color: #9ca3af; margin: 0; letter-spacing: 0.12em; text-transform: uppercase;">Your Free PRIDE Assessment</p>
                </div>

                <p style="font-size: 1rem; margin: 0 0 12px;">Hi ${esc(callerName || "there")},</p>
                <p style="font-size: 0.92rem; color: #d1d5db; line-height: 1.75; margin: 0 0 24px;">
                  Thank you for calling Evolite Partners. As promised, here is your link to schedule a complimentary 30-minute PRIDE Assessment call with Shhally Sharma.
                </p>

                <div style="text-align: center; margin: 28px 0;">
                  <a href="${calendlyLink}" style="display: inline-block; background: linear-gradient(135deg, #8b5e3c, #c9a84c); color: #06091a; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; padding: 14px 36px; border-radius: 9999px;">
                    Book Your Free Assessment →
                  </a>
                </div>

                <p style="font-size: 0.82rem; color: #9ca3af; line-height: 1.7; margin: 0 0 20px;">
                  In this call, Shhally will walk you through the PRIDE Framework — Protection, Revenue, Infrastructure, Documentation, and Execution — and give you an honest assessment of where your business stands today.
                </p>

                <p style="font-size: 0.82rem; color: #9ca3af; line-height: 1.7; margin: 0;">
                  Questions before your call? Reply to this email or visit <a href="https://evolitepartners.com" style="color: #c9a84c;">evolitepartners.com</a>.
                </p>

                <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.15); font-size: 0.72rem; color: #6b7280;">
                  Evolite Partners LLC · Washington State · Nationwide Service · <a href="https://evolitepartners.com/privacy" style="color: #6b7280;">Privacy Policy</a>
                </div>
              </div>
            `,
          });

          // 2. Lead notification email to Shhally
          await resend.emails.send({
            from: process.env.RESEND_FROM_JADE ?? "Jade — Evolite Partners <jade@evolitepartners.com>",
            to: [process.env.CONTACT_TO_EMAIL ?? "shhally@evolitepartners.com"],
            subject: `[${urg.label}] New Phone Lead — ${esc(callerName || "Unknown")} · ${esc(primaryNeed || "General")}`,
            html: `
              <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; background: #06091a; color: #f3f4f6; padding: 32px; border-radius: 12px; border: 1px solid rgba(201,168,76,0.3);">
                <div style="border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 20px; margin-bottom: 24px;">
                  <h1 style="font-size: 1.2rem; color: #c9a84c; margin: 0 0 4px; letter-spacing: 0.15em;">EVOLITE PARTNERS</h1>
                  <p style="font-size: 0.75rem; color: #9ca3af; margin: 0; letter-spacing: 0.12em; text-transform: uppercase;">New Inbound Phone Lead — Jade</p>
                </div>

                <div style="background: ${urg.bg}; border: 1px solid ${urg.border}; border-radius: 8px; padding: 10px 16px; margin-bottom: 24px; display: inline-block;">
                  <span style="color: ${urg.color}; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;">${esc(urg.label)}</span>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; width: 38%; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${esc(callerName || "Not provided")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #c9a84c; font-size: 0.88rem;">${esc(callerEmail)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Primary Need</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${esc(primaryNeed || "Not specified")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Business Stage</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${esc(businessStage || "Not specified")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Annual Revenue</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${esc(annualRevenue || "Not specified")}</td>
                  </tr>
                </table>

                <div style="margin-bottom: 24px;">
                  <p style="color: #9ca3af; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">Jade's Summary</p>
                  <div style="background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.2); border-radius: 8px; padding: 16px; color: #f3f4f6; font-size: 0.88rem; line-height: 1.75;">${esc(callSummary || "No summary provided.")}</div>
                </div>

                <div style="padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2); text-align: center;">
                  <p style="font-size: 0.8rem; color: #9ca3af; margin: 0 0 14px;">Scheduling link was sent to ${esc(callerEmail)}</p>
                  <a href="https://calendly.com/evolitepartners" style="display: inline-block; background: linear-gradient(135deg, #8b5e3c, #c9a84c); color: #06091a; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none; padding: 10px 28px; border-radius: 9999px;">
                    View Your Calendly →
                  </a>
                </div>
              </div>
            `,
          });

          resultMessage = `Done. I have sent the scheduling link for the PRIDE Assessment call to ${callerEmail}. They should receive it within a few minutes. Is there anything else I can help you with before we wrap up?`;
        }

        results.push({
          toolCallId: toolCall.id,
          result: resultMessage,
        });
      } else {
        // Unknown tool — return a safe fallback
        results.push({
          toolCallId: toolCall.id,
          result: "Action completed.",
        });
      }
    }

    return Response.json({ results });
  } catch (err) {
    console.error("Vapi tool error:", err);
    return Response.json({ results: [] });
  }
}
