"use client";

import { motion } from "framer-motion";

type PlatformLetter = {
  text: string;
  className: string;
};

type Platform =
  | {
      name: string;
      kind: "text";
      logoText: string;
      logoClass: string;
    }
  | {
      name: string;
      kind: "badge";
      badgeClass: string;
      logoText: string;
    }
  | {
      name: string;
      kind: "rich";
      letters: PlatformLetter[];
    };

const marketplaces = [
  { name: "Amazon", label: "amazon", accent: "marketplace-card--amazon" },
  { name: "Flipkart", label: "flipkart", accent: "marketplace-card--flipkart" },
  { name: "Meesho", label: "meesho", accent: "marketplace-card--meesho" },
  { name: "Myntra", label: "myntra", accent: "marketplace-card--myntra" },
];

const homeServices = [
  {
    title: "Amazon Account Management",
    description:
      "Complete seller growth & ad optimization. Boost sales and simplify operations with our Amazon Account Management services.",
    image:
      "/assets/images/home-amazon-management.jpg",
    objectPosition: "center center",
  },
  {
    title: "Flipkart Growth Strategy",
    description:
      "Boost sales on Flipkart with our expert account management setup, listings, ads, inventory management, order handling & performance optimization.",
    image:
      "/assets/images/home-flipkart-growth.jpg",
    objectPosition: "center center",
  },
  {
    title: "Meesho Scaling Support",
    description:
      "Maximize your Meesho sales with our expert account management covering setup, listings, pricing, ads, inventory, order processing, promotions, insights & growth strategies.",
    image:
      "/assets/images/home-meesho-scaling.jpg",
    objectPosition: "center center",
  },
  {
    title: "Website Development",
    description:
      "High-converting business websites that deliver smooth experiences across devices.",
    image:
      "/assets/images/home-website-development.jpg",
    objectPosition: "center center",
  },
];

const platforms: Platform[] = [
  {
    name: "Amazon",
    kind: "text",
    logoText: "amazon",
    logoClass: "text-[#111827] text-[2.25rem] font-extrabold lowercase tracking-[-0.06em]",
  },
  {
    name: "Flipkart",
    kind: "badge",
    badgeClass: "bg-[#ffe54f] text-[#1457c8] text-[1.15rem] font-black",
    logoText: "flipkart",
  },
  {
    name: "Meesho",
    kind: "badge",
    badgeClass: "bg-[#8c1cc4] text-[#ffd86a] text-[1.15rem] font-black lowercase",
    logoText: "meesho",
  },
  {
    name: "Myntra",
    kind: "text",
    logoText: "M",
    logoClass:
      "bg-[linear-gradient(135deg,#ff4ba1_0%,#ff904b_45%,#b36dff_100%)] bg-clip-text text-[3.15rem] font-black text-transparent",
  },
  {
    name: "Snapdeal",
    kind: "text",
    logoText: "snapdeal",
    logoClass: "text-[#eb174f] text-[1.4rem] font-semibold lowercase tracking-tight",
  },
  {
    name: "Ebay",
    kind: "rich",
    letters: [
      { text: "e", className: "text-[#e53238]" },
      { text: "b", className: "text-[#0064d2]" },
      { text: "a", className: "text-[#f5af02]" },
      { text: "y", className: "text-[#86b817]" },
    ],
  },
  {
    name: "Nykaa",
    kind: "text",
    logoText: "NYKAA",
    logoClass: "text-[#ff2d84] text-[1.7rem] font-extrabold tracking-tight italic",
  },
  {
    name: "Blinkit",
    kind: "badge",
    badgeClass: "bg-[#d7ff54] text-[#111827] text-[1.15rem] font-black",
    logoText: "blinkit",
  },
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "50+", label: "Employees" },
  { value: "20+", label: "Experts" },
  { value: "5+", label: "Years of Experience" },
];

