"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ThankYouPage() {
    const callLink = "tel:+917042646766";
    const chatLink = "https://wa.me/917042646766?text=Hi%20I%20am%20interested%20in%20Online%20Manipal%20courses";

    const fired = useRef(false);

    useEffect(() => {
        if (fired.current) return;
        fired.current = true;

        const params = new URLSearchParams(window.location.search);
        const source = params.get("source");

        console.log("🔥 Source detected:", source);

        // =========================
        // ✅ META PIXEL (ONLY META)
        // =========================
        if (source === "meta") {
            let attempts = 0;

            const fireMeta = () => {
                if (typeof (window as any).fbq === "function") {
                    console.log("✅ Meta Pixel - Lead Fired");
                    (window as any).fbq("track", "Lead");
                } else if (attempts < 20) {
                    attempts++;
                    setTimeout(fireMeta, 100);
                }
            };

            fireMeta();
        }

        // =========================
        // ✅ GOOGLE ADS (ALL)
        // =========================
        let googleAttempts = 0;
        const fireGoogleConversions = () => {
            if (typeof (window as any).gtag === "function") {
                console.log("✅ Google Ads - Conversions Firing");
                
                // Conversion 1
                (window as any).gtag("event", "conversion", {
                    send_to: "AW-17973307328/5ZjRCKLOiIEcEMDPq_pC",
                });

                // Conversion 2
                (window as any).gtag("event", "conversion", {
                    send_to: "AW-17973331962/u2NJCIrsiIEcEPqPrfpC",
                });
            } else if (googleAttempts < 20) {
                googleAttempts++;
                setTimeout(fireGoogleConversions, 100);
            }
        };

        fireGoogleConversions();
    }, []);

    return (
        <div className="thank-you-root">

            {/* ✅ Google Tag Manager Scripts for Thank You Page */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17973307328"
                strategy="afterInteractive"
            />
            <Script id="gtag-init-1" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17973307328');
                `}
            </Script>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17973331962"
                strategy="afterInteractive"
            />
            <Script id="gtag-init-2" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17973331962');
                `}
            </Script>

            {/* ✅ Load Meta Script ONLY if needed */}
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;
                    n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];
                    t=b.createElement(e);t.async=!0;
                    t.src=v;
                    s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)
                    }(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    
                    fbq('init', '1230848505368304');
                    fbq('track', 'PageView');
                    `,
                }}
            />

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

                .btn-call {
                    background: #e85d26;
                    color: white;
                }

                .btn-chat {
                    background: #25D366;
                    color: white;
                }

                .btn-home {
                    background: #1a1a2e;
                    color: white;
                }
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