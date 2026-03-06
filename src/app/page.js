'use client';
import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, CircleDollarSign, Scale, Globe, Megaphone, Target } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import InfiniteGridHero from "@/components/InfiniteGridHero";
import "./page.css";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const painPoints = [
    { icon: <ClipboardCheck className="w-8 h-8 text-gold" />, title: "Compliance & Filing", desc: "Business licenses. State registrations. Annual reports. Sales tax permits. Federal filings. Quarterly estimated taxes. Every state has different rules — and every missed deadline has a penalty." },
    { icon: <CircleDollarSign className="w-8 h-8 text-gold" />, title: "Finance & Accounting", desc: "Bookkeeping. Cash flow management. Profit & loss. Balance sheets. Payroll. Invoicing. Payment processing. You're doing CFO-level work without CFO-level training — because you can't afford one yet." },
    { icon: <Scale className="w-8 h-8 text-gold" />, title: "Legal & Entity Structure", desc: "LLC vs S-Corp vs C-Corp. Operating agreements. Registered agents. EIN. Contracts. Liability protection. One wrong structure can cost you thousands in taxes or leave you personally exposed." },
    { icon: <Globe className="w-8 h-8 text-gold" />, title: "Digital Infrastructure", desc: "Website. Domain. Hosting. Business email. CRM. Automations. Sales funnels. Landing pages. Analytics. You need all of it — and nobody teaches you how it connects." },
    { icon: <Megaphone className="w-8 h-8 text-gold" />, title: "Marketing & Acquisition", desc: "Brand strategy. Content creation. Social media. LinkedIn positioning. Lead generation. Ads. SEO. Referral programs. Everyone says 'just post more' — but nobody tells you what actually converts." },
    { icon: <Target className="w-8 h-8 text-gold" />, title: "Strategy & Growth", desc: "Market research. Competitive analysis. Pricing strategy. Expansion planning. Partnership development. Hiring. Scaling. You know you need a plan — but the plan itself takes weeks to build alone." },
  ];

  const pridePhases = [
    { letter: "P", word: "Protection", desc: "Entity, EIN, legal structure. Your foundation." },
    { letter: "R", word: "Revenue", desc: "Payments, pricing, income systems." },
    { letter: "I", word: "Integration", desc: "Accounting, taxes, compliance." },
    { letter: "D", word: "Domination", desc: "Brand, market authority, visibility." },
    { letter: "E", word: "Evolution", desc: "Scale, expand, build legacy. Elite." },
  ];

  const steps = [
    { num: "01", title: "Free Assessment Call", desc: "30 minutes. We learn your situation — tax, IRS, trade, or business formation. No charge, no obligation. We tell you exactly where you are." },
    { num: "02", title: "Your PRIDE Map", desc: "We identify your PRIDE phase, which tier fits your situation, and what your next 90 days should look like — in priority order." },
    { num: "03", title: "We Execute Together", desc: "Done-for-you, coaching, or self-paced Academy. We meet you where you are — and we don't stop until the work is complete." },
    { num: "04", title: "Elite Results", desc: "Tax optimized. IRS resolved. Trade compliant. Business properly structured. That is Elite status — earned, not given." },
  ];

  const faqs = [
    { q: "Do I need to have a tax problem to work with you?", a: "Not at all. Most of our clients come to us in perfectly normal situations — they want to pay less in taxes legally, structure their business correctly, understand tariffs, or prepare before a problem happens. You don't need to be in trouble to benefit from strategy. In fact, the best time to call us is before there's a problem." },
    { q: "How much do your services cost?", a: "Our tiers range from $499/month for guided coaching up to $3,999/month for Done-For-You services and $9K–$25K/month for enterprise engagements. Every engagement starts with a free assessment call. We scope the work together and give you a clear number before anything begins. No surprises." },
    { q: "I received an IRS notice. What should I do right now?", a: "First — don't panic, and don't ignore it. Most IRS notices are not audits. Check the notice number (top right corner) and the deadline (typically 30–60 days). Then book a free call with us — we'll identify the notice type, explain exactly what it means, and tell you precisely what to do next. You can also download the IRS Survival Guide™ ($37) at our Gumroad store for an immediate start." },
    { q: "What is KASHAKA™ and how does it help me?", a: "KASHAKA™ is Shhally Sharma's import/export company and global supplier network — active since 2021 across the US, Dubai, China, India, and Africa. When you work with Evolite Partners on trade consulting, you get access to verified suppliers, tariff navigation from someone who has personally cleared customs, and fraud protection built on real experience." },
    { q: "What is the PRIDE Framework and who is it for?", a: "PRIDE stands for Protection, Revenue, Integration, Domination, Evolution. It is the five-phase system we use to assess and grow every business we work with — from a first-year startup to a multi-million dollar operation. It gives your business a clear position, a clear gap, and a clear next step." },
    { q: "Can you help international entrepreneurs set up US businesses?", a: "Yes. We form US entities (LLC, S-Corp, C-Corp) for clients in any state — including international entrepreneurs who want US business infrastructure. We handle EIN, registered agent, operating agreements, and banking setup. Shhally Sharma speaks English, Hindi, Urdu, and Punjabi and has deep roots in India and the UAE." },
  ];

  return (
    <div className="home-page">

      {/* ============ HERO ============ */}
      <InfiniteGridHero>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge slide-up">
              <span className="badge-dot"></span>
              Now Accepting New Clients
            </div>
            <h1 className="hero-title slide-up">
              Your Business Deserves an<br />
              <em className="font-accent">Evolution to Elite.</em>
            </h1>
            <p className="hero-desc slide-up">
              Tax strategy. IRS resolution. Tariff navigation. Import/Export. Business formation.
              We don&apos;t just file — we build the financial architecture that protects and grows your empire.
            </p>
            <div className="hero-actions slide-up">
              <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book Free Assessment →
              </a>
              <Link href="/services" className="btn btn-outline">
                See Our Tiers
              </Link>
            </div>

            <div className="hero-trust slide-up">
              <div className="trust-item">
                <span className="trust-value">11</span>
                <span className="trust-label">Businesses Built</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-value">9 Yrs</span>
                <span className="trust-label">Fortune 500 Finance</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-value">10+</span>
                <span className="trust-label">Countries Active</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-crest-visual">

              {/* Orbital rings — CSS animated, behind everything */}
              <div className="hcv-ring hcv-ring-1" />
              <div className="hcv-ring hcv-ring-2" />

              {/* Crest — centered by flexbox, no transform conflict */}
              <motion.div
                className="hcv-crest"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/crest.jpeg"
                  alt="Evolite Partners Crest"
                  width={260}
                  height={260}
                  className="hcv-crest-img"
                  priority
                />
              </motion.div>

              {/* Stat badges — absolute at the four corners */}
              <motion.div className="hcv-badge hcv-badge-tl"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <div className="hcv-num">11</div>
                <div className="hcv-label">Businesses Built</div>
              </motion.div>

              <motion.div className="hcv-badge hcv-badge-tr"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <div className="hcv-num">10<span className="hcv-plus">+</span></div>
                <div className="hcv-label">Countries Active</div>
              </motion.div>

              <motion.div className="hcv-badge hcv-badge-bl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                <div className="hcv-num">9<span className="hcv-unit">Yrs</span></div>
                <div className="hcv-label">Fortune 500</div>
              </motion.div>

              <motion.div className="hcv-badge hcv-badge-br"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
                <div className="hcv-pride">P·R·I·D·E</div>
                <div className="hcv-label">Framework™</div>
              </motion.div>
            </div>
          </div>
        </div>
      </InfiniteGridHero>

      {/* ============ PAIN POINTS ============ */}
      <section className="section pain-section">
        <div className="container">
          <SectionHeader
            eyebrow="The Reality Most Entrepreneurs Face"
            title="You're Running a Company. You're Also the Lawyer, Accountant, Marketer, Compliance Officer, and IT Department."
            description="These are the six systems every business must master. Most founders try to handle them all alone."
          />
          <div className="pain-grid">
            {painPoints.map((item, i) => (
              <div key={i} className="glass-card pain-card slide-up" data-num={String(i + 1).padStart(2, '0')} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="pain-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOUNDER ============ */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image-wrapper slide-up">
              <div className="founder-image-placeholder">
                <Image
                  src="/crest.jpeg"
                  alt="Evolite Partners Crest"
                  width={340}
                  height={340}
                  className="founder-crest-img"
                />
                <span className="founder-name-label">Shhally Sharma</span>
              </div>
            </div>
            <div className="founder-content slide-up">
              <div className="eyebrow">The Founder</div>
              <h2>Built from experience.<br /><em className="font-accent">Not theory.</em></h2>
              <p>Shhally didn't go to law school first. He started 11 businesses — and made every mistake a founder can make with taxes, compliance, legal structure, and money. Then he spent 9 years in Fortune 500 financial operations learning how the system actually works from the inside.</p>
              <p>He speaks English, Hindi, Urdu, and Punjabi. He has family in the US and India, active trade relationships across 10+ countries, and a personal understanding of what it means to build something from nothing — twice.</p>
              <p>Evolite Partners exists because Shhally wished someone like this existed when he started. Now he is that person — for you.</p>
              <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                Meet Shhally — Book a Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANNER / DIFFERENTIATOR ============ */}
      <section className="section banner-section">
        <div className="container">
          <div className="banner-inner glass slide-up">
            <div className="banner-pre">What Makes Evolite Partners Different</div>
            <h2>Most professionals file your taxes and leave.<br />We build your <em className="font-accent">strategy</em> and stay.</h2>
            <p>The difference between a tax preparer and a tax strategist is the same as the difference between a contractor and an architect. One builds what you ask for. The other designs what you actually need — with 11 businesses of lived experience and 9 years of Fortune 500 financial strategy behind every decision.</p>
            <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
              Book a Free 30-Minute Call →
            </a>
          </div>
        </div>
      </section>

      {/* ============ PRIDE FRAMEWORK ============ */}
      <section className="section pride-section">
        <div className="container">
          <SectionHeader
            eyebrow="The System Behind Every Engagement"
            title="The PRIDE Framework™"
            description="Five phases. Every business moves through all of them. Wherever you enter — the destination is the same. Elite status."
          />
          <div className="pride-row">
            {pridePhases.map((p, i) => (
              <div key={i} className="pride-card glass-card slide-up" data-letter={p.letter} style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="pride-letter">{p.letter}</span>
                <div className="pride-word">{p.word}</div>
                <div className="pride-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="pride-cta slide-up">
            <p>The PRIDE Self-Assessment™ scores 14 dimensions of your business and gives you a personalized 90-day roadmap.</p>
            <a href="https://evolitepartners.gumroad.com/l/pride-self-assessment" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Take the Self-Assessment — $29
            </a>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section process-section">
        <div className="container">
          <SectionHeader
            eyebrow="How We Work"
            title="Simple Process. No Guesswork."
            description="Every engagement starts the same way — an honest conversation. No pressure, no jargon, no obligation."
          />
          <div className="process-timeline">
            {steps.map((step, i) => (
              <div key={i} className="process-step slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Start Your PRIDE Journey →
            </a>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section faq-section">
        <div className="container">
          <SectionHeader
            eyebrow="Common Questions"
            title="Questions We Hear Every Day"
          />
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item glass-card ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-arrow">{openFaq === i ? '▴' : '▾'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section final-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="slide-up">Ready to stop doing this alone?</h2>
          <p className="slide-up" style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '1rem auto 2rem', fontSize: '1.1rem' }}>
            Book a PRIDE Assessment call and we'll tell you exactly where you are, which tier fits you, and what your next 90 days should look like.
          </p>
          <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary slide-up">
            Book Your Assessment Call →
          </a>
        </div>
      </section>
    </div>
  );
}