const testimonials = [
  {
    quote: "Amazon account management service was excellent and very result oriented.",
    author: "Bhavishya Rohilla",
    badge: "B",
    badgeClass: "bg-[#6d6cff] text-white",
  },
  {
    quote: "Thanks for increasing my sales with the right strategy and account support.",
    author: "Hemant Jangid",
    badge: "H",
    badgeClass: "bg-[#ffbe56] text-white",
  },
  {
    quote: "Best Amazon account management services. Thanks for increase my sales.",
    author: "Ankit",
    badge: "A",
    badgeClass: "bg-[#a7e9f0] text-slate-950",
  },
  {
    quote: "Very professional team. They improved our listings and overall marketplace performance.",
    author: "Priya Sharma",
    badge: "P",
    badgeClass: "bg-[#ff8aa5] text-white",
  },
  {
    quote: "Flipkart account support was smooth and the communication was always quick and clear.",
    author: "Ravi Solanki",
    badge: "R",
    badgeClass: "bg-[#8dd7ff] text-slate-950",
  },
  {
    quote: "Highly recommended for sellers who want proper strategy, ads guidance, and account growth.",
    author: "Karan Verma",
    badge: "K",
    badgeClass: "bg-[#8b7cff] text-white",
  },
];

function renderPlatformLogo(platform: Platform) {
  if (platform.kind === "rich") {
    return (
      <div className="flex items-end justify-center gap-0.5 text-[3.2rem] font-bold leading-none">
        {platform.letters.map((letter) => (
          <span key={`${platform.name}-${letter.text}`} className={letter.className}>
            {letter.text}
          </span>
        ))}
      </div>
    );
  }

  if (platform.kind === "badge") {
    return (
      <div
        className={`mx-auto flex min-h-14 min-w-[72px] items-center justify-center rounded-xl px-3 text-center ${platform.badgeClass}`}
      >
        {platform.logoText}
      </div>
    );
  }

  return <div className={platform.logoClass}>{platform.logoText}</div>;
}

