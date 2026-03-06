import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
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
                    />
                </div>

                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-text">EVOLITE</span>
                            <span className="footer-logo-sub">PARTNERS</span>
                        </div>
                        <p className="footer-tagline font-accent">"Evolution to Elite"</p>
                        <p className="footer-desc">
                            Tax Strategy · IRS Resolution · Import/Export · Business Formation · Fractional CFO
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4>Navigate</h4>
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/academy">Academy</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4>Resources</h4>
                        <a href="https://evolitepartners.gumroad.com" target="_blank" rel="noopener noreferrer">Digital Store</a>
                        <a href="https://evolitepartners.gumroad.com/l/pride-self-assessment" target="_blank" rel="noopener noreferrer">PRIDE Assessment</a>
                        <a href="https://evolitepartners.gumroad.com/l/pride-toolkit-bundle" target="_blank" rel="noopener noreferrer">Tracker Bundle</a>
                    </div>

                    <div className="footer-links-group">
                        <h4>Connect</h4>
                        <a href="https://calendly.com/evolitepartners" target="_blank" rel="noopener noreferrer">Book a Call</a>
                        <a href="mailto:prideinpreparation@gmail.com">prideinpreparation@gmail.com</a>
                        <span className="footer-location"><MapPin style={{ display: 'inline', width: '0.85rem', height: '0.85rem', verticalAlign: 'middle', marginRight: '4px', marginBottom: '1px' }} /> Washington State · Nationwide</span>
                    </div>
                </div>

                <div className="footer-divider shimmer"></div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Evolite Partners LLC. All rights reserved.</p>
                    <p className="footer-legal">
                        KASHAKA™, PRIDE Framework™, PRIDE Academy™ are trademarks of Evolite Partners LLC.
                    </p>
                </div>
            </div>
        </footer>
    );
}
