import Link from 'next/link';
import './privacy.css';

export const metadata = {
  title: "Privacy Policy — Evolite Partners",
  description: "Privacy Policy for Evolite Partners LLC. How we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-page pt-32">
      <div className="container">
        <div className="legal-content">

          <div className="eyebrow">Legal</div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Effective Date: March 1, 2026 · Evolite Partners LLC · Washington State</p>

          <section className="legal-section">
            <h2>1. Overview</h2>
            <p>Evolite Partners LLC (&quot;Evolite Partners,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at evolitepartners.com (the &quot;Site&quot;). This Privacy Policy describes how we collect, use, disclose, and protect information about you when you visit our Site or contact us about our services.</p>
            <p>By using the Site, you agree to the practices described in this policy. If you do not agree, please discontinue use of the Site.</p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>Information You Provide Directly</h3>
            <p>When you submit a contact form, request an assessment, or otherwise communicate with us, we may collect:</p>
            <ul>
              <li>Your name and email address</li>
              <li>Your business type and revenue range</li>
              <li>The content of your message or inquiry</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our Site, we may automatically collect standard technical data including your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected through our hosting provider (Netlify) and is used to operate and improve the Site.</p>

            <h3>No Sensitive Financial Data Collected on Site</h3>
            <p>We do not collect, store, or process payment card numbers, bank account information, Social Security numbers, or similar sensitive financial data through this website. All engagements and payments are handled through secure, separate channels.</p>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Provide, manage, and improve our services</li>
              <li>Send you information about services, resources, or updates you have requested</li>
              <li>Comply with applicable legal obligations</li>
              <li>Protect the security and integrity of our Site and business</li>
            </ul>
            <p>We will not sell, rent, or share your personal information with third parties for their own marketing purposes without your explicit consent.</p>
          </section>

          <section className="legal-section">
            <h2>4. Third-Party Services</h2>
            <p>We use the following third-party services to operate this Site and deliver communications:</p>
            <ul>
              <li><strong>Netlify</strong> — Website hosting and deployment. Netlify may collect standard server logs. See Netlify&apos;s privacy policy at netlify.com/privacy.</li>
              <li><strong>Resend</strong> — Email delivery service used to transmit contact form submissions to our team. Form data is transmitted through Resend&apos;s infrastructure. See resend.com/privacy.</li>
              <li><strong>Calendly</strong> — Online scheduling platform. When you book a call through our Calendly link, you are subject to Calendly&apos;s privacy policy at calendly.com/privacy.</li>
              <li><strong>Gumroad</strong> — Digital product delivery. Purchases through our Gumroad store are governed by Gumroad&apos;s privacy policy at gumroad.com/privacy.</li>
            </ul>
            <p>Each of these services has its own privacy policy and data practices. We recommend reviewing their policies before submitting information through those platforms.</p>
          </section>

          <section className="legal-section">
            <h2>5. Cookies and Tracking</h2>
            <p>Our Site may use cookies and similar tracking technologies for basic functionality and analytics. We do not use advertising cookies or track you across third-party websites.</p>
            <p>You can configure your browser to refuse cookies or to alert you when cookies are being sent. If you disable cookies, some features of the Site may not function properly.</p>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to provide our services, and to comply with applicable legal obligations. Contact form submissions are retained for business correspondence purposes. You may request deletion of your data at any time by contacting us at the address below.</p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <h3>All Users</h3>
            <p>You have the right to request access to the personal information we hold about you, request correction of inaccurate information, and request deletion of your data, subject to applicable legal requirements. To exercise these rights, contact us at <a href="mailto:hello@evolitepartners.com">hello@evolitepartners.com</a>.</p>

            <h3>California Residents (CCPA)</h3>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale of personal information (we do not sell personal information), and the right to non-discrimination for exercising your rights.</p>

            <h3>International Users</h3>
            <p>If you are located outside the United States, please note that your information may be transferred to and processed in the United States. By using our Site, you consent to this transfer. We take reasonable steps to ensure that your data is treated securely and in accordance with this policy.</p>
          </section>

          <section className="legal-section">
            <h2>8. Data Security</h2>
            <p>We implement commercially reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
          </section>

          <section className="legal-section">
            <h2>9. Children&apos;s Privacy</h2>
            <p>Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to delete such information.</p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the &quot;Effective Date&quot; at the top of this page. We encourage you to review this page periodically. Your continued use of the Site after changes are posted constitutes your acceptance of the updated policy.</p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="legal-contact">
              <p><strong>Evolite Partners LLC</strong></p>
              <p>Washington State, United States</p>
              <p>Email: <a href="mailto:hello@evolitepartners.com">hello@evolitepartners.com</a></p>
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
