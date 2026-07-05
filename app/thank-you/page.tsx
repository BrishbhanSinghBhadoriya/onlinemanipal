"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ThankYouPage() {
    const callLink = "tel:+917042646766";
    const chatLink = "https://wa.me/917042646766?text=Hi%20I%20am%20interested%20in%20Online%20Manipal%20courses";

    // fired ref ensures conversions fire only once even in React StrictMode
    const fired = useRef(false);

    useEffect(() => {
        if (fired.current) return;
        fired.current = true;

        const params = new URLSearchParams(window.location.search);
        const source = params.get("source"); // "meta" | "google" | null

        console.log("🔥 Source detected:", source);

        // ─────────────────────────────────────────────────────────────
        // META PIXEL — LeadNew conversion
        // Fires ONLY when source=meta (lead came from Meta/Facebook Ad)
        // PageView already fired from the pixel init Script below.
        // ─────────────────────────────────────────────────────────────
        if (source === "meta") {
            let attempts = 0;
            const fireMeta = () => {
                if (typeof (window as any).fbq === "function") {
                    console.log("✅ Meta Pixel - LeadNew Fired");
                    (window as any).fbq("track", "LeadNew");
                } else if (attempts < 50) {
                    attempts++;
                    setTimeout(fireMeta, 100);
                } else {
                    console.warn("⚠️ Meta Pixel (fbq) not available after retries");
                }
            };
            fireMeta();
        }

        // ─────────────────────────────────────────────────────────────
        // GOOGLE ADS — Conversion
        // Fires ONLY when source=google (lead came from Google Ad)
        // gtag base tag loads globally from app/layout.tsx
        // ─────────────────────────────────────────────────────────────
        if (source === "google") {
            let attempts = 0;
            const fireGoogle = () => {
                if (typeof (window as any).gtag === "function") {
                    console.log("✅ Google Ads - Conversions Firing");

                    (window as any).gtag("event", "conversion", {
                        send_to: "AW-17973307328/5ZjRCKLOiIEcEMDPq_pC",
                    });

                    (window as any).gtag("event", "conversion", {
                        send_to: "AW-17973331962/u2NJCIrsiIEcEPqPrfpC",
                    });
                } else if (attempts < 50) {
                    attempts++;
                    setTimeout(fireGoogle, 100);
                } else {
                    console.warn("⚠️ gtag not available after retries");
                }
            };
            fireGoogle();
        }
    }, []);

    return (
        <div className="thank-you-root">

            {/*
              ══════════════════════════════════════════════════════════
              META PIXEL — Thank You Page
              Fires: PageView + LeadNew
              ⚠️  id="fb-pixel" same as manipal-online/layout.tsx.
                  next/script dedupes by id during SPA nav, so if user
                  navigated from /manipal-online this Script is skipped
                  (pixel already initialised). On a direct/hard-refresh
                  of /thank-you the pixel inits fresh here — correct.
              ══════════════════════════════════════════════════════════
            */}
            <Script id="fb-pixel" strategy="afterInteractive">
                {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1230848505368304');fbq('track', 'PageView');fbq('track', 'LeadNew');`}
            </Script>
            <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    height="1" width="1" style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=1230848505368304&ev=PageView&noscript=1"
                    alt=""
                />
            </noscript>

            <style>{`
                .thank-you-root {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
                    font-family: 'Poppins', sans-serif;
                    padding: 20px;
                }
                .container {
                    background: white;
                    padding: 60px 40px;
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    text-align: center;
                    max-width: 500px;
                    width: 100%;
                }
                .success-icon {
                    font-size: 70px;
                    color: #4CAF50;
                    margin-bottom: 20px;
                }
                h1 {
                    font-size: 2.2rem;
                    margin-bottom: 10px;
                    font-weight: 800;
                }
                p {
                    color: #666;
                    margin-bottom: 25px;
                }
                .actions {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .btn {
                    padding: 12px;
                    border-radius: 10px;
                    font-weight: 700;
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .btn-call { background: #e85d26; color: white; }
                .btn-chat { background: #25D366; color: white; }
                .btn-home { background: #1a1a2e; color: white; }
            `}</style>

            <div className="container">
                <div className="success-icon">✅</div>
                <h1>Thank You!</h1>
                <p>Your enquiry has been submitted successfully.</p>

                <div className="actions">
                    <a href={callLink} className="btn btn-call">📞 Call Now</a>
                    <a href={chatLink} target="_blank" className="btn btn-chat">💬 Chat</a>
                    <Link href="/" className="btn btn-home">Home</Link>
                </div>
            </div>
        </div>
    );
}
