import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const needles = [
  { id: 1,  name: 'Section Load',                        image: '/images/needles/DSC 00160 - Section Load.jpg' },
  { id: 2,  name: 'Thread Separator (Aster)',             image: '/images/needles/DSC 00175 - Thread Seprator (Aster).jpg' },
  { id: 3,  name: 'Thread Carrier (Aster)',               image: '/images/needles/DSC 00180 - Thread Carrier (Aster).jpg' },
  { id: 4,  name: 'Thread Cutter (Kumaran)',              image: '/images/needles/DSC 00217 - Thread Cutter (Kumaran).jpg' },
  { id: 5,  name: 'Round Punch (Aster, Smyth)',           image: '/images/needles/DSC 00226 - Round Punch (Aster , Smyth).jpg' },
  { id: 6,  name: 'Thread Cutter (Robertson)',            image: '/images/needles/DSC 00239 - Thread Cutter (Robertson).jpg' },
  { id: 7,  name: 'Punch (Aster)',                        image: '/images/needles/DSC 00248 - Punch (Aster).jpg' },
  { id: 8,  name: 'U.Y 9848',                             image: '/images/needles/DSC 00305 - U.Y 9848.jpg' },
  { id: 9,  name: 'Leather Sewing',                       image: '/images/needles/DSC 00294 - Leather Sewing-1.jpg' },
  { id: 10, name: 'Leather Sewing',                       image: '/images/needles/DSC 00294 - Leather Sewing-2.jpg' },
  { id: 11, name: 'Leather Long Needle',                  image: '/images/needles/DSC 00310 - Leather Long Needle.jpg' },
  { id: 12, name: 'Hook Needle',                          image: '/images/needles/DSC 00318 - Hook Needle .jpg' },
  { id: 13, name: 'Hook Needle',                          image: '/images/needles/DSC 00331 - Hook Needle .jpg' },
  { id: 14, name: 'Brahmer Needle',                       image: '/images/needles/DSC 00338 - Brahmer Needle.jpg' },
  { id: 15, name: 'Muller Martini Hook Needle',           image: '/images/needles/DSC 00344 - Muller Martini Hook Needle .jpg' },
  { id: 16, name: 'Muller Martini Ventura Needle',        image: '/images/needles/DSC 00348 - Muller Martini Ventura Needle .jpg' },
  { id: 17, name: 'Polygraph Hook Needle',                image: '/images/needles/DSC 00355 - Polygraph Hook Needle .jpg' },
  { id: 18, name: 'Muller Martini Thin',                  image: '/images/needles/DSC 00363 - Muller Martini Thin.jpg' },
  { id: 19, name: 'Aster And Smyth Hook Needle',          image: '/images/needles/DSC 00366 - Aster And Smyth Hook Needle.jpg' },
  { id: 20, name: 'Muller Martini Ventura Hook Needle',   image: '/images/needles/DSC 00380 - Muller Martini Ventura Hook Needle.jpg' },
  { id: 21, name: 'Aster And Smyth Sewing Needle',        image: '/images/needles/DSC 00383 - Aster And Smyth Sewing Needle.jpg' },
  { id: 22, name: 'Martini Sewing Needle',                image: '/images/needles/DSC 00393 - Martini Sewing Needle.jpg' },
  { id: 23, name: 'Eshida Sewing Needle',                 image: '/images/needles/DSC 00401 - Eshida Sewing Needle.jpg' },
  { id: 24, name: 'Aster Nail Punch',                     image: '/images/needles/DSC 00408 - Aster Nail Punch.jpg' },
];

export default function Needles() {
  return (
    <div className="product-listing">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="product-listing-header">
        <div className="page-hero-eyebrow">
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          color: 'var(--ink)',
          lineHeight: 1.05,
          animation: 'fadeLeft 0.9s 0.4s ease both',
        }}>
          Needles <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Collection</em>
        </h1>
        <p style={{
          marginTop: '1rem',
          fontSize: '0.95rem',
          color: 'var(--muted)',
          maxWidth: '480px',
          lineHeight: 1.8,
          fontWeight: 300,
          animation: 'fadeLeft 0.9s 0.6s ease both',
        }}>
          High-precision needle types engineered for various textile applications,
          flawless stitching, and lasting compatibility.
        </p>

        {/* Tab switcher */}
        <div className="product-tabs" style={{ marginTop: '2.5rem' }}>
          <Link href="/product/needles" className="product-tab active">
            Needles
          </Link>
          <Link href="/product/parts" className="product-tab">
            Parts
          </Link>
        </div>
      </div>

      {/* ── Grid ───────────────────────────────────────────────── */}
      <div className="product-grid-section">
        <div className="product-items-grid">
          {needles.map((needle, i) => (
            <ScrollReveal key={needle.id} delay={Math.min(i % 3, 2) * 60}>
              <div className="product-item">
                <div className="product-item-img-wrap">
                  <Image
                    src={needle.image}
                    alt={needle.name}
                    fill
                    className="product-item-img"
                  />
                </div>
                <div className="product-item-body">
                  <div className="product-item-name">{needle.name}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
}