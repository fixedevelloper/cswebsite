"use client";
import React, { useState } from "react";

const CommentForm = ({ postId }) => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = {
            post_id: postId,
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Erreur lors de l'envoi du commentaire.");
            }

            setStatus({ type: "success", message: "Votre commentaire a été envoyé avec succès !" });
            e.target.reset();
        } catch (err) {
            setStatus({ type: "error", message: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="comment-form">
            <h3 className="comment-form__title">Laisser un commentaire</h3>

            {status && (
                <p className={status.type === "success" ? "text-green-500" : "text-red-500"}>
                    {status.message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="comment-one__form contact-form-validated" noValidate>
                <input type="hidden" name="post_id" value={postId} />

                <div className="row">
                    <div className="col-xl-12">
                        <div className="comment-form__input-box">
                            <input type="text" placeholder="Votre nom" name="name" required />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="comment-form__input-box">
                            <input type="email" placeholder="Adresse e-mail" name="email" required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="comment-form__input-box text-message-box">
                            <textarea name="message" placeholder="Votre commentaire" required />
                        </div>
                        <div className="comment-form__btn-box">
                            <button type="submit" disabled={loading} className="thm-btn comment-form__btn">
                                {loading ? "Envoi..." : "Poster le commentaire"}
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
