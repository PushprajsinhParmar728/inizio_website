import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Products',
  description: 'Explore our range of precision textile needles and machinery parts — 23 needle variants and 26 critical components.',
};

export default function Products() {
  return (
    <div className="products-page">

      {/* ── Page Hero ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-eyebrow">
        </div>
        <h1>Our <em>Products</em></h1>
        <p>
          Precision-engineered needles and durable textile machinery parts
        </p>
      </div>

      {/* ── Overview Cards ─────────────────────────────────────── */}
      <div className="products-overview">
        <ScrollReveal>
          <div className="section-label">What We Offer</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.1,
          }}>
            Engineered for <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Excellence</em>
          </h2>
        </ScrollReveal>

        <div className="products-overview-grid">
          {/* Needles */}
          <ScrollReveal>
            <Link href="/product/needles" className="overview-card">
              <div className="overview-card-num">01</div>
              <h2>Needles Collection</h2>
              <p>
                Precision-engineered needle types designed for flawless stitching,
                longevity, and compatibility across all textile machines. 23 unique
                needle variants for every application.
              </p>
              <span className="overview-card-link">View Collection →</span>
            </Link>
          </ScrollReveal>

          {/* Parts */}
          <ScrollReveal delay={100}>
            <Link href="/product/parts" className="overview-card">
              <div className="overview-card-num">02</div>
              <h2>Parts Collection</h2>
              <p>
                Robust replacement parts manufactured for heavy-duty use, minimal
                downtime, and maximum machine efficiency worldwide. 26 critical
                components for seamless operations.
              </p>
              <span className="overview-card-link">View Collection →</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}