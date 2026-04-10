import { Resend } from "resend";

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDuration(seconds) {
  if (!seconds) return "Unknown";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function urgencyBadge(urgency) {
  const map = {
    hot: { label: "HOT LEAD", color: "#ef4444", bg: "rgba(239,68,68,0.15)" },
    warm: { label: "WARM LEAD", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
    cold: { label: "COLD / BROWSING", color: "#6b7280", bg: "rgba(107,114,128,0.15)" },
  };
  return map[urgency] ?? map.warm;
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
    if (!msg) return Response.json({ received: true });

    // Only process end-of-call reports
    if (msg.type !== "end-of-call-report") {
      return Response.json({ received: true });
    }

    const call = msg.call ?? {};
    const callerPhone = call.customer?.number ?? "Unknown";
    const durationSecs = call.endedAt && call.startedAt
      ? Math.round((new Date(call.endedAt) - new Date(call.startedAt)) / 1000)
      : null;
    const transcript = msg.transcript ?? "(No transcript available)";
    const summary = msg.summary ?? "";
    const callId = call.id ?? "";

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM_JADE ?? "Jade — Evolite Partners <jade@evolitepartners.com>",
      to: [process.env.CONTACT_TO_EMAIL ?? "hello@evolitepartners.com"],
      subject: `Call Summary — ${esc(callerPhone)} · ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; background: #06091a; color: #f3f4f6; padding: 32px; border-radius: 12px; border: 1px solid rgba(201,168,76,0.3);">
          <div style="border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="font-size: 1.2rem; color: #c9a84c; margin: 0 0 4px; letter-spacing: 0.15em;">EVOLITE PARTNERS</h1>
            <p style="font-size: 0.75rem; color: #9ca3af; margin: 0; letter-spacing: 0.12em; text-transform: uppercase;">Jade — Inbound Call Summary</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; width: 38%; text-transform: uppercase; letter-spacing: 0.1em;">Caller Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #c9a84c; font-size: 0.88rem;">${esc(callerPhone)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Duration</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${esc(formatDuration(durationSecs))}</td>
            </tr>
            ${callId ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Call ID</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #6b7280; font-size: 0.78rem; font-family: monospace;">${esc(callId)}</td>
            </tr>` : ""}
          </table>

          ${summary ? `
          <div style="margin-bottom: 24px;">
            <p style="color: #9ca3af; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">AI Summary</p>
            <div style="background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.2); border-radius: 8px; padding: 16px; color: #f3f4f6; font-size: 0.88rem; line-height: 1.75;">${esc(summary)}</div>
          </div>` : ""}

          <div style="margin-bottom: 24px;">
            <p style="color: #9ca3af; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">Full Transcript</p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 16px; color: #d1d5db; font-size: 0.82rem; line-height: 1.8; white-space: pre-wrap; max-height: 400px; overflow: auto;">${esc(transcript)}</div>
          </div>

          <div style="padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2); text-align: center;">
            <a href="https://dashboard.vapi.ai" style="display: inline-block; background: linear-gradient(135deg, #8b5e3c, #c9a84c); color: #06091a; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none; padding: 10px 28px; border-radius: 9999px;">
              View in Vapi Dashboard →
            </a>
          </div>
        </div>
      `,
    });

    return Response.json({ received: true });
  } catch (err) {
    console.error("Vapi webhook error:", err);
    // Return 200 so Vapi doesn't retry
    return Response.json({ received: true });
  }
}
