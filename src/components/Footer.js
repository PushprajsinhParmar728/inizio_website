import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="site-footer">

        {/* Col 1 — Brand + Social Icons */}
        <div className="ft-brand">
          <div className="ft-logo">
            <Image
              src="/images/logo/logo.png"
              alt="Inizio Overseas"
              width={140}
              height={48}
              className="object-contain"
            />
          </div>
          <p className="ft-desc">
            Discover Excellence with <em>Inizio Overseas</em> —
            Your Gateway to Superior <strong>Industrial Solutions.</strong>
          </p>

          {/* Social Icons — under logo & description */}
          <div className="ft-social">
            
            <a  href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-social-icon"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            
            <a  href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-social-icon"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            
            <a  href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-social-icon whatsapp-icon"
              aria-label="WhatsApp"
            >
              <Image
                src="/images/logo/what'sapp.jpg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="wa-img"
              />
            </a>
          </div>
        </div>

        {/* Col 2 — Explore only */}
        <div className="ft-col">
          <h5>Explore</h5>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/product">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Col 3 — Contact Info */}
        <div className="ft-col">
          <h5>Contact Info</h5>

          <div className="ft-contact-group">
            <span className="ft-contact-label">Phone</span>
            <a href="tel:+919624715978">+91 96247 15978</a>
          </div>

          <div className="ft-contact-group">
            <span className="ft-contact-label">Email</span>
            <a href="mailto:info@iniziooverseas.com">info@iniziooverseas.com</a>
            <a href="mailto:support@iniziooverseas.com">support@iniziooverseas.com</a>
          </div>
        </div>

      </footer>

      {/* ── Bottom Bar ───────────────────────────────────────── */}
      <div className="ft-bottom">
        <p>© {new Date().getFullYear()} Inizio Overseas. All rights reserved.</p>
        <p>Precision · Reliability · Trust</p>
      </div>
    </>
  );
}