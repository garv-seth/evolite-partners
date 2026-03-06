import { Resend } from "resend";

export async function POST(req) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const body = await req.json();
        const { firstName, lastName, email, interest, revenue, message } = body;

        if (!firstName || !email || !interest || !message) {
            return Response.json({ error: "Missing required fields." }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: "Evolite Partners <onboarding@resend.dev>",
            to: ["prideinpreparation@gmail.com"],
            replyTo: email,
            subject: `New Inquiry — Evolite Partners | ${interest}`,
            html: `
                <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #06091a; color: #f3f4f6; padding: 32px; border-radius: 12px; border: 1px solid rgba(201,168,76,0.3);">
                    <div style="border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 20px; margin-bottom: 24px;">
                        <h1 style="font-size: 1.4rem; color: #c9a84c; margin: 0 0 4px; letter-spacing: 0.15em;">EVOLITE PARTNERS</h1>
                        <p style="font-size: 0.75rem; color: #9ca3af; margin: 0; letter-spacing: 0.15em; text-transform: uppercase;">New Client Inquiry</p>
                    </div>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; width: 38%; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);"><a href="mailto:${email}" style="color: #c9a84c; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Interest</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${interest}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Revenue Range</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f3f4f6; font-size: 0.88rem;">${revenue || "Not specified"}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 24px;">
                        <p style="color: #9ca3af; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">Message</p>
                        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 16px; color: #f3f4f6; font-size: 0.88rem; line-height: 1.75; white-space: pre-wrap;">${message}</div>
                    </div>

                    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2); text-align: center;">
                        <a href="https://calendly.com/evolitepartners" style="display: inline-block; background: linear-gradient(135deg, #8b5e3c, #c9a84c); color: #06091a; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none; padding: 10px 28px; border-radius: 9999px;">
                            Schedule via Calendly →
                        </a>
                        <p style="margin-top: 14px; font-size: 0.7rem; color: #6b7280;">Reply directly to this email to respond to ${firstName} at ${email}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return Response.json({ error: "Failed to send email." }, { status: 500 });
    }
}
