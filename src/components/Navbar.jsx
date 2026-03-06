'use client';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/academy', label: 'Academy' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`floating-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                {/* Logo */}
                <Link href="/" className="nav-logo">
                    <span className="logo-text">EVOLITE</span>
                    <span className="logo-sub">PARTNERS</span>
                </Link>

                {/* Desktop Links */}
                <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://calendly.com/evolitepartners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary nav-cta"
                    >
                        Book a Call
                    </a>
                </div>

                {/* Theme Toggle + Hamburger */}
                <div className="nav-controls">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                    <button
                        className="hamburger"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
