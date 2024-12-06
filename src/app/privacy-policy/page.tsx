 import { Get } from "@/api/generalApi";

import { bigShoulders } from "../layout";

export async function generateMetadata() {
  const pageData = await Get("");
  return {
    title: pageData?.title ?? "Worksafe Direct | Privacy Policy",
    keywords: pageData?.keyword,
    description: pageData?.descriptions,
    alternates: {
      canonical:" https://www.worksafeonline.co.uk/privacy-policy",
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white max-w-9xl font-sans mx-auto px-4 md:px-6 lg:px-10 pb-6">
      <div className="">
        <h1
          className={`pt-6 font-castoro text-5xl font-extrabold ${bigShoulders.className}`}
        >
          Privacy Policy
        </h1>
        <section className="my-5 border-b border-gray-200 pb-5">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            Introduction
          </h2>
          <p className="text-gray-700">
            Welcome to Worksafe Direct (UK) Limited (company number: 07995116)
            trading as Worksafe and WorksafeOnline and whose registered office
            is at St James Road, St James Industrial Estate, Corby,
            Northamptonshire, NN18 8A (the Company)&apos;s privacy policy.
          </p>

          <p className="text-gray-700 pt-5">
            The Company respects your privacy and is committed to protecting
            your personal data. This privacy policy will inform you as to how we
            look after your personal data when you visit our website (regardless
            of where you visit it from) and tell you about your privacy rights
            and how the law protects you.
          </p>
        </section>

        <section className="mb-5 border-b border-gray-200 pb-5">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Purpose of this Privacy Policy
          </h2>
          <p className="text-gray-700">
            This privacy policy aims to give you information on how the Company
            collects and processes your personal data through your use of this
            website, including, any data you may provide to us through this
            website, for example, when you sign up to our newsletter, purchase a
            product or service, or take part in a competition.
          </p>

          <p className="text-gray-700 py-5">
            This website is not intended for children and we do not knowingly
            collect data relating to children.
          </p>
          <p className="text-gray-700">
            It is important that you read this privacy policy together with any
            other privacy policy or fair processing policy we may provide on
            specific occasions when we are collecting or processing personal
            data about you so that you are fully aware of how and why we are
            using your data. This privacy policy supplements other notices and
            privacy policies and is not intended to override them.
          </p>
        </section>

        <section className="mb-5 border-b border-gray-200 pb-5">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Controller
          </h2>
          <p className="text-gray-700">
            The Company is the controller and responsible for your personal data
            (collectively referred to as "we", "us" or "our" in this privacy
            policy).
          </p>
          <p className="text-gray-700 pt-5">
            We have appointed a Compliance Manager who is responsible for
            overseeing questions in relation to this privacy policy. If you have
            any questions about this privacy policy, including any requests to
            exercise your legal rights, please contact the Compliance Manager
            using the details set out below.
          </p>
        </section>

        <section className="mb-5 border-b border-gray-200 pb-5">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Contact Details
          </h2>
          <div className="text-gray-700">
            <p className="">
              If you have any questions about this privacy policy or our privacy
              practices, please contact our Compliance Manager in the following
              ways:
            </p>
            <br />
            <strong>Name of Compliance Manger:</strong> Matthew Stevens
            <br />
            <strong>Full name of legal entity:</strong> Worksafe Direct (UK)
            Limited (company number: 07995116)
            <br />
            <strong>Email address:</strong> Matt@worksafeonline.co.uk
            <br />
            <strong>Postal Address:</strong> St James Road, St James Industrial
            Estate, Corby, Northamptonshire, NN18 8AL
            <br />
            <strong>Telephone:</strong> 01536 203888
          </div>
          <p className="text-gray-700 mt-4">
            You have the right to make a complaint at any time to the
            Information Commissioner's Office (ICO), the UK supervisory
            authority for data protection issues (www.ico.org.uk). We would,
            however, appreciate the chance to deal with your concerns before you
            approach the ICO so please contact us in the first instance.
          </p>
        </section>

        <section className="my-5 border-b border-gray-200 pb-5">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Changes to the privacy policy and your duty to inform us of changes{" "}
          </h2>
          <p className="text-gray-700">
            We keep our privacy policy under regular review. It is important
            that the personal data we hold about you is accurate and current.
            Please keep us informed if your personal data changes during your
            relationship with us.
          </p>
        </section>
      </div>
      <div>
        <p className="mb-4">
          <strong>
            Changes to the privacy policy and your duty to inform us of changes
          </strong>
          <br />
          We keep our privacy policy under regular review. It is important that
          the personal data we hold about you is accurate and current. Please
          keep us informed if your personal data changes during your
          relationship with us.
        </p>

        <p className="mb-4">
          <strong>Third-party links</strong>
          <br />
          This website may include links to third-party websites, plug-ins and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements. When you leave our website, we encourage you to
          read the privacy policy of every website you visit.
        </p>

        <h3
          className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
        >
          1. The data we collect about you
        </h3>

        <p className="mb-4">
          Personal data, or personal information, means any information about an
          individual from which that person can be identified. It does not
          include data where the identity has been removed (anonymous data).
        </p>

        <p className="mb-4">
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            <strong>Identity Data:</strong> first name, maiden name, last name,
            username or similar identifier, marital status, title, date of
            birth, and gender.
          </li>
          <li>
            <strong>Contact Data:</strong> billing address, delivery address,
            email address, and telephone numbers.
          </li>
          <li>
            <strong>Financial Data:</strong> bank account and payment card
            details.
          </li>
          <li>
            <strong>Transaction Data:</strong> details about payments to and
            from you and other details of products and services you have
            purchased from us.
          </li>
          <li>
            <strong>Technical Data:</strong> internet protocol (IP) address,
            your login data, browser type and version, time zone setting and
            location, browser plug-in types and versions, operating system and
            platform, and other technology on the devices you use to access this
            website.
          </li>
          <li>
            <strong>Profile Data:</strong> your username and password, purchases
            or orders made by you, your interests, preferences, feedback, and
            survey responses.
          </li>
          <li>
            <strong>Usage Data:</strong> information about how you use our
            website, products, and services.
          </li>
          <li>
            <strong>Marketing and Communications Data:</strong> your preferences
            in receiving marketing from us and our third parties and your
            communication preferences.
          </li>
        </ul>

        <p className="mb-4">
          We also collect, use, and share Aggregated Data such as statistical or
          demographic data for any purpose. Aggregated Data could be derived
          from your personal data but is not considered personal data in law as
          this data will not directly or indirectly reveal your identity. For
          example, we may aggregate your Usage Data to calculate the percentage
          of users accessing a specific website feature. However, if we combine
          or connect Aggregated Data with your personal data so that it can
          directly or indirectly identify you, we treat the combined data as
          personal data which will be used in accordance with this privacy
          policy.
        </p>

        <p className="mb-4">
          We do not collect any Special Categories of Personal Data about you
          (this includes details about your race or ethnicity, religious or
          philosophical beliefs, sex life, sexual orientation, political
          opinions, trade union membership, information about your health, and
          genetic and biometric data). Nor do we collect any information about
          criminal convictions and offences.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          If you fail to provide personal data
        </h3>
        <p className="mb-4">
          Where we need to collect personal data by law, or under the terms of a
          contract we have with you, and you fail to provide that data when
          requested, we may not be able to perform the contract we have or are
          trying to enter into with you (for example, to provide you with goods
          or services). In this case, we may have to cancel a product or service
          you have with us but we will notify you if this is the case at the
          time.
        </p>

        <h3
          className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
        >
          2. How is your personal data collected?
        </h3>
        <p className="mb-4">
          We use different methods to collect data from and about you including
          through:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            <strong>(a) Direct interactions:</strong> You may give us your
            Identity, Contact and Financial Data by filling in forms or by
            corresponding with us by post, phone, email or otherwise. This
            includes personal data you provide when you:
            <ul className="list-inside list-disc">
              <li>apply for our products or services;</li>
              <li>create an account on our website;</li>
              <li>subscribe to our service or publications;</li>
              <li>request marketing to be sent to you;</li>
              <li>enter a competition, promotion or survey;</li>
              <li>give us feedback or contact us.</li>
            </ul>
          </li>
          <li>
            <strong>(b) Automated technologies or interactions:</strong> As you
            interact with our website, we will automatically collect Technical
            Data about your equipment, browsing actions and patterns. We collect
            this personal data by using cookies, server logs and other similar
            technologies. We may also receive Technical Data about you if you
            visit other websites employing our cookies.
          </li>
          <li>
            <strong>(c) Third parties or publicly available sources:</strong> We
            will receive personal data about you from various third parties and
            public sources as set out below:
            <ul className="list-inside list-disc">
              <li>
                Technical Data from analytics providers such as Google based
                outside the EU;
              </li>
              <li>
                Contact Financial and Transaction Data from providers of
                technical, payment and delivery services;
              </li>
              <li>
                Identity and Contract Date from data brokers or aggregators;
              </li>
              <li>
                Identity and Contact Data from publicly available sources.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="overflow-x-auto py-4 px-8">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">
                Purpose/Activity
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">
                Type of Data / Lawful Basis for Processing
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To register you as a new customer
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact
                </p>
                <p>
                  <b>Lawful Basis:</b> Performance of a contract with you
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To process and deliver your order including:
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact, Financial,
                  Transaction, Marketing and Communications
                </p>
                <p>
                  <b>Lawful Basis:</b> Performance of a contract with you,
                  Necessary for our legitimate interests (to recover debts due
                  to us), Performance of a contract with you
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To manage our relationship with you which will include:
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact, Profile, Marketing and
                  Communications
                </p>
                <p>
                  <b>Lawful Basis:</b> Performance of a contract with you,
                  Necessary to comply with a legal obligation, Necessary for our
                  legitimate interests (to keep our records updated and study
                  how customers use our products/services)
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To enable you to partake in a prize draw, competition or
                complete a survey
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact, Profile, Usage,
                  Marketing and Communications
                </p>
                <p>
                  <b>Lawful Basis:</b> Performance of a contract with you,
                  Necessary for our legitimate interests (to study how customers
                  use our products/services, to develop them and grow our
                  business)
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To administer and protect our business and this website
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact, Technical
                </p>
                <p>
                  <b>Lawful Basis:</b> Necessary for our legitimate interests
                  (for running our business, provision of administration and IT
                  services, network security, to prevent fraud and in the
                  context of a business reorganisation or group restructuring
                  exercise), Necessary to comply with a legal obligation
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To deliver relevant website content and advertisements
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact, Profile, Usage,
                  Marketing and Communications, Technical
                </p>
                <p>
                  <b>Lawful Basis:</b> Necessary for our legitimate interests
                  (to study how customers use our products/services, to develop
                  them, to grow our business and to inform our marketing
                  strategy)
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To use data analytics to improve our website, products/services,
                marketing, customer relationships
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Technical, Usage
                </p>
                <p>
                  <b>Lawful Basis:</b> Necessary for our legitimate interests
                  (to define types of customers for our products and services,
                  to keep our website updated and relevant, to develop our
                  business and to inform our marketing strategy)
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-800">
                To make suggestions and recommendations to you about goods or
                services
              </td>
              <td className="px-4 py-2">
                <p>
                  <b>Type of Data:</b> Identity, Contact, Technical, Usage,
                  Profile, Marketing and Communications
                </p>
                <p>
                  <b>Lawful Basis:</b> Necessary for our legitimate interests
                  (to develop our products/services and grow our business)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <section className="space-y-8">
        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Marketing
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We strive to provide you with choices regarding certain personal
            data uses, particularly around marketing and advertising.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Promotional Offers from Us
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We may use your Identity, Contact, Technical, Usage, and Profile
            Data to form a view on what we think you may want or need, or what
            may be of interest to you. This is how we decide which products,
            services, and offers may be relevant for you (we call this
            marketing).
          </p>
          <p className="mt-2 text-lg text-gray-700">
            You will receive marketing communications from us if you have
            requested information from us or purchased goods or services from us
            and you have not opted out of receiving that marketing.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Third-Party Marketing
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We will get your express opt-in consent before we share your
            personal data with any third party for marketing purposes.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Opting Out
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            You can ask us or third parties to stop sending you marketing
            messages at any time by contacting us at any time. Where you opt out
            of receiving these marketing messages, this will not apply to
            personal data provided to us as a result of a product/service
            purchase, warranty registration, product/service experience, or
            other transactions.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Cookies
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Change of Purpose
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We will only use your personal data for the purposes for which we
            collected it, unless we reasonably consider that we need to use it
            for another reason that is compatible with the original purpose.
          </p>
        </div>

        <div>
          <h2
            className={`text-3xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            4. Disclosures of Your Personal Data
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We may share your personal data with the parties set out below for
            the purposes set out in the table above.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            International Transfers
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We do not transfer your personal data outside the European Economic
            Area (EEA).
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Data Security
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Data Retention
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We will only retain your personal data for as long as reasonably
            necessary to fulfill the purposes we collected it for, including for
            any legal, regulatory, tax, accounting, or reporting requirements.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
          >
            Your Legal Rights
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data.
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          YOUR LEGAL RIGHTS
        </h1>
        <p className="text-gray-600 mb-4">You have the right to:</p>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Request access</span> to your
            personal data (commonly known as a{" "}
            <span className="italic">"data subject access request"</span>). This
            enables you to receive a copy of the personal data we hold about you
            and to check that we are lawfully processing it.
          </li>
          <li>
            <span className="font-semibold">Request correction</span> of the
            personal data that we hold about you. This enables you to have any
            incomplete or inaccurate data we hold about you corrected, though we
            may need to verify the accuracy of the new data you provide to us.
          </li>
          <li>
            <span className="font-semibold">Request erasure</span> of your
            personal data. This enables you to ask us to delete or remove
            personal data where there is no good reason for us continuing to
            process it. You also have the right to ask us to delete or remove
            your personal data where you have successfully exercised your right
            to object to processing (see below), where we may have processed
            your information unlawfully, or where we are required to erase your
            personal data to comply with local law. Note, however, that we may
            not always be able to comply with your request of erasure for
            specific legal reasons which will be notified to you, if applicable,
            at the time of your request.
          </li>
          <li>
            <span className="font-semibold">Object to processing</span> of your
            personal data where we are relying on a legitimate interest (or
            those of a third party) and there is something about your particular
            situation which makes you want to object to processing on this
            ground as you feel it impacts your fundamental rights and freedoms.
            You also have the right to object where we are processing your
            personal data for direct marketing purposes. In some cases, we may
            demonstrate that we have compelling legitimate grounds to process
            your information which override your rights and freedoms.
          </li>
          <li>
            <span className="font-semibold">Request restriction</span> of
            processing of your personal data. This enables you to ask us to
            suspend the processing of your personal data in the following
            scenarios:
            <ul className="list-decimal pl-8 space-y-2 mt-2">
              <li>If you want us to establish the data's accuracy.</li>
              <li>
                Where our use of the data is unlawful but you do not want us to
                erase it.
              </li>
              <li>
                Where you need us to hold the data even if we no longer require
                it as you need it to establish, exercise, or defend legal
                claims.
              </li>
              <li>
                You have objected to our use of your data but we need to verify
                whether we have overriding legitimate grounds to use it.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Request the transfer</span> of your
            personal data to you or to a third party. We will provide to you, or
            a third party you have chosen, your personal data in a structured,
            commonly used, machine-readable format. Note that this right only
            applies to automated information which you initially provided
            consent for us to use or where we used the information to perform a
            contract with you.
          </li>
          <li>
            <span className="font-semibold">Withdraw consent</span> at any time
            where we are relying on consent to process your personal data.
            However, this will not affect the lawfulness of any processing
            carried out before you withdraw your consent. If you withdraw your
            consent, we may not be able to provide certain products or services
            to you. We will advise you if this is the case at the time you
            withdraw your consent.
          </li>
        </ul>

        <h2
          className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
        >
          No Fee Usually Required
        </h2>
        <p className="text-gray-700 mb-4">
          You will not have to pay a fee to access your personal data (or to
          exercise any of the other rights). However, we may charge a reasonable
          fee if your request is clearly unfounded, repetitive, or excessive.
          Alternatively, we could refuse to comply with your request in these
          circumstances.
        </p>

        <h2
          className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
        >
          What We May Need From You
        </h2>
        <p className="text-gray-700 mb-4">
          We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your personal
          data (or to exercise any of your other rights). This is a security
          measure to ensure that personal data is not disclosed to any person
          who has no right to receive it. We may also contact you to ask for
          further information in relation to your request to speed up our
          response.
        </p>

        <h2
          className={`text-2xl font-bold text-gray-800 mb-4 ${bigShoulders.className}`}
        >
          Time Limit to Respond
        </h2>
        <p className="text-gray-700">
          We try to respond to all legitimate requests within one month.
          Occasionally it could take us longer than a month if your request is
          particularly complex or you have made a number of requests. In this
          case, we will notify you and keep you updated.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;