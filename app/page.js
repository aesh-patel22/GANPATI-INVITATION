'use client';

import { useEffect, useRef, useState } from 'react';

const schedule = [
  {
    number: '01',
    time: '8:00 AM',
    title: 'Morning Aarti',
    text: 'Begin the day with peaceful darshan, puja and aarti.',
    icon: 'diya',
  },
  {
    number: '02',
    time: '12:00 PM',
    title: 'Mahaprasad',
    text: 'Join us for prasad and receive the blessings of Bappa.',
    icon: 'food',
  },
  {
    number: '03',
    time: '8:00 PM',
    title: 'Evening Aarti',
    text: 'Come together for devotion, lamps and the evening aarti.',
    icon: 'diya',
  },
];

const family = [
  'Nikin Patel',
  'Bhakti Patel',
  'Aesha Patel',
  'Shiv Patel',
];

function CalendarIcon() {
  return (
    <svg
      className="event-icon-svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="12"
        y="14"
        width="40"
        height="38"
        rx="5"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M20 9V20M44 9V20M12 25H52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M22 33H27M34 33H39M22 41H27M34 41H39"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="event-icon-svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="21"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M32 19V33L41 38"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="event-icon-svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 55C32 55 48 39 48 27C48 18.16 40.84 11 32 11C23.16 11 16 18.16 16 27C16 39 32 55 32 55Z"
        stroke="currentColor"
        strokeWidth="3"
      />

      <circle
        cx="32"
        cy="27"
        r="6"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg
      className="event-icon-svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 39C14 29 22 22 32 22C42 22 50 29 50 39C50 45 42 49 32 49C22 49 14 45 14 39Z"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M19 36H45M23 29C23 22 26 17 29 13M32 28V11M41 29C41 22 38 17 35 13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M10 49H54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (
          el.getBoundingClientRect().top <
          window.innerHeight - 80
        ) {
          el.classList.add('visible');
        }
      });
    };

    reveal();

    window.addEventListener(
      'scroll',
      reveal,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        reveal
      );
    };
  }, [opened]);

  const openInvitation = async () => {
    setOpened(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 50);

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
      } catch {
        setSoundOn(false);
      }
    }
  };

  return (
    <main>

      {/* =========================
          BACKGROUND MUSIC
          ========================= */}

      <audio
        ref={audioRef}
        src="/music/ekdantay-flute.mp3"
        loop
        preload="auto"
      />

      {/* =========================
          COVER / OPEN INVITATION
          ========================= */}

      {!opened && (
        <section className="cover">

          <div className="top-garland">
            ✦ ❀ ✦ ❀ ✦
          </div>

          <div className="cover-card">

            <p className="sanskrit">
              ॥ SHREE GANESHAYA NAMAHA ॥
            </p>

            <div className="om">
              ॐ
            </div>

            <p className="eyebrow">
              A JOYOUS INVITATION
            </p>

            <h1>
              PATEL CHA RAJA
            </h1>

            <div className="divider">
              <span>
                ✦
              </span>
            </div>

            <p className="family-name">
              PATEL FAMILY
            </p>

            <button
              className="primary"
              onClick={openInvitation}
            >
              Open Invitation
            </button>

          </div>

          <div className="cover-lotus">
            ❀
          </div>

        </section>
      )}

      {/* =========================
          MAIN INVITATION
          ========================= */}

      {opened && (
        <>

          {/* MUSIC BUTTON */}

          <button
            className="sound"
            onClick={toggleSound}
            aria-label="Toggle music"
          >
            {soundOn
              ? '♪ Music On'
              : '♪ Music Off'}
          </button>


          {/* =========================
              HERO
              ========================= */}

          <section className="hero section-pad">

            <div className="mandala m1" />

            <div className="mandala m2" />

            <p className="sanskrit reveal">
              ॥ SHREE GANESHAYA NAMAHA ॥
            </p>

            <p className="eyebrow reveal">
              WITH DIVINE BLESSINGS
            </p>

            <h1 className="reveal">
              PATEL CHA RAJA
            </h1>


            {/* GANPATI IMAGE */}

            <div
              className="ganesha-image-wrap reveal"
              aria-label="Lord Ganesha"
            >

              {/* GOLDEN RAYS */}

              <div className="ganesha-rays" />

              {/* GLOW */}

              <div className="ganesha-glow" />


              {/* GANPATI */}

              <img
                src="/images/ganesha2.webp"
                alt="Ganpati Bappa"
                className="ganesha-image"
              />


              {/* PEDESTAL */}

              <div className="ganesha-pedestal">
                ✦ GANPATI BAPPA MORYA ✦
              </div>


              {/* =========================
                  REALISTIC FALLING PETALS

                  FALL ONLY ONCE
                  APPROX 3–4 SECONDS
                  ========================= */}

              <div
                className="petal-rain"
                aria-hidden="true"
              >

                <span className="real-petal white-petal petal-1" />

                <span className="real-petal gold-petal petal-2" />

                <span className="real-petal white-petal petal-3" />

                <span className="real-petal gold-petal petal-4" />

                <span className="real-petal white-petal petal-5" />

                <span className="real-petal gold-petal petal-6" />

                <span className="real-petal white-petal petal-7" />

                <span className="real-petal gold-petal petal-8" />

                <span className="real-petal white-petal petal-9" />

                <span className="real-petal gold-petal petal-10" />

                <span className="real-petal white-petal petal-11" />

                <span className="real-petal gold-petal petal-12" />

                <span className="real-petal white-petal petal-13" />

                <span className="real-petal gold-petal petal-14" />

                <span className="real-petal white-petal petal-15" />

                <span className="real-petal gold-petal petal-16" />

                <span className="real-petal white-petal petal-17" />

                <span className="real-petal gold-petal petal-18" />

                <span className="real-petal white-petal petal-19" />

                <span className="real-petal gold-petal petal-20" />

                <span className="real-petal white-petal petal-21" />

                <span className="real-petal gold-petal petal-22" />

              </div>

            </div>


            <h2 className="reveal">
              You Are Cordially Invited
            </h2>

            <p className="intro reveal">
              The Patel Family warmly invites you
              to celebrate the arrival of Lord Ganesha
              and share this auspicious occasion with
              love, devotion and blessings.
            </p>


            {/* MARQUEE */}

            <div className="marquee">

              <span>
                GANPATI BAPPA MORYA •
                MANGALMURTI MORYA •
                PATEL FAMILY WELCOMES YOU •
              </span>

            </div>

          </section>


          {/* =========================
              SACRED SCHEDULE
              ========================= */}

          <section
            className="schedule section-pad"
            id="schedule"
          >

            <div className="schedule-decoration schedule-decoration-left">
              ॐ
            </div>

            <div className="schedule-decoration schedule-decoration-right">
              ॐ
            </div>


            <p className="section-icon reveal">
              ✦
            </p>

            <p className="eyebrow reveal">
              DAILY PUJA &amp; AARTI
            </p>

            <h2 className="reveal">
              Sacred Schedule
            </h2>

            <p className="schedule-intro reveal">
              Join us in the divine celebrations
              and receive the blessings of Bappa.
            </p>

            <div className="schedule-line" />


            <div className="timeline">

              {schedule.map(
                (item, index) => (

                  <article
                    className="timeline-card reveal"
                    key={item.number}
                    style={{
                      '--delay':
                        `${index * 0.15}s`,
                    }}
                  >

                    <div className="schedule-number">
                      {item.number}
                    </div>


                    <div className="schedule-diya">

                      {item.icon === 'food'
                        ? <FoodIcon />
                        : '🪔'}

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


                    <div className="card-corner corner-top" />

                    <div className="card-corner corner-bottom" />

                  </article>

                )
              )}

            </div>


            <div className="schedule-blessing reveal">

              <span>
                ॐ
              </span>

              <p>
                May Lord Ganesha bless us
                with wisdom, happiness and prosperity.
              </p>

              <span>
                ॐ
              </span>

            </div>

          </section>


          {/* =========================
              ARRIVAL & CEREMONY
              ========================= */}

          <section className="events section-pad">

            <p className="section-icon">
              ❀
            </p>

            <p className="eyebrow reveal">
              THE AUSPICIOUS CELEBRATION
            </p>

            <h2 className="reveal">
              Arrival &amp; Ceremony
            </h2>


            <div className="event-grid">


              {/* GANPATI ARRIVAL */}

              <article className="royal-card reveal">

                <div className="event-number">
                  01
                </div>

                <div className="event-icon">
                  <CalendarIcon />
                </div>

                <h3>
                  Ganpati Arrival
                </h3>

                <strong>
                  13 September 2026
                </strong>

                <p className="event-time">
                  8:30 PM
                </p>

              </article>


              {/* STHAPANA */}

              <article className="royal-card reveal">

                <div className="event-number">
                  02
                </div>

                <div className="event-icon">
                  <ClockIcon />
                </div>

                <h3>
                  Sthapana Muhurat
                </h3>

                <strong>
                  11:30 AM
                </strong>

                <p>
                  A sacred beginning with
                  prayers and blessings
                </p>

              </article>


              {/* VENUE */}

              <article className="royal-card reveal">

                <div className="event-number">
                  03
                </div>

                <div className="event-icon">
                  <LocationIcon />
                </div>

                <h3>
                  Celebration Venue
                </h3>

                <strong>
                  Patel Residency
                </strong>

                <p>
                  B-503, Madhuvan Campus,
                  Anand Mahal Road,
                  Adajan, Surat
                </p>

              </article>

            </div>


            <a
              className="primary maps"
              href="https://maps.app.goo.gl/uid5zHvHycaLojpL9"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>

          </section>


          {/* =========================
              FAMILY
              ========================= */}

          <section className="family section-pad">

            <p className="section-icon">
              ❀
            </p>

            <p className="eyebrow reveal">
              YOUR GRACIOUS HOSTS
            </p>

            <h2 className="reveal">
              Patel Family
            </h2>

            <p className="subtitle reveal">
              We look forward to welcoming you
              into our home and celebrating together.
            </p>


            <div className="family-grid">

              {family.map(
                (name) => (

                  <article
                    className="member reveal"
                    key={name}
                  >

                    <div className="avatar">

                      {name
                        .split(' ')
                        .map((x) => x[0])
                        .join('')}

                    </div>

                    <h3>
                      {name}
                    </h3>

                    <p>
                      Host
                    </p>

                  </article>

                )
              )}

            </div>

          </section>


          {/* =========================
              GALLERY
              ========================= */}

          <section className="gallery section-pad">

            <p className="section-icon">
              ✧
            </p>

            <p className="eyebrow reveal">
              CELEBRATION MEMORIES
            </p>

            <h2 className="reveal">
              Photo Gallery
            </h2>

            <p className="subtitle reveal">
              Replace these placeholders with
              your Ganpati, family and
              decoration photographs.
            </p>


            <div className="gallery-grid">

              {[
                'Ganpati Photo',
                'Decoration Photo',
                'Family Photo',
                'Aarti Photo',
                'Mahaprasad Photo',
                'Celebration Photo',
              ].map(
                (label, i) => (

                  <div
                    className={`photo p${i + 1} reveal`}
                    key={label}
                  >

                    <span>
                      ✦
                    </span>

                    <p>
                      {label}
                    </p>

                  </div>

                )
              )}

            </div>

          </section>


          {/* =========================
              RSVP
              ========================= */}

          <section className="rsvp section-pad">

            <div className="rsvp-card reveal">

              <p className="section-icon">
                ॐ
              </p>

              <p className="eyebrow">
                BLESSINGS &amp; RSVP
              </p>

              <h2>
                We Await Your Presence
              </h2>

              <p>
                Your presence will make this
                celebration even more joyful
                and memorable.
              </p>


              <a
                className="primary disabled"
                href="#"
                onClick={(e) =>
                  e.preventDefault()
                }
              >
                WhatsApp RSVP — Add Number
              </a>


              <small>
                Edit the WhatsApp number later
                inside <b>app/page.js</b>.
              </small>

            </div>

          </section>


          {/* =========================
              FOOTER
              ========================= */}

          <footer>

            <p>
              Until We Meet...
            </p>

            <h2>
              GANPATI BAPPA MORYA
            </h2>

            <div className="footer-om">
              ॐ
            </div>

            <p>
              MANGALMURTI MORYA
            </p>

            <small>
              Made with devotion and love
              by the Patel Family
            </small>

          </footer>

        </>
      )}

    </main>
  );
}
