import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 1. Option A: Resend API Dispatch
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: "ssllsaiful.islam@gmail.com",
          subject: `DevOps Portfolio: Message from ${name}`,
          html: `<h3>New Contact Message</h3>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong></p>
                 <p style="white-space: pre-line;">${message}</p>`,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend API error:", errText);
        throw new Error("Resend API failed to dispatch email.");
      }
    } 
    // 2. Option B: Nodemailer SMTP Server Dispatch
    else if (
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports (587)
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`, // Must match authenticated SMTP address to prevent relay blocks
        replyTo: email, // Send replies directly to the client
        to: "ssllsaiful.islam@gmail.com",
        subject: `DevOps Portfolio: Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<h3>New Contact Message</h3>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p style="white-space: pre-line;">${message}</p>`,
      });
    } 
    // 3. Option C: Console Log Fallback (Local Development Mode)
    else {
      console.log("================ CONTACT MESSAGE ================");
      console.log(`From   : ${name} (${email})`);
      console.log(`Message: ${message}`);
      console.log("=================================================");
      console.warn(
        "WARNING: Neither SMTP credentials nor RESEND_API_KEY were found in environment variables. Message fell back to console logs."
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been compiled and dispatched successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch email transmission." },
      { status: 500 }
    );
  }
}
