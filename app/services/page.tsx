"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Myntra Account Management",
    image: "/assets/images/service-myntra.png",
    description:
      "Stand out in India's top fashion marketplace, Myntra with us. Our expertise will help to improve catalogue, price strategies, and promotional support.",
  },
  {
    title: "Amazon Account Management",
    image: "/assets/images/service-amazon.svg",
    description:
      "Amazon, one of the largest e-commerce platforms in the world. From A+ content to ad campaign optimisation, we manage your Amazon store for better sales and revenue.",
  },
  {
    title: "Flipkart Account Management",
    image: "/assets/images/service-flipkart.png",
    description:
      "Flipkart, one of the largest e-commerce platforms in India. Dominate Flipkart with our strategic listing, keyword-rich content, and real-time operations and tracking with us.",
  },
  {
    title: "Shopify Store Management",
    image: "/assets/images/service-shopify.svg",
    description:
      "From Shopify store set up to SEO design or integration, get everything with us. Build and manage your brand with a powerful Shopify solution. Now it's easy to build and manage websites with us.",
  },
  {
    title: "Blinkit Account Management",
    image: "/assets/images/service-blinkit.png",
    description:
      "Enter instant commerce with Blinkit. Managing Blinkit accounts is very important. Handle on board, catalogue upload, stock syncing, and promotion with us. Make sure your product reaches the customer on time.",
  },
  {
    title: "Meesho Store Management",
    image: "/assets/images/service-meesho.png",
    description:
      "Boost your Meesho seller account with expert services. Optimize listings, manage inventory, run ads, and increase sales with smart marketplace support.",
  },
  {
    title: "Catalog & Listing Optimization",
    image: "/assets/images/service-catalog-listing.jpg",
    description:
      "Improve discoverability and conversion with stronger titles, bullet points, descriptions, images, and catalog structure built for marketplace performance.",
  },
  {
    title: "Marketplace Advertising",
    image: "/assets/images/service-marketplace-advertising.jpg",
    description:
      "Run smarter sponsored campaigns with focused keyword planning, budget control, performance analysis, and ROAS-oriented optimization.",
  },
  {
    title: "Inventory & Order Operations",
    image: "/assets/images/service-inventory-operations.jpg",
    description:
      "Maintain smoother operations with inventory coordination, order flow management, issue handling, and process support that reduces marketplace friction.",
  },
  {
    title: "Brand Store & Website Development",
    image: "/assets/images/service-brand-store-development.jpg",
    description:
      "Build a stronger digital presence with conversion-focused websites and branded storefront experiences that support credibility and sales growth.",
  },
  {
    title: "Marketplace Launch & Onboarding",
    image: "/assets/images/service-marketplace-onboarding.jpg",
    description:
      "Get started faster with guided onboarding, account setup, compliance support, initial catalog planning, and launch execution across key marketplaces.",
  },
  {
    title: "Performance Reporting & Strategy",
    image: "/assets/images/service-reporting-strategy.jpg",
    description:
      "Track what matters with reporting dashboards, performance reviews, sales trend analysis, and practical strategy recommendations for the next growth phase.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden px-4 py-10 text-white md:px-5 md:py-14">
      <div className="hero-showcase__stars" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="services-hero-panel mx-auto max-w-[1320px] text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/58">
            Marketplace Services
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-[3.4rem]">
            Comprehensive E-Commerce Solutions For Every Platform
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-[1.02rem] leading-8 text-white/72 md:text-[1.08rem]">
            Maximise your reach and revenue with our comprehensive ecommerce
            solutions for every platform. Whether you are selling fashion,
            electronics, audio, essentials, or lifestyle products, we help you
            scale with structure and performance.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="services-card group"
            >
              <div className="services-card__halo" aria-hidden="true" />

              <div className="services-card__logo-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="services-card__logo"
                  unoptimized={service.image.endsWith(".svg")}
                />
              </div>

              <h2 className="mt-6 text-[1.16rem] font-bold leading-tight md:text-[1.22rem]">
                {service.title}
              </h2>

              <p className="mt-4 text-[0.97rem] leading-8 text-white/74">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
