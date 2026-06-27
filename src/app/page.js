import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>

{/* ── QUOTE SECTION (above everything) ───────────────────── */}
      <section className="quote-section">

        <div className="quote-top-ornament">
          <div className="quote-orn-line" />
          <div className="quote-orn-diamond" />
          <div className="quote-orn-line" />
        </div>

        <p className="quote-main-text">
          Discover Excellence with{' '}
          <em>Inizio Overseas</em>
          <br />
          Your Gateway to Superior{' '}
          <strong>Industrial Solutions.</strong>
        </p>

        <div className="quote-bottom-ornament">
          <div className="quote-orn-line" />
          <div className="quote-orn-diamond" />
          <div className="quote-orn-line" />
        </div>
      </section>
    
      {/* ── HERO SPLIT ─────────────────────────────────────────── */}
      <section className="hero">

        {/* Left — Text */}
        <div className="hero-left">

          <div className="hero-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Premium Textile Components</span>
          </div>

          <h1 className="hero-title">
            The Art of<br />
            <strong>Precision <em>Needles</em></strong>
            &amp; Machinery Parts
          </h1>

          <p className="hero-desc">
            High-precision textile machinery components trusted by manufacturers
            worldwide. Engineered for flawless performance, built to last.
          </p>

          <div className="hero-actions">
            <Link href="/about" className="btn-teal">
              Our Story
            </Link>
          </div>
        </div>

        {/* Right — Image */}
        <div className="hero-right">
          <Image
            src="/images/home/first2.jpg"
            alt="Precision textile machinery"
            fill
            className="hero-img"
            priority
          />
          <div className="hero-img-overlay" />
        </div>
      </section>


      {/* ── MARQUEE ────────────────────────────────────────────── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[
            'Precision Needles',
            'Replacement Parts',
            'Global Export',
            'ISO Quality',
            'On-Time Delivery',
            'Trusted Worldwide',
            'Precision Needles',
            'Replacement Parts',
            'Global Export',
            'ISO Quality',
            'On-Time Delivery',
            'Trusted Worldwide',
          ].map((text, i) => (
            <div className="m-item" key={i}>
              <div className="m-diamond" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>


      {/* ── ABOUT STRIP ────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="about-strip">
          <div className="about-img-wrap">
            <Image
              src="/images/home/second1.jpg"
              alt="Precision manufacturing"
              fill
              className="about-img"
            />
          </div>

          <div className="about-content">
            <div className="section-label">Our Story</div>
            <h2>
              Where <em>Quality</em><br />Meets Precision
            </h2>
            <p>
              At Inizio Overseas, we don't just manufacture needles and textile
              machinery parts — we build lasting partnerships rooted in trust,
              reliability, and innovation.
            </p>
            <p style={{ marginTop: '1rem' }}>
              From our early roots to today's state-of-the-art facilities, we
              have stayed at the forefront of the manufacturing sector, offering
              a diverse portfolio designed to meet the highest standards of
              performance.
            </p>
            <Link href="/contact" className="about-link">
              Contact Us
            </Link>
          </div>
        </div>
      </ScrollReveal>


      {/* ── PRODUCTS ───────────────────────────────────────────── */}
      <section className="products-section">
        <ScrollReveal>
          <div className="sec-header">
            <div>
              <div className="section-label">Core Product Lines</div>
              <h2 className="sec-title">
                Engineered for <em>Excellence</em>
              </h2>
            </div>
            <Link href="/product" className="sec-link">
              View All Products →
            </Link>
          </div>
        </ScrollReveal>

        <div className="products-grid">
          {/* Card 1 */}
          <ScrollReveal>
            <div className="p-card">
              <div className="p-num">01</div>
              <Image
                src="/images/home/needlecard.jpg"
                alt="Precision needles"
                width={600}
                height={200}
                className="p-card-img"
              />
              <h3>Needles Collection</h3>
              <p>
                Precision-engineered needle types designed for flawless stitching,
                longevity, and compatibility across all textile machines.
              </p>
              <Link href="/product/needles" className="p-card-link">
                View Needles →
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={100}>
            <div className="p-card">
              <div className="p-num">02</div>
              <Image
                src="/images/home/partcard.jpg"
                alt="Machinery parts"
                width={600}
                height={200}
                className="p-card-img"
              />
              <h3>Parts Collection</h3>
              <p>
                Robust replacement parts manufactured for heavy-duty use, minimal
                downtime, and maximum machine efficiency worldwide.
              </p>
              <Link href="/product/parts" className="p-card-link">
                View Parts →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}