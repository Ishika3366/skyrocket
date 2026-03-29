const sections = [
  {
    title: "General Nature Of Website Content",
    points: [
      "The content available on this website is provided for general informational and marketing purposes only.",
      "Although we aim to keep information updated and relevant, we do not guarantee that every page, statement, reference, or service detail will always be complete, current, or fully applicable to every business situation.",
    ],
  },
  {
    title: "No Guaranteed Outcomes",
    points: [
      "Any reference to growth, performance improvement, account support, or business scaling reflects the nature of our services and not a guaranteed commercial outcome.",
      "Actual results in ecommerce depend on many external and internal factors, including market demand, product quality, pricing, reviews, platform policy, competition, inventory, ad spend, and execution consistency.",
    ],
  },
  {
    title: "No Professional Or Legal Reliance",
    points: [
      "Website content should not be interpreted as legal, tax, compliance, investment, accounting, or statutory advice unless explicitly confirmed under a separate qualified engagement.",
      "Users should seek appropriate professional advice before making decisions that involve regulatory, legal, tax, or commercial risk.",
    ],
  },
  {
    title: "Third-Party Platforms And Tools",
    points: [
      "The website may mention or link to third-party platforms such as Amazon, Flipkart, Meesho, Shopify, Blinkit, or other service tools and websites.",
      "Sky Rocket Venture is not responsible for the content, availability, policy updates, errors, or actions of third-party platforms.",
      "Platform rules, approvals, suspensions, algorithm shifts, and technical restrictions are outside our direct control.",
    ],
  },
  {
    title: "User Responsibility",
    points: [
      "You are responsible for evaluating website information before relying on it for business decisions.",
      "Any action you take based on website content, examples, or service descriptions is at your own judgment and risk unless separately supported through a formal service agreement.",
    ],
  },
  {
    title: "Liability Limitation",
    points: [
      "Sky Rocket Venture will not be liable for direct, indirect, incidental, consequential, or business loss resulting from the use of this website or reliance on the information it contains.",
      "This includes, without limitation, interruption, delay, missed opportunities, revenue loss, platform actions, or external technical issues connected to third-party systems.",
    ],
  },
  {
    title: "Content Updates",
    points: [
      "We reserve the right to modify, update, remove, or revise website content and disclaimers at any time without prior notice.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <section className="policy-page">
      <div className="hero-showcase__stars" aria-hidden="true" />
      <div className="policy-page__inner">
        <div className="policy-page__hero">
          <p className="policy-page__eyebrow">Policy Page</p>
          <h1 className="policy-page__title">Disclaimer</h1>
          <p className="policy-page__intro">
            This disclaimer outlines the scope and limitations of the
            information presented on the Sky Rocket Venture website.
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
