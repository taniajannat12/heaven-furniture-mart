
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionsRef = useRef([]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Collections", id: "collections" },
    { name: "About", id: "about" },
    { name: "Why Heaven", id: "why-heaven" },
    { name: "Contact", id: "contact" },
  ];

  /* ================= ACTIVE NAVBAR ================= */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL ANIMATION ================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  /* ================= CLOSE MOBILE MENU ================= */

  const handleMobileNav = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ============================ NAVBAR ============================ */}

      <nav className="fixed top-0 left-0 w-full z-50 navbar shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

 

          <a
            href="#home"
            onClick={() => handleMobileNav("home")}
            className="shrink-0"
          >
            <img
              src="/logo.png"
              alt="Heaven Furniture Mart"
              className="h-46 w-auto"
            />
          </a>



          <div className="hidden md:flex items-center gap-8 lg:gap-10">

            {navItems.map((item) => {
              const active =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${
                    active ? "nav-active" : ""
                  }`}
                >
                  {item.name}

                  <span
                    className={`nav-line ${
                      active
                        ? "nav-line-active"
                        : ""
                    }`}
                  />
                </a>
              );
            })}

          </div>

      

          <a
            href="https://wa.me/8801960481983"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex quote-btn shadow-sm"
          >
            Request a Quote
            <span>→</span>
          </a>

    

          <button
            type="button"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="md:hidden mobile-menu"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>


        {mobileOpen && (
          <div className="md:hidden bg-[#193432] border-t border-[#526b66] shadow-lg">

            <div className="px-6 py-6 flex flex-col gap-5">

              {navItems.map((item) => {
                const active =
                  activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() =>
                      handleMobileNav(item.id)
                    }
                    className={`text-sm tracking-[0.08em] uppercase transition ${
                      active
                        ? "text-[#c5a46d]"
                        : "text-[#eee8dc] hover:text-[#c5a46d]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              <a
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="quote-btn inline-flex justify-center shadow-sm"
              >
                Request a Quote
                <span>→</span>
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* ============================ HERO ============================ */}

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden hero-section"
      >
        <img
          src="/hero.jpg"
          alt="Bespoke furniture by Heaven Furniture Mart"
          className="absolute inset-0 w-full h-full object-cover hero-image"
        />

        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-20">

          <div className="max-w-3xl">

            <p className="hero-item hero-small">
              Heaven Furniture Mart
            </p>

            <h1 className="hero-item hero-delay-1 hero-title">
              Furniture,
              <br />

              <span>
                Crafted Around You.
              </span>
            </h1>

            <p className="hero-item hero-delay-2 hero-description">
              Bespoke furniture and refined interior styling,
              designed around your space, taste, and the way
              you live.
            </p>

            <a
              href="https://wa.me/8801960481983"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-item hero-delay-3 hero-button shadow-md"
            >
              Request a Quote
              <span>→</span>
            </a>

          </div>
        </div>

        <div className="absolute bottom-8 left-6 lg:left-10 z-10">
          <p className="hero-bottom">
            Designed · Crafted · Customized
          </p>
        </div>

        <div className="absolute bottom-7 right-8 hidden md:flex flex-col items-center gap-2">

          <span className="scroll-text">
            Scroll
          </span>

          <div className="scroll-line" />

        </div>
      </section>

      {/* ============================ OUR STORY ============================ */}

      <section
        id="about"
        className="story-section section-light"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal story-image-wrap shadow-lg">

              <img
                src="/story.jpg"
                alt="Heaven Furniture Mart furniture"
                className="story-image"
              />

              <div className="image-border" />

            </div>

            <div className="reveal story-content">

              <p className="section-label">
                Our Story
              </p>

              <h2 className="section-title">
                Furniture made for the way
                <br />
                <span>you live.</span>
              </h2>

              <div className="gold-line" />

              <p className="body-text">
                Based in Chattogram, Heaven Furniture Mart creates
                bespoke furniture and refined interior pieces designed
                around your space, taste, and everyday life.
              </p>

              <p className="body-text mt-5">
                Founded in 2020 by Managing Director Abul Kalam Bhuiyan,
                Heaven Furniture Mart has grown into one of Chattogram's
                trusted destinations for bespoke furniture and interior
                styling.
              </p>

              <p className="body-text mt-5">
                From carefully selected materials to skilled
                craftsmanship, every piece is created with a focus
                on comfort, character, and lasting elegance.
              </p>

              <div className="story-meta">

                <span>
                  Chattogram, Bangladesh
                </span>

                <span className="meta-line" />

                <span>
                  Since 2020
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHY HEAVEN ============================ */}

      <section
        id="why-heaven"
        className="why-section section-soft"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="reveal max-w-3xl mb-16">

            <p className="section-label">
              Why Heaven
            </p>

            <h2 className="section-title">
              Made with care.
              <br />

              <span>
                Chosen with confidence.
              </span>
            </h2>

            <p className="body-text mt-6 max-w-2xl">
              From the first conversation to final installation,
              we focus on creating furniture that feels right
              for your home and is made to last.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-x-16">

            {[
              {
                no: "01",
                title: "Free Design Consultation",
                text: "Discuss your ideas, space, preferences, and requirements with our team before making any decision.",
              },
              {
                no: "02",
                title: "Fully Bespoke",
                text: "Every piece is created around your space, size, lifestyle, and personal taste.",
              },
              {
                no: "03",
                title: "Premium Materials",
                text: "Carefully selected wood and premium materials combined with skilled in-house craftsmanship.",
              },
              {
                no: "04",
                title: "Agrabad Showroom",
                text: "Visit our large physical showroom in Agrabad, Chattogram and experience the quality in person.",
              },
              {
                no: "05",
                title: "Delivery & Installation",
                text: "We take care of delivery and installation so your furniture arrives ready for your space.",
              },
              {
                no: "06",
                title: "Easy Payment Options",
                text: "Flexible payment options designed to make your furniture journey simple and convenient.",
              },
            ].map((item, index) => (

              <div
                key={item.no}
                className={`reveal why-item reveal-delay-${
                  index + 1
                }`}
              >

                <div className="flex gap-6">

                  <span className="why-number">
                    {item.no}
                  </span>

                  <div>

                    <h3 className="why-title">
                      {item.title}
                    </h3>

                    <p className="why-text">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-10 reveal">

            <button
              onClick={() =>
                setShowMore(!showMore)
              }
              className="learn-button shadow-sm"
            >
              {showMore
                ? "Show Less ↑"
                : "Learn More ↓"}
            </button>

          </div>

          <div
            className={`more-content ${
              showMore
                ? "more-visible"
                : ""
            }`}
          >

            <p>
              At Heaven Furniture Mart, we believe good furniture
              should feel personal. Our team works closely with
              each customer to understand their space, lifestyle,
              and vision before bringing the design to life.
            </p>

            <p>
              Whether you are furnishing a new home, refreshing
              a single room, or creating a completely customized
              interior, our goal is simple — thoughtful design,
              dependable craftsmanship, and furniture made
              specifically for you.
            </p>

            <p>
              We are trusted by hundreds of happy homeowners
              who value quality, thoughtful design, and furniture
              made around their needs.
            </p>

          </div>
        </div>
      </section>

      {/* ============================ COLLECTIONS ============================ */}

      <section
        id="collections"
        className="collections-section section-light"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="reveal max-w-3xl mb-14 md:mb-20">

            <p className="section-label">
              Our Collections
            </p>

            <h2 className="section-title">
              Spaces shaped by
              <br />

              <span>
                thoughtful design.
              </span>
            </h2>

            <p className="body-text mt-6 max-w-2xl">
              Explore a selection of furniture collections,
              thoughtfully crafted to bring comfort, character,
              and timeless elegance into your home.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

  

            <Link
              href="/collections/living"
              className="reveal collection-card shadow-lg"
            >

              <img
                src="/living.jpeg"
                alt="Living Room Collection"
              />

              <div className="collection-overlay" />

              <div className="collection-content">

                <span>
                  01
                </span>

                <h3>
                  Living
                </h3>

                <p>
                  Sofas · Coffee Tables · TV Units · Consoles
                </p>

              </div>

            </Link>


            <Link
              href="/collections/bedroom"
              className="reveal collection-card reveal-delay-1 shadow-lg"
            >

              <img
                src="/bedroom.jpeg"
                alt="Bedroom Collection"
              />

              <div className="collection-overlay" />

              <div className="collection-content">

                <span>
                  02
                </span>

                <h3>
                  Bedroom
                </h3>

                <p>
                  Beds · Wardrobes · Dressing Tables · Bedside Tables
                </p>

              </div>

            </Link>

 

            <Link
              href="/collections/dining"
              className="reveal collection-card reveal-delay-2 shadow-lg"
            >

              <img
                src="/dining.jpg"
                alt="Dining Collection"
              />

              <div className="collection-overlay" />

              <div className="collection-content">

                <span>
                  03
                </span>

                <h3>
                  Dining
                </h3>

                <p>
                  Dining Tables · Chairs · Cabinets
                </p>

              </div>

            </Link>

 

            <Link
              href="/collections/bespoke"
              className="reveal collection-card reveal-delay-3 shadow-lg"
            >

              <img
                src="/bespoke.jpg"
                alt="Bespoke Furniture"
              />

              <div className="collection-overlay bespoke-overlay" />

              <div className="collection-content">

                <span>
                  04
                </span>

                <h3>
                  Bespoke
                </h3>

                <p>
                  Designed · Crafted · Customized
                </p>

              </div>

            </Link>

          </div>

    

          <div className="reveal office-note">

            <p>
              <span>Office & Study</span>
              {" "}— Executive Tables, Bookshelves,
              Workstations & Custom Office Pieces.
            </p>

          </div>

        </div>
      </section>

      {/* ============================ BESPOKE HIGHLIGHT ============================ */}

      <section className="bespoke-section">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal">

              <p className="dark-label">
                The Heaven Difference
              </p>

              <h2 className="dark-title">
                Made for your space.
                <br />

                <span>
                  Made for you.
                </span>
              </h2>

              <div className="dark-line" />

              <p className="dark-text">
                Your home is unique, so your furniture should be too.
                From dimensions and materials to finishes and details,
                we create each bespoke piece around the way you live.
              </p>

              <p className="dark-text-small">
                Tell us what you have in mind. Our team will help
                turn your idea into furniture that belongs perfectly
                in your space.
              </p>

              <a
                href="#contact"
                className="dark-button shadow-md"
              >
                Start Your Design
                <span>→</span>
              </a>

            </div>

            <div className="reveal reveal-delay-2 bespoke-image-wrap shadow-lg">

              <img
                src="/beshpoke1.jpg"
                alt="Custom bespoke furniture by Heaven Furniture Mart"
                className="bespoke-image"
              />

              <div className="image-border" />

              <div className="bespoke-label">

                <span>
                  Bespoke Furniture
                </span>

                <strong>
                  Designed · Crafted · Customized
                </strong>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================ SOCIAL PROOF ============================ */}

      <section className="section-light py-24">

        <div className="max-w-5xl mx-auto px-6 text-center reveal">

          <p className="section-label">
            From Our Managing Director
          </p>

          <h2 className="section-title">
            Furniture that reflects
            <br />

            <span>
              lifestyle, taste & comfort.
            </span>
          </h2>

          <div className="gold-line mx-auto mt-8 mb-8" />

          <p className="body-text max-w-3xl mx-auto italic">
            At Heaven Furniture Mart, we believe furniture is
            more than just function; it is a reflection of lifestyle,
            taste, and comfort. Every piece we create is designed
            to bring lasting elegance into the homes of our clients.
          </p>

          <p className="mt-8 text-[#193432] font-semibold">
            Abul Kalam Bhuiyan
          </p>

          <p className="text-sm text-[#7c756c] mt-1">
            Managing Director
          </p>

        </div>
      </section>

      {/* ============================ CONTACT CTA ============================ */}

      <section
        id="contact"
        className="cta-section"
      >

        <div className="max-w-4xl mx-auto px-6 text-center reveal">

          <p className="section-label">
            Let's Create Something Beautiful
          </p>

          <h2 className="cta-title">
            Your space deserves
            <br />

            <span>
              something made for it.
            </span>
          </h2>

          <p className="cta-text">
            Have a piece in mind? Tell us about your space,
            your style, and what you are looking for.
            We will help you take the next step.
          </p>

          <p className="cta-trust">
            Trusted by hundreds of happy homeowners.
          </p>

          <a
            href="https://wa.me/8801960481983"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button shadow-md"
          >
            Request a Quote
            <span>→</span>
          </a>

        </div>
      </section>

      {/* ============================ FOOTER ============================ */}

      <footer className="bg-[#193432] text-[#eee8dc]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">



            <div>

              <img
                src="/logo.png"
                alt="Heaven Furniture Mart"
                className="h-16 w-auto mb-6"
              />

              <p className="text-[#cfc8bd] leading-7 max-w-sm">
                Bespoke furniture and refined interior pieces crafted
                around your space, taste, and way of living.
              </p>

              <div className="mt-8">

                <p className="text-[#c5a46d] text-xs tracking-[0.25em] uppercase mb-6">
                  Follow Heaven
                </p>

                <div className="flex items-center gap-4">

                  <a
                    href="https://facebook.com/HeavenFurnitureMart"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full border border-[#526b66] flex items-center justify-center text-[#eee8dc] text-sm font-semibold hover:bg-[#c5a46d] hover:text-[#193432] hover:border-[#c5a46d] transition duration-300 shadow-sm"
                  >
                    f
                  </a>

                  <a
                    href="https://instagram.com/heaven_furniture_ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full border border-[#526b66] flex items-center justify-center text-[#eee8dc] text-xs font-semibold hover:bg-[#c5a46d] hover:text-[#193432] hover:border-[#c5a46d] transition duration-300 shadow-sm"
                  >
                    IG
                  </a>

                  <a
                    href="https://youtube.com/@HeavenFurnitureMart"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full border border-[#526b66] flex items-center justify-center text-[#eee8dc] text-xs font-semibold hover:bg-[#c5a46d] hover:text-[#193432] hover:border-[#c5a46d] transition duration-300 shadow-sm"
                  >
                    ▶
                  </a>

                </div>
              </div>
            </div>

  

            <div>

              <p className="text-[#c5a46d] text-xs tracking-[0.25em] uppercase mb-6">
                Visit & Contact
              </p>

              <div className="space-y-4 text-sm text-[#cfc8bd]">

                <p>
                  Agrabad Access Road,
                  <br />
                  Chattogram, Bangladesh
                </p>

                <a
                  href="tel:+8801960481983"
                  className="block hover:text-[#c5a46d] transition"
                >
                  +880 1960-481983
                </a>

                <a
                  href="mailto:heavenfurnituremart@gmail.com"
                  className="block hover:text-[#c5a46d] transition"
                >
                  heavenfurnituremart@gmail.com
                </a>

              </div>
            </div>

         

            <div>

              <p className="text-[#c5a46d] text-xs tracking-[0.25em] uppercase mb-6">
                Explore
              </p>

              <div className="flex flex-col gap-4 text-sm">

                <a
                  href="#home"
                  className="text-[#cfc8bd] hover:text-[#c5a46d] transition"
                >
                  Home
                </a>

                <a
                  href="#collections"
                  className="text-[#cfc8bd] hover:text-[#c5a46d] transition"
                >
                  Collections
                </a>

                <a
                  href="#about"
                  className="text-[#cfc8bd] hover:text-[#c5a46d] transition"
                >
                  About
                </a>

                <a
                  href="#why-heaven"
                  className="text-[#cfc8bd] hover:text-[#c5a46d] transition"
                >
                  Why Heaven
                </a>

                <a
                  href="#contact"
                  className="text-[#cfc8bd] hover:text-[#c5a46d] transition"
                >
                  Contact
                </a>

              </div>
            </div>

          </div>

    

          <div className="mt-14 pt-7 border-t border-[#526b66] flex flex-col md:flex-row justify-between gap-4">

            <p className="text-[#aebbb7] text-xs">
              © 2026 Heaven Furniture Mart. All rights reserved.
            </p>

            <p className="text-[#aebbb7] text-xs">
              Designed · Crafted · Customized
            </p>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Home;
