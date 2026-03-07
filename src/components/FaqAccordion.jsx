'use client';
import { useState } from 'react';

export default function FaqAccordion({ faqs }) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
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
    );
}
