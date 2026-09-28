'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const STORAGE_KEY = 'cookie-consent';
export const OPEN_CONSENT_EVENT = 'open-cookie-consent';

function readConsent() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

function saveConsent(value) {
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // stockage indisponible (navigation privée) : le choix vaut pour la session en cours
    }
}

// Google Analytics n'est chargé qu'après acceptation explicite (RGPD / CNIL)
export default function CookieConsent() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const [consent, setConsent] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const stored = readConsent();
        setConsent(stored);
        setOpen(!stored);

        const reopen = () => setOpen(true);
        window.addEventListener(OPEN_CONSENT_EVENT, reopen);
        return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
    }, []);

    function choose(value) {
        saveConsent(value);
        setOpen(false);
        if (value === 'denied' && consent === 'granted') {
            // GA est déjà chargé : on recharge pour le retirer de la page
            window.location.reload();
            return;
        }
        setConsent(value);
    }

    if (!gaId) return null;

    return (
        <>
            {consent === 'granted' && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="gtag-init" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gaId}', { page_path: window.location.pathname });
                        `}
                    </Script>
                </>
            )}

            {open && (
                <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Gestion des cookies">
                    <p className="cookie-consent__text">
                        Nous utilisons Google Analytics pour mesurer l’audience du site. Ces cookies ne sont déposés
                        qu’avec votre accord. Vous pouvez changer d’avis à tout moment via le lien « Cookies » en bas de page.
                    </p>
                    <div className="cookie-consent__actions">
                        <button type="button" className="cookie-consent__btn cookie-consent__btn--secondary" onClick={() => choose('denied')}>
                            Refuser
                        </button>
                        <button type="button" className="cookie-consent__btn" onClick={() => choose('granted')}>
                            Accepter
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
