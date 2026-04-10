import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, CircleDollarSign, Scale, Globe, Megaphone, Target, Star, Check, X } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import InfiniteGridHero from "@/components/InfiniteGridHero";
import HeroCrest from "@/components/HeroCrest";
import FaqAccordion from "@/components/FaqAccordion";
import "./page.css";

export const metadata = {
  title: "Evolite Partners — Evolution to Elite",
  description: "Tax strategy, IRS resolution, import/export consulting, and business formation for founders. Built from 17 businesses and 20 years of Fortune 500 finance. Washington State & Nationwide.",
};

const painPoints = [
  { icon: <ClipboardCheck className="w-8 h-8 text-gold" />, title: "Compliance & Filing", desc: "Business licenses. State registrations. Annual reports. Sales tax permits. Federal filings. Quarterly estimated taxes. Every state has different rules — and every missed deadline has a penalty." },
  { icon: <CircleDollarSign className="w-8 h-8 text-gold" />, title: "Finance & Accounting", desc: "Bookkeeping. Cash flow management. Profit & loss. Balance sheets. Payroll. Invoicing. Payment processing. You're doing CFO-level work without CFO-level training — because you can't afford one yet." },
  { icon: <Scale className="w-8 h-8 text-gold" />, title: "Legal & Entity Structure", desc: "LLC vs S-Corp vs C-Corp. Operating agreements. Registered agents. EIN. Contracts. Liability protection. One wrong structure can cost you thousands in taxes or leave you personally exposed." },
  { icon: <Globe className="w-8 h-8 text-gold" />, title: "Digital Infrastructure", desc: "Website. Domain. Hosting. Business email. CRM. Automations. Sales funnels. Landing pages. Analytics. You need all of it — and nobody teaches you how it connects." },
  { icon: <Megaphone className="w-8 h-8 text-gold" />, title: "Marketing & Acquisition", desc: "Brand strategy. Content creation. Social media. LinkedIn positioning. Lead generation. Ads. SEO. Referral programs. Everyone says 'just post more' — but nobody tells you what actually converts." },
  { icon: <Target className="w-8 h-8 text-gold" />, title: "Strategy & Growth", desc: "Market research. Competitive analysis. Pricing strategy. Expansion planning. Partnership development. Hiring. Scaling. You know you need a plan — but the plan itself takes weeks to build alone." },
];

const pridePhases = [
  { letter: "P", word: "Protection", desc: "Entity structure, EIN, legal foundation. Before you earn, you must protect. The right structure saves thousands and shields you personally." },
  { letter: "R", word: "Revenue", desc: "Pricing systems, payment processing, income streams. Revenue is not just sales — it's architecture. We help you build income that scales." },
  { letter: "I", word: "Integration", desc: "Accounting, taxes, compliance, bookkeeping. Integration means your numbers talk to each other. No gaps, no surprises, no penalties." },
  { letter: "D", word: "Domination", desc: "Scaling, multiple revenue streams, multi-entity management, export market entry, and team and operations build." },
  { letter: "E", word: "Evolution", desc: "Scale, legacy, expansion. Evolution is the destination. Bigger markets. Stronger systems. A business that outlasts you." },
];

const steps = [
  { num: "01", title: "Strategy Call — $250", desc: "30 minutes. Book and pay online. Shhally reviews your file before the call. You receive a full PRIDE diagnosis and a priority action plan. Or start with the PRIDE Self-Assessment ($29) for immediate guidance first." },
  { num: "02", title: "Your PRIDE Map", desc: "We identify your PRIDE phase, which tier fits your situation, and what your next 90 days should look like — in priority order." },
  { num: "03", title: "We Execute Together", desc: "Done-for-you, coaching, or self-paced Academy. We meet you where you are — and we don't stop until the work is complete." },
  { num: "04", title: "Elite Results", desc: "Tax optimized. IRS resolved. Trade compliant. Business properly structured. That is Elite status — earned, not given." },
];

