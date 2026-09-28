"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ toggle, setToggle }) => {
  const [form, setForm] = useState({
    phone: "",
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot anti-bot
    if (form.website) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/devis`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: "Sidebar",
          description: form.message,
          website: "", // important pour backend
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult("✅ Demande envoyée avec succès !");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setResult("❌ Une erreur est survenue.");
      }
    } catch (error) {
      setResult("❌ Erreur réseau.");
    }

    setLoading(false);
  };

  return (
      <>
        <div
            className={`xs-sidebar-group info-group info-sidebar ${
                toggle ? "isActive" : ""
            }`}
        >
          <div
              className="xs-overlay xs-bg-black"
              onClick={() => setToggle(false)}
          />

          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a
                    href="#"
                    className="close-side-widget"
                    onClick={() => setToggle(false)}
                >
                  ✕
                </a>
              </div>

              <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                  <div className="content-inner">

                    {/* LOGO */}
                    <div className="logo">
                      <Link href="/">
                        <Image
                            src="/assets/images/resources/logo.png"
                            alt="Creativ Solutions"
                            width={180}
                            height={60}
                            priority
                        />
                      </Link>
                    </div>

                    {/* À PROPOS */}
                    <div className="content-box">
                      <h4>À propos de nous</h4>
                      <p>
                        Creativ Solutions est une agence digitale spécialisée dans
                        la création de sites web, d’applications et le marketing
                        digital pour accompagner les entreprises.
                      </p>
                    </div>

                    {/* FORMULAIRE */}
                    <div className="form-inner">
                      <h4>Demander un devis gratuit</h4>

                      <form
                          className="contact-form-validated"
                          noValidate
                          onSubmit={handleSubmit}
                      >
                        {/* Honeypot */}
                        <input
                            type="text"
                            name="website"
                            value={form.website}
                            onChange={handleChange}
                            style={{ display: "none" }}
                        />

                        <div className="form-group">
                          <input
                              type="text"
                              name="name"
                              placeholder="Votre nom"
                              value={form.name}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <div className="form-group">
                          <input
                              type="email"
                              name="email"
                              placeholder="Adresse email"
                              value={form.email}
                              onChange={handleChange}
                              required
                          />
                        </div>
                        <div className="form-group">
                          <input
                              type="text"
                              name="phone"
                              placeholder="Votre téléphone"
                              value={form.phone}
                              onChange={handleChange}
                              required
                          />
                        </div>
                        <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Votre message..."
                            value={form.message}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="form-group message-btn">
                          <button
                              type="submit"
                              className="thm-btn form-inner__btn"
                              disabled={loading}
                          >
                            {loading ? "Envoi..." : "Envoyer la demande"}
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                          </button>
                        </div>
                      </form>

                      {/* RESULT */}
                      <div className="result">
                        {result && <p>{result}</p>}
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
  );
};

export default Sidebar;