import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-crest-seal">
                    <Image
                        src="/crest.jpeg"
                        alt="Evolite Partners Crest"
                        width={110}
                        height={110}
                        className="footer-crest-img"
                        sizes="110px"
                    />
                </div>

                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-text">EVOLITE</span>
                            <span className="footer-logo-sub">PARTNERS</span>
                        </div>
                        <p className="footer-tagline font-accent">&ldquo;Evolution to Elite&rdquo;</p>
                        <p className="footer-desc">
                            Tax Strategy · IRS Resolution · Import/Export · Business Formation · Fractional CFO
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4>Navigate</h4>
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/academy">Academy</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4>Resources</h4>
                        <a href="https://evolitepartners.gumroad.com" target="_blank" rel="noopener noreferrer">Digital Store</a>
                        <a href="https://evolitepartners.gumroad.com/l/pride-self-assessment" target="_blank" rel="noopener noreferrer">PRIDE Self-Assessment</a>
                        <a href="https://evolitepartners.gumroad.com/l/pride-toolkit-bundle" target="_blank" rel="noopener noreferrer">PRIDE Toolkit Bundle</a>
                        <a href="https://evolitepartners.gumroad.com" target="_blank" rel="noopener noreferrer">IRS Survival Guide</a>
                        <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer">Book a Call</a>
                    </div>

                    <div className="footer-links-group">
                        <h4>Connect</h4>
                        <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer">Book a Call →</a>
                        <a href="tel:+14253807110" className="footer-phone">(425) 380-7110</a>
                        <a href="mailto:hello@evolitepartners.com">hello@evolitepartners.com</a>
                        <span className="footer-location">
                            <MapPin style={{ display: 'inline', width: '0.85rem', height: '0.85rem', verticalAlign: 'middle', marginRight: '4px', marginBottom: '1px' }} />
                            Washington State · Nationwide · International
                        </span>
                        {/* TODO: replace LINKEDIN_URL with actual profile URL */}
                        {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                            <div className="footer-social">
                                <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <Linkedin style={{ width: '1rem', height: '1rem' }} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="footer-divider shimmer"></div>

                <div className="footer-bottom">
                    <p>© 2009–{new Date().getFullYear()} Evolite Partners LLC. All rights reserved.</p>
                    <p className="footer-legal">
                        KASHAKA, PRIDE Framework, and PRIDE Academy are proprietary brands of Evolite Partners LLC. · Est. 2009 · Washington State · Nationwide Service
                    </p>
                    <div className="footer-legal-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <span>·</span>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
