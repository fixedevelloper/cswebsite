"use client";
import React, { useState } from "react";

const DevisForm = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(e.target);

        // Honeypot anti-bot
        if (formData.get("website")) {
            setLoading(false);
            return;
        }

        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/devis`,
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
                    throw new Error("Trop de tentatives. Réessayez plus tard.");
                }
                throw new Error(result.message || "Erreur lors de l’envoi");
            }

            setMessage("✅ Votre demande de devis a été envoyée avec succès.");
            e.target.reset();
        } catch (error) {
            setMessage(`❌ ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}   className="contact-page__form contact-form-validated">
                {/* Honeypot invisible */}
                <input
                    type="text"
                    name="website"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                />

                <div className="row">
                    <div className="col-xl-12">
                        <div className="comment-form__input-box">
                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="comment-form__input-box">
                            <input
                                type="email"
                                name="email"
                                placeholder="Adresse e-mail"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="contact-page__input-box">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Téléphone"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="comment-form__input-box">
                <select name="project_type" required>
                    <option value="">Type de projet</option>
                    <option>Site web</option>
                    <option>Application mobile</option>
                    <option>Logiciel métier</option>
                    <option>E-commerce</option>
                    <option>Autre</option>
                </select>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="comment-form__input-box">
                <select name="budget">
                    <option value="">Budget estimatif</option>
                    <option>&lt; 500k FCFA</option>
                    <option>500k – 1M FCFA</option>
                    <option>1M – 5M FCFA</option>
                    <option>+5M FCFA</option>
                </select>
                    </div></div>
                <div className="col-xl-12">
                    <div className="comment-form__input-box">
                <textarea
                    name="description"
                    placeholder="Décrivez votre projet"
                    required
                />
                    </div></div>
                <div className="contact-page__btn-box">
                <button type="submit" disabled={loading}   className="thm-btn contact-page__btn">
                    {loading ? "Envoi en cours..." : "Recevoir mon devis"}
                </button></div>
            </form>

            {message && (
                <p className="mt-3 text-center">
                    {message}
                </p>
            )}
        </>
    );
};

export default DevisForm;
