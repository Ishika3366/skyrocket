const sections = [
  {
    title: "General Policy",
    points: [
      "Sky Rocket Venture provides consulting, strategy, execution support, account management, and related business services. Because such services often begin with planning, communication, review, research, and implementation effort, refunds are not automatically available after service initiation.",
      "Any refund consideration depends on the nature of the engagement, the work stage reached, and the terms agreed between both parties.",
    ],
  },
  {
    title: "When Refunds May Not Apply",
    points: [
      "Fees paid for consultation, audit, planning, onboarding, research, setup, advisory support, campaign preparation, marketplace account review, or time-based professional work may be non-refundable once that work has commenced.",
      "Refunds will generally not apply where service delay or disruption results from missing client inputs, delayed approvals, incomplete documentation, marketplace-side restrictions, account issues, or third-party platform actions.",
    ],
  },
  {
    title: "Cancellation Requests",
    points: [
      "Any cancellation request should be made in writing through official communication channels such as email or confirmed business communication.",
      "A cancellation request does not automatically create a refund obligation, especially where resources, planning time, execution time, or service allocation has already occurred.",
    ],
  },
  {
    title: "Partial Refund Review",
    points: [
      "Where appropriate, a partial refund may be considered after evaluating the amount of work completed, resources used, committed effort, and commercial understanding between the parties.",
      "Any approved refund, whether full or partial, will be processed only after internal review and confirmation from our side.",
    ],
  },
  {
    title: "Processing Timeline",
    points: [
      "If a refund is approved, processing time may vary depending on the payment method, banking timelines, and administrative verification.",
      "We are not responsible for delays caused by external payment processors, banking systems, or financial intermediaries once the refund has been initiated from our side.",
    ],
  },
  {
    title: "Non-Service Costs",
    points: [
      "Any third-party platform fee, marketplace fee, payment gateway charge, ad spend, processing fee, tool subscription, or external service cost already incurred for a project may remain non-refundable unless expressly agreed otherwise in writing.",
    ],
  },
  {
    title: "Dispute Clarification",
    points: [
      "If you have any concern regarding charges, billing, service stage, or cancellation review, please contact us first with complete details so the matter can be examined properly.",
    ],
  },
  {
    title: "Contact For Refund Queries",
    points: [
      "For cancellation or refund-related questions, please contact Sky Rocket Venture at info@skyrocketventure.in and include your name, business name, service details, and request summary.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="policy-page">
      <div className="hero-showcase__stars" aria-hidden="true" />
      <div className="policy-page__inner">
        <div className="policy-page__hero">
          <p className="policy-page__eyebrow">Policy Page</p>
          <h1 className="policy-page__title">Refund Policy</h1>
          <p className="policy-page__intro">
            This Refund Policy explains the general approach followed by Sky
            Rocket Venture for cancellation review, billing clarification, and
            refund consideration.
          </p>
        </div>

        <div className="policy-page__content">
          {sections.map((section) => (
            <article key={section.title} className="policy-page__card">
              <h2>{section.title}</h2>
              {section.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
