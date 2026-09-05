'use client';

import { useEffect, useRef, useState } from 'react';

const schedule = [
  {
    number: '01',
    time: '8:00 AM',
    title: 'Morning Aarti',
    text: 'Begin the day with peaceful darshan, puja and aarti.',
  },
  {
    number: '02',
    time: '12:00 PM',
    title: 'Mahaprasad',
    text: 'Join us for prasad and receive the blessings of Bappa.',
  },
  {
    number: '03',
    time: '8:00 PM',
    title: 'Evening Aarti',
    text: 'Come together for devotion, lamps and the evening aarti.',
  },
];

const family = [
  'Nikin Patel',
  'Bhakti Patel',
  'Aesha Patel',
  'Shiv Patel',
];


/* =========================================================
   GOLDEN ICONS
   No external library required
   ========================================================= */

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="event-icon-svg"
      aria-hidden="true"
    >
      <rect
        x="12"
        y="14"
        width="40"
        height="38"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M20 9v11M44 9v11M12 25h40"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M21 33h4M30 33h4M39 33h4M21 42h4M30 42h4M39 42h4"
        fill="none"
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
      viewBox="0 0 64 64"
      className="event-icon-svg"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M32 19v14l9 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function LocationIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="event-icon-svg"
      aria-hidden="true"
    >
      <path
        d="M32 55s17-17.2 17-31a17 17 0 1 0-34 0c0 13.8 17 31 17 31Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <circle
        cx="32"
        cy="24"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}


function FoodIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="schedule-food-icon"
      aria-hidden="true"
    >
      {/* plate */}
      <ellipse
        cx="32"
        cy="45"
        rx="22"
        ry="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* food bowl */}
      <path
        d="M14 35h36"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M17 35c1 9 7 14 15 14s14-5 15-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* food */}
      <path
        d="M20 32c1-6 5-9 8-9 2 0 3 2 4 4 1-5 4-8 7-7 3 1 4 5 4 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* decorative food dots */}
      <circle
        cx="25"
        cy="30"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="38"
        cy="29"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}


