import './SectionHeader.css';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
    return (
        <div className={`section-header ${align === 'left' ? 'align-left' : ''}`}>
            {eyebrow && <div className="eyebrow slide-up">{eyebrow}</div>}
            <div className="sec-divider-diamond slide-up">
                <span className="diamond"></span>
            </div>
            {title && <h2 className="section-title slide-up">{title}</h2>}
            {description && <p className="section-desc slide-up">{description}</p>}
        </div>
    );
}
