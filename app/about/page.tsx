"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    description:
      "We bring modern ecommerce thinking, marketplace understanding, and performance-first execution to every brand we work with.",
  },
  {
    title: "Client-Centric",
    description:
      "Every solution is shaped around the client's stage, category, budget, and growth goals rather than a one-size-fits-all process.",
  },
  {
    title: "Execution Quality",
    description:
      "From listings to ad optimization and account support, we focus on disciplined execution that improves business outcomes over time.",
  },
];

const services = [
  "Amazon Account Management",
  "Flipkart Account Management",
  "Meesho Account Management",
  "Blinkit Account Management",
  "Shopify Store Management",
  "Myntra Account Management",
  "Product Listing Optimization",
  "Ecommerce Growth Strategy",
];

const differentiators = [
  {
    title: "Experienced Team",
    description:
      "Our work is backed by ecommerce specialists who understand listings, operations, ads, and marketplace growth dynamics.",
  },
  {
    title: "Multi-Platform Support",
    description:
      "We help brands scale across major digital marketplaces instead of depending on a single sales channel.",
  },
  {
    title: "Growth-Oriented Execution",
    description:
      "We focus on visibility, conversion, account health, and operational performance to support real business growth.",
  },
];

const stats = [
  { value: "8+", label: "Years Of Experience" },
  { value: "200+", label: "Brands Supported" },
  { value: "6+", label: "Marketplaces Covered" },
];

export default function AboutPage() {
  return (
    <section className="policy-page">
      <div className="hero-showcase__stars" aria-hidden="true" />
      <div className="policy-page__inner">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="policy-page__hero"
        >
          <p className="policy-page__eyebrow">About Us</p>
          <h1 className="policy-page__title">
            Ecommerce Growth Partner For Ambitious Brands
          </h1>
          <p className="policy-page__intro">
            Sky Rocket Venture helps businesses grow across leading ecommerce
            platforms with stronger account management, better marketplace
            visibility, sharper execution, and a practical approach to scaling
            online sales.
          </p>
        </motion.div>

        <div className="policy-page__content">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="policy-page__card">
              <h2>Who We Are</h2>
              <p>
                Sky Rocket Venture is a performance-driven ecommerce service
                company focused on helping sellers and brands grow across major
                online marketplaces. We work with businesses that want more than
                just marketplace presence. They want better structure, stronger
                sales execution, and a team that understands how to improve
                day-to-day performance.
              </p>
              <p>
                We believe successful ecommerce growth requires consistent
                account management, optimized listings, platform-specific
                strategy, operational discipline, and ongoing review. That is
                why our work is built around both planning and execution, not
                just recommendations.
              </p>
              <p>
                Whether a brand is launching, stabilizing, or scaling, we help
                create momentum with systems that support visibility,
                conversion, and sustainable growth across multiple channels.
              </p>
            </article>

            <article className="policy-page__card">
              <h2>What We Offer</h2>
              {services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </article>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="policy-page__card policy-page__image-card"
            >
              <div
                className="policy-page__image"
                style={{
                  backgroundImage:
                    "url('/assets/images/about-marketplace-performance.jpg')",
                }}
              />
              <div className="policy-page__image-caption">
                <h2>Built Around Marketplace Performance</h2>
                <p>
                  We work at the intersection of strategy, operations, and
                  execution so brands can scale with better control and stronger
                  decision-making.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="policy-page__card policy-page__image-card"
            >
              <div
                className="policy-page__image"
                style={{
                  backgroundImage:
                    "url('/assets/images/about-practical-support.jpg')",
                }}
              />
              <div className="policy-page__image-caption">
                <h2>Professional Support With Practical Focus</h2>
                <p>
                  Our team supports brands with a hands-on workflow designed to
                  simplify complexity and improve results across key ecommerce
                  channels.
                </p>
              </div>
            </motion.article>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="policy-page__card"
              >
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </motion.article>
            ))}
          </div>

          <article className="policy-page__card">
            <h2>Why Brands Choose Us</h2>
            <p>
              Brands work with us because we combine marketplace knowledge with
              hands-on execution. We don&apos;t stop at guidance. We help improve
              listings, support account health, strengthen ad direction, and
              create more structured systems for marketplace growth.
            </p>
          </article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="policy-page__card policy-page__wide-image-card"
          >
            <div
              className="policy-page__wide-image"
              style={{
                backgroundImage:
                  "url('/assets/images/about-growth-structure.jpg')",
              }}
            />
            <div className="policy-page__wide-copy">
              <h2>Growth Backed By Structure, Review, And Execution</h2>
              <p>
                We help businesses move forward with stronger visibility,
                smarter marketplace decisions, and a more reliable system for
                scaling ecommerce sales over time.
              </p>
            </div>
          </motion.article>

          <div className="grid gap-5 md:grid-cols-3">
            {differentiators.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="policy-page__card"
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.label} className="policy-page__card text-center">
                <h2 className="text-[2.3rem] tracking-[-0.06em]">{stat.value}</h2>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>

          <article className="policy-page__card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to help businesses grow more confidently across
              ecommerce platforms through practical strategy, reliable support,
              and performance-focused execution. We want brands to spend less
              time struggling with marketplace complexity and more time building
              stronger sales momentum.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

