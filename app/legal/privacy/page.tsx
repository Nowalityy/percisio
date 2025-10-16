import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="mt-12 mb-6">1. Introduction</h2>
            <p>
              Percisio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your personal information and protected health information (PHI). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical assistance platform and related services.
            </p>
            <p>
              This Privacy Policy applies to all users of Percisio&apos;s services, including healthcare professionals, medical institutions, and patients whose data may be processed through our platform.
            </p>

            <h2 className="mt-12 mb-6">2. Information We Collect</h2>
            
            <h3 className="mt-8 mb-4">2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, professional credentials, institutional affiliation, and contact information</li>
              <li><strong>Professional Information:</strong> Medical license numbers, specialty areas, certifications, and professional qualifications</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including login times, feature usage, and system performance data</li>
              <li><strong>Communication Data:</strong> Records of communications with our support team, feedback, and service requests</li>
            </ul>

            <h3 className="mt-8 mb-4">2.2 Protected Health Information (PHI)</h3>
            <p>In the course of providing our medical assistance services, we may process PHI, including:</p>
            <ul>
              <li>Medical imaging data (CT scans, MRI images, ultrasound data)</li>
              <li>Procedure-related information and clinical notes</li>
              <li>Patient identifiers and demographic information (when required for clinical context)</li>
              <li>Treatment outcomes and procedure results</li>
            </ul>

            <h3 className="mt-8 mb-4">2.3 Technical Information</h3>
            <p>We automatically collect certain technical information, including:</p>
            <ul>
              <li>Device information (hardware specifications, operating system, browser type)</li>
              <li>Network information (IP address, connection type, location data)</li>
              <li>System performance metrics and error logs</li>
              <li>Security and authentication data</li>
            </ul>

            <h2 className="mt-12 mb-6">3. How We Use Your Information</h2>
            
            <h3 className="mt-8 mb-4">3.1 Service Provision</h3>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our medical assistance platform</li>
              <li>Process medical imaging data and provide real-time guidance</li>
              <li>Authenticate users and manage access to the platform</li>
              <li>Provide technical support and customer service</li>
              <li>Ensure system security and prevent unauthorized access</li>
            </ul>

            <h3 className="mt-8 mb-4">3.2 Quality Improvement</h3>
            <p>We may use de-identified data to:</p>
            <ul>
              <li>Improve our algorithms and system performance</li>
              <li>Conduct research and development activities</li>
              <li>Generate anonymized analytics and insights</li>
              <li>Enhance user experience and platform functionality</li>
            </ul>

            <h3 className="mt-8 mb-4">3.3 Legal and Regulatory Compliance</h3>
            <p>We use your information to:</p>
            <ul>
              <li>Comply with applicable laws and regulations</li>
              <li>Respond to legal requests and court orders</li>
              <li>Maintain audit trails and compliance records</li>
              <li>Protect our rights and interests</li>
            </ul>

            <h2 className="mt-12 mb-6">4. HIPAA Compliance and PHI Protection</h2>
            <p>
              <strong>HIPAA Compliance:</strong> Percisio is designed to comply with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable healthcare privacy regulations. We implement appropriate administrative, physical, and technical safeguards to protect PHI.
            </p>
            
            <h3 className="mt-8 mb-4">4.1 Safeguards</h3>
            <ul>
              <li><strong>Administrative Safeguards:</strong> Comprehensive privacy policies, staff training, and access controls</li>
              <li><strong>Physical Safeguards:</strong> Secure data centers, access controls, and environmental protections</li>
              <li><strong>Technical Safeguards:</strong> Encryption, secure transmission, access controls, and audit logs</li>
            </ul>

            <h3 className="mt-8 mb-4">4.2 Business Associate Agreements</h3>
            <p>
              When required, we enter into Business Associate Agreements (BAAs) with covered entities to ensure proper handling of PHI in accordance with HIPAA requirements.
            </p>

            <h2 className="mt-12 mb-6">5. Information Sharing and Disclosure</h2>
            
            <h3 className="mt-8 mb-4">5.1 Limited Sharing</h3>
            <p>We do not sell, rent, or trade your personal information or PHI. We may share information only in the following limited circumstances:</p>
            <ul>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our services under strict confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
              <li><strong>Emergency Situations:</strong> To protect the health and safety of individuals in emergency circumstances</li>
            </ul>

            <h3 className="mt-8 mb-4">5.2 De-identified Data</h3>
            <p>
              We may share de-identified, aggregated data that cannot be used to identify individuals for research, analytics, and improvement purposes.
            </p>

            <h2 className="mt-12 mb-6">6. Data Security</h2>
            <p>
              We implement comprehensive security measures to protect your information, including:
            </p>
            <ul>
              <li><strong>Encryption:</strong> End-to-end encryption for data in transit and at rest</li>
              <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access controls</li>
              <li><strong>Network Security:</strong> Firewalls, intrusion detection, and secure network architecture</li>
              <li><strong>Regular Audits:</strong> Ongoing security assessments and vulnerability testing</li>
              <li><strong>Staff Training:</strong> Regular privacy and security training for all personnel</li>
            </ul>

            <h2 className="mt-12 mb-6">7. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul>
              <li><strong>Account Information:</strong> Retained while your account is active and for a reasonable period thereafter</li>
              <li><strong>PHI:</strong> Retained in accordance with applicable healthcare regulations and institutional requirements</li>
              <li><strong>Technical Data:</strong> Retained for system maintenance and security purposes</li>
              <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
            </ul>

            <h2 className="mt-12 mb-6">8. Your Rights and Choices</h2>
            
            <h3 className="mt-8 mb-4">8.1 Access and Correction</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information and PHI</li>
              <li>Request corrections to inaccurate or incomplete information</li>
              <li>Request copies of your data in a portable format</li>
            </ul>

            <h3 className="mt-8 mb-4">8.2 Deletion and Restriction</h3>
            <p>You may request:</p>
            <ul>
              <li>Deletion of your personal information (subject to legal and regulatory requirements)</li>
              <li>Restriction of processing in certain circumstances</li>
              <li>Objection to certain types of data processing</li>
            </ul>

            <h3 className="mt-8 mb-4">8.3 Withdrawal of Consent</h3>
            <p>
              Where processing is based on consent, you may withdraw your consent at any time. However, this may affect your ability to use certain features of our platform.
            </p>

            <h2 className="mt-12 mb-6">9. International Data Transfers</h2>
            <p>
              If you are located outside the United States, please note that your information may be transferred to and processed in the United States. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses and adequacy decisions where applicable.
            </p>

            <h2 className="mt-12 mb-6">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="mt-12 mb-6">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="mt-12 mb-6">12. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p>
              <strong>Privacy Officer:</strong><br />
              Email: privacy@percisio.com<br />
              Phone: [Phone Number]<br />
              Address: [Company Address]
            </p>
            <p>
              <strong>Data Protection Officer (if applicable):</strong><br />
              Email: dpo@percisio.com
            </p>

            <h2 className="mt-12 mb-6">13. Complaints</h2>
            <p>
              If you believe we have violated your privacy rights, you may file a complaint with us or with the appropriate regulatory authority in your jurisdiction. We will investigate all complaints promptly and take appropriate corrective action.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
