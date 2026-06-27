import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const parts = [
  { id: 1,  name: 'Muller Martini Ventura Gripper',           image: '/images/parts/DSC 09901 - Muller Martini Ventura Gripper.jpg' },
  { id: 2,  name: 'Aster Gripper',                            image: '/images/parts/DSC 09909 - Aster Gripper.jpg' },
  { id: 3,  name: 'Martini Two Side Gripper',                  image: '/images/parts/09921 - Martini Two Side Gripper.jpg' },
  { id: 4,  name: 'Robertson Gripper',                         image: '/images/parts/09927 - Robertson Gripper.jpg' },
  { id: 5,  name: 'Smyth Gripper',                             image: '/images/parts/09939 - Smyth Gripper.jpg' },
  { id: 6,  name: 'Old Polygraph Gripper',                     image: '/images/parts/09949 - Old Polygraph Gripper.jpg' },
  { id: 7,  name: 'Martini Single Side Gripper',               image: '/images/parts/09963 - Martini Single Side Gripper.jpg' },
  { id: 8,  name: 'Ishida Needle Holder',                      image: '/images/parts/09973 - Ishida Needle Holder.jpg' },
  { id: 9,  name: 'Stitching Loop Bar',                        image: '/images/parts/09977 - Stiching Loop Bar.jpg' },
  { id: 10, name: 'Kumaran Thread Cutter Holder',              image: '/images/parts/09982 - Kumaran Thread Cutter Holder.jpg' },
  { id: 11, name: 'Polygraph And Brahmer Hook Holder Assembly', image: '/images/parts/09996 - Polygraph And Brahmer Hook Holder Assembly.jpg' },
  { id: 12, name: 'Two Mouth Thread Tension',                  image: '/images/parts/DSC 00003 - Two Mouth Thread Tension.jpg' },
  { id: 13, name: 'Section Patti',                             image: '/images/parts/00027 - Section Patti.jpg' },
  { id: 14, name: 'Universal Bar 8 Inch, 10 Inch',             image: '/images/parts/00049 - Universal Bar 8 Inch, 10 Inch.jpg' },
  { id: 15, name: 'Bevel Gear A',                              image: '/images/parts/00059 - Bewel Gear A.jpg' },
  { id: 16, name: 'Bevel Gear B',                              image: '/images/parts/00060 - Bewel Gear B.jpg' },
  { id: 17, name: 'Big Gear',                                  image: '/images/parts/00062 - Big Gear.jpg' },
  { id: 18, name: 'Stitching Driver Head',                     image: '/images/parts/00071 - Stiching Driver Head.jpg' },
  { id: 19, name: 'Kumaran Hook Holder Assembly',              image: '/images/parts/00075 - Kumaran Hook Holder Assembly.jpg' },
  { id: 20, name: 'Ishida Hook Holder Assembly',               image: '/images/parts/00086 - Ishida Hook Holder Assembly.jpg' },
  { id: 21, name: 'Stitching Clincher Box',                    image: '/images/parts/00099 - Stiching Clincher Box.jpg' },
  { id: 22, name: 'Polygraph Hook Holder Assembly',            image: '/images/parts/00110 - Polygraph Hook Holder Assembly.jpg' },
  { id: 23, name: 'Kalsi Hook Holder Assembly',                image: '/images/parts/00116 - Kalsi Hook Holder Assembly.jpg' },
  { id: 24, name: 'Thread Tension Spring',                     image: '/images/parts/00136 - Thread Tension Spring.jpg' },
  { id: 25, name: 'Kumaran Gripper',                           image: '/images/parts/00141 - Kumaran Gripper.jpg' },
  { id: 26, name: 'Comb',                                      image: '/images/parts/00144 - Comb.jpg' },
];

export default function Parts() {
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
          Machinery <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Parts</em>
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
          Robust replacement parts built for heavy-duty use, minimal downtime,
          and maximum machine efficiency worldwide.
        </p>

        {/* Tab switcher */}
        <div className="product-tabs" style={{ marginTop: '2.5rem' }}>
          <Link href="/product/needles" className="product-tab">
            Needles
          </Link>
          <Link href="/product/parts" className="product-tab active">
            Parts
          </Link>
        </div>
      </div>

      {/* ── Grid ───────────────────────────────────────────────── */}
      <div className="product-grid-section">
        <div className="product-items-grid">
          {parts.slice(0, parts.length - 2).map((part, i) => (
            <ScrollReveal key={part.id} delay={Math.min(i % 3, 2) * 60}>
              <div className="product-item">
                <div className="product-item-img-wrap">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="product-item-img"
                  />
                </div>
                <div className="product-item-body">
                  <div className="product-item-name">{part.name}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Last row: 2 items centered */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.3rem',
          marginTop: '1.3px',
        }}>
          {parts.slice(-2).map((part, i) => (
            <div key={part.id} style={{ flex: '0 0 calc((100% - 2.6rem) / 3)', maxWidth: 'calc((100% - 2.6rem) / 3)', }}>
              <ScrollReveal delay={i * 60}>
                <div className="product-item">
                  <div className="product-item-img-wrap">
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      className="product-item-img"
                    />
                  </div>
                  <div className="product-item-body">
                    <div className="product-item-name">{part.name}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}