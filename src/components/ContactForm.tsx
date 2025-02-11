"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: any) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Message envoyé avec succès !");
        reset();
      } else {
        setMessage("❌ Erreur : " + result.error);
      }
    } catch (error) {
      setMessage("❌ Erreur serveur. Réessayez plus tard.");
    }

    setLoading(false);
  };

  return (
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:w-96 grid">
  <input
    {...register("name", { required: true })}
    className="w-full p-3 border rounded border-primary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-300 outline-none"
    placeholder="Votre nom"
  />
  <input
    {...register("email", { required: true })}
    type="email"
    className="w-full p-3 border rounded border-primary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-300 outline-none"
    placeholder="Votre email"
  />
  <textarea
    {...register("message", { required: true })}
    className="w-full p-3 border rounded border-primary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-300 outline-none"
    placeholder="Votre message"
    rows={4}
  ></textarea>

  <Button text={loading ? "Envoi..." : "Envoyer"} disabled={loading}  />

  {message && <p className="text-center mt-3">{message}</p>}
</form>

  );
};

export default ContactForm;
