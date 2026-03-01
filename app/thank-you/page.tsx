"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {
    const callLink = "tel:+917042646766";
    const chatLink = "https://wa.me/917042646766?text=Hi%20I%20am%20interested%20in%20Online%20Manipal%20courses";

    useEffect(() => {
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "conversion", {
                send_to: "AW-17973331962/u2NJCIrsiIEcEPqPrfpC",
            });
        }
    }, []);

    return (
        <div className="thank-you-root">
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
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .success-icon {
          font-size: 80px;
          color: #4CAF50;
          margin-bottom: 24px;
        }

        h1 {
          font-size: 2.5rem;
          color: #1a1a2e;
          margin-bottom: 16px;
          font-weight: 800;
        }

        p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-call {
          background: #e85d26;
          color: white;
        }

        .btn-call:hover {
          background: #d44c1b;
          transform: translateY(-2px);
        }

        .btn-chat {
          background: #25D366;
          color: white;
        }

        .btn-chat:hover {
          background: #1ebc57;
          transform: translateY(-2px);
        }

        .btn-home {
          background: #1a1a2e;
          color: white;
          margin-top: 10px;
        }

        .btn-home:hover {
          background: #0f3460;
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .container {
            padding: 40px 20px;
          }
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>

            <div className="container">
                <div className="success-icon">✅</div>
                <h1>Thank You!</h1>
                <p>Your Enquiry has been successfully submitted. Our academic experts will contact you shortly to guide you further.</p>

                <div className="actions">
                    <a href={callLink} className="btn btn-call">
                        📞 Call Now for Immediate Help
                    </a>
                    <a href={chatLink} target="_blank" rel="noopener noreferrer" className="btn btn-chat">
                        💬 Chat with an Expert
                    </a>
                    <Link href="/" className="btn btn-home">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}