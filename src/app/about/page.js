import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import './about.css';

export const metadata = {
  title: "About Shhally Sharma — Evolite Partners",
  description: "The founder's story, mission, and values behind Evolite Partners. Built from 17 businesses and 20 years of Fortune 500 finance. Est. 2009.",
};

export default function About() {
  const credentials = [
    "17 businesses started — 11 succeeded across multiple industries",
    "20 years Fortune 500 financial operations — Microsoft, United Airlines, Booking.com, T-Mobile, Comcast, Holland America",
    "14 years IRS case experience — 200+ cases resolved",
    "$2.1M+ in client tax savings",
    "Active import/export operator — KASHAKA (est. 2021) — 20+ countries, 5 continents",
    "Trade relationships: USA, India, Dubai, China, Africa",
    "Languages: English, Hindi, Urdu, Punjabi",
    "Washington State based — serving clients nationwide & internationally",
    "Est. 2009 — Evolite Partners LLC",
  ];

  const values = [
    {
      title: "Clarity over Confusion",
      desc: "We translate the complex into the actionable. No jargon. No fine print. No 'it depends' without an answer that follows.",
    },
    {
      title: "Protection First",
      desc: "We protect before we grow. The right structure, the right compliance, the right strategy — before the revenue scales.",
    },
    {
      title: "Lived Experience",
      desc: "Every recommendation comes from someone who has been in the situation — not just studied it.",
    },
    {
      title: "Access for All",
      desc: "Elite financial strategy is not reserved for people with elite backgrounds. If you're building something, you deserve the same tools the Fortune 500 uses.",
    },
  ];

  return (
    <div className="about-page pt-32">

      {/* ============ HERO ============ */}
      <section className="section about-hero-section">
        <div className="container">
          <div className="eyebrow">About Evolite Partners</div>
          <h1 className="about-hero-title">
            This isn&apos;t a firm.<br />
            <em className="font-accent">It&apos;s a second chance — built for founders.</em>
          </h1>
          <p className="about-hero-sub">
            Evolite Partners was built by someone who made every mistake you&apos;re trying to avoid — and spent 20 years inside Fortune 500 finance at Microsoft, United Airlines, Booking.com, T-Mobile, Comcast, and Holland America learning how to fix them permanently. Est. 2009.
          </p>
        </div>
      </section>

      {/* ============ FOUNDER BIO ============ */}
      <section className="section founder-bio-section">
        <div className="container">
          <div className="founder-bio-grid">

            <div className="founder-bio-image-col">
              <div className="about-crest-wrap">
                <Image
                  src="/crest.jpeg"
                  alt="Evolite Partners — Shhally Sharma"
                  width={400}
                  height={400}
                  className="about-crest-img"
                  sizes="(max-width: 900px) 100vw, 400px"
                />
              </div>
              <div className="credentials-card glass-card">
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Credentials</div>
                {credentials.map((c, i) => (
                  <div key={i} className="credential-item">
                    <CheckCircle className="credential-icon" style={{ width: '0.9rem', height: '0.9rem', flexShrink: 0, color: 'var(--color-gold)', marginTop: '2px' }} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="founder-bio-content">
              <div className="eyebrow">The Founder</div>
              <h2 className="founder-bio-name">Shhally Sharma</h2>
              <p className="founder-title-label">Founder &amp; Principal Strategist, Evolite Partners</p>

              <p>Shhally Sharma is not a consultant who went straight from university to a corner office. She is a founder who failed, rebuilt, and failed again — until the pattern became a playbook.</p>
              <p>She launched her first business before she understood what an EIN was. She paid taxes she didn&apos;t owe because her entity was wrong. She missed compliance deadlines because nobody told her they existed. She lost money on international shipments because she didn&apos;t know what an HTS code was.</p>
              <p>Then she spent 20 years inside the financial infrastructure of Fortune 500 companies — Microsoft, United Airlines, Booking.com, T-Mobile, Comcast, and Holland America — learning how the IRS actually works, how large businesses protect themselves legally, how cash flow is managed at scale, and how trade finance operates across borders.</p>
              <p>She speaks English, Hindi, Urdu, and Punjabi. Her family spans the United States and India. Her trade network reaches Dubai, China, Africa, and Southeast Asia. She has personally cleared customs, negotiated with suppliers, filed IRS responses, and restructured businesses from the ground up — 200+ IRS cases resolved, $2.1M+ in client tax savings.</p>
              <p>Evolite Partners is the firm she needed when she started. It exists so that no founder in her community — or any community — has to learn these lessons the expensive way.</p>

              <a
                href="https://calendly.com/evolitepartners"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '2rem', display: 'inline-flex' }}
              >
                Book a Strategy Call — $250 →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-inner glass-card">
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>Our Mission</div>
            <p className="mission-statement">
              To give every founder — regardless of background, language, or country of origin — access to the financial strategy, legal structure, and business infrastructure that has historically only been available to the wealthy.
            </p>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="section values-section">
        <div className="container">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Values that guide every engagement."
          />
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card">
                <div className="value-bg-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section about-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to work with someone who&apos;s been there?</h2>
          <p className="about-cta-sub">
            Book a $250 Strategy Call — 30 minutes with Shhally. She reviews your file before the call. You leave with a full PRIDE diagnosis and a clear next step. Or start with the PRIDE Self-Assessment ($29) for immediate guidance.
          </p>
          <div className="about-cta-btns">
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
