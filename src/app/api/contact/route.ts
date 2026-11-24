import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  enquiryFor?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const enquiryFor = body.enquiryFor?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !email || !enquiryFor || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "srinithianand@gmail.com";

    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "Portfolio Enquiry <onboarding@resend.dev>",
          to: [recipient],
          reply_to: email,
          subject: `[Portfolio Enquiry] ${enquiryFor} — ${name}`,
          text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nEnquiry For: ${enquiryFor}\n\nMessage:\n${message}`,
        }),
      });

      if (!emailRes.ok) {
        return NextResponse.json(
          { error: "Unable to send email right now. Please write directly to srinithianand@gmail.com." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({
      ok: true,
      delivered: Boolean(resendKey),
      message: "Your enquiry has been received.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

