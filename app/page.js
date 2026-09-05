'use client';

import { useEffect, useRef, useState } from 'react';

const schedule = [
  { number: '01', time: '8:00 AM', title: 'Morning Aarti', text: 'Begin the day with peaceful darshan, puja and aarti.' },
  { number: '02', time: '12:00 PM', title: 'Mahaprasad', text: 'Join us for prasad and receive the blessings of Bappa.' },
  { number: '03', time: '8:00 PM', title: 'Evening Aarti', text: 'Come together for devotion, lamps and the evening aarti.' },
];

const family = ['Nikin Patel', 'Bhakti Patel', 'Aesha Patel', 'Shiv Patel'];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('visible');
      });
    };
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, [opened]);

  const openInvitation = async () => {
    setOpened(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    try {
      await audioRef.current?.play();
      setSoundOn(true);
    } catch {
      setSoundOn(false);
    }
  };

  const toggleSound = async () => {
    if (!audioRef.current) return;
    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      try {
        await audioRef.current.play();
        setSoundOn(true);
      } catch {}
    }
  };

  return (
    <main>
      <audio ref={audioRef} src="/music/ekdantay-flute.mp3" loop preload="auto" />

      {!opened && (
        <section className="cover">
          <div className="top-garland">✦ ❀ ✦ ❀ ✦</div>
          <div className="cover-card">
            <p className="sanskrit">॥ SHREE GANESHAYA NAMAHA ॥</p>
            <div className="om">ॐ</div>
            <p className="eyebrow">A JOYOUS INVITATION</p>
            <h1>PATEL CHA RAJA</h1>
            <div className="divider"><span>✦</span></div>
            <p className="family-name">PATEL FAMILY</p>
            <button className="primary" onClick={openInvitation}>Open Invitation</button>
          </div>
          <div className="cover-lotus">❀</div>
        </section>
      )}

      {opened && (
        <>
          <button className="sound" onClick={toggleSound} aria-label="Toggle music">
            {soundOn ? '♪ Music On' : '♪ Music Off'}
          </button>

          <section className="hero section-pad">
            <div className="mandala m1" />
            <div className="mandala m2" />
            <p className="sanskrit reveal">॥ SHREE GANESHAYA NAMAHA ॥</p>
            <p className="eyebrow reveal">WITH DIVINE BLESSINGS</p>
            <h1 className="reveal">PATEL CHA RAJA</h1>
            <div className="ganesha-image-wrap reveal">
  <div className="ganesha-rays"></div>

  <div className="ganesha-glow"></div>

  <img
    src="/images/ganesha.webp"
    alt="Ganpati Bappa"
    className="ganesha-image"
  />

  <div className="ganesha-pedestal">
    ✦ GANPATI BAPPA MORYA ✦
  </div>

  <div className="floating-petal petal-one">❀</div>
  <div className="floating-petal petal-two">✦</div>
  <div className="floating-petal petal-three">❀</div>
  <div className="floating-petal petal-four">✦</div>
</div>
            <h2 className="reveal">You Are Cordially Invited</h2>
            <p className="intro reveal">The Patel Family warmly invites you to celebrate the arrival of Lord Ganesha and share this auspicious occasion with love, devotion and blessings.</p>
            <div className="marquee"><span>GANPATI BAPPA MORYA • MANGALMURTI MORYA • PATEL FAMILY WELCOMES YOU • </span></div>
          </section>

         <section className="schedule section-pad" id="schedule">

  <div className="schedule-decoration schedule-decoration-left">
    ॐ
  </div>

  <div className="schedule-decoration schedule-decoration-right">
    ॐ
  </div>

  <p className="section-icon reveal">✦</p>

  <p className="eyebrow reveal">
    DAILY PUJA & AARTI
  </p>

  <h2 className="reveal">
    Sacred Schedule
  </h2>

  <p className="schedule-intro reveal">
    Join us in the divine celebrations and receive
    the blessings of Bappa.
  </p>

  <div className="schedule-line"></div>

  <div className="timeline">

    {schedule.map((item, index) => (

      <article
        className="timeline-card reveal"
        key={item.number}
        style={{ "--delay": `${index * 0.15}s` }}
      >

        <div className="schedule-number">
          {item.number}
        </div>

        <div className="schedule-diya">
          🪔
        </div>

        <div className="schedule-content">

          <div className="schedule-time">
            {item.time}
          </div>

          <h3>
            {item.title}
          </h3>

          <p>
            {item.text}
          </p>

        </div>

        <div className="card-corner corner-top"></div>
        <div className="card-corner corner-bottom"></div>

      </article>

    ))}

  </div>

  <div className="schedule-blessing reveal">
    <span>ॐ</span>
    <p>
      May Lord Ganesha bless us with wisdom,
      happiness and prosperity.
    </p>
    <span>ॐ</span>
  </div>

</section>

<section className="events section-pad">
  <p className="section-icon">❀</p>
  <p className="eyebrow reveal">THE AUSPICIOUS CELEBRATION</p>
            <h2 className="reveal">Arrival & Ceremony</h2>
            <div className="event-grid">
              <article className="royal-card reveal">
                <span>01</span><h3>Ganpati Arrival</h3><strong>13 September 2026</strong><p>8:30 PM</p>
              </article>
              <article className="royal-card reveal">
                <span>02</span><h3>Sthapana Muhurat</h3><strong>11:30 AM</strong><p>A sacred beginning with prayers and blessings</p>
              </article>
              <article className="royal-card reveal">
                <span>03</span><h3>Celebration Venue</h3><strong>Patel Residency</strong><p>B-503, Madhuvan Campus, Anand Mahal Road, Adajan, Surat</p>
              </article>
            </div>
            <a className="primary maps" href="https://maps.app.goo.gl/uid5zHvHycaLojpL9" target="_blank" rel="noreferrer">View on Google Maps</a>
          </section>

          
            <div className="timeline">
              {schedule.map((item) => (
                <article className="timeline-row reveal" key={item.number}>
                  <div className="num">{item.number}</div>
                  <div className="line" />
                  <div className="time">{item.time}</div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="family section-pad">
            <p className="section-icon">❀</p>
            <p className="eyebrow reveal">YOUR GRACIOUS HOSTS</p>
            <h2 className="reveal">Patel Family</h2>
            <p className="subtitle reveal">We look forward to welcoming you into our home and celebrating together.</p>
            <div className="family-grid">
              {family.map((name, index) => (
                <article className="member reveal" key={name}>
                  <div className="avatar">{name.split(' ').map((x) => x[0]).join('')}</div>
                  <h3>{name}</h3><p>Host</p>
                </article>
              ))}
            </div>
          </section>

          <section className="gallery section-pad">
            <p className="section-icon">✧</p>
            <p className="eyebrow reveal">CELEBRATION MEMORIES</p>
            <h2 className="reveal">Photo Gallery</h2>
            <p className="subtitle reveal">Replace these placeholders with your Ganpati, family and decoration photographs.</p>
            <div className="gallery-grid">
              {['Ganpati Photo', 'Decoration Photo', 'Family Photo', 'Aarti Photo', 'Mahaprasad Photo', 'Celebration Photo'].map((label, i) => (
                <div className={`photo p${i + 1} reveal`} key={label}><span>✦</span><p>{label}</p></div>
              ))}
            </div>
          </section>

          <section className="rsvp section-pad">
            <div className="rsvp-card reveal">
              <p className="section-icon">ॐ</p>
              <p className="eyebrow">BLESSINGS & RSVP</p>
              <h2>We Await Your Presence</h2>
              <p>Your presence will make this celebration even more joyful and memorable.</p>
              <a className="primary disabled" href="#" onClick={(e) => e.preventDefault()}>WhatsApp RSVP — Add Number</a>
              <small>Edit the WhatsApp number later inside <b>app/page.js</b>.</small>
            </div>
          </section>

          <footer>
            <p>Until We Meet...</p>
            <h2>GANPATI BAPPA MORYA</h2>
            <div className="footer-om">ॐ</div>
            <p>MANGALMURTI MORYA</p>
            <small>Made with devotion and love by the Patel Family</small>
          </footer>
        </>
      )}
    </main>
  );
}