export default function Home() {
  return (
    <>
      <section className="hero-showcase">
        <div className="hero-showcase__stars" aria-hidden="true" />
        <div className="hero-showcase__shell">
          <span className="hero-showcase__badge">
            Trusted Ecommerce Growth Partner
          </span>

          <div className="hero-showcase__copy">
            <h1>
              Scale Your E-Commerce
              <br />
              Business With Proven
              <br />
              Growth Experts
            </h1>

            <p>
              We help Amazon, Flipkart &amp; Meesho sellers grow faster with
              performance-driven strategies that actually deliver results.
            </p>

            <p>
              Unlock your brand&apos;s full potential with expert eCommerce
              management, high-converting ads, and scalable growth systems
              across all major marketplaces.
            </p>
          </div>

          <aside
            className="hero-showcase__panel"
            aria-label="Marketplace partners"
          >
            <div className="hero-showcase__panel-glow" aria-hidden="true" />

            <div className="hero-showcase__marketplaces">
              {marketplaces.map((marketplace) => (
                <div
                  key={marketplace.name}
                  className={`marketplace-card ${marketplace.accent}`}
                >
                  <span>{marketplace.label}</span>
                </div>
              ))}
            </div>

            <a href="/contact" className="hero-showcase__cta">
              Book Free Strategy Call
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1460px] px-5 py-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-white"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
            What We Deliver
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] md:text-[3.7rem]">
            Our End-to-End Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Strategy, execution, and marketplace growth solutions designed to
            help your brand scale faster across every major digital channel.
          </p>
        </motion.div>

        <div className="service-marquee">
          <div className="service-marquee__fade service-marquee__fade--left" />
          <div className="service-marquee__fade service-marquee__fade--right" />
          <div className="service-marquee__track">
            {[...homeServices, ...homeServices].map((service, index) => (
              <motion.article
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: (index % homeServices.length) * 0.06,
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative min-h-[310px] w-[250px] shrink-0 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#03131f] shadow-[0_14px_30px_rgba(8,24,40,0.14)] sm:w-[270px]"
              >
                <div
                  className="absolute inset-0 bg-cover transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundPosition: service.objectPosition,
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,28,0.84)_0%,rgba(12,29,42,0.62)_34%,rgba(21,126,174,0.32)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(78,216,255,0.32)_0%,transparent_46%)]" />
                <div className="relative flex h-full flex-col p-5 text-white">
                  <h3 className="max-w-[190px] text-[1.2rem] font-semibold leading-[1.18] tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-[240px] text-[0.82rem] leading-6 text-white/78">
                    {service.description}
                  </p>
                  <div className="mt-auto h-[28%]" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white">
        <div
          className="hero-showcase__stars"
          aria-hidden="true"
          style={{ opacity: 0.45 }}
        />
        <div className="mx-auto max-w-[1540px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Platforms We Use
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
              Platforms We Use
            </h2>
          </motion.div>

          <div className="relative z-10 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                animate={{ y: [0, -8, 0] }}
                className="flex min-h-[170px] items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/6 p-6 text-center shadow-[0_18px_42px_rgba(4,2,18,0.24)] backdrop-blur-md"
                transition={{
                  opacity: { duration: 0.45, delay: index * 0.05 },
                  y: {
                    duration: 4 + (index % 4) * 0.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: index * 0.08,
                  },
                }}
              >
                <div>
                  <div className="flex min-h-[62px] items-center justify-center">
                    {renderPlatformLogo(platform)}
                  </div>
                  <p className="mt-5 text-[1.05rem] font-semibold text-white/88 sm:text-[1.15rem]">
                    {platform.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-8 text-center text-white shadow-[0_18px_40px_rgba(4,2,18,0.2)] backdrop-blur-md"
            >
              <div className="text-4xl font-bold tracking-[-0.06em]">
                {stat.value}
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">
        <div
          className="hero-showcase__stars"
          aria-hidden="true"
          style={{ opacity: 0.35 }}
        />
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em]">
              What Our Clients Say About Us
            </h2>
          </div>

          <div className="testimonial-marquee relative z-10 mt-10">
            <div className="testimonial-marquee__fade testimonial-marquee__fade--left" />
            <div className="testimonial-marquee__fade testimonial-marquee__fade--right" />
            <div className="testimonial-marquee__track">
              {[...testimonials, ...testimonials].map((item, index) => (
                <article
                  key={`${item.author}-${index}`}
                  className="testimonial-card"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${item.badgeClass}`}
                    >
                      {item.badge}
                    </div>
                    <p className="text-[1.08rem] font-medium text-white">
                      {item.author}
                    </p>
                  </div>

                  <div className="mt-5 text-center text-[#ffb400]">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={`${item.author}-star-${index}`}>{"\u2605"}</span>
                    ))}
                  </div>

                  <p className="mt-2 text-center text-[1.02rem] leading-8 text-white/82">
                    {item.quote}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/8 pt-4 text-sm text-white/62">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold">
                        <span className="text-[#4285F4]">G</span>
                      </span>
                      <span>Posted on Google</span>
                    </div>
                    <span>Read more</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10 flex justify-center">
            <a
              href="https://www.google.com/search?q=Sky+Rocket+Venture+reviews"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#4b83ff] px-7 text-base font-semibold text-white shadow-[0_14px_30px_rgba(45,90,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#5a8dff]"
            >
              Read all reviews
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,16,43,0.92)_0%,rgba(34,28,72,0.86)_48%,rgba(16,25,54,0.9)_100%)] px-8 py-12 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/58">
            Ready To Grow?
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em]">
            Let&apos;s Scale Your Brand
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/74">
            Drive your brand&apos;s growth with expert Amazon, Flipkart, and
            Meesho management, optimized listings, and conversion-focused
            execution.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

