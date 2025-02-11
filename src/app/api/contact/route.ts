import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

const mailOptions = {
  from: `"${name}" <${email}>`, // L'expéditeur affiché sera toujours ton adresse
  replyTo: email, // Quand tu cliques sur "Répondre", ça mettra bien l'email du visiteur
  to: process.env.EMAIL_USER,
  subject: `📩 Nouveau message de ${name}`,
  text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #007bff;">📩 Nouveau message de ${name}</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
        ${message}
      </blockquote>
      <hr>
      <p style="font-size: 12px; color: #555;">Ce message a été envoyé via le formulaire de contact de ton site.</p>
    </div>
  `,
};


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
