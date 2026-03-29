"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const contactCards = [
  {
    title: "Visit Our Office",
    value: "Ajmer, Rajasthan",
    detail:
      "Meet with our team to discuss marketplace growth, ads, and scaling strategy for your brand.",
  },
  {
    title: "Call Us",
    value: "+91 72300 70077",
    detail:
      "Speak directly with us for seller support, onboarding guidance, and growth planning.",
  },
  {
    title: "Email Us",
    value: "info@skyrocketventure.in",
    detail:
      "Share your requirements and we will get back with the right next steps for your business.",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.4-.1-1.2-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8v3h2.6v7h2.9Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917230070077?text=Hi%20Sky%20Rocket%20Venture%2C%20I%20am%20interested%20in%20your%20services",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M19.1 4.9A9.8 9.8 0 0 0 3.7 16.8L2.5 21.5l4.8-1.2A9.8 9.8 0 1 0 19.1 4.9Zm-7.3 15a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3a8.1 8.1 0 1 1 6.7 3.6Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.1-.3.2-.5.1-1.2-.6-2.2-1.5-3-2.7-.1-.2 0-.4.1-.5l.6-.7.2-.4c0-.1 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.4.1-.5.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.6 4.1 3.6 2.4.9 2.4.6 2.9.6.4-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.4 8.3a1.8 1.8 0 1 1 0-3.7 1.8 1.8 0 0 1 0 3.7ZM4.9 19.5V9.7H8v9.8H4.9Zm4.9 0V9.7h2.9V11h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.4h-3.1v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.9H9.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);

    await new Promise((resolve) => window.setTimeout(resolve, 900));

    setIsSending(false);
    setIsSubmitted(true);
    setSelectedPlatform("");
    form.reset();
  };

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
            Contact Us
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-[3.4rem]">
            Get In Touch For Support And Growth Queries
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-[1.02rem] leading-8 text-white/72 md:text-[1.08rem]">
            Whether you need marketplace management, brand growth support, or a
            performance-focused strategy call, we are here to help you move
            faster with clarity.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="contact-panel"
          >
            <p className="contact-panel__eyebrow">Start The Conversation</p>
            <h2 className="contact-panel__title">
              Let&apos;s Talk About Your Brand
            </h2>
            <p className="contact-panel__intro">
              We would love to hear from you. Reach out for account management,
              ad strategy, catalog optimization, or complete ecommerce growth
              support.
            </p>

            <div className="contact-highlight">
              <div>
                <p className="contact-highlight__label">Best for</p>
                <h3 className="contact-highlight__title">
                  Amazon, Flipkart, Meesho, Shopify, Blinkit
                </h3>
              </div>
              <p className="contact-highlight__text">
                Share your current stage, monthly orders, and main challenge so
                we can guide you better.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {contactCards.map((item) => (
                <div key={item.title} className="contact-info-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/52">
                    {item.title}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/68">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="contact-actions">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="contact-social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="contact-form-panel"
            onSubmit={handleSubmit}
          >
            {isSubmitted ? (
              <div className="contact-success contact-success--full">
                <p className="contact-success__eyebrow">Submission Successful</p>
                <h3 className="contact-success__title">
                  Thank you. Your inquiry has been sent.
                </h3>
                <p className="contact-success__text">
                  We have received your details and will get back to you shortly.
                </p>
                <button
                  type="button"
                  className="contact-success__action"
                  onClick={() => router.push("/")}
                >
                  OK, Go To Home
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-panel__header">
                  <p className="contact-form-panel__eyebrow">Quick Inquiry Form</p>
                  <h2 className="contact-form-panel__title">
                    Tell Us What You Need
                  </h2>
                  <p className="contact-form-panel__text">
                    Fill out the details below and we will reach out with the right
                    direction for your business.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="contact-field">
                    <span>Name</span>
                    <input type="text" placeholder="Your full name" required />
                  </label>

                  <label className="contact-field">
                    <span>Phone</span>
                    <input type="tel" placeholder="+91 98XXXXXXXX" required />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="contact-field">
                    <span>Email</span>
                    <input type="email" placeholder="you@example.com" required />
                  </label>

                  <label className="contact-field">
                    <span>Platform</span>
                    <select
                      defaultValue=""
                      required
                      onChange={(event) => setSelectedPlatform(event.target.value)}
                    >
                      <option value="" disabled hidden>
                        Select platform
                      </option>
                      <option value="Amazon">Amazon</option>
                      <option value="Flipkart">Flipkart</option>
                      <option value="Meesho">Meesho</option>
                      <option value="Shopify">Shopify</option>
                      <option value="Blinkit">Blinkit</option>
                      <option value="Multiple Platforms">Multiple Platforms</option>
                      <option value="Others">Others</option>
                    </select>
                  </label>
                </div>

                {selectedPlatform === "Others" ? (
                  <div className="mt-5">
                    <label className="contact-field">
                      <span>Other Platform Name</span>
                      <input
                        type="text"
                        placeholder="Enter platform name"
                        required
                      />
                    </label>
                  </div>
                ) : null}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="contact-field">
                    <span>Business Name</span>
                    <input type="text" placeholder="Your brand or company name" required />
                  </label>

                  <label className="contact-field">
                    <span>Monthly Orders</span>
                    <input type="text" placeholder="Approx. monthly order volume" />
                  </label>
                </div>

                <label className="contact-field mt-5">
                  <span>Message</span>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your brand, current challenges, and what kind of support you need."
                    required
                  />
                </label>

                <div className="contact-form-footer">
                  <p className="contact-form-note">
                    Prefer WhatsApp? Use the social shortcut icons for a faster
                    response.
                  </p>
                  <button type="submit" className="contact-submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </>
            )}
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="contact-map-panel"
        >
          <div className="contact-map-layout">
            <div className="contact-map-copy">
              <div className="contact-form-panel__header">
                <p className="contact-form-panel__eyebrow">Find Us</p>
                <h2 className="contact-form-panel__title">Visit Our Location</h2>
                <p className="contact-form-panel__text">
                  Explore our live location, plan your visit, or open directions
                  directly in Google Maps when you are ready to connect.
                </p>
              </div>

              <div className="contact-map-details">
                <div className="contact-map-detail-card">
                  <p className="contact-map-detail-label">Office</p>
                  <h3 className="contact-map-detail-value">Sky Rocket Venture</h3>
                  <p className="contact-map-detail-text">
                    Ajmer, Rajasthan, India
                  </p>
                </div>

                <div className="contact-map-detail-card">
                  <p className="contact-map-detail-label">Availability</p>
                  <h3 className="contact-map-detail-value">Mon - Sat</h3>
                  <p className="contact-map-detail-text">
                    Contact us for consultation scheduling and meeting support.
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps?q=Ajmer,Rajasthan"
                target="_blank"
                rel="noreferrer"
                className="contact-map-action"
              >
                Open In Google Maps
              </a>
            </div>

            <div className="contact-map-wrap">
              <iframe
                title="Sky Rocket Venture Location"
                src="https://www.google.com/maps?q=Ajmer,Rajasthan&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
