import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <div className="about-page">

      {/* ── Page Hero ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-eyebrow">
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Who We Are</span>
        </div>
        <h1>Our <em>Story</em></h1>
        <p>
          Built on trust, precision, and a relentless pursuit of quality —
          Inizio Overseas is your global partner for textile machinery excellence.
        </p>
      </div>

      {/* ── Story Section ──────────────────────────────────────── */}
      <div className="about-story">
        <ScrollReveal>
          <div className="about-story-text">
            <p>
              At Inizio Overseas, we don't just manufacture needles and textile machinery
              parts — we build lasting partnerships based on trust, reliability, and
              innovation.
            </p>
            <p>
              Our commitment to craftsmanship, advanced technology, and continuous
              improvement has allowed us to evolve and meet the ever-changing demands of
              the global market. From our early roots to today's state-of-the-art
              facilities, we have stayed at the forefront of the manufacturing sector,
              offering a diverse portfolio of products and services designed to meet the
              highest standards of performance and precision.
            </p>
            <p>
              At Inizio Overseas, we value innovation, quality, and customer satisfaction.
              Our skilled team of engineers and technicians continually strives to improve
              our processes and stay ahead of industry trends, ensuring that we remain a
              trusted partner for all your manufacturing needs. We are committed to
              delivering excellence, on time, every time.
            </p>
            <p>
              Whether you are seeking precision needles or robust textile machinery parts,
              Inizio Overseas ensures a seamless experience, from sourcing to delivery,
              backed by the assurance of decades of proven excellence.
            </p>
            <p>
              Let us be your trusted manufacturing partner — where quality meets precision.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="about-story-aside">
            <div className="about-circle">
              <img
                src="/images/logo/world.jpg"
                alt="Global Reach"
                className="about-map-img"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Vision & Mission ───────────────────────────────────── */}
      <div className="about-vm">
        <ScrollReveal>
          <div className="section-label">Our Direction</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.15,
          }}>
            Vision &amp; <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Mission</em>
          </h2>
        </ScrollReveal>

        <div className="about-vm-grid">
          {/* Vision */}
          <ScrollReveal>
            <div className="vm-card">
              <div className="vm-card-title">
                <div className="vm-card-title-bar" />
                Vision
              </div>
              <ul className="vm-list">
                {[
                  'To be the most trusted global export partner for industrial solutions, delivering excellence and innovation to empower industries worldwide.',
                  'To become a globally trusted export partner for high-quality needles and textile machinery parts.',
                  'To lead the industry through innovation, precision manufacturing, and consistent quality.',
                  'To support global textile industries with reliable solutions that drive growth and efficiency.',
                ].map((item, i) => (
                  <li key={i}>
                    <div className="vm-list-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={100}>
            <div className="vm-card">
              <div className="vm-card-title">
                <div className="vm-card-title-bar" />
                Mission
              </div>
              <ul className="vm-list">
                {[
                  'To provide high-quality needles and textile machinery parts to clients worldwide.',
                  'To ensure timely and efficient delivery, upholding the highest standards of quality and service.',
                  'To foster long-term partnerships built on trust, reliability, and mutual growth.',
                  'To continuously adapt to evolving market demands, leveraging innovation and sustainability.',
                ].map((item, i) => (
                  <li key={i}>
                    <div className="vm-list-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}