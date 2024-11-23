import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20 lg:pt-10 bg-white">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            At Volvrit (Varaniti Consultancy Services Pvt Ltd), we strive to
            deliver exceptional website design and development, app development,
            software development, and digital marketing services to meet your
            expectations. However, if you are not satisfied with our services,
            we have outlined our refund policy to ensure transparency and
            fairness.
          </p>
        </section>

        {/* General Refund Terms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. General Refund Terms
          </h2>
          <p className="text-gray-700">
            Refunds will only be considered under the following conditions:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The refund request is made within 15 days of the initial payment.
            </li>
            <li>
              The project has not progressed beyond its initial phase (e.g.,
              design mockups or initial requirements gathering).
            </li>
            <li>
              The refund request is directly related to non-performance or
              failure to meet the agreed deliverables as outlined in the
              contract.
            </li>
          </ul>
        </section>

        {/* Refund Eligibility Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
          <p className="text-gray-700">
            A refund may be approved in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Before Project Commencement:</strong> If you choose to
              cancel the project before we begin any work, a full refund will be
              issued, excluding any administrative fees.
            </li>
            <li>
              <strong>Delayed Delivery:</strong> If there are significant delays
              in delivering agreed milestones without proper justification, you
              may be eligible for a partial refund.
            </li>
            <li>
              <strong>Non-Performance:</strong> If we are unable to deliver the
              agreed services due to our internal reasons, a refund may be
              processed after a thorough review.
            </li>
          </ul>
        </section>

        {/* Non-Refundable Payments Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Non-Refundable Payments
          </h2>
          <p className="text-gray-700">
            The following payments are non-refundable:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Costs incurred for third-party tools, licenses, or resources
              procured for your project.
            </li>
            <li>Any work already completed and delivered to you.</li>
            <li>
              Payments for services that have been fully executed and approved
              by the client.
            </li>
            <li>
              Hosting, domain registrations, or other external services provided
              through third-party vendors.
            </li>
          </ul>
        </section>

        {/* Refund Process Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
          <p className="text-gray-700">
            To request a refund, please follow these steps:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Submit a written request to <strong>support@volvrit.com</strong>{" "}
              explaining the reason for the refund and providing relevant
              project details.
            </li>
            <li>
              Our team will acknowledge your request within 3 business days.
            </li>
            <li>
              A review of your case will be conducted, and the decision will be
              communicated within 7 business days.
            </li>
            <li>
              If approved, the refund will be processed within 10 business days
              via the original payment method.
            </li>
          </ol>
        </section>

        {/* Important Notes Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Important Notes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Refunds are not applicable for any work or service where a mutual
              agreement or client approval has been obtained.
            </li>
            <li>
              This policy does not apply to cases of change in client
              requirements, delays caused by the client, or cancellation due to
              the client&apos;s circumstances.
            </li>
            <li>All decisions regarding refunds are final and binding.</li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this refund policy,
            please contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Email:{" "}
              <Link href={"mailto:support@volvrit.com"}>
                <strong>support@volvrit.com</strong>
              </Link>
            </li>
            <li>
              Phone:{" "}
              <Link href={"tel:+919354656503"}>
                <strong>+91 9354656503</strong>
              </Link>
            </li>
            <li>
              Office Address: Building No.9 Plot No.1 Moti Nagar, DLF Industrial
              Area, New Delhi, 110015
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <p className="text-gray-700 text-sm">
            Volvrit (Varaniti Consultancy Services Pvt Ltd) reserves the right
            to update or modify this policy at any time without prior notice.
          </p>
        </section>
      </div>
    </div>
  );
}
