"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navLinks: NavLink[];
};

export default function SiteHeader({ navLinks }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand">
          <span className="site-brand__mark">SR</span>
          <span className="site-brand__text">
            <strong>Sky Rocket Venture</strong>
            <small>Ecommerce Growth Experts</small>
          </span>
        </Link>

        <button
          type="button"
          className="site-header__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="site-header__cta site-header__cta--menu">
            Book a Call
          </Link>
        </nav>

        <Link href="/contact" className="site-header__cta site-header__cta--desktop">
          Book a Call
        </Link>
      </div>
    </header>
  );
}
