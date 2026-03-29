const sections = [
  {
    title: "Introduction",
    points: [
      "Sky Rocket Venture respects your privacy and is committed to protecting the personal information you share with us through this website.",
      "This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices you may have regarding your information.",
    ],
  },
  {
    title: "Information We Collect",
    points: [
      "We may collect personal details such as your name, email address, phone number, company name, city, and any information you voluntarily provide through forms, calls, WhatsApp, email, or consultation requests.",
      "We may also collect business-related information such as your platform type, brand name, order volume, current challenges, and service requirements when you contact us for solutions.",
      "In addition, we may collect limited non-personal technical information such as browser type, operating system, referring pages, and general interaction data for website analytics and performance monitoring.",
    ],
  },
  {
    title: "How We Use Your Information",
    points: [
      "We use your information to respond to inquiries, provide service details, share proposals, schedule consultations, and support communication related to our services.",
      "Your information may also be used to improve our website experience, refine service communication, understand business demand, and maintain internal operational records.",
      "We may contact you through email, phone, or messaging platforms to follow up on your inquiry or provide relevant service-related communication.",
    ],
  },
  {
    title: "Legal Basis And Consent",
    points: [
      "By submitting information through our website, you consent to the collection and use of your data in accordance with this Privacy Policy.",
      "Where applicable, we process your information based on your inquiry, your consent, our legitimate business interests, or compliance requirements.",
    ],
  },
  {
    title: "Cookies And Usage Data",
    points: [
      "Our website may use cookies, browser storage, or similar technologies to understand traffic patterns, improve usability, and maintain site performance.",
      "These technologies help us analyze visits, page interactions, and general website behavior, but they do not necessarily identify you personally unless you provide personal details separately.",
      "You may choose to disable cookies in your browser settings, though some parts of the website may not perform optimally as a result.",
    ],
  },
  {
    title: "Sharing Of Information",
    points: [
      "We do not sell, rent, or trade your personal information to third parties for commercial resale purposes.",
      "Your information may be shared only when necessary for internal workflow, business communication, legal compliance, protection of rights, or service coordination with trusted providers working on our behalf.",
      "Any such sharing, where applicable, is limited to what is reasonably necessary for the intended purpose.",
    ],
  },
  {
    title: "Data Security",
    points: [
      "We take reasonable administrative and technical measures to protect personal information from unauthorized access, misuse, disclosure, alteration, or destruction.",
      "However, no internet-based transmission or storage system can be guaranteed as fully secure, and users share information at their own informed discretion.",
    ],
  },
  {
    title: "Data Retention",
    points: [
      "We retain submitted information for as long as reasonably necessary to respond to inquiries, maintain business records, comply with legal obligations, and support service-related follow-up.",
      "Where data is no longer required, we may delete or anonymize it in accordance with our internal practices.",
    ],
  },
  {
    title: "Third-Party Links",
    points: [
      "This website may contain links to third-party platforms, tools, or services for user convenience.",
      "We are not responsible for the privacy practices, content, or policies of external websites, and users should review those policies independently before sharing information.",
    ],
  },
  {
    title: "Your Rights",
    points: [
      "You may contact us to request access to the personal information you have shared, ask for correction of inaccurate details, or request deletion where applicable.",
      "We may require reasonable verification before acting on such requests and may retain certain information where legally or operationally necessary.",
    ],
  },
  {
    title: "Updates To This Policy",
    points: [
      "We may revise this Privacy Policy from time to time to reflect operational, legal, or website changes.",
      "Updated versions will become effective once published on this page unless otherwise stated.",
    ],
  },
  {
    title: "Contact Information",
    points: [
      "If you have any questions regarding this Privacy Policy or the way your information is handled, you may contact us at info@skyrocketventure.in.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="policy-page">
      <div className="hero-showcase__stars" aria-hidden="true" />
      <div className="policy-page__inner">
        <div className="policy-page__hero">
          <p className="policy-page__eyebrow">Policy Page</p>
          <h1 className="policy-page__title">Privacy Policy</h1>
          <p className="policy-page__intro">
            This Privacy Policy describes how Sky Rocket Venture collects, uses,
            stores, and protects the information shared by visitors, clients,
            and users through this website.
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