const testimonials = [
  {
    quote: "I got an IRS notice and panicked. Shhally not only explained exactly what it meant, she resolved it in 3 weeks. I didn't have to talk to the IRS once. $19,000 in back taxes — gone.",
    name: "Raj M.",
    meta: "Small Business Owner · Seattle, WA · IRS Resolution",
  },
  {
    quote: "Before Evolite, I was paying $8,000 more in taxes every year because my entity was wrong. Shhally restructured everything and saved me $11,000 in year one. The strategy call paid for itself in the first month.",
    name: "Marcus T.",
    meta: "Entrepreneur · Texas · Tax Strategy",
  },
  {
    quote: "I'm based in Dubai and wanted to open a US LLC. Most people couldn't help me. Shhally handled everything — EIN, registered agent, bank setup, Form 5472. Done in 2 weeks. She also connected me to KASHAKA suppliers in India and China.",
    name: "Priya K.",
    meta: "International Entrepreneur · Dubai → USA · Business Formation",
  },
  {
    quote: "My China imports were getting crushed — 40% tariffs wiping out my margins. Shhally and the KASHAKA network found us verified alternative suppliers and navigated the paperwork. We're now at 12%. The business survived.",
    name: "Amir F.",
    meta: "Importer · California · Tariff Navigation",
  },
  {
    quote: "I started with a $17 tracking template and had no idea what I actually needed. Three months with Shhally and I was at $1,299 a month in real structured services. I finally understand my own business finances.",
    name: "Sofia R.",
    meta: "Founder · New York · Business Systems",
  },
];

const comparisonRows = [
  { feature: "Proactive tax strategy", others: "Reactive only", us: "Year-round planning" },
  { feature: "IRS resolution support", others: "Refer out", us: "Handled in-house" },
  { feature: "Import/Export & tariffs", others: "Not offered", us: "KASHAKA network" },
  { feature: "PRIDE Framework", others: "No system", us: "5-phase roadmap" },
  { feature: "Founder-to-founder guidance", others: "Corporate playbook", us: "11 businesses lived" },
  { feature: "Multi-language support", others: "English only", us: "EN · HI · UR · PB" },
  { feature: "International US LLC setup", others: "Rarely", us: "Fully supported" },
];

const faqs = [
  { q: "Do I need to have a tax problem to work with you?", a: "Not at all. Most of our clients come to us in perfectly normal situations — they want to pay less in taxes legally, structure their business correctly, understand tariffs, or prepare before a problem happens. You don't need to be in trouble to benefit from strategy. The best time is before there's a problem. Start with the PRIDE Self-Assessment ($29) for immediate guidance, or book a $250 strategy call to get a full diagnosis." },
  { q: "How much do your services cost?", a: "Our tiers range from $499/month for guided coaching up to $3,999/month for Done-For-You services and $9K–$25K/month for enterprise engagements. Every engagement starts with a $250 strategy call — 30 minutes, paid online before booking. We scope the work together and give you a clear number before anything begins. No surprises." },
  { q: "I received an IRS notice. What should I do right now?", a: "First — don't panic, and don't ignore it. Most IRS notices are not audits. Check the notice number (top right corner) and the deadline (typically 30–60 days). Then book a $250 strategy call — we'll identify the notice type, explain exactly what it means, and tell you precisely what to do next. You can also start with the PRIDE Self-Assessment ($29) for immediate guidance before booking a call." },
  { q: "What is KASHAKA and how does it help me?", a: "KASHAKA is Shhally Sharma's import/export company and global supplier network — active since 2021 across 20+ countries on 5 continents. When you work with Evolite Partners on trade consulting, you get access to verified suppliers, tariff navigation from someone who has personally cleared customs, and fraud protection built on real experience." },
  { q: "What is the PRIDE Framework and who is it for?", a: "PRIDE stands for Protection, Revenue, Integration, Domination, Evolution. It is the five-phase system we use to assess and grow every business we work with — from a first-year startup to a multi-million dollar operation. It gives your business a clear position, a clear gap, and a clear next step. Start with the PRIDE Self-Assessment ($29) to find out where you are right now." },
  { q: "Can you help international entrepreneurs set up US businesses?", a: "Yes. We form US entities (LLC, S-Corp, C-Corp) for clients in any state — including international entrepreneurs who want US business infrastructure. We handle EIN, registered agent, operating agreements, and banking setup. Shhally Sharma speaks English, Hindi, Urdu, and Punjabi and has deep roots in India and the UAE." },
  { q: "Do you work with businesses outside Washington State?", a: "Yes — we work with clients nationwide and internationally. Our compliance work covers all 50 states and we handle federal tax strategy for clients anywhere in the country. Location is no barrier." },
  { q: "What if I just want help with one thing, like my taxes?", a: "That's completely fine. You can start with a single service — tax strategy, IRS resolution, business formation, or trade consulting — and scale up only when it makes sense for you. We don't require long-term contracts to get started." },
];