/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Home() {

  const [opened, setOpened] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const audioRef = useRef(null);


  /* =======================================================
     REVEAL ANIMATION
     ======================================================= */

  useEffect(() => {

    const reveal = () => {

      document
        .querySelectorAll('.reveal')
        .forEach((el) => {

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
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        reveal
      );
    };

  }, [opened]);


  /* =======================================================
     OPEN INVITATION + MUSIC
     ======================================================= */

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


  /* =======================================================
     MUSIC TOGGLE
     ======================================================= */

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

      {/* ===================================================
          AUDIO
          =================================================== */}

      <audio
        ref={audioRef}
        src="/music/ekdantay-flute.mp3"
        loop
        preload="auto"
      />


      {/* ===================================================
          OPENING COVER
          =================================================== */}

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
              <span>✦</span>
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


      {/* ===================================================
          INVITATION
          =================================================== */}

      {opened && (

        <>

          {/* MUSIC */}

          <button
            className="sound"
            onClick={toggleSound}
            aria-label="Toggle music"
          >
            {soundOn
              ? '♪ Music On'
              : '♪ Music Off'}
          </button>


          {/* =================================================
              HERO
              ================================================= */}

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


            {/* =================================================
                GANPATI
                ================================================= */}

            <div className="ganesha-image-wrap reveal">

              {/* rotating rays */}

              <div className="ganesha-rays">

                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />

              </div>


              {/* glow */}

              <div className="ganesha-glow" />


              {/* image */}

              <img
                src="/images/ganesha2.webp"
                alt="Ganpati Bappa"
                className="ganesha-image"
              />


              {/* pedestal */}

              <div className="ganesha-pedestal">
                ✦ GANPATI BAPPA MORYA ✦
              </div>


              {/* =================================================
                  PETAL RAIN
                  ONLY 3 SECONDS
                  ================================================= */}

              <div
                className="petal-rain"
                aria-hidden="true"
              >

                <span className="fall-petal petal-1">
                  ❀
                </span>

                <span className="fall-petal petal-2">
                  ❀
                </span>

                <span className="fall-petal petal-3">
                  ✦
                </span>

                <span className="fall-petal petal-4">
                  ❀
                </span>

                <span className="fall-petal petal-5">
                  ✦
                </span>

                <span className="fall-petal petal-6">
                  ❀
                </span>

                <span className="fall-petal petal-7">
                  ❀
                </span>

                <span className="fall-petal petal-8">
                  ✦
                </span>

                <span className="fall-petal petal-9">
                  ❀
                </span>

                <span className="fall-petal petal-10">
                  ✦
                </span>

                <span className="fall-petal petal-11">
                  ❀
                </span>

                <span className="fall-petal petal-12">
                  ❀
                </span>

                <span className="fall-petal petal-13">
                  ✦
                </span>

                <span className="fall-petal petal-14">
                  ❀
                </span>

                <span className="fall-petal petal-15">
                  ✦
                </span>

                <span className="fall-petal petal-16">
                  ❀
                </span>

                <span className="fall-petal petal-17">
                  ❀
                </span>

                <span className="fall-petal petal-18">
                  ✦
                </span>

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


            <div className="marquee">

              <span>
                GANPATI BAPPA MORYA •
                MANGALMURTI MORYA •
                PATEL FAMILY WELCOMES YOU •
              </span>

            </div>

          </section>


          {/* =================================================
              SACRED SCHEDULE
              ================================================= */}

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
              DAILY PUJA & AARTI
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

              {schedule.map((item, index) => (

                <article
                  className="timeline-card reveal"
                  key={item.number}
                  style={{
                    '--delay': `${index * 0.15}s`,
                  }}
                >

                  <div className="schedule-number">
                    {item.number}
                  </div>


                  {/* =========================================
                      FOOD ICON ONLY FOR MAHAPRASAD
                      ========================================= */}

                  <div className="schedule-diya">

                    {item.title === 'Mahaprasad'
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

              ))}

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


          {/* =================================================
              ARRIVAL & CEREMONY
              ================================================= */}

          <section className="events section-pad">

            <p className="section-icon reveal">
              ❀
            </p>


            <p className="eyebrow reveal">
              THE AUSPICIOUS CELEBRATION
            </p>


            <h2 className="reveal">
              Arrival & Ceremony
            </h2>


            <div className="event-grid">


              {/* =============================================
                  ARRIVAL
                  ============================================= */}

              <article className="royal-card reveal">

                <div className="event-icon">

                  <CalendarIcon />

                </div>


                <span className="event-number">
                  01
                </span>


                <h3>
                  Ganpati Aagman
                </h3>


                <strong>
                  13 September 2026
                </strong>


                <p className="event-time">
                  8:30 PM
                </p>

              </article>


              {/* =============================================
                  STHAPANA
                  ============================================= */}

              <article className="royal-card reveal">

                <div className="event-icon">

                  <ClockIcon />

                </div>


                <span className="event-number">
                  02
                </span>


                <h3>
                  Sthapana Muhurat
                </h3>

                <strong>
                  14 September 2026
                </strong>

                <p className="event-time">
                  11:30 AM
                </p>


                <p>
                  A sacred beginning with prayers
                  and blessings
                </p>

              </article>


              {/* =============================================
                  VENUE
                  ============================================= */}

              <article className="royal-card reveal">

                <div className="event-icon">

                  <LocationIcon />

                </div>


                <span className="event-number">
                  03
                </span>


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


          {/* =================================================
              FAMILY
              ================================================= */}

          <section className="family section-pad">

            <p className="section-icon reveal">
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

              {family.map((name) => (

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

              ))}

            </div>

          </section>


          {/* =================================================
              GALLERY
              ================================================= */}

          <section className="gallery section-pad">

            <p className="section-icon reveal">
              ✧
            </p>


            <p className="eyebrow reveal">
              CELEBRATION MEMORIES
            </p>


            <h2 className="reveal">
              Photo Gallery
            </h2>


            <p className="subtitle reveal">
              Replace these placeholders with your
              Ganpati, family and decoration photographs.
            </p>


            <div className="gallery-grid">

              {[
                'Ganpati Photo',
                'Decoration Photo',
                'Family Photo',
                'Aarti Photo',
                'Mahaprasad Photo',
                'Celebration Photo',
              ].map((label, i) => (

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

              ))}

            </div>

          </section>


          {/* =================================================
              RSVP
              ================================================= */}

          <section className="rsvp section-pad">

            <div className="rsvp-card reveal">

              <p className="section-icon">
                ॐ
              </p>


              <p className="eyebrow">
                BLESSINGS & RSVP
              </p>


              <h2>
                We Await Your Presence
              </h2>


              <p>
                Your presence will make this celebration
                even more joyful and memorable.
              </p>


              <a
                className="primary disabled"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                WhatsApp RSVP — Add Number
              </a>


              <small>
                Edit the WhatsApp number later inside
                <b> app/page.js</b>.
              </small>

            </div>

          </section>


          {/* =================================================
              FOOTER
              ================================================= */}

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
