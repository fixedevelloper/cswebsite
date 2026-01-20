"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        const formData = new FormData(e.target);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await res.json();

            if (!res.ok) {
                if (res.status === 429) {
                    throw new Error("Trop de tentatives. Veuillez réessayer plus tard.");
                }
                throw new Error(result.message || "Erreur serveur");
            }


            setSuccess(result.message);
            e.target.reset();
        } catch (error) {
            console.error(error);
            setSuccess("Erreur lors de l’envoi du message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="contact-page__form contact-form-validated"
                noValidate
            >
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-page__input-box">
                            <input type="text" name="name" placeholder="Nom complet" required />
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="contact-page__input-box">
                            <input type="email" name="email" placeholder="Adresse email" required />
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="contact-page__input-box">
                            <input type="text" name="phone" placeholder="Téléphone" required />
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="contact-page__input-box">
                            <input type="text" name="subject" placeholder="Objet du message" required />
                        </div>
                    </div>
                </div>
                <input type="text" name="website" style={{ display: "none" }} />

                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                            <textarea name="message" placeholder="Écrivez votre message" required />
                        </div>

                        <div className="contact-page__btn-box">
                            <button
                                type="submit"
                                className="thm-btn contact-page__btn"
                                disabled={loading}
                            >
                                {loading ? "Envoi en cours..." : "Envoyer le message"}
                                <span /><span /><span /><span /><span />
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {success && (
                <p className="mt-3 text-center text-success">
                    {success}
                </p>
            )}
        </>
    );
};

export default ContactForm;
