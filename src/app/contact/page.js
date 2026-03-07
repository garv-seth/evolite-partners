'use client';
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Calendar, Mail, MapPin, Lock, CheckCircle, AlertCircle, Loader } from "lucide-react";
import "./contact.css";

const CONTACT_ENDPOINT = "/api/contact";

const EMPTY_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    revenue: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch(CONTACT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    interest: form.interest,
                    revenue: form.revenue,
                    message: form.message,
                    _hp: "", // honeypot — always empty for real users
                }),
            });

            const data = await res.json();
            if (res.ok && data.success) {
                setStatus("success");
                setForm(EMPTY_FORM);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="contact-page pt-32">
            <section className="section">
                <div className="container contact-container">

                    <div className="contact-info">
                        <SectionHeader
                            eyebrow="Get in Touch"
                            title="Secure Your Future"
                            description="Reach out to establish a strategic partnership. Only for serious inquiries regarding tax strategy, business formation, or import/export consulting."
                            align="left"
                        />

                        <div className="info-blocks mt-8">
                            <div className="info-block glass-card list-mode">
                                <div className="info-icon"><Calendar className="w-5 h-5 text-gold" /></div>
                                <div>
                                    <h4>Book an Assessment</h4>
                                    <p>Start with a 30-minute PRIDE Assessment call.</p>
                                    <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="info-link">Schedule time →</a>
                                </div>
                            </div>

                            <div className="info-block glass-card list-mode">
                                <div className="info-icon"><Mail className="w-5 h-5 text-gold" /></div>
                                <div>
                                    <h4>Direct Communication</h4>
                                    <p>For document submission or existing client support.</p>
                                    <a href="mailto:shhally@evolitepartners.com" className="info-link">shhally@evolitepartners.com</a>
                                </div>
                            </div>

                            <div className="info-block glass-card list-mode">
                                <div className="info-icon"><MapPin className="w-5 h-5 text-gold" /></div>
                                <div>
                                    <h4>Headquarters</h4>
                                    <p>Washington State, USA</p>
                                    <span className="info-sub">Serving clients across 50 states &amp; internationally</span>
                                </div>
                            </div>
                        </div>

                        <div className="trusted-badge glass">
                            <span className="badge-icon"><Lock className="w-6 h-6 text-gold" /></span>
                            <div>
                                <strong>Strict Confidentiality</strong>
                                <p>All communications are encrypted and protected under accountant-client privilege where applicable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-card">
                        <h3>Send an Inquiry</h3>
                        <p className="form-desc">Provide context on your situation before we speak.</p>

                        {status === "success" ? (
                            <div className="form-success">
                                <CheckCircle className="w-8 h-8 text-gold" style={{ marginBottom: "1rem" }} />
                                <h4>Inquiry Received</h4>
                                <p>We&apos;ll review your message and reach out within 24 hours. Check your inbox — a confirmation is on its way.</p>
                                <button className="btn btn-outline mt-8" onClick={() => setStatus("idle")}>
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="John"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Doe"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@enterprise.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Primary Interest</label>
                                    <div className="select-wrapper">
                                        <select
                                            name="interest"
                                            value={form.interest}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select an area...</option>
                                            <option value="Tax Strategy & Planning">Tax Strategy &amp; Planning</option>
                                            <option value="IRS Audit / Notice Resolution">IRS Audit / Notice Resolution</option>
                                            <option value="Business Entity Formation (US)">Business Entity Formation (US)</option>
                                            <option value="Import / Export Consulting">Import / Export Consulting</option>
                                            <option value="Tariff Navigation (Sec 301, etc)">Tariff Navigation (Sec 301, etc)</option>
                                            <option value="Fractional CFO Services">Fractional CFO Services</option>
                                            <option value="Academy / Training">Academy / Training</option>
                                            <option value="M&A Due Diligence">M&amp;A Due Diligence</option>
                                            <option value="Cross-Border Structuring">Cross-Border Structuring</option>
                                            <option value="General Consultation">General Consultation</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Annual Revenue / Asset Range</label>
                                    <div className="select-wrapper">
                                        <select
                                            name="revenue"
                                            value={form.revenue}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select range...</option>
                                            <option value="Pre-revenue / Under $250k">Pre-revenue / Under $250k</option>
                                            <option value="$250k - $1M">$250k - $1M</option>
                                            <option value="$1M - $5M">$1M - $5M</option>
                                            <option value="$5M - $10M">$5M - $10M</option>
                                            <option value="$10M+">$10M+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Briefly Describe Your Situation</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="E.g., We are expanding into Dubai and need structure help..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="form-error">
                                        <AlertCircle className="w-5 h-5" style={{ flexShrink: 0 }} />
                                        <span>Something went wrong. Please email us directly at <a href="mailto:shhally@evolitepartners.com">shhally@evolitepartners.com</a></span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full mt-4"
                                    disabled={status === "loading"}
                                    style={{ opacity: status === "loading" ? 0.7 : 1 }}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader className="w-5 h-5" style={{ animation: "spin 1s linear infinite" }} />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Your Inquiry →"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
}