export default function Home() {
  return (
    <div className="home-page">

      {/* ============ HERO ============ */}
      <InfiniteGridHero>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge slide-up">
              <span className="badge-dot"></span>
              Now Accepting New Clients · Washington State &amp; Nationwide
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
                Book a Strategy Call — $250 →
              </a>
              <Link href="/services" className="btn btn-outline">
                See Our Tiers
              </Link>
            </div>

            <div className="hero-trust slide-up">
              <div className="trust-item">
                <span className="trust-value">$2.1M+</span>
                <span className="trust-label">Client Tax Savings</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-value">200+</span>
                <span className="trust-label">IRS Cases Resolved</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-value">20 Yrs</span>
                <span className="trust-label">Fortune 500 Finance</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-value">20+</span>
                <span className="trust-label">Countries Active</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <HeroCrest />
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
                  sizes="(max-width: 768px) 260px, 340px"
                />
                <span className="founder-name-label">Shhally Sharma</span>
              </div>
            </div>
            <div className="founder-content slide-up">
              <div className="eyebrow">The Founder</div>
              <h2>Built from experience.<br /><em className="font-accent">Not theory.</em></h2>
              <p>Shhally didn&apos;t go to consulting school first. She started 17 businesses — and made every mistake a founder can make with taxes, compliance, legal structure, and money. Then she spent 20 years in Fortune 500 financial operations at Microsoft, United Airlines, Booking.com, T-Mobile, Comcast, and Holland America — learning how the system actually works from the inside.</p>
              <p>She speaks English, Hindi, Urdu, and Punjabi. She has family in the US and India, active trade relationships across 20+ countries, and a personal understanding of what it means to build something from nothing.</p>
              <p>Evolite Partners exists because Shhally wished someone like this existed when she started. Now she is that person — for you.</p>
              <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                Book a Strategy Call — $250 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANNER / DIFFERENTIATOR ============ */}
      <section className="section banner-section">
        <div className="container">
          <div className="banner-inner glass slide-up">
            <div className="banner-grid">
              <div className="banner-copy">
                <div className="banner-pre">What Makes Evolite Partners Different</div>
                <h2>Most professionals file your taxes and leave.<br />We build your <em className="font-accent">strategy</em> and stay.</h2>
                <p className="banner-tagline" style={{ color: 'var(--color-gold)', fontStyle: 'italic', marginTop: '0.5rem', fontSize: '1.05rem' }}>Not advice — architecture.</p>
                <p>The difference between a tax preparer and a tax strategist is the same as the difference between a contractor and an architect. One builds what you ask for. The other designs what you actually need — with 17 businesses of lived experience and 20 years of Fortune 500 financial strategy behind every decision.</p>
                <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                  Book a Strategy Call — $250 →
                </a>
              </div>
              <div className="banner-table-wrap">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Others</th>
                      <th>Evolite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i}>
                        <td className="comp-feature">{row.feature}</td>
                        <td className="comp-cross"><X style={{ width: '0.85rem', height: '0.85rem', display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />{row.others}</td>
                        <td className="comp-check"><Check style={{ width: '0.85rem', height: '0.85rem', display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRIDE FRAMEWORK ============ */}
      <section className="section pride-section">
        <div className="container">
          <SectionHeader
            eyebrow="The System Behind Every Engagement"
            title="The PRIDE Framework"
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
            <p>The PRIDE Self-Assessment scores 14 dimensions of your business and gives you a personalized 90-day roadmap.</p>
            <a href="https://evolitepartners.gumroad.com/l/pride-self-assessment" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Take the Self-Assessment — $29
            </a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionHeader
            eyebrow="What Our Clients Say"
            title="Real results. Real founders."
            description="Not theory — transformation."
          />
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card glass-card slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="testimonial-quote-mark">&ldquo;</div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} style={{ width: '0.85rem', height: '0.85rem', fill: 'var(--color-gold)', color: 'var(--color-gold)' }} />
                  ))}
                </div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-meta">{t.meta}</div>
                </div>
              </div>
            ))}
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
              Book a Strategy Call — $250 →
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
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section final-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="slide-up">Ready to stop doing this alone?</h2>
          <p className="slide-up" style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '1rem auto 2rem', fontSize: '1.1rem' }}>
            Book a $250 Strategy Call and Shhally will tell you exactly where you are, which tier fits you, and what your next 90 days should look like. Or start with the PRIDE Self-Assessment ($29) for immediate guidance.
          </p>
          <div className="slide-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book a Strategy Call — $250 →
            </a>
            <Link href="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
