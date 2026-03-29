import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sky Rocket Venture",
  description: "Scale Your E-Commerce Business With Proven Experts",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="site-wide-glow min-h-full flex flex-col">
        <SiteHeader navLinks={navLinks} />

        <main className="flex-1">{children}</main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <div className="site-footer__top">
              <div className="site-footer__brand">
                <p className="site-footer__eyebrow">Growth Partner</p>
                <h2 className="site-footer__title">Sky Rocket Venture</h2>
                <p className="site-footer__text">
                  We help ecommerce brands grow faster with sharper marketplace
                  strategy, account management, and conversion-focused
                  execution.
                </p>

                <div className="site-footer__cta-row">
                  <Link href="/contact" className="site-footer__primary-link">
                    Book Strategy Call
                  </Link>
                  <a
                    href="mailto:info@skyrocketventure.in"
                    className="site-footer__secondary-link"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              <div className="site-footer__grid">
                <div className="site-footer__column">
                  <p className="site-footer__column-title">Quick Links</p>
                  <div className="site-footer__links">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="site-footer__column">
                  <p className="site-footer__column-title">Core Services</p>
                  <div className="site-footer__stack">
                    <span>Amazon Management</span>
                    <span>Flipkart Growth</span>
                    <span>Meesho Support</span>
                    <span>Website Development</span>
                  </div>
                </div>

                <div className="site-footer__column">
                  <p className="site-footer__column-title">Contact</p>
                  <div className="site-footer__meta">
                    <span>Ajmer, Rajasthan</span>
                    <a href="tel:+917230070077">+91 72300 70077</a>
                    <a href="mailto:info@skyrocketventure.in">
                      info@skyrocketventure.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="site-footer__bottom">
              <p className="site-footer__copyright">
                © 2026 Sky Rocket Venture. All rights reserved.
              </p>
              <div className="site-footer__bottom-right">
                <p className="site-footer__tagline">
                  Built for ambitious ecommerce brands
                </p>
                <div className="site-footer__legal-links">
                  {policyLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
