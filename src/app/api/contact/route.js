import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Inizio Overseas Website" <${process.env.EMAIL_USER}>`,
      to: "info@iniziooverseas.com",
      subject: `New Inquiry from ${data.name} — ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
          
          <div style="background-color: #1a5c3a; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px; letter-spacing: 1px;">INIZIO OVERSEAS</h1>
            <p style="color: #a8d5b5; margin: 4px 0 0; font-size: 13px;">New Inquiry Form Submission</p>
          </div>

          <div style="padding: 32px;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px; width: 40%;">Name</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Phone</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.number}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Company</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Product Name</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.product}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Product Detail</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.detail || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Customization</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${data.custom || "—"}</td>
              </tr>
            </table>

          </div>

          <div style="background-color: #f9f9f9; padding: 16px 32px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #aaa; font-size: 12px; margin: 0;">This email was sent automatically from your Inizio Overseas website contact form.</p>
          </div>

        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return Response.json({ success: false, error: err.message });
  }
}