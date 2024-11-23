import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20 lg:pt-10 bg-white">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: October 04, 2024</p>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
        </section>

        {/* Interpretation and Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Interpretation and Definitions
          </h2>
          <p className="text-gray-700">
            <strong>Interpretation:</strong> The words with capitalized initial
            letters have meanings defined under the following conditions.
          </p>
          <p className="text-gray-700">
            <strong>Definitions:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Affiliate:</strong> An entity that controls, is controlled
              by, or is under common control with a party, with ownership of 50%
              or more.
            </li>
            <li>
              <strong>Company:</strong> Volvrit - IT Service Company, located at
              Moti Nagar Rd, DLE Industrial Area, New Delhi.
            </li>
            <li>
              <strong>Service:</strong> Refers to the Website.
            </li>
            <li>
              <strong>You:</strong> The individual or legal entity using the
              Service.
            </li>
          </ul>
        </section>

        {/* Acknowledgment Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acknowledgment</h2>
          <p className="text-gray-700">
            These are the Terms and Conditions governing the use of this
            Service. Your access to and use of the Service is conditioned on
            your acceptance of these Terms. If you disagree with any part, you
            may not access the Service.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>You represent that you are over the age of 18.</li>
            <li>
              Your access to and use of the Service is also conditioned on your
              acceptance of the Privacy Policy.
            </li>
          </ul>
        </section>

        {/* Links to Other Websites Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Links to Other Websites
          </h2>
          <p className="text-gray-700">
            Our Service may contain links to third-party websites. The Company
            has no control over these sites and assumes no responsibility for
            them. We strongly advise you to read the terms and privacy policies
            of these third-party services.
          </p>
        </section>

        {/* Termination Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-gray-700">
            We may terminate or suspend your access immediately, without notice,
            for any reason, including breach of these Terms. Upon termination,
            your right to use the Service will cease immediately.
          </p>
        </section>

        {/* Limitation of Liability Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
            The Company&apos;s liability is limited to the maximum extent
            permitted by law. In no event shall the Company be liable for
            special, incidental, indirect, or consequential damages, even if
            advised of the possibility.
          </p>
        </section>

        {/* "AS IS" and "AS AVAILABLE" Disclaimer Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
          </h2>
          <p className="text-gray-700">
            The Service is provided &quot;AS IS&quot; and &quot;AS
            AVAILABLE,&quot; without warranties of any kind, whether express or
            implied. We do not warrant that the Service will be error-free or
            uninterrupted.
          </p>
        </section>

        {/* Governing Law Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700">
            The laws of Delhi, India, excluding conflicts of law rules, govern
            these Terms and your use of the Service.
          </p>
        </section>

        {/* Dispute Resolution Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
          <p className="text-gray-700">
            If you have any dispute about the Service, you agree to first try to
            resolve it informally by contacting the Company.
          </p>
        </section>

        {/* For European Union (EU) Users Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            For European Union (EU) Users
          </h2>
          <p className="text-gray-700">
            If you are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which you are a
            resident.
          </p>
        </section>

        {/* United States Legal Compliance Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            United States Legal Compliance
          </h2>
          <p className="text-gray-700">
            You represent and warrant that you are not located in a country
            subject to U.S. embargo or on any U.S. government prohibited list.
          </p>
        </section>

        {/* Severability and Waiver Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Severability and Waiver
          </h2>
          <p className="text-gray-700">
            <strong>Severability:</strong> If any provision of these Terms is
            invalid or unenforceable, the remaining provisions will continue in
            full force.
          </p>
          <p className="text-gray-700">
            <strong>Waiver:</strong> The failure to enforce any right or
            provision does not constitute a waiver of future enforcement of that
            right or provision.
          </p>
        </section>

        {/* Translation Interpretation Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Translation Interpretation
          </h2>
          <p className="text-gray-700">
            If we have made these Terms available in multiple languages, the
            English version will prevail in case of a dispute.
          </p>
        </section>

        {/* Changes to These Terms and Conditions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to These Terms and Conditions
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms at any time. If a
            revision is material, we will provide at least 30 days notice. Your
            continued use of the Service after the changes become effective
            means you agree to be bound by the revised terms.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, you can contact us:
          </p>
          <ul className="list-disc list-inside">
            <li>By email: info@volvrit.com</li>
            <li>
              By visiting this page on our website:{" "}
              <Link
                aria-label="contact Us"
                href="https://volvrit.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                https://volvrit.com/contact-us
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
