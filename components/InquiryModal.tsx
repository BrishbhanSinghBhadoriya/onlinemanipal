"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    fullName: string;
    email: string;
    mobile: string;
    course: string;
    state: string;
}

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultCourse?: string;
    afterAction?: "call" | "chat";
}

export default function InquiryModal({ isOpen, onClose, defaultCourse, afterAction }: InquiryModalProps) {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        mobile: "",
        course: defaultCourse || "",
        state: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const callLink = "tel:+917042646766";
    const chatLink = "https://wa.me/917042646766?text=Hi%20I%20am%20interested%20in%20Online%20Manipal%20courses";

    const courses = ["Master of Computer Applications", "Master of Arts in Economics", "Master of Commerce", "MBA", "BBA", "BCA", "BCom"];
    const states = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Rajasthan", "Gujarat"];

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setFormData({ fullName: "", email: "", mobile: "", course: "", state: "" });
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
        <div style={{
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
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "16px",
                width: "90%",
                maxWidth: "400px",
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
                                    fontWeight: 700
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
                                    fontWeight: 700
                                }}
                            >
                                💬 Live Chat
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1a2e", marginBottom: "8px" }}>Enquiry Form</h3>
                        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "20px" }}>Enter your details and get expert guidance</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                name="fullName"
                                placeholder="Full Name*"
                                value={formData.fullName}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email ID*"
                                value={formData.email}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
                            />
                            <input
                                name="mobile"
                                placeholder="Mobile Number*"
                                value={formData.mobile}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
                            />
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
                            >
                                <option value="">Select Course*</option>
                                {courses.map((c) => <option key={c}>{c}</option>)}
                            </select>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleInput}
                                required
                                style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #ddd" }}
                            >
                                <option value="">Select State*</option>
                                {states.map((s) => <option key={s}>{s}</option>)}
                            </select>

                            {error && <p style={{ color: "red", fontSize: "0.8rem", marginBottom: "10px" }}>{error}</p>}

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
                                {loading ? "Submitting..." : "Apply Now"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
