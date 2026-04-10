import SectionHeader from "@/components/SectionHeader";
import { IdCard, Shield, CircleDollarSign, Zap, Crown, Scale, ClipboardList, GraduationCap, BarChart, Book, Rocket, TrendingUp, CheckSquare, Star } from "lucide-react";
import "./academy.css";

export const metadata = {
  title: "PRIDE Academy — Evolite Partners",
  description: "Self-paced courses and frameworks for founders. PRIDE Self-Assessment, IRS Survival Guide, and more — built from 9 years of Fortune 500 finance.",
};

export default function Academy() {
    const levels = [
        { num: "01", icon: <IdCard className="w-5 h-5 text-gold" />, letter: "P — Protection", name: "Foundation", desc: "Business identity, ideal client avatar, 3-tier offer design, brand system. The most important level — everything else depends on this.", price: "$47", status: "🟢 Open Now · 27 Tasks", link: "https://evolitepartners.gumroad.com/l/pride-level-1-foundation" },
        { num: "02", icon: <Shield className="w-5 h-5 text-gold" />, letter: "R — Revenue", name: "Protection", desc: "Legal entity, EIN, business bank account, domain, website, professional email. Your business becomes real and bulletproof.", price: "$67", status: "🔒 Requires L1 Certificate", link: "https://evolitepartners.gumroad.com/l/pride-level-2-protection" },
        { num: "03", icon: <CircleDollarSign className="w-5 h-5 text-gold" />, letter: "I — Integration", name: "Revenue", desc: "Payment systems, Gumroad store, digital product portfolio, LinkedIn profile, booking system. Revenue infrastructure, fully built.", price: "$77", status: "🔒 Requires L2 Certificate", link: "https://evolitepartners.gumroad.com/l/pride-level-3-revenue" },
        { num: "04", icon: <Zap className="w-5 h-5 text-gold" />, letter: "D — Domination", name: "Integration", desc: "Tax strategy, quarterly compliance calendar, bookkeeping system, IRS readiness. You stop reacting to taxes and start planning them.", price: "$87", status: "🔒 Requires L3 Certificate", link: "https://evolitepartners.gumroad.com/l/pride-level-4-integration" },
        { num: "05", icon: <Crown className="w-5 h-5 text-gold" />, letter: "E — Evolution", name: "Domination", desc: "Scale systems, team building, client acquisition mastery, content strategy, LinkedIn dominance. You've arrived — now grow without limits.", price: "$97", status: "🔒 Requires L4 Certificate", link: "https://evolitepartners.gumroad.com/l/pride-level-5-domination" },
    ];

    const storeItems = [
        { icon: <Scale className="w-8 h-8 text-gold" />, name: "IRS Survival Guide™", price: "$37", link: "https://evolitepartners.gumroad.com" },
        { icon: <ClipboardList className="w-8 h-8 text-gold" />, name: "Tax Strategy Workbook™", price: "$47", link: "https://evolitepartners.gumroad.com" },
        { icon: <GraduationCap className="w-8 h-8 text-gold" />, name: "Tax Strategy Course™", price: "$97", link: "https://evolitepartners.gumroad.com" },
        { icon: <BarChart className="w-8 h-8 text-gold" />, name: "PRIDE Self-Assessment", price: "$29", link: "https://evolitepartners.gumroad.com/l/pride-self-assessment" },
        { icon: <Book className="w-8 h-8 text-gold" />, name: "US Business Formation Guide™", price: "$47", link: "https://evolitepartners.gumroad.com/l/us-business-formation" },
        { icon: <Rocket className="w-8 h-8 text-gold" />, name: "Evolite Launch™ DIY Guide", price: "$97", link: "https://evolitepartners.gumroad.com/l/evolite-launch-diy" },
        { icon: <TrendingUp className="w-8 h-8 text-gold" />, name: "PRIDE Progress Tracker™", price: "$17", link: "https://evolitepartners.gumroad.com/l/pride-progress-tracker" },
        { icon: <CheckSquare className="w-8 h-8 text-gold" />, name: "PRIDE Work Tracker™", price: "$27", link: "https://evolitepartners.gumroad.com/l/pride-work-tracker" },
    ];

    return (
        <div className="academy-page pt-32">

            {/* ============ ACADEMY ============ */}
            <section className="section">
                <div className="container">
                    <SectionHeader
                        eyebrow="PRIDE Academy"
                        title={<>Learn the system. <em className="font-accent">Own your business.</em></>}
                        description="Self-paced courses, frameworks, and tools built from 9 years of Fortune 500 finance and 11 businesses of real-world experience."
                    />

                    <div className="academy-levels">
                        {levels.map((level, i) => (
                            <div key={i} className="level-card glass-card">
                                <div className="level-header">
                                    <span className="level-num">{level.num}</span>
                                    <span className="level-icon">{level.icon}</span>
                                </div>
                                <div className="level-letter">{level.letter}</div>
                                <h3 className="level-name">{level.name}</h3>
                                <p className="level-desc">{level.desc}</p>
                                <div className="level-footer">
                                    <span className="level-price font-accent">{level.price}</span>
                                    <span className="level-status">{level.status}</span>
                                </div>
                                <a href={level.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full mt-4">
                                    Buy Level {level.num} →
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Entry Point */}
                    <div className="academy-entry glass">
                        <div className="entry-content">
                            <h3><Star className="w-5 h-5 text-gold" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '2px' }} /> Start Here — Before Level 1</h3>
                            <p>The PRIDE Tracker Bundle (Progress Tracker + Work Tracker) maps every task across all 5 levels with a "Why It Matters" for each one. Buy this first — it tells you exactly where you are and what comes next.</p>
                        </div>
                        <div className="entry-action">
                            <div className="entry-price font-accent">$17–$27</div>
                            <div className="entry-note">Both trackers together save $7</div>
                            <a href="https://evolitepartners.gumroad.com/l/pride-toolkit-bundle" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                                Buy the Bundle →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ COMING SOON ============ */}
            <section className="section coming-soon-section">
                <div className="container">
                    <SectionHeader
                        eyebrow="Coming Soon"
                        title={<>More courses <em className="font-accent">in development.</em></>}
                        description="Join the waitlist to be notified when these courses launch — and get early access pricing."
                    />
                    <div className="coming-soon-grid">
                        <div className="coming-card glass-card">
                            <div className="coming-badge">COMING SOON</div>
                            <h3>Tax Strategy 101</h3>
                            <p>A complete self-paced course on legal tax reduction for small business owners. Covers entity selection, deductions, quarterly taxes, and S-Corp strategies.</p>
                            <a href="/contact" className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }}>
                                Join Waitlist →
                            </a>
                        </div>
                        <div className="coming-card glass-card">
                            <div className="coming-badge">COMING SOON</div>
                            <h3>Import/Export for Beginners</h3>
                            <p>A step-by-step guide to starting international trade: HTS codes, customs, suppliers, tariffs, and avoiding fraud. Based on KASHAKA operations.</p>
                            <a href="/contact" className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }}>
                                Join Waitlist →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ DIGITAL STORE ============ */}
            <section className="section store-section">
                <div className="container">
                    <SectionHeader
                        eyebrow="Digital Store"
                        title="Resources for Every Stage"
                        description="Instant access at evolitepartners.gumroad.com — built for real problems, not generic advice."
                    />

                    <div className="store-grid">
                        {storeItems.map((item, i) => (
                            <div key={i} className="store-item glass-card">
                                <span className="store-icon">{item.icon}</span>
                                <div className="store-name">{item.name}</div>
                                <span className="store-price font-accent">{item.price}</span>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                    Get Now
                                </a>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <a href="https://evolitepartners.gumroad.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View Full Store →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
