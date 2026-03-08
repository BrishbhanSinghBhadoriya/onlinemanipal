"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    name: string;
    email: string;
    phone: string;
    program: string;
    state: string;
    source: string;
}

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultCourse?: string;
    sourceId?: string;
    afterAction?: "call" | "chat";
}

export default function EnquiryModal({ isOpen, onClose, defaultCourse, sourceId, afterAction }: EnquiryModalProps) {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        program: defaultCourse || "",
        state: "",
        source: "manipal",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const callLink = "tel:+917042646766";
    const chatLink = "https://wa.me/917042646766?text=Hi%20I%20am%20interested%20in%20Online%20Manipal%20courses";

    // ✅ source hamesha "manipal" rahega
    useEffect(() => {
        setFormData(prev => ({ ...prev, source: "manipal" }));
    }, []);

    // ✅ defaultCourse change hone pe update karo
    useEffect(() => {
        if (defaultCourse) {
            setFormData(prev => ({ ...prev, program: defaultCourse }));
        }
    }, [defaultCourse]);

    // ✅ Body scroll band karo jab modal open ho
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const courses = ["MBA", "MCA", "MCom", "MSc", "MA", "BBA", "BCA", "BCom", "BA"];
    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal"
    ];

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // ✅ Phone validation: Exactly 10 digits
            const cleanPhone = formData.phone.replace(/\D/g, "");
            if (cleanPhone.length !== 10) {
                setError("Please enter a valid 10-digit phone number.");
                setLoading(false);
                return;
            }

            // ✅ source hamesha "manipal", url bhi bhej rahe hain
            const payload = {
                ...formData,
                phone: cleanPhone,
                source: "manipal",
                url: typeof window !== "undefined" ? window.location.href : undefined,
            };

            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    program: "",
                    state: "",
                    source: "manipal",
                });
                setTimeout(() => {
                    router.push("/thank-you");
                }, 2000);
            } else {
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch {
            setError("An error occurred. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        // ✅ Outside click se modal band hoga
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                backdropFilter: "blur(4px)"
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div style={{
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "16px",
                width: "90%",
                maxWidth: "520px",
                position: "relative",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "none",
                        border: "none",
                        fontSize: "24px",
                        cursor: "pointer",
                        color: "#666"
                    }}
                >
                    &times;
                </button>

                {success ? (
                    <div style={{ textAlign: "center", padding: "20px 0" }}>
                        <div style={{ fontSize: "50px", marginBottom: "16px" }}>✅</div>
                        <h3 style={{ color: "#1a1a2e", marginBottom: "8px" }}>Form Submitted!</h3>
                        <p style={{ color: "#666", marginBottom: "16px" }}>Select how you want to connect</p>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <a
                                href={callLink}
                                style={{
                                    flex: 1,
                                    background: "#e85d26",
                                    color: "white",
                                    textDecoration: "none",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontWeight: 700,
                                    textAlign: "center"
                                }}
                            >
                                📞 Call Now
                            </a>
                            <a
                                href={chatLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    flex: 1,
                                    background: "#25D366",
                                    color: "white",
                                    textDecoration: "none",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontWeight: 700,
                                    textAlign: "center"
                                }}
                            >
                                💬 Live Chat
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3 style={{ textAlign: "center", fontSize: "1.4rem", fontWeight: 800, color: "#1a1a2e", marginBottom: "6px" }}>
                            Speak to an admission counsellor
                        </h3>
                        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0a7d32", fontSize: "0.9rem", fontWeight: 700 }}>
                                <span>✔</span><span>Online Exam</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0a7d32", fontSize: "0.9rem", fontWeight: 700 }}>
                                <span>✔</span><span>100% Placement Assistance</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                placeholder="Full Name*"
                                value={formData.name}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "14px", marginBottom: "12px", borderRadius: "12px", border: "1px solid #e6e6e6" }}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email ID*"
                                value={formData.email}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "14px", marginBottom: "12px", borderRadius: "12px", border: "1px solid #e6e6e6" }}
                            />
                            <input
                                name="phone"
                                placeholder="Mobile Number*"
                                value={formData.phone}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "14px", marginBottom: "12px", borderRadius: "12px", border: "1px solid #e6e6e6" }}
                            />
                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "14px", marginBottom: "12px", borderRadius: "12px", border: "1px solid #e6e6e6" }}
                            >
                                <option value="">Select Course*</option>
                                {courses.map((c) => <option key={c}>{c}</option>)}
                            </select>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "14px", marginBottom: "12px", borderRadius: "12px", border: "1px solid #e6e6e6" }}
                            >
                                <option value="">Select State*</option>
                                {states.map((s) => <option key={s}>{s}</option>)}
                            </select>

                            <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#666", marginBottom: "16px" }}>
                                Your personal information is secure with us
                            </p>

                            {error && (
                                <p style={{ color: "red", fontSize: "0.8rem", marginBottom: "10px", textAlign: "center" }}>{error}</p>
                            )}
                            {loading && (
                                <p style={{ color: "#e85d26", fontSize: "0.9rem", fontWeight: 600, marginBottom: "10px", textAlign: "center" }}>
                                    Submitting your form, please wait...
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    background: "#e85d26",
                                    color: "white",
                                    border: "none",
                                    padding: "14px",
                                    borderRadius: "6px",
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    cursor: loading ? "not-allowed" : "pointer",
                                    opacity: loading ? 0.7 : 1
                                }}
                            >
                                {loading ? "Please wait..." : "Apply Now"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}