import Link from 'next/link';
import '../privacy/privacy.css';

export const metadata = {
  title: "Terms of Service — Evolite Partners",
  description: "Terms of Service for Evolite Partners LLC. Governing law: Washington State.",
};

export default function TermsOfService() {
  return (
    <div className="legal-page pt-32">
      <div className="container">
        <div className="legal-content">

          <div className="eyebrow">Legal</div>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-meta">Effective Date: March 1, 2026 · Evolite Partners LLC · Washington State</p>

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the website at evolitepartners.com (the &quot;Site&quot;) or by engaging Evolite Partners LLC (&quot;Evolite Partners,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for any services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site or engage our services.</p>
            <p>We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Services</h2>
            <p>Evolite Partners LLC provides business consulting services including, but not limited to:</p>
            <ul>
              <li>Tax strategy planning and guidance</li>
              <li>IRS correspondence support and resolution consulting</li>
              <li>Business entity formation and structuring guidance</li>
              <li>Import/export consulting and trade compliance advisory</li>
              <li>Fractional CFO advisory services</li>
              <li>Digital educational resources and self-paced academy content</li>
            </ul>
            <p>The specific scope, deliverables, and terms of each engagement are defined in a separate engagement agreement or statement of work entered into between Evolite Partners and the client.</p>
          </section>

          <section className="legal-section">
            <h2>3. Not a Law Firm — Not Licensed Tax Preparation</h2>
            <p><strong>Important Disclaimer:</strong> Evolite Partners LLC is a business consulting firm. We are not a law firm and do not provide legal representation, legal advice, or attorney-client services. Nothing on this Site or in our services constitutes legal advice.</p>
            <p>Evolite Partners provides tax strategy guidance and consulting. We are not a licensed CPA firm and do not perform tax preparation services unless explicitly agreed in a written engagement. All tax-related guidance is strategic in nature and does not constitute tax advice from a licensed tax professional unless otherwise specified.</p>
            <p>We strongly recommend that clients work with licensed attorneys and CPAs for matters requiring professional licensure. Evolite Partners works alongside, not in replacement of, licensed professionals.</p>
          </section>

          <section className="legal-section">
            <h2>4. Payment Terms</h2>
            <p>Fees for services are set forth in your engagement agreement or as displayed at the time of purchase for digital products. All fees are in United States Dollars (USD).</p>
            <ul>
              <li>Monthly retainer services are billed in advance on a monthly basis</li>
              <li>Digital product purchases are final and non-refundable unless otherwise stated</li>
              <li>Consulting engagements may require a deposit before work begins</li>
              <li>Late payments may result in suspension of services</li>
            </ul>
            <p>Refund requests for services will be evaluated on a case-by-case basis. Contact us at <a href="mailto:shhally@evolitepartners.com">shhally@evolitepartners.com</a> with any billing concerns.</p>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property</h2>
            <p>All content on this Site — including but not limited to text, graphics, logos, images, and the overall design — is the property of Evolite Partners LLC and is protected by applicable copyright and trademark laws.</p>
            <p>The following are registered or common law trademarks of Evolite Partners LLC:</p>
            <ul>
              <li>PRIDE Framework™</li>
              <li>PRIDE Academy™</li>
              <li>KASHAKA™</li>
              <li>Evolution to Elite™</li>
            </ul>
            <p>You may not reproduce, distribute, modify, or create derivative works of any content from this Site without prior written permission from Evolite Partners LLC.</p>
          </section>

          <section className="legal-section">
            <h2>6. Confidentiality</h2>
            <p>Evolite Partners treats all client information as confidential. We do not disclose client business information, financial data, or communications to third parties without client consent, except as required by law or as necessary to provide the contracted services (e.g., sharing information with a licensed CPA or attorney working on your behalf).</p>
            <p>Clients agree to keep confidential any proprietary methodologies, frameworks, templates, and materials provided by Evolite Partners during an engagement.</p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Evolite Partners LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or our services, even if we have been advised of the possibility of such damages.</p>
            <p>Our total aggregate liability to you for any claim arising from or related to these Terms or our services shall not exceed the amount paid by you to Evolite Partners in the three (3) months preceding the claim.</p>
            <p>Evolite Partners does not guarantee specific financial, tax, or business outcomes as a result of our consulting services. Results depend on client implementation, market conditions, and other factors outside our control.</p>
          </section>

          <section className="legal-section">
            <h2>8. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Evolite Partners LLC and its members, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your use of the Site, your violation of these Terms, or your violation of any applicable law or third-party rights.</p>
          </section>

          <section className="legal-section">
            <h2>9. Third-Party Links</h2>
            <p>The Site may contain links to third-party websites (including Calendly, Gumroad, and LinkedIn). These links are provided for convenience only. Evolite Partners does not endorse and is not responsible for the content, privacy practices, or terms of any third-party sites. Access third-party sites at your own risk.</p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the State of Washington, United States, without regard to its conflict of law provisions.</p>
            <p>Any dispute arising from these Terms or your use of the Site shall first be attempted to be resolved through good-faith negotiation. If a resolution cannot be reached within 30 days, disputes shall be submitted to binding arbitration in King County, Washington, under the rules of the American Arbitration Association. Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in a court of competent jurisdiction.</p>
          </section>

          <section className="legal-section">
            <h2>11. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy and any signed engagement agreement, constitute the entire agreement between you and Evolite Partners LLC regarding the subject matter hereof and supersede all prior agreements and understandings.</p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>Questions about these Terms? Please contact us:</p>
            <div className="legal-contact">
              <p><strong>Evolite Partners LLC</strong></p>
              <p>Washington State, United States</p>
              <p>Email: <a href="mailto:shhally@evolitepartners.com">shhally@evolitepartners.com</a></p>
            </div>
          </section>

          <div className="legal-back">
            <Link href="/" className="btn btn-outline">← Back to Home</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
