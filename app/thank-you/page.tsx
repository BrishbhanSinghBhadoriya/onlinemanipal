"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ThankYouPage() {
    const callLink = "tel:+917042646766";
    const chatLink = "https://wa.me/917042646766?text=Hi%20I%20am%20interested%20in%20Online%20Manipal%20courses";

    // fired ref — ensures events fire exactly once (handles React StrictMode double-invoke)
    const fired = useRef(false);

    useEffect(() => {
        if (fired.current) return;
        fired.current = true;

        const params = new URLSearchParams(window.location.search);
        const source = params.get("source"); // "meta" | "google" | null

        console.log("🔥 Source detected:", source);

        // ─────────────────────────────────────────────────────────────────
        // META PIXEL — LeadNew
        //
        // Two cases when this page is reached from Meta:
        //   1. SPA navigation (/manipal-online → /thank-you):
        //      fbq is already loaded by manipal-online/layout.tsx Script.
        //      The <Script id="fb-pixel"> below is skipped by Next.js (dedup).
        //      So fbq() is available immediately — fire directly.
        //
        //   2. Hard refresh / direct URL (/thank-you?source=meta):
        //      The <Script id="fb-pixel"> below loads the pixel fresh.
        //      It fires PageView on init. We retry here until fbq is ready.
        //
        // We always fire LeadNew regardless of source — this page is ONLY
        // reached after a successful form submit, so every visit = a lead.
        // ─────────────────────────────────────────────────────────────────
        let metaAttempts = 0;
        const fireLeadNew = () => {
            if (typeof (window as any).fbq === "function") {
                (window as any).fbq("track", "LeadNew");
                console.log("✅ Meta Pixel - LeadNew Fired");
            } else if (metaAttempts < 60) {
                metaAttempts++;
                setTimeout(fireLeadNew, 100); // retry every 100ms, up to 6s
            } else {
                console.warn("⚠️ fbq not ready after 6s — LeadNew not fired");
            }
        };
        fireLeadNew();

        // ─────────────────────────────────────────────────────────────────
        // GOOGLE ADS — Conversion
        // Fires only when source=google (gclid or utm_source=google in URL)
        // gtag base tag is loaded globally from app/layout.tsx
        // ─────────────────────────────────────────────────────────────────
        if (source === "google") {
            let googleAttempts = 0;
            const fireGoogle = () => {
                if (typeof (window as any).gtag === "function") {
                    console.log("✅ Google Ads - Conversions Firing");
                    (window as any).gtag("event", "conversion", {
                        send_to: "AW-17973307328/5ZjRCKLOiIEcEMDPq_pC",
                    });
                    (window as any).gtag("event", "conversion", {
                        send_to: "AW-17973331962/u2NJCIrsiIEcEPqPrfpC",
                    });
                } else if (googleAttempts < 60) {
                    googleAttempts++;
                    setTimeout(fireGoogle, 100);
                } else {
                    console.warn("⚠️ gtag not ready after 6s — Google conversion not fired");
                }
            };
            fireGoogle();
        }
    }, []);

    return (
        <div className="thank-you-root">

            {/*
              META PIXEL — Thank You Page init
              ─────────────────────────────────────────────────────────
              Case 1 — SPA nav from /manipal-online:
                Next.js sees id="fb-pixel" already registered (same id in
                manipal-online/layout.tsx) and SKIPS this Script entirely.
                fbq is already on window → useEffect fires LeadNew directly.

              Case 2 — Hard refresh / direct visit to /thank-you:
                manipal-online/layout.tsx is NOT in scope. This Script runs,
                inits the pixel, fires PageView. useEffect retries until
                fbq is ready, then fires LeadNew.

              NOTE: No fbq('track', 'LeadNew') inside this Script block.
              LeadNew is fired exclusively from useEffect above so it never
              double-fires in either case.
            */}
            <Script id="fb-pixel" strategy="afterInteractive">
                {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1230848505368304');fbq('track','PageView');`}
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
