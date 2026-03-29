const sections = [
  {
    title: "Introduction",
    points: [
      "These Terms & Conditions govern your use of the Sky Rocket Venture website and the information, content, and communication made available through it.",
      "By using this website, you agree to comply with these terms. If you do not agree, you should discontinue use of the website.",
    ],
  },
  {
    title: "Website Use",
    points: [
      "This website is intended to provide information about our ecommerce growth services, consulting support, account management, and related business solutions.",
      "You agree not to misuse the website, interfere with its functionality, attempt unauthorized access, or use it for any unlawful, fraudulent, or harmful purpose.",
    ],
  },
  {
    title: "Eligibility And Responsibility",
    points: [
      "By using this website or submitting an inquiry, you confirm that the information you provide is accurate to the best of your knowledge.",
      "You are responsible for the decisions you make based on website information, subject to any separate written agreement entered into with us.",
    ],
  },
  {
    title: "Service Information",
    points: [
      "All service descriptions, process explanations, case references, examples, and performance language on this website are for general informational purposes only.",
      "Actual service scope, commercial terms, timelines, deliverables, and responsibilities will be finalized only through direct communication, quotation, proposal, or written agreement.",
    ],
  },
  {
    title: "Pricing And Commercial Terms",
    points: [
      "Any pricing or fee-related information discussed through the website or inquiry process is indicative unless formally confirmed in writing.",
      "Separate commercial terms may apply depending on the service selected, project duration, account complexity, and execution scope.",
    ],
  },
  {
    title: "Intellectual Property",
    points: [
      "All content on this website, including text, design, visual elements, layout, branding, graphics, and structure, belongs to Sky Rocket Venture unless otherwise stated.",
      "You may not reproduce, republish, distribute, modify, or commercially exploit website content without prior written permission.",
    ],
  },
  {
    title: "Third-Party Platforms",
    points: [
      "The website may reference or discuss external marketplaces, tools, or platforms such as Amazon, Flipkart, Meesho, Shopify, Blinkit, and others.",
      "We do not control the independent policies, technical behavior, algorithm changes, downtime, or platform actions of any third party mentioned on this website.",
    ],
  },
  {
    title: "Limitation Of Liability",
    points: [
      "Sky Rocket Venture will not be liable for indirect, incidental, consequential, or business-related loss arising from your use of this website or reliance on its content.",
      "No website information should be treated as a guarantee of future marketplace performance, approvals, rankings, or revenue outcomes.",
    ],
  },
  {
    title: "Termination Or Restriction",
    points: [
      "We reserve the right to restrict or terminate access to the website or any website feature at our discretion where misuse, suspicious conduct, or policy violation is identified.",
    ],
  },
  {
    title: "Changes To Terms",
    points: [
      "We may update these Terms & Conditions at any time without prior notice.",
      "Continued use of the website after changes are published constitutes acceptance of the updated version.",
    ],
  },
  {
    title: "Governing Understanding",
    points: [
      "These website terms are intended to apply in addition to, and not in place of, any separate client agreement, proposal, invoice, scope document, or service contract that may later be executed.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="policy-page">
      <div className="hero-showcase__stars" aria-hidden="true" />
      <div className="policy-page__inner">
        <div className="policy-page__hero">
          <p className="policy-page__eyebrow">Policy Page</p>
          <h1 className="policy-page__title">Terms &amp; Conditions</h1>
          <p className="policy-page__intro">
            These Terms &amp; Conditions explain the rules, responsibilities,
            and limitations related to the use of the Sky Rocket Venture
            website.
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
