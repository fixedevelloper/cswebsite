"use client";
import React, { useState } from "react";

// Inscription à la newsletter : les adresses sont enregistrées par l'API Laravel
const NewsletterForm = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // { type: "success" | "error", message }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    email: form.email.value,
                    website: form.website.value, // honeypot
                }),
            });

            const result = await res.json().catch(() => ({}));

            if (!res.ok) {
                if (res.status === 429) throw new Error("Trop de tentatives. Veuillez réessayer plus tard.");
                if (res.status === 422) throw new Error("Veuillez saisir une adresse email valide.");
                throw new Error("L’inscription a échoué. Veuillez réessayer.");
            }

            setStatus({ type: "success", message: result.message });
            form.reset();
        } catch (error) {
            setStatus({ type: "error", message: error.message || "L’inscription a échoué. Veuillez réessayer." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="footer-widget__contact-form" onSubmit={handleSubmit}>
                <div className="footer-widget__contact-form-input-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        aria-label="Adresse email"
                        autoComplete="email"
                        required
                    />
                    {/* Champ piège invisible pour les robots */}
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
                    <button
                        type="submit"
                        className="footer-widget__contact-btn"
                        aria-label="S’inscrire à la newsletter"
                        disabled={loading}
                    >
                        <span className={loading ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"} />
                    </button>
                </div>
            </form>
            {status && (
                <p className={`newsletter-form__message newsletter-form__message--${status.type}`} role="status">
                    {status.message}
                </p>
            )}
            <p className="newsletter-form__consent">
                En vous inscrivant, vous acceptez de recevoir nos actualités par email.
                Vous pouvez vous désinscrire à tout moment en nous écrivant à info@cscreativ.com.
            </p>
        </>
    );
};

export default NewsletterForm;
