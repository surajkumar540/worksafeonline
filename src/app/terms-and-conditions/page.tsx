import { Get } from "@/api/generalApi";
import React from "react";
import { bigShoulders } from "../layout";

export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | Privacy-Policy",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/privacy-policy`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="bg-white max-w-9xl font-sans mx-auto px-4 md:px-6 lg:px-10 pb-6">
        <h1
          className={`pt-6 font-castoro text-5xl font-extrabold ${bigShoulders.className}`}
        >
          Terms and Conditions
        </h1>

        <section className="mb-6 mt-4">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            1. THESE TERMS
          </h2>
          <p className="mb-4">
            1.1 These are the terms and conditions on which we supply products
            to you, whether these are goods or services.
          </p>
          <p className="mb-4">
            1.2 Please read these terms carefully before you submit your order
            to us. These terms tell you who we are, how we will provide products
            to you, how you or we may change or end the contract, what to do if
            there is a problem, and other important information. If you think
            there is a mistake in these terms, please contact us to discuss
            this, by any of the methods listed in clause 2.1.
          </p>
          <p className="mb-4">
            1.3 In some areas, you will have different rights under these terms
            depending on whether you are a business or consumer customer. You
            are a consumer customer if:
          </p>
          <ol className="list-disc pl-6 mb-4">
            <li>(a) you are an individual; and</li>
            <li>
              (b) you are buying products from us wholly or mainly for your
              personal use (not for use in connection with your trade, business,
              craft, or profession).
            </li>
          </ol>
          <p className="mb-4">
            1.4 If you are a business customer, these terms and conditions apply
            to the contract between you and us, to the exclusion of any other
            terms that you seek to impose or incorporate, or which are implied
            by trade, custom, practice, or course of dealing. These terms also
            constitute the entire agreement between us in relation to your
            purchase. You acknowledge that you have not relied on any statement,
            promise, representation, assurance, or warranty made or given by or
            on behalf of us, which is not set out in these terms, and that you
            shall have no claim for innocent or negligent misrepresentation
            based on any statement in this agreement.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            2. INFORMATION ABOUT US AND HOW TO CONTACT US
          </h2>
          <p className="mb-4">
            2.1 We are Worksafe Direct (UK) Limited (company number: 07995116)
            trading as Worksafe, whose registered office is at St James Road, St
            James Industrial Estate, Corby, Northamptonshire, NN18 8AL. You can
            contact us by telephone on 01536 203 888, in writing at Worksafe
            Direct (UK) Limited, St James Road, St James Industrial Estate,
            Corby, Northamptonshire, NN18 8AL, or by email to{" "}
            <a
              href="mailto:sales@worksafeonline.co.uk"
              className="text-blue-500 underline"
            >
              sales@worksafeonline.co.uk
            </a>
            .
          </p>
          <p className="mb-4">
            2.2 If we have to contact you, we will do so by telephone or by
            writing to you at the email address or postal address you provided
            to us in your order.
          </p>
          <p className="mb-4">
            {`  2.3 When we use the words "writing" or "written" in these terms,
            this includes emails.`}
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            3. OUR CONTRACT WITH YOU
          </h2>
          <p className="mb-4">
            3.1 Our acceptance of your order will take place when we email you
            to accept it, at which point a contract will come into existence
            between you and us. If we are unable to accept your order, we will
            inform you of this and will not charge you for the product.
          </p>
          <p className="mb-4">
            3.2 We will assign an order number to your order and tell you what
            it is when we accept your order. It will help us if you quote your
            order number whenever you contact us about your order.
          </p>
          <p className="mb-4">
            3.3 On most occasions, we do not accept orders outside the UK.
            However, in limited circumstances, we are able to deliver products
            outside the UK. If you require any products to be delivered outside
            of the UK, please contact us prior to placing your order.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            4. OUR PRODUCTS
          </h2>
          <p className="mb-4">
            {`  4.1 The images of the products on our website are for illustrative
            purposes only. Although we have made every effort to display the
            colours accurately, we cannot guarantee that a device's display of
            the colours accurately reflects the colour of the products. Your
            product may vary slightly from those images.`}
          </p>
          <p className="mb-4">
            4.2 The packaging of the product may also vary from any images shown
            on our website, at our warehouse, or in our brochure.
          </p>
          <p className="mb-4">
            4.3 If we are making the products to your specification, you are
            responsible for ensuring that any measurements supplied to us are
            correct and accurate.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            5. YOUR RIGHTS TO MAKE CHANGES
          </h2>
          <p className="mb-4">
            If you wish to make a change to the product you have ordered, please
            contact us as soon as possible. We will let you know if the change
            is possible. If the change is possible, we will let you know about
            any changes to the price of the product, whether the change will
            cause any delays in supplying the product, or anything else which
            would be necessary as a result of your request. We will then ask you
            to confirm to us whether you wish to go ahead with your request to
            change your order.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            6. OUR RIGHTS TO MAKE CHANGES
          </h2>
          <p className="mb-4">
            On some occasions, we may have to change the product, for example,
            to reflect changes to relevant laws or regulatory requirements, or
            to implement minor technical adjustments and improvements. If we
            have to change your order in any way, we will notify you.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            7. PROVIDING THE PRODUCTS
          </h2>
          <p className="mb-4">
            7.1 If you have asked to collect the products from our premises, you
            can collect them from us at any time during our normal working
            hours, which are Monday to Friday 8:00 am to 5:00 pm and Saturday
            8:00 am to 12:00 pm, and you must do so within 10 days of us
            notifying you that the products are ready for collection.
          </p>
          <div className="mb-4">
            7.2 If you have requested the products to be delivered to you:
            <ol className="list-disc pl-6 mb-4">
              <li>
                (a) if the products are goods, we will contact you with an
                estimated delivery date, which is normally within 30 days from
                the day after we accept your order. If the goods are not
                available to be delivered to you within this period, we will
                contact you to notify you. Depending on the nature and size of
                the goods, we will either deliver the goods ourselves or via a
                third-party courier;
              </li>
              <li>
                (b) if the products are services, the estimated completion date
                for the services will be notified to you during the order
                process;
              </li>
              <li>
                (c) the costs of delivery will be as notified to you during the
                order process.
              </li>
            </ol>
          </div>
          <p className="mb-4">
            7.3 If you are not at home when the product is delivered and the
            products cannot be posted through your letterbox, we will try to
            rearrange delivery, or if possible, you may collect them from our
            store.
          </p>
          <p className="mb-4">
            7.4 If you do not collect the products from us as required in clause
            7.1 or if, after a failed delivery to you, you do not rearrange
            delivery or collection of the product in accordance with clause 7.3,
            we will contact you for further instructions and may charge you for
            storage costs and any further delivery costs. If, despite our
            reasonable efforts, we are unable to contact you or rearrange
            delivery or collection, we may end the contract and clause 13.2 will
            apply.
          </p>
          <p className="mb-4">
            7.5 If you have ordered services and you do not allow us access to
            your property to perform the services as arranged (and you do not
            have a good reason for this), we may charge you additional costs
            incurred by us as a result. If, despite our reasonable efforts, we
            are unable to contact you or rearrange access to your property, we
            may end the contract and clause 13.2 will apply.
          </p>
          <p className="mb-4">
            7.6 If our supply of the products is delayed by an event outside our
            control, then we will contact you as soon as possible to let you
            know, and we will take steps to minimize the effect of the delay.
            Provided we do this, we will not be liable for delays caused by the
            event. But if there is a risk of substantial delay, you may contact
            us to end the contract and receive a refund for any products you
            have paid for but not received.
          </p>
        </section>

        <section className="mb-6">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            8. YOUR LEGAL RIGHTS IF WE DELIVER LATE IF YOU ARE A CONSUMER
            CUSTOMER
          </h2>
          <div className="space-y-4">
            <p>
              <strong>8.1 Delivery of the products shall be completed:</strong>
            </p>
            <ol className="list-disc pl-6">
              <li>
                (a) on delivery of the products at our premises, if you have
                arranged to collect the products from our premises;
              </li>
              <li>
                (b) on delivery of the products by us to the applicable
                third-party courier, if the products are being delivered by a
                third-party courier;
              </li>
              <li>
                (c) on delivery of the products by us to the address specified
                by you, if the products are being delivered by us.
              </li>
            </ol>
            <p>
              <strong>8.2</strong> If we miss the delivery deadline for any
              products then you may treat the contract as at an end straight
              away if any of the following apply:
            </p>
            <ol className="list-disc pl-6">
              <li>(a) we have refused to deliver the products;</li>
              <li>
                (b) delivery within the delivery deadline was essential (taking
                into account all the relevant circumstances);
              </li>
              <li>
                (c) you told us before we accepted your order that delivery
                within the delivery deadline was essential.
              </li>
            </ol>
            <p>
              <strong>8.3</strong> If you do not wish to treat the contract as
              at an end straight away, or do not have the right to do so under
              clause 8.2 you can give us a new deadline for delivery, which must
              be reasonable, and you can treat the contract as at an end if we
              do not meet the new deadline.
            </p>
            <p>
              <strong>8.4</strong> If you do choose to treat the contract as at
              an end for late delivery under clause 8.2 or clause 8.3, you can
              cancel your order for any of the products or reject products that
              have been delivered.
            </p>
          </div>

          <h2
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            9. YOUR LEGAL RIGHTS IF WE DELIVER LATE IF YOU ARE A BUSINESS
            CUSTOMER
          </h2>
          <div className="space-y-4">
            <p>
              <strong>9.1 Delivery of the products shall be completed:</strong>
            </p>
            <ol className="list-disc pl-6">
              <li>
                (a) on delivery of the products at our premises, if you have
                arranged to collect the products from our premises;
              </li>
              <li>
                (b) on delivery of the products by us to the applicable
                third-party courier, if the products are being delivered by a
                third-party courier;
              </li>
              <li>
                (c) on delivery of the products by us to the address specified
                by you, if the products are being delivered by us.
              </li>
            </ol>
            <p>
              <strong>9.2</strong> Any dates quoted for delivery of the products
              are approximate only and the time of delivery is not of the
              essence.
            </p>
            <p>
              If we fail to deliver the products, our liability shall be limited
              to the costs and expenses incurred by you in obtaining replacement
              goods of similar description and quality in the cheapest market
              available.
            </p>
          </div>

          <h2
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            10. OWNERSHIP AND RESPONSIBILITY OF GOODS
          </h2>
          <div className="space-y-4">
            <p>
              <strong>10.1</strong> The goods will be your responsibility on
              completion of delivery of the goods and you own the goods once we
              have received payment for the goods in full.
            </p>
            <p>
              <strong>10.2</strong> If you are a business customer, we are able
              to offer some of our customers goods on consignment (whereby we
              purchase a set amount of goods from our suppliers).
            </p>
            <p>
              <strong>10.3</strong> Ownership of the Consignment Goods will not
              pass to you until:
            </p>
            <ol className="list-disc pl-6">
              <li>(i) we receive payment in full for the Consignment Goods;</li>
              <li>
                (ii) you resell the Consignment Goods, in which case ownership
                will pass at the time of resale.
              </li>
            </ol>
          </div>

          <h2
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            11. PRICE AND PAYMENT
          </h2>
          <div className="space-y-4">
            <p>
              <strong>11.1</strong> The price of the product will be the price
              indicated on the order pages when you place your order.
            </p>
            <p>
              <strong>11.2</strong> We accept the following methods of payment:
              sagepay, mastercard, visa, cash sterling, and business cheques.
            </p>
            <p>
              <strong>11.3</strong> Whether the price stated includes
              value-added tax (VAT) or not will be stated on each product and
              our acknowledgment of your order.
            </p>
            <p>
              <strong>11.4</strong> If the rate of VAT changes between your
              order date and the date we supply the product, we will adjust the
              rate of VAT accordingly.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            12. OUR RIGHTS TO SUSPEND DELIVERY OF THE PRODUCTS
          </h2>
          <p className="text-lg mb-4">
            12.1 We may need certain information from you so that we can supply
            the products to you, for example, your address or any embroidery
            requirements. If so, this will have been stated in the description
            of the products on our website. If you do not give us this
            information within a reasonable time of us asking for it, or if you
            give us incomplete or incorrect information, we may either end the
            contract (and clause 13.2 will apply) or make an additional charge
            of a reasonable sum to compensate us for any extra work that is
            required as a result. We will not be responsible for supplying the
            products late, or not supplying any part of them, if this is caused
            by you not giving us the information we need within a reasonable
            time of us asking for it.
          </p>
          <div className="text-lg mb-4">
            12.2 We may have to suspend the supply of a product to:
            <ol className="list-disc pl-8">
              <li>
                deal with technical problems or make minor technical changes;
              </li>
              <li>
                update the product to reflect changes in relevant laws and
                regulatory requirements; or
              </li>
              <li>
                make changes to the product as requested by you or notified by
                us to you.
              </li>
            </ol>
          </div>
          <p className="text-lg mb-4">
            12.3 If we suspend the supply of the products, we will contact you
            in advance to tell you we will be suspending supply of the product,
            unless the problem is urgent or an emergency. You may contact us to
            end the contract for a product if we suspend it, or tell you we are
            going to suspend it in each case for a period of more than ten days
            and we will refund any sums you have paid in advance for the product
            in respect of the period after you end the contract.
          </p>
          <p className="text-lg mb-4">
            12.4 If you do not pay us for the product when you are supposed to
            (see clause 11.6, 11.7 and 11.8), we may suspend supply of the
            products until you have paid us the outstanding amounts. We will
            contact you to tell you we are suspending supply of the products. We
            will not suspend the products where you dispute the unpaid invoice
            (see clause 11.12) providing that you notify us as soon as possible
            as soon as you become aware of the same. We will not charge you for
            the products during the period for which they are suspended. As well
            as suspending the products we can also charge you interest on your
            overdue payments (see clause 11.11).
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            13. OUR RIGHTS TO END THE CONTRACT
          </h2>
          <div className="text-lg mb-4">
            13.1 We may end the contract for a product at any time by writing to
            you if:
            <ol className="list-disc pl-8">
              <li>
                you do not make any payment to us when it is due and we have not
                received payment within 7 days of us reminding you that payment
                is due;
              </li>
              <li>
                you do not, within a reasonable time of us asking for it,
                provide us with information that is necessary for us to provide
                the products, for example a delivery address;
              </li>
              <li>
                you do not, within a reasonable time, allow us to deliver the
                products to you or collect them from us; or
              </li>
              <li>
                you do not, within a reasonable time, allow us access to your
                premises to supply the services;
              </li>
              <li>
                if you are a business customer and:
                <ol className="list-inside pl-8">
                  <li>
                    you take any step or action in connection with, entering
                    into administration, provisional liquidation or any
                    composition or arrangement with your creditors...
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <p className="text-lg mb-4">
            13.2 If we end the contract in the situations set out in clause 13.1
            we will refund any money you have paid in advance for products we
            have not provided but we may deduct reasonable compensation for the
            net costs we will incur as a result of you breaking the contract.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            14. YOUR RIGHTS TO END THE CONTRACT
          </h2>
          <p className="text-lg mb-4">
            14.1 You can always end your contract with us. Your rights when you
            end the contract will depend on what you have bought, whether there
            is anything wrong with it, how we are performing, when you decide to
            end the contract and whether you are a consumer customer or business
            customer:
          </p>
          <ol className="list-disc pl-8 mb-4">
            <li>
              If what you have bought is faulty or misdescribed you may have a
              legal right to end the contract (or to get the product repaired or
              replaced or a service re-performed or to get some or all of your
              money back), please see clause 17 if you are a consumer and clause
              18 if you are a business customer;
            </li>
            <li>
              If you want to end the contract because of something we have done
              or have told you we are going to do, see clause 14.2;
            </li>
          </ol>
        </section>

        <section className="my-8">
          <h2
            className={`text-3xl font-bold text-gray-800 mb-5 ${bigShoulders.className}`}
          >
            15. HOW TO END THE CONTRACT WITH US
          </h2>
          <div className="mb-4">
            <p>
              <strong>15.1</strong> To end the contract with us, please let us
              know by contacting us by phone, email, or by post.
            </p>
            <p>
              <strong>15.2</strong> If you end the contract for any reason after
              products have been dispatched to you or you have received them,
              you must return them to us. You must either return the goods in
              person to where you bought them, post them back to us, or (if they
              are not suitable for posting) allow us to collect them from you.
              If you are a consumer exercising your right to change your mind,
              you must send off the goods within 14 days of telling us you wish
              to end the contract.
            </p>
            <p>
              <strong>15.3</strong> We will only pay the costs of return:
            </p>
            <ol className="list-disc pl-6">
              <li>If the products are faulty or misdescribed;</li>
              <li>
                If you are ending the contract due to changes in the product,
                pricing, description, or delivery delays caused by external
                events, or because we have done something wrong.
              </li>
            </ol>
            <p>In all other cases, you must pay the costs of return.</p>
            <p>
              <strong>15.4</strong> If you are responsible for the costs of
              return and we are collecting the product from you, we will charge
              you the direct cost to us of collection.
            </p>
            <p>
              <strong>15.5</strong> If you are entitled to a refund under these
              terms, we will refund you the price you paid for the products,
              including delivery costs, by the method you used for payment.
              However, we may make deductions from the price as described below.
            </p>
            <p>
              <strong>15.6</strong> If you are exercising your right to change
              your mind under clause 14.3:
            </p>
            <ol className="list-disc pl-6">
              <li>
                We may reduce your refund of the price (excluding delivery
                costs) to reflect any reduction in the value of the goods caused
                by handling them in a way that would not be permitted in a shop.
              </li>
              <li>
                The maximum refund for delivery costs will be the costs of
                delivery by the least expensive method we offer.
              </li>
              <li>
                If the product is a service, we may deduct an amount for the
                supply of the service for the period it was supplied before you
                changed your mind.
              </li>
            </ol>
            <p>We will make any refunds as soon as possible:</p>
            <ol className="list-disc pl-6">
              <li>
                If the products are goods and we have not offered to collect
                them, your refund will be made within 14 days of us receiving
                the product back or receiving evidence that it has been sent.
              </li>
              <li>
                In all other cases, your refund will be made within 14 days of
                your notification of changing your mind.
              </li>
            </ol>
          </div>

          <section id="product-problem" className="my-8">
            <h2
              className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
            >
              16. IF THERE IS A PROBLEM WITH THE PRODUCT
            </h2>
            <p>
              If you have any questions or complaints about the product, please
              contact us.
            </p>
          </section>

          <section id="consumer-rights" className="my-8">
            <h2
              className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
            >
              17. YOUR RIGHTS IN RESPECT OF DEFECTIVE PRODUCTS IF YOU ARE A
              CONSUMER CUSTOMER
            </h2>
            <p>
              <strong>17.1</strong> If you are a consumer, we are under a legal
              duty to supply products that are in conformity with this contract.
              Below is a summary of your key legal rights in relation to the
              products:
            </p>
            <ol className="list-disc pl-6">
              <li>
                If your product is goods, the Consumer Rights Act 2015 says
                goods must be as described, fit for purpose, and of satisfactory
                quality.
              </li>
              <li>
                {`If your product is a service, you can ask us to repeat or fix
                the service if it's not carried out with reasonable care and
                skill or get some money back if we can't fix it.`}
              </li>
            </ol>
          </section>

          <section id="business-rights" className="my-8">
            <h2
              className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
            >
              18. YOUR RIGHTS IN RESPECT OF DEFECTIVE PRODUCTS IF YOU ARE A
              BUSINESS CUSTOMER
            </h2>
            <p>
              <strong>18.1</strong> If you are a business customer, we warrant
              that the goods will conform with their description and be free
              from defects in design, material, and workmanship.
            </p>
            <p>
              <strong>18.2</strong> If a product is defective, we will repair,
              replace, or refund the product as appropriate.
            </p>
          </section>

          <section id="consumer-liability" className="my-8">
            <h2
              className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
            >
              19. OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU IF YOU
              ARE A CONSUMER CUSTOMER
            </h2>
            <p>
              <strong>19.1</strong> We are responsible for foreseeable loss and
              damage caused by us. If we fail to comply with these terms, we are
              responsible for loss or damage you suffer that is a foreseeable
              result of our failure to comply with the contract.
            </p>
            <p>
              <strong>19.2</strong> We do not exclude or limit our liability to
              you where it would be unlawful to do so. This includes liability
              for death, personal injury, fraud, or defective products.
            </p>
          </section>
        </section>

        {/*  */}
        {/* Section 20 */}
        <div className="mb-6">
          <h3
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            20. OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU IF YOU ARE
            A BUSINESS CUSTOMER
          </h3>
          <p className="mb-3">
            20.1 Nothing in these terms shall limit or exclude our liability
            for:
          </p>
          <ol className="list-disc pl-6 space-y-2">
            <li>
              (a) death or personal injury caused by our negligence, or the
              negligence of our employees, agents or subcontractors (as
              applicable);
            </li>
            <li>(b) fraud or fraudulent misrepresentation;</li>
            <li>
              (c) breach of the terms implied by section 12 of the Sale of Goods
              Act 1979 or section 2 of the Supply of Goods and Services Act
              1982;
            </li>
            <li>
              (d) defective products under the Consumer Protection Act 1987;
            </li>
            <li>
              (e) any matter in respect of which it would be unlawful for us to
              exclude or restrict liability.
            </li>
          </ol>
          <p className="mb-3">
            20.2 Except to the extent expressly stated in clause 18.1 all terms
            implied by sections 13 to 15 of the Sale of Goods Act 1979 and
            sections 3 to 5 of the Supply of Goods and Services Act 1982 are
            excluded.
          </p>
          <p className="mb-3">20.3 Subject to clause 20.1:</p>
          <ol className="list-disc pl-6 space-y-2">
            <li>
              (a) we shall not be liable to you, whether in contract, tort
              (including negligence), breach of statutory duty, or otherwise,
              for any loss of profit, or any indirect or consequential loss
              arising under or in connection with any contract between us;
            </li>
            <li>
              (b) our total liability to you for all other losses arising under
              or in connection with any contract between us, whether in
              contract, tort (including negligence), breach of statutory duty,
              or otherwise, shall be limited to the total sums paid by you for
              products under such contract.
            </li>
          </ol>
          <p className="mb-3">
            20.4 If you purchase any goods from us, which are part of our
            janitorial range, such goods are not permitted to be resold or made
            available to consumers and are not permitted to be sold or used by
            the general public. By purchasing any goods from our janitorial
            range from us, you acknowledge and agree that you will not resell or
            make available any such goods to any consumers or the general
            public.
          </p>
        </div>

        {/* Section 21 */}
        <div className="mb-6">
          <h3
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            21. INTELLECTUAL PROPERTY
          </h3>
          <p className="mb-3">
            21.1 The following definition shall apply to this clause:
          </p>
          <p className="mb-3">
            <strong>Intellectual Property Rights:</strong> patents, utility
            models, rights to inventions, copyright and neighbouring and related
            rights, moral rights, trade-marks and service marks, business names
            and domain names, rights in get-up and trade dress, goodwill and the
            right to sue for passing off or unfair competition, rights in
            designs, rights in computer software, database rights, rights to
            use, and protect the confidentiality of, confidential information
            (including know-how and trade secrets), and all other intellectual
            property rights, in each case whether registered or unregistered and
            including all applications and rights to apply for and be granted,
            renewals or extensions of, and rights to claim priority from, such
            rights and all similar or equivalent rights or forms of protection
            which subsist or will subsist now or in the future in any part of
            the world.
          </p>
          <p className="mb-3">
            21.2 If you require us to use any logos, badges, tagline, product or
            business names or similar related items (Customer’s Branding) which
            are required to be embroidered or embellished onto the goods, then:
          </p>
          <ol className="list-disc pl-6 space-y-2">
            <li>
              (a) you give us a fully paid-up, non-exclusive, royalty-free,
              non-transferable licence to copy and modify any materials provided
              by you to us for the term of the contract for the purpose of
              providing the goods and/or services to you;
            </li>
            <li>
              (b) you shall fully indemnify us and hold us harmless from and
              against all losses, damages, costs, (including legal fees) and
              expenses incurred by or awarded against us as a result of, or in
              connection with, any claim made or asserted against us that the
              Customer’s Branding infringes the Intellectual Property Rights of
              any third party.
            </li>
          </ol>
        </div>

        {/* Section 22 */}
        <div className="mb-6">
          <h3
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            22. HOW WE MAY USE YOUR PERSONAL INFORMATION
          </h3>
          <p className="mb-3">
            22.1 We will use the personal information you provide to us:
          </p>
          <ol className="list-disc pl-6 space-y-2">
            <li>(a) to supply the products to you;</li>
            <li>(b) to process your payment for the products; and</li>
            <li>
              (c) if you agreed to this during the order process, to give you
              information about similar products that we provide, but you may
              stop receiving this at any time by contacting us.
            </li>
          </ol>
          <p className="mb-3">
            22.2 We will only give your personal information to other third
            parties where the law either requires or allows us to do so. Please
            refer to our privacy policy, which is available on our website, for
            further information.
          </p>
        </div>

        {/* Section 23 */}
        <div className="mb-6">
          <h3
            className={`text-3xl font-bold text-gray-800 my-5 ${bigShoulders.className}`}
          >
            23. OTHER IMPORTANT TERMS
          </h3>
          <ol className="list-disc pl-6 space-y-2">
            <li>
              (a) We may transfer our rights and obligations under these terms
              to another organisation.
            </li>
            <li>
              (b) You may only transfer your rights or your obligations under
              these terms to another person if we agree to this in writing to a
              person who has acquired the product or, where the product is
              services, any item or property in respect of which we have
              provided the services.
            </li>
            <li>
              (c) This contract is between you and us. No other person shall
              have any rights to enforce any of its terms.
            </li>
            <li>
              (d) Each of the paragraphs of these terms operates separately. If
              any court or relevant authority decides that any of them are
              unlawful, the remaining paragraphs will remain in full force and
              effect.
            </li>
            <li>
              (e) If we do not insist immediately that you do anything you are
              required to do under these terms, or if we delay in taking steps
              against you in respect of your breaking this contract, that will
              not mean that you do not have to do those things and it will not
              prevent us taking steps against you at a later date. For example,
              if you miss a payment and we do not chase you but we continue to
              provide the products, we can still require you to make the payment
              at a later date.
            </li>
            <li>
              (f) These terms are governed by English law and you can bring
              legal proceedings in respect of the products in the English
              courts. If you live in Scotland you can bring legal proceedings in
              respect of the products in either the Scottish or the English
              courts. If you live in Northern Ireland you can bring legal
              proceedings in respect of the products in either the Northern
              Irish or the English courts.
            </li>
            <li>
              (g) If you are a business, any dispute or claim arising out of or
              in connection with a contract between us or its subject matter or
              formation (including non-contractual disputes or claims) shall be
              governed by and construed in accordance with the law of England
              and Wales and the courts of England and Wales shall have exclusive
              jurisdiction to settle any such dispute or claim.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <h1>MODEL CANCELLATION FORM</h1>
          <p>
            (Complete and return this form only if you wish to withdraw from the
            contract)
          </p>
          <p>{`To [TRADER'S NAME, ADDRESS, TELEPHONE NUMBER AND, WHERE AVAILABLE, FAX NUMBER AND E-MAIL ADDRESS TO BE INSERTED BY THE TRADER]`}</p>
          {/*  */}
          <p>
            I/We [*] hereby give notice that I/We [*] cancel my/our [*] contract
            of sale of the following goods [*]/for the supply of the following
            service [*],
          </p>
          <p>Ordered on [*]/received on [*],</p>
          <p>Name of consumer(s),</p>
          <p>Address of consumer(s),</p>
          <p>
            Signature of consumer(s) (only if this form is notified on paper),
          </p>
          <p>Date</p>
          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TermsAndConditions;
