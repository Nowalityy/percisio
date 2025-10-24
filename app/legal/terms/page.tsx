import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="mt-12 mb-6">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Percisio&apos;s medical assistance platform
              (&quot;Service&quot;), you accept and agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the
              Service.
            </p>
            <p>
              These Terms apply to all users of the Service, including healthcare professionals,
              medical institutions, and any other individuals or entities that access or use the
              Service.
            </p>

            <h2 className="mt-12 mb-6">2. Description of Service</h2>
            <p>
              Percisio is a computer vision-powered medical assistance system designed to support
              healthcare professionals in image-guided procedures. The Service provides real-time
              guidance for percutaneous interventions including biopsies, infiltrations, punctures,
              and drainage procedures.
            </p>
            <p>
              The Service is intended for use by qualified healthcare professionals only and is not
              intended for direct patient use or as a substitute for professional medical judgment.
            </p>

            <h2 className="mt-12 mb-6">
              3. Medical Device Classification and Regulatory Compliance
            </h2>
            <p>
              Percisio is classified as a medical device and is subject to applicable medical device
              regulations. Users must ensure compliance with all local, national, and international
              regulations governing the use of medical devices in their jurisdiction.
            </p>
            <p>
              Users are responsible for obtaining any necessary regulatory approvals,
              certifications, or authorizations required for the use of the Service in their
              specific clinical setting.
            </p>

            <h2 className="mt-12 mb-6">4. Use License and Restrictions</h2>
            <p>
              Subject to these Terms, Percisio grants you a limited, non-exclusive, non-transferable
              license to use the Service for legitimate medical purposes. This license does not
              grant you any rights to:
            </p>
            <ul>
              <li>Modify, reverse engineer, or create derivative works of the Service</li>
              <li>Distribute, sublicense, or transfer the Service to third parties</li>
              <li>Use the Service for any unlawful or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
            </ul>

            <h2 className="mt-12 mb-6">5. User Responsibilities and Qualifications</h2>
            <p>You represent and warrant that:</p>
            <ul>
              <li>
                You are a qualified healthcare professional with appropriate training and
                credentials
              </li>
              <li>
                You have the necessary qualifications to perform the medical procedures for which
                you intend to use the Service
              </li>
              <li>
                You will use the Service in accordance with applicable medical standards and best
                practices
              </li>
              <li>
                You will maintain the confidentiality of your account credentials and are
                responsible for all activities under your account
              </li>
              <li>
                You will comply with all applicable laws, regulations, and professional standards
              </li>
            </ul>

            <h2 className="mt-12 mb-6">6. Medical Disclaimer and Professional Responsibility</h2>
            <p>
              <strong>IMPORTANT MEDICAL DISCLAIMER:</strong> Percisio is a tool designed to assist
              medical professionals and is not intended to replace professional medical judgment,
              diagnosis, or treatment. The Service should be used as an adjunct to, not a
              replacement for, standard medical practice.
            </p>
            <p>
              Final medical decisions, including diagnosis, treatment planning, and procedure
              execution, remain the sole responsibility of the licensed healthcare provider. Users
              must exercise their professional judgment and follow established medical protocols
              when using the Service.
            </p>
            <p>
              The Service does not guarantee specific clinical outcomes, and results may vary based
              on individual patient factors, user experience, and clinical circumstances.
            </p>

            <h2 className="mt-12 mb-6">7. Data Security and Privacy</h2>
            <p>
              The Service is designed to comply with applicable data protection regulations,
              including HIPAA where applicable. However, users are responsible for ensuring that
              their use of the Service complies with all applicable privacy laws and regulations in
              their jurisdiction.
            </p>
            <p>
              Users must obtain appropriate patient consent before using the Service and must
              implement appropriate safeguards to protect patient data in accordance with applicable
              regulations.
            </p>

            <h2 className="mt-12 mb-6">8. Intellectual Property Rights</h2>
            <p>
              The Service and all related intellectual property, including but not limited to
              software, algorithms, user interfaces, and documentation, are owned by Percisio and
              are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not use any Percisio trademarks, logos, or other proprietary information
              without prior written consent.
            </p>

            <h2 className="mt-12 mb-6">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERCISIO SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Medical malpractice or adverse patient outcomes</li>
              <li>Equipment damage or malfunction</li>
              <li>Third-party claims arising from your use of the Service</li>
            </ul>
            <p>
              In no event shall Percisio&apos;s total liability exceed the amount paid by you for
              the Service in the twelve (12) months preceding the claim.
            </p>

            <h2 className="mt-12 mb-6">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Percisio and its officers,
              directors, employees, and agents from and against any claims, damages, losses, or
              expenses arising from:
            </p>
            <ul>
              <li>Your use of the Service in violation of these Terms</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Your negligent or wrongful acts or omissions</li>
              <li>Any medical procedures performed using the Service</li>
            </ul>

            <h2 className="mt-12 mb-6">11. Service Availability and Modifications</h2>
            <p>
              Percisio reserves the right to modify, suspend, or discontinue the Service at any time
              without notice. We do not guarantee that the Service will be available at all times or
              that it will be free from errors or interruptions.
            </p>
            <p>
              We may update these Terms from time to time. Continued use of the Service after such
              changes constitutes acceptance of the updated Terms.
            </p>

            <h2 className="mt-12 mb-6">12. Termination</h2>
            <p>
              Either party may terminate these Terms at any time. Upon termination, your right to
              use the Service will cease immediately, and you must cease all use of the Service and
              return or destroy any related materials.
            </p>

            <h2 className="mt-12 mb-6">13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              [Jurisdiction], without regard to conflict of law principles. Any disputes arising
              from these Terms or your use of the Service shall be resolved through binding
              arbitration in accordance with the rules of [Arbitration Organization].
            </p>

            <h2 className="mt-12 mb-6">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, the remaining
              provisions will remain in full force and effect.
            </p>

            <h2 className="mt-12 mb-6">15. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p>
              Email: legal@percisio.com
              <br />
              Address: [Company Address]
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
