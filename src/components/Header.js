'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, X, Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home',       path: '/' },
  { name: 'About Us',   path: '/about' },
  { name: 'Products',   path: '/product' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Desktop / Tablet Header ────────────────── */}
      <header
        className="nav-animate"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 4rem',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ position: 'relative', width: '140px', height: '50px' }}>
            <Image
              src="/images/logo/logo.png"
              alt="Inizio Overseas"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} className="hidden-mobile">
          <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    textDecoration: 'none',
                    color: pathname === item.path ? 'var(--teal)' : 'var(--ink)',
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  className="nav-link"
                >
                  {item.name}
                  {pathname === item.path && (
                    <span style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '1px', background: 'var(--teal)',
                      animation: 'underlineIn 0.4s ease forwards',
                    }} />
                  )}
                  {pathname !== item.path && (
                    <span className="nav-hover-line" style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '1px', background: 'var(--teal)',
                      transform: 'scaleX(0)', transformOrigin: 'left',
                      transition: 'transform 0.4s ease',
                    }} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden-mobile" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          {[
            { href: 'https://facebook.com/yourpage',  Icon: Facebook,  label: 'Facebook' },
            { href: 'https://instagram.com/yourpage', Icon: Instagram, label: 'Instagram' },
            { href: 'https://wa.me/yourphonenumber',  Icon: null,      label: 'WhatsApp' },
          ].map(({ href, Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="nav-social-icon">
              {Icon ? <Icon size={20} /> : (
                <img
                  src="/images/logo/what'sapp.jpg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  style={{ filter: 'invert(56%) sepia(6%) saturate(400%) hue-rotate(340deg) brightness(95%)', transition: 'filter 0.4s ease' }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: '4px' }}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </header>

      {/* ── Overlay ────────────────── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 998,
          }}
        />
      )}

      {/* ── Drawer ────────────────── */}
      <div
        className="menu-drawer"
        style={{
          position: 'fixed',
          top: 0, right: 0, bottom: 0,
          width: '65%',
          zIndex: 999,
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '1rem', right: '1rem',
            zIndex: 9999,
            width: '44px', height: '44px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
          }}
        >
          <X size={24} strokeWidth={2} color="#333" />
        </button>

        {/* Nav Links */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
          padding: '0 2rem',
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.3rem',
                fontWeight: 400,
                textDecoration: 'none',
                color: pathname === item.path ? 'var(--teal)' : 'var(--ink)',
                textAlign: 'center',
                padding: '0.25rem 1rem',
                transition: 'color 0.2s',
              }}
              className="mobile-nav-link"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons - grey bottom bar */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          padding: '1.2rem 0',
          borderTop: '1px solid #eee',
          background: '#f7f7f7',
        }}>
          {[
            { href: 'https://facebook.com/yourpage',  Icon: Facebook,  label: 'Facebook' },
            { href: 'https://instagram.com/yourpage', Icon: Instagram, label: 'Instagram' },
            { href: 'https://wa.me/yourphonenumber',  Icon: null,      label: 'WhatsApp' },
          ].map(({ href, Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="mobile-social-icon"
              style={{
                width: '46px', height: '46px',
                borderRadius: '50%',
                border: '1px solid #e5e5e5',
                background: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted)',
                transition: 'all 0.3s ease',
              }}
            >
              {Icon ? <Icon size={20} /> : (
                <img
                  src="/images/logo/what'sapp.jpg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  style={{ filter: 'invert(56%) sepia(6%) saturate(400%) hue-rotate(340deg) brightness(95%)' }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none; }
        .nav-link:hover { color: var(--teal) !important; }
        .nav-link:hover .nav-hover-line { transform: scaleX(1) !important; }

        @keyframes underlineIn {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }

        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
          header { padding: 1.25rem 1.5rem !important; }
        }

        .nav-social-icon {
          width: 42px; height: 42px; min-width: 42px;
          border-radius: 50%; border: 1.3px solid var(--cream2);
          background: transparent; display: inline-flex;
          align-items: center; justify-content: center;
          color: var(--muted); text-decoration: none;
          transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nav-social-icon:hover {
          background: var(--teal); border-color: var(--teal);
          color: #ffffff; transform: translateY(-6px) scale(1.1);
        }
        .nav-social-icon svg { display: block; pointer-events: none; flex-shrink: 0; }
        .nav-social-icon:hover img { filter: brightness(0) invert(1) !important; }

        .mobile-social-icon:hover {
          background: var(--teal) !important;
          border-color: var(--teal) !important;
          color: #ffffff !important;
          transform: translateY(-4px) scale(1.08);
        }
        .mobile-social-icon:hover img {
          filter: brightness(0) invert(1) !important;
        }

        .mobile-nav-link:hover {
          color: var(--teal) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}