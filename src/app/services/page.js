import SectionHeader from "@/components/SectionHeader";
import { MapPin, Globe, Zap, Lock, Handshake, Scale, Landmark, Calculator, FileSignature, Briefcase } from "lucide-react";
import "./services.css";

export const metadata = {
  title: "Services & Pricing — Evolite Partners",
  description: "Tax strategy, IRS resolution, import/export consulting, and business formation. Choose the tier that fits your stage — Foundation $499, Growth $1,499, Elite $3,999/month.",
};

export default function Services() {
    const tiers = [
        {
            num: "TIER 1", name: "Foundation", price: "$499", period: "per month",
            best: "Early-stage founders who need structure and guidance",
            features: [
                "1x monthly strategy call (60 min)",
                "PRIDE phase assessment & roadmap",
                "Tax planning guidance (not preparation)",
                "Business structure review",
                "Email support (48hr response)",
                "Access to PRIDE Academy curriculum",
                "Monthly resource drop (templates, checklists)",
            ],
            cta: "https://calendly.com/evolitepartners"
        },
        {
            num: "TIER 2", name: "Growth", price: "$1,499", period: "per month",
            best: "Established small businesses ready to optimize",
            features: [
                "Everything in Foundation, plus:",
                "Federal & state tax strategy & preparation",
                "Quarterly estimated tax management",
                "IRS correspondence handling",
                "Bookkeeping review & reconciliation",
                "Entity structure optimization",
                "2x strategy calls/month",
                "Priority email + Slack support",
            ],
            featured: true,
            cta: "https://calendly.com/evolitepartners"
        },
        {
            num: "TIER 3", name: "Elite", price: "$3,999", period: "per month",
            best: "Growing companies who want full done-for-you support",
            features: [
                "Everything in Growth, plus:",
                "Full-service bookkeeping & payroll",
                "Import/Export & tariff consulting",
                "KASHAKA supplier network access",
                "Legal entity filing & maintenance",
                "Marketing strategy support",
                "Fractional CFO advisory",
                "Unlimited calls & direct access to Shhally",
                "Annual financial review & plan",
            ],
            cta: "https://calendly.com/evolitepartners"
        },
        {
            num: "ENTERPRISE", name: "Enterprise", price: "$9K–$25K", period: "per month",
            best: "Multi-entity businesses, international expansion, high-volume trade",
            features: [
                "Custom scope — contact us for a tailored proposal",
                "Multi-entity structures",
                "Cross-border trade programs",
                "Full-scale financial operations",
                "Team training",
                "Custom international engagements",
            ],
            cta: "mailto:hello@evolitepartners.com"
        },
    ];

    const clientProfiles = [
        { tier: "Foundation", profile: "Early-stage entrepreneurs, $0–$250K revenue", annual: "$17–$97 one-time / $499/mo", scope: "PRIDE Academy + Guided calls", link: "https://evolitepartners.gumroad.com" },
        { tier: "Growth", profile: "Growing business, $250K–$2M revenue", annual: "$1,299/mo", scope: "Weekly calls + full tax strategy", link: "https://calendly.com/evolitepartners" },
        { tier: "Premier ★", profile: "Established business, $2M–$10M revenue", annual: "$2,499/mo (Part-Time CFO)", scope: "Full financial stack + compliance", featured: true, link: "https://calendly.com/evolitepartners" },
        { tier: "Enterprise", profile: "Multi-entity / $10M+ revenue", annual: "$3,999–$25K/mo", scope: "Done-For-You, fully managed", link: "https://calendly.com/evolitepartners" },
    ];

    const kashakaNodes = [
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "United States", role: "HQ · Washington State" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "Canada", role: "North America · Active" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "Dubai, UAE", role: "Trade Hub · Active" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "China", role: "Manufacturing · Verified" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "India", role: "Sourcing · Family Roots" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "Nepal", role: "South Asia · Active" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "Bhutan", role: "South Asia · Active" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "Bangladesh", role: "Manufacturing · Active" },
        { flag: <MapPin className="w-5 h-5 text-gold" />, name: "Sri Lanka", role: "South Asia · Active" },
        { flag: <Globe className="w-5 h-5 text-gold" />, name: "Africa", role: "Emerging Growth Markets" },
        { flag: <Globe className="w-5 h-5 text-gold" />, name: "Your Market", role: "Let's Connect" },
    ];

    const kashakaProofs = [
        { icon: <Zap className="w-6 h-6 text-gold" />, title: "2–3 Week Supplier Connections", desc: "Tell us what you need — we connect you to the right supplier for your product, price point, and timeline. Not 6 months of searching." },
        { icon: <Lock className="w-6 h-6 text-gold" />, title: "Tariff Navigation — Section 301 & Beyond", desc: "Country-of-origin strategies, HTS reclassification, tariff engineering — from someone who has actually cleared customs, not just read about it." },
        { icon: <Handshake className="w-6 h-6 text-gold" />, title: "Fraud Protection Built In", desc: "We've been scammed before. Every supplier we recommend has been vetted through relationships we trust personally." },
    ];

    const partners = [
        { icon: <Scale className="w-6 h-6 text-gold" />, name: "M&A Attorneys", desc: "Deal flow, legal structure expertise", synergy: "Very High" },
        { icon: <Landmark className="w-6 h-6 text-gold" />, name: "Private Bankers", desc: "UHNW client referrals, lending", synergy: "Very High" },
        { icon: <Calculator className="w-6 h-6 text-gold" />, name: "Tax CPAs (Big 4)", desc: "Complex tax strategies, compliance", synergy: "High" },
        { icon: <FileSignature className="w-6 h-6 text-gold" />, name: "Estate Planning Attorneys", desc: "Trust structures, tax planning", synergy: "High" },
        { icon: <Briefcase className="w-6 h-6 text-gold" />, name: "Investment Bankers", desc: "Transaction origination, valuations", synergy: "High" },
    ];

    return (
        <div className="services-page pt-32">

            {/* ============ TIERS ============ */}
            <section className="section">
                <div className="container">
                    <SectionHeader
                        eyebrow="Service Tiers"
                        title="Choose the Level of Support Your Business Needs"
                        description="Every tier is designed for a specific stage. Not sure which fits? Start with the PRIDE Self-Assessment ($29) or book a $250 Strategy Call."
                    />

                    <div className="tiers-grid">
                        {tiers.map((tier, i) => (
                            <div key={i} className={`tier-card glass-card ${tier.featured ? 'featured' : ''}`}>
                                <div className="tier-num">{tier.num}</div>
                                <h3 className="tier-name">{tier.name}</h3>
                                <div className="tier-price-row">
                                    <span className="tier-price font-accent">{tier.price}</span>
                                    <span className="tier-period">{tier.period}</span>
                                </div>
                                <p className="tier-best">Best for: {tier.best}</p>
                                <ul className="tier-features">
                                    {tier.features.map((f, j) => (
                                        <li key={j} className={f.endsWith(':') ? 'tier-feature-header' : ''}>{f}</li>
                                    ))}
                                </ul>
                                <a href={tier.cta} target="_blank" rel="noopener noreferrer"
                                    className={`btn w-full mt-8 ${tier.featured ? 'btn-primary' : 'btn-outline'}`}>
                                    {tier.num === "ENTERPRISE" ? "Contact Us →" : "Book a Strategy Call — $250 →"}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="tier-note">
                        <p><em>Not sure which tier fits you? Start with the PRIDE Self-Assessment ($29) for an immediate diagnosis, or book a $250 Strategy Call — 30 minutes with Shhally, paid before booking.</em></p>
                        <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                            Book a Strategy Call — $250 →
                        </a>
                    </div>
                </div>
            </section>

            {/* ============ CLIENT VALUE TABLE ============ */}
            <section className="section">
                <div className="container">
                    <div className="value-table-wrapper glass">
                        <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1rem' }}>Engagement Value by Client Profile</div>
                        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Which tier fits where you are right now?</h3>
                        <div className="table-scroll">
                            <table className="value-table">
                                <thead>
                                    <tr>
                                        <th>Tier</th>
                                        <th>Client Profile</th>
                                        <th>Investment</th>
                                        <th>Scope</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientProfiles.map((cp, i) => (
                                        <tr key={i} className={cp.featured ? 'featured-row' : ''}>
                                            <td className="tier-cell">{cp.tier}</td>
                                            <td>{cp.profile}</td>
                                            <td>{cp.annual}</td>
                                            <td>{cp.scope}</td>
                                            <td>
                                                <a href={cp.link} target="_blank" rel="noopener noreferrer" className="table-btn">
                                                    {i === 0 ? 'Start →' : i === 3 ? 'Inquire →' : 'Book →'}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ KASHAKA ============ */}
            <section className="section kashaka-section">
                <div className="container">
                    <div className="kashaka-grid">
                        <div className="kashaka-map">
                            <div className="eyebrow">KASHAKA Global Network · 20+ Countries · Active Since 2021</div>
                            <div className="kashaka-nodes">
                                {kashakaNodes.map((node, i) => (
                                    <div key={i} className="knode glass-card">
                                        <div className="knode-flag">{node.flag}</div>
                                        <div className="knode-name">{node.name}</div>
                                        <div className="knode-role">{node.role}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="kashaka-content">
                            <div className="eyebrow">KASHAKA Import / Export</div>
                            <h2>The only consultant with<br /><em className="font-accent">family on both sides</em><br />of the supply chain.</h2>
                            <p>When tariffs hit, most consultants Google the answer. We've been operating across Dubai, China, India, Nepal, Bhutan, Bangladesh, Sri Lanka, Canada, and Africa since 2021 — with family in both the US and India, active trade relationships, and verified suppliers accessible in real time.</p>
                            <p><strong>This isn't theory. This is a living network you get access to when you work with Evolite Partners.</strong></p>

                            <div className="kashaka-proofs">
                                {kashakaProofs.map((proof, i) => (
                                    <div key={i} className="kproof">
                                        <span className="kproof-icon">{proof.icon}</span>
                                        <div>
                                            <div className="kproof-title">{proof.title}</div>
                                            <div className="kproof-desc">{proof.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                                Discuss Your Trade Needs →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PARTNERS ============ */}
            <section className="section partners-section">
                <div className="container">
                    <SectionHeader
                        eyebrow="Professional Referral Network"
                        title={<>We work alongside the professionals <em className="font-accent">already in your corner.</em></>}
                        description="Evolite Partners works alongside attorneys, bankers, and advisors — not instead of them. If your professional refers you here, they already trust the outcome."
                    />

                    <div className="partners-grid">
                        {partners.map((p, i) => (
                            <div key={i} className="partner-card glass-card">
                                <div className="partner-icon">{p.icon}</div>
                                <div className="partner-name">{p.name}</div>
                                <div className="partner-desc">{p.desc}</div>
                                <div className="partner-synergy">Synergy: {p.synergy}</div>
                            </div>
                        ))}
                    </div>

                    <div className="partner-ctas">
                        <div className="partner-cta-card glass">
                            <h4>Are you a professional?</h4>
                            <p>If you refer clients to Evolite Partners, we prepare before every call, protect your client relationship, and deliver results you can put your name behind.</p>
                            <a href="mailto:hello@evolitepartners.com">Partner with us →</a>
                        </div>
                        <div className="partner-cta-card glass">
                            <h4>Were you referred here?</h4>
                            <p>If a professional sent you our way, they already trust the outcome. Mention their name in your contact message — we will handle the rest.</p>
                            <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer">Book your call →</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
