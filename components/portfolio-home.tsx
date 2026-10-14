"use client";

import type { CSSProperties } from "react";
import type { Project } from "../lib/project-types";
import { ProjectGrid } from "./project-grid";
import { usePortfolioRuntime } from "./portfolio-runtime";

export default function PortfolioHome({ projects }: { projects: Project[] }) {
  usePortfolioRuntime();
  return (<main id="body-inner">
  <div id="tt-page-transition">
    <div className="tt-ptr-overlay-top">

    </div>
    <div className="tt-ptr-overlay-bottom">

    </div>
    <div className="tt-ptr-preloader">
      <div className="tt-ptr-prel-content">
        <img src="/assets/img/logo-light.png" className="tt-ptr-prel-image" alt="Logo" />
      </div>
    </div>
  </div>
  <div id="magic-cursor">
    <div id="ball">

    </div>
  </div>
  <div id="tt-content-wrap">
    <header id="tt-header" className="tt-header-alter tt-header-scroll tt-header-filled">
      <div className="tt-header-inner">
        <div className="tt-header-col tt-header-col-left">
          <div className="tt-logo">
            <a href="/" className="tt-magnetic-item">
              <img src="/assets/img/logo-light.png" className="tt-logo-light" alt="Logo" />
              <img src="/assets/img/logo-dark.png" className="tt-logo-dark" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="tt-header-col tt-header-col-center">
          <nav className="tt-main-menu tt-m-menu-center">
            <div className="tt-main-menu-holder">
              <div className="tt-main-menu-inner">
                <div className="tt-main-menu-content">
                  <ul className="tt-main-menu-list">
                    <li>
                      <a href="#body">
                        {"Home"}
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio">
                        {"Portfolio"}
                      </a>
                    </li>
                    <li>
                      <a href="#about">
                        {"About"}
                      </a>
                    </li>
                    <li>
                      <a href="#clients">
                        {"Clients"}
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        {"Services"}
                      </a>
                    </li>
                    <li>
                      <a href="#faq">
                        {"FAQ"}
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        {"Contact"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="tt-header-col tt-header-col-right">
          <div id="tt-m-menu-toggle-btn-wrap">
            <div className="tt-m-menu-toggle-btn-text">
              <span className="tt-m-menu-text-menu">
                {"Menu"}
              </span>
              <span className="tt-m-menu-text-close">
                {"Close"}
              </span>
            </div>
            <div className="tt-m-menu-toggle-btn-holder">
              <a href="#" className="tt-m-menu-toggle-btn">
                <span>

                </span>
              </a>
            </div>
          </div>
          <a href="#contact" className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
            <span data-hover="Let's Talk">
              {"Let's Talk"}
            </span>
          </a>
          <div className="tt-style-switch">
            <div className="tt-style-switch-inner tt-magnetic-item">
              <div className="tt-stsw-light">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                  </path>
                </svg>
              </div>
              <div className="tt-stsw-dark">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" strokeWidth="2">

                  </circle>
                  <path d="M12 2V4" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M12 20V22" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M4 12L2 12" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M22 12L20 12" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M19.7778 4.22266L17.5558 6.25424" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M4.22217 4.22266L6.44418 6.25424" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M6.44434 17.5557L4.22211 19.7779" strokeWidth="2" strokeLinecap="round">

                  </path>
                  <path d="M19.7778 19.7773L17.5558 17.5551" strokeWidth="2" strokeLinecap="round">

                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-xxxxlg ph-image-parallax ph-caption-parallax">
      <div className="ph-image-trail ph-itr-full">
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-1-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-2-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-3-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-4-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-5-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-6-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-7-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-8-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-9-600.png" alt="Image" />
        <img className="ph-itr-img" src="/assets/img/img-trail/img-trail-10-600.png" alt="Image" />
      </div>
      <div className="page-header-inner">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h2 className="ph-caption-subtitle">
              {"( Hello, it's me )"}
            </h2>
            <h1 className="ph-caption-title">
              {"Shurov"}
            </h1>
            <div className="ph-caption-description max-width-700">
              {" Design and development, done with passion,"}
              <br />
              {" curiosity, and a little bit of mischief. "}
            </div>
          </div>
        </div>
      </div>
      <div className="ph-social">
        <div className="tt-social-buttons">
          <ul>
            <li>
              <a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-facebook-f">

                </i>
              </a>
            </li>
            <li>
              <a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-x-twitter">

                </i>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-dribbble">

                </i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className="fa-brands fa-behance">

                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tt-scroll-down">
        <a href="#tt-page-content" className="tt-sd-inner tt-magnetic-item" data-offset="0">
          <div className="tt-sd-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

              </path>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div id="tt-page-content">
      <div id="portfolio" className="tt-section padding-top-xlg-20">
        <div className="tt-section-inner tt-wrap max-width-1600 margin-bottom-80">
          <div className="tt-heading tt-heading-lg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {"( Portfolio )"}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {" Discover "}
              <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-1">
                <img src="/assets/img/misc/text-img-3.gif" alt="Image" />
              </span>
              {" a"}
              <br />
              {" Showcase of My"}
              <br />
              <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-2">
                <a href="https://themetorium.net/" target="_blank" rel="nofollow noopener">
                  <img src="/assets/img/misc/text-img-2.jpg" alt="Image" />
                </a>
              </span>
              {" Creative Journey "}
            </h2>
            <p className="max-width-700 tt-anim-lines">
              {"Take a look at how my ideas have evolved, shaped by a genuine passion for building engaging digital experiences."}
            </p>
          </div>
        </div>
        <div className="tt-section-inner">
          <div className="tt-portfolio-grid tt-pgi-boxed tt-pgi-tilted">
            <div className="tt-grid tt-grid-col-4 tt-grid-gap-3 tt-grid-appear">
              <div className="tt-grid-filter tt-grf-center tt-anim-fadeinup">
                <button type="button" className="tt-btn tt-btn-secondary tt-magnetic-item">
                  <span data-hover="Show All">
                    {"Show All"}
                  </span>
                </button>
                <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".branding">
                  <span data-hover="Branding">
                    {"Branding"}
                  </span>
                </button>
                <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".digital">
                  <span data-hover="Digital">
                    {"Digital"}
                  </span>
                </button>
                <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".artistic">
                  <span data-hover="Artistic">
                    {"Artistic"}
                  </span>
                </button>
              </div>
              <ProjectGrid projects={projects} />
              <div className="tt-grid-load-more" data-show-items="8" data-load-more-items="8">
                <div className="tt-grlm-btn-wrap">
                  <a href="#0" className="tt-grlm-btn tt-btn tt-btn-accent tt-magnetic-item">
                    <span data-hover="Load More">
                      {"Load More"}
                    </span>
                    <span className="tt-btn-icon">
                      <i className="fa-regular fa-plus">

                      </i>
                    </span>
                  </a>
                </div>
                <div className="tt-grid-no-more-msg">
                  {"No more items to show."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="tt-section no-padding-bottom">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-heading tt-heading-xxxlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {"( What I Do )"}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {"Services"}
            </h2>
            <p className="max-width-600 tt-anim-lines">
              {"End-to-end digital services that elevate your online presence, connect you with your audience, and turn ideas into real, impactful results. "}
            </p>
          </div>
        </div>
      </div>
      <div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-accordion tt-acc-xlg tt-acc-counter tt-acc-borders tt-acc-tilted">
            <div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {"Digital Strategy"}
                    </h3>
                  </div>
                </div>
                <div className="tt-accordion-caret">
                  <div className="tt-accordion-caret-inner tt-magnetic-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="tt-accordion-content max-width-1600">
                <div className="tt-row">
                  <div className="tt-col-lg-8">
                    <p>
                      {"I create data-driven digital strategies that align with your business goals and deliver measurable growth. Using audience insights, competitor analysis, and clear KPIs, I build a focused roadmap that strengthens your online presence and improves results across key channels."}
                    </p>
                    <p>
                      {"Whether you want more visibility, better engagement, or higher conversions, I turn real opportunities into practical actions and help you grow with confidence."}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href="/privacy" className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover="More">
                        {"More"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {"Branding & Identity"}
                    </h3>
                  </div>
                </div>
                <div className="tt-accordion-caret">
                  <div className="tt-accordion-caret-inner tt-magnetic-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="tt-accordion-content max-width-1600">
                <div className="tt-row">
                  <div className="tt-col-lg-8">
                    <p>
                      {"I build brands that truly connect. From logo design and color systems to voice and messaging, I create cohesive identities that reflect your values and make your business memorable."}
                    </p>
                    <p>
                      {"Whether you’re launching something new or refreshing an existing brand, I guide you through a clear process and ensure every element works together to tell a consistent, authentic story that stands out."}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href="/privacy" className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover="More">
                        {"More"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {"UI / UX Design"}
                    </h3>
                  </div>
                </div>
                <div className="tt-accordion-caret">
                  <div className="tt-accordion-caret-inner tt-magnetic-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="tt-accordion-content max-width-1600">
                <div className="tt-row">
                  <div className="tt-col-lg-8">
                    <p>
                      {"I design intuitive, engaging digital experiences that balance clarity and visual appeal. Using user-centered principles and a solid understanding of your audience, I create wireframes, prototypes, and polished interfaces that are easy to navigate and built to perform reliably across devices and browsers."}
                    </p>
                    <p>
                      {"From websites to apps and custom platforms, every interaction is purposeful, natural, and focused on usability, engagement, and real-world results."}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href="/privacy" className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover="More">
                        {"More"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {"Web App Development"}
                    </h3>
                  </div>
                </div>
                <div className="tt-accordion-caret">
                  <div className="tt-accordion-caret-inner tt-magnetic-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="tt-accordion-content max-width-1600">
                <div className="tt-row">
                  <div className="tt-col-lg-8">
                    <p>
                      {" I specialize in converting any Figma design into a fully responsive, pixel-perfect, and production-ready web application. From complex UI systems and advanced user experiences to highly interactive animations with GSAP, I focus on building clean, scalable, and maintainable code that performs flawlessly across all devices and modern browsers. "}
                    </p>
                    <p>
                      {"Beyond frontend development, I build complete custom backend architectures using Nextjs, Express.js, Nest.JS, PostgreSQL, MongoDB, and MySQL. Whether it's a business platform, SaaS product, dashboard system, CMS, or enterprise application, I develop tailored solutions designed around the specific requirements of each project rather than relying on generic shortcuts or pre-built systems. "}
                    </p>
                    <p>
                      {"Security, performance, and scalability are integrated into every stage of development. From database design and API architecture to authentication, authorization, and server-side optimization, I ensure every layer of the application is built to industry standards. My goal is to deliver reliable, future-ready products that combine exceptional user experience with robust technical foundations."}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href="/privacy" className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover="More">
                        {"More"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {"Product Design"}
                    </h3>
                  </div>
                </div>
                <div className="tt-accordion-caret">
                  <div className="tt-accordion-caret-inner tt-magnetic-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="tt-accordion-content max-width-1600">
                <div className="tt-row">
                  <div className="tt-col-lg-8">
                    <p>
                      {"I design products with purpose, focusing on real problems and real users. By combining research, thoughtful functionality, and refined aesthetics, I create solutions that are practical, intuitive, and built to last."}
                    </p>
                    <p>
                      {"From concept and prototyping to final design, every step is guided by usability and clear business goals. Whether digital or physical, the result is a product people enjoy using and businesses can rely on."}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href="/privacy" className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover="More">
                        {"More"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clients" className="tt-section no-padding-bottom">
        <div className="tt-section-inner">
          <div className="tt-heading tt-heading-xlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {"( Trusted Partners )"}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {"My Clients"}
            </h2>
            <p className="max-width-700 tt-anim-lines">
              {"Behind every project is a collaboration. I work closely with my clients to turn ideas into brands and websites that actually move their business forward."}
            </p>
          </div>
        </div>
      </div>
      <div className="tt-section padding-bottom-xlg-120">
        <div className="tt-section-inner tt-wrap max-width-1800">
          <ul className="tt-logo-wall tt-lw-col-6 tt-lw-boxed tt-lw-tilted tt-anim-fadeinup">
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-1-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-1-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-2-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-2-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-3-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-3-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-4-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-4-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-5-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-5-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-6-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-6-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-7-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-7-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-8-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-8-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-9-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-9-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-10-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-10-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-11-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-11-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://themetorium.net/" className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src="/assets/img/clients/client-12-light.png" className="tt-lv-img-light" loading="lazy" alt="Image" />
                  <img src="/assets/img/clients/client-12-dark.png" className="tt-lv-img-dark" loading="lazy" alt="Image" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tt-section no-padding">
        <div className="tt-section-inner">
          <div className="tt-clipper">
            <a href="/assets/vids/video-showreel/video-showreel.mp4" className="tt-clipper-inner" data-cursor="Play<br>Reel" data-fancybox="" data-caption="My project showreel.">
              <div className="tt-clipper-bg">
                <video loop={true} muted={true} autoPlay={true} playsInline={true} preload="metadata" poster="/assets/vids/video-showreel/video-showreel.jpg">
                  <source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/video-showreel/video-showreel.mp4" type="video/mp4" />
                  <source src="/assets/vids/placeholder.webm" data-src="/assets/vids/video-showreel/video-showreel.webm" type="video/webm" />
                </video>
              </div>
              <div className="tt-clipper-content">
                <div className="tt-clipper-btn">
                  <i className="fa-solid fa-play">

                  </i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="tt-section">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row">
            <div className="tt-col-lg-7 tt-align-self-center">
              <div className="tt-heading tt-heading-lg">
                <h3 className="tt-heading-subtitle tt-anim-lines">
                  {"( Why Me? )"}
                </h3>
                <h2 className="tt-heading-title tt-anim-lines">
                  {"I am not just another developer, I am a creative partner invested in your success."}
                </h2>
              </div>
            </div>
            <div className="tt-col-lg-1">

            </div>
            <div className="tt-col-lg-4 tt-align-self-center">
              <p className="tt-anim-lines">
                {"From strategy to execution, I blend design thinking with full stack expertise to create work that's both beautiful and effective."}
              </p>
              <a href="#clients" className="tt-btn tt-btn-secondary tt-magnetic-item tt-anim-fadeinup">
                <span data-hover="My Clients">
                  {"My Clients"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials" className="tt-section">
        <div className="tt-section-inner tt-wrap max-width-1400">
          <div className="tt-sticker">
            <div className="tt-row tt-lg-row-reverse">
              <div className="tt-col-lg-4 margin-bottom-40">
                <div className="tt-sticker-sticky tt-sticky-element">
                  <div className="tt-heading tt-heading-xlg">
                    <h3 className="tt-heading-subtitle tt-anim-lines">
                      {"( Testimonials )"}
                    </h3>
                    <h2 className="tt-heading-title tt-anim-characters">
                      {"What"}
                      <br />
                      {" They"}
                      <br />
                      {" Say"}
                    </h2>
                  </div>
                  <p className="tt-anim-lines">
                    {"Genuine words from the people I have had the pleasure to work with."}
                  </p>
                  <a href="#testimonials" className="tt-btn tt-btn-secondary tt-magnetic-item margin-top-20 tt-anim-fadeinup">
                    <span data-hover="Read All Testimonials">
                      {"Read All Testimonials"}
                    </span>
                  </a>
                </div>
              </div>
              <div className="tt-col-lg-1">

              </div>
              <div className="tt-col-lg-7">
                <div className="tt-sticker-scroller">
                  <div className="tt-testimonials-list tt-tli-tilted tt-tli-lg">
                    <div className="tt-testimonials-list-item tt-tli-reverse-color">
                      <div className="tt-tli-inner">
                        <blockquote className="open-quote">
                          <cite>
                            {"Shurov delivered a fast, responsive application with clean code, polished UI details, and a workflow that made every step clear."}
                          </cite>
                          <footer>
                            <a href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">
                              {"John Doe"}
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="tt-testimonials-list-item tt-tli-reverse-color">
                      <div className="tt-tli-inner">
                        <blockquote className="open-quote">
                          <cite>
                            {"Excellent design sense and strong technical execution. The final product felt premium, flexible, and easy to manage after launch."}
                          </cite>
                          <footer>
                            <a href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">
                              {"David Williams"}
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="tt-testimonials-list-item tt-tli-reverse-color">
                      <div className="tt-tli-inner">
                        <blockquote className="open-quote">
                          <cite>
                            {"The dashboard was built exactly around the project workflow, with fast loading times, smooth interactions, and excellent support."}
                          </cite>
                          <footer>
                            <a href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">
                              {"Sarah Jones"}
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="tt-testimonials-list-item tt-tli-reverse-color">
                      <div className="tt-tli-inner">
                        <blockquote className="open-quote">
                          <cite>
                            {"Very thoughtful design, well organized code, and clear communication from planning through final delivery."}
                          </cite>
                          <footer>
                            <a href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">
                              {"David Brown"}
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="tt-testimonials-list-item tt-tli-reverse-color">
                      <div className="tt-tli-inner">
                        <blockquote className="open-quote">
                          <cite>
                            {"I found a small issue on mobile and Shurov fixed it very quickly. I appreciated his care, speed, and attention to detail."}
                          </cite>
                          <footer>
                            <a href="https://themetorium.net/" className="tt-link" target="_blank" rel="noopener">
                              {"Olivia Bennett"}
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-2 tt-scrt-bordered" data-scroll-speed="10" data-change-direction="true">
            <div className="tt-scrt-inner">
              <div className="tt-scrt-content">
                <div className="tt-scrt-text">
                  {" Highly motivated "}
                  <span className="tt-scrt-separator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-1 scrt-color-reverse" data-opposite-direction="true" data-scroll-speed="10" data-change-direction="true">
            <div className="tt-scrt-inner">
              <div className="tt-scrt-content">
                <div className="tt-scrt-text">
                  {" Over 5 years of experience "}
                  <span className="tt-scrt-separator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tt-section no-padding-bottom">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row">
            <div className="tt-col-lg-7 tt-align-self-center">
              <div className="tt-heading tt-heading-xxxlg">
                <h3 className="tt-heading-subtitle tt-anim-lines">
                  {"( Highlights )"}
                </h3>
                <h2 className="tt-heading-title tt-anim-characters">
                  {"Stats"}
                </h2>
              </div>
            </div>
            <div className="tt-col-lg-1">

            </div>
            <div className="tt-col-lg-4 tt-align-self-center">
              <p className="tt-anim-lines">
                {"Key achievements and results that reflect professional growth, client success, and modern full stack expertise."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-avards-list tt-avlist-tilted">
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"Professional Experience"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" 5+ Years "}
                  </div>
                </div>
              </div>
            </a>
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"International Clients"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" 280+ "}
                  </div>
                </div>
              </div>
            </a>
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"Projects Delivered"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" 400+ "}
                  </div>
                </div>
              </div>
            </a>
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"Full Stack Expertise"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" Frontend + Backend "}
                  </div>
                </div>
              </div>
            </a>
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"Design Experience"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" UI/UX & Visual Design "}
                  </div>
                </div>
              </div>
            </a>
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"Team Collaboration"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" Agile Environment "}
                  </div>
                </div>
              </div>
            </a>
            <a href="https://themetorium.net/" className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {"Continuous Learning"}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {" Modern Technologies "}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="faq" className="tt-section">
        <div className="tt-section-inner tt-wrap max-width-1400">
          <div className="tt-heading tt-heading-xlg tt-heading-center margin-bottom-80">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {"( Questions )"}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {"Frequently Asked Questions"}
            </h2>
            <div className="max-width-600" style={{"marginLeft":"auto","marginRight":"auto"} as CSSProperties}>
              <p className="tt-anim-lines">
                {"Most frequently asked questions about my services and work process."}
              </p>
            </div>
          </div>
          <div className="tt-row tt-justify-content-center">
            <div className="tt-col-lg-10">
              <div className="tt-accordion tt-acc-boxed tt-acc-counter tt-acc-tilted">
                <div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {"What kind of projects do you build?"}
                        </h3>
                      </div>
                    </div>
                    <div className="tt-accordion-caret">
                      <div className="tt-accordion-caret-inner tt-magnetic-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="tt-accordion-content max-width-1000">
                    <p>
                      {"I build modern web applications, SaaS products, dashboards, business platforms, CMS systems, and enterprise tools using React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, Express.js, NestJS, and modern database systems."}
                    </p>
                    <p>
                      {"I can also design and develop brand identities, UI/UX systems, Figma interfaces, landing pages, marketing assets, and complete digital products from concept to deployment."}
                    </p>
                  </div>
                </div>
                <div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {"What do you need to start a project?"}
                        </h3>
                      </div>
                    </div>
                    <div className="tt-accordion-caret">
                      <div className="tt-accordion-caret-inner tt-magnetic-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="tt-accordion-content max-width-1000">
                    <p>
                      {"The basic project details that help me start smoothly are:"}
                    </p>
                    <ul>
                      <li>
                        {"A clear idea of your goals, audience, and main features"}
                      </li>
                      <li>
                        {"Any existing Figma design, brand assets, references, or content "}
                      </li>
                      <li>
                        {"Technical details such as preferred stack, integrations, timeline, and launch requirements"}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {"Will the website work across devices and browsers?"}
                        </h3>
                      </div>
                    </div>
                    <div className="tt-accordion-caret">
                      <div className="tt-accordion-caret-inner tt-magnetic-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="tt-accordion-content max-width-1000">
                    <p>
                      {"Yes. I build responsive, optimized interfaces that work smoothly across modern devices and major browsers, including Chrome, Safari, Firefox, Edge, and mobile browsers."}
                    </p>
                  </div>
                </div>
                <div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {"Do you provide support after delivery?"}
                        </h3>
                      </div>
                    </div>
                    <div className="tt-accordion-caret">
                      <div className="tt-accordion-caret-inner tt-magnetic-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="tt-accordion-content max-width-1000">
                    <p>
                      {"Yes. I can provide post-launch fixes, improvements, performance tuning, new feature development, and ongoing technical support based on the project needs."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tt-section padding-bottom-xlg-120">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-heading tt-heading-xxlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {"( Creative Power )"}
            </h3>
            <h2 className="tt-heading-title">
              <a href="#contact" className="tt-anim-characters" data-cursor="Contact">
                {"Time to Make Boring Illegal"}
              </a>
            </h2>
            <p className="tt-anim-lines">
              {"Let’s make something great together."}
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="tt-section padding-top-40 padding-bottom-120">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row tt-xl-row-reverse">
            <div className="tt-col-xl-5">
              <div className="tt-contact-info margin-bottom-80">
                <div className="tt-contact-info-inner padding-left-xlg-7-p">
                  <div className="tt-contact-info-icon max-width-200 tt-anim-fadeinup">
                    <svg viewBox="0 0 64 64" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                      <g id="_x30_1_chatting">
                        <g>
                          <g>
                            <path d="M38.0728,40.9023c-0.5522,0-1.0259-0.4478-1.0259-1s0.4219-1,0.9741-1h0.0518c0.5522,0,1,0.4478,1,1     S38.625,40.9023,38.0728,40.9023z">

                            </path>
                          </g>
                          <g>
                            <path d="M45.3604,40.9023c-0.5522,0-1.0273-0.4478-1.0273-1s0.4199-1,0.9722-1h0.0552c0.5522,0,1,0.4478,1,1     S45.9126,40.9023,45.3604,40.9023z">

                            </path>
                          </g>
                          <g>
                            <path d="M52.6445,40.9023c-0.5522,0-1.0273-0.4478-1.0273-1s0.4199-1,0.9722-1h0.0552c0.5522,0,1,0.4478,1,1     S53.1968,40.9023,52.6445,40.9023z">

                            </path>
                          </g>
                          <g>
                            <path d="M12.584,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.418-1,0.9702-1h0.0591c0.5522,0,1,0.4478,1,1     S13.1362,25.186,12.584,25.186z">

                            </path>
                          </g>
                          <g>
                            <path d="M20.7529,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.4185-1,0.9707-1h0.0586c0.5522,0,1,0.4478,1,1     S21.3052,25.186,20.7529,25.186z">

                            </path>
                          </g>
                          <g>
                            <path d="M28.9219,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.4185-1,0.9707-1h0.0586c0.5522,0,1,0.4478,1,1     S29.4741,25.186,28.9219,25.186z">

                            </path>
                          </g>
                          <path d="M56.5327,26.0718h-0.0005c-3.6577-3.0059-8.2656-4.4053-12.9771-3.9463c-1.0573,0.1035-2.0867,0.3111-3.0887,0.5919    c-0.2051-3.1539-1.169-6.2225-2.8205-8.9474c-2.7339-4.5127-7.0605-7.6904-12.1841-8.9478    c-5.1226-1.2573-10.4302-0.4434-14.9414,2.2905c-9.3149,5.6431-12.3022,17.812-6.6592,27.1274    c0.4487,0.7378,0.9443,1.4468,1.4785,2.1147l-2.1206,6.457c-0.1152,0.3521-0.0269,0.7388,0.23,1.0059    c0.1914,0.1982,0.4526,0.3062,0.7202,0.3062c0.0923,0,0.1851-0.0127,0.2764-0.0391l7.8203-2.2476    c4.9188,2.3405,10.487,2.549,15.5263,0.6185c0.6382,4.1645,2.7308,8.1203,6.233,10.9997    c4.626,3.8027,10.7549,5.0024,16.4702,3.2461l6.5781,2.9609c0.1313,0.0591,0.2715,0.0879,0.4106,0.0879    c0.2183,0,0.4351-0.0718,0.6138-0.2104c0.2925-0.2275,0.4351-0.5977,0.3711-0.9624l-1.0391-5.9121    c0.5459-0.5166,1.062-1.0698,1.5391-1.6499C65.1724,43.4663,64.0791,32.2764,56.5327,26.0718z M12.8066,39.8755    c-0.2241-0.1113-0.4814-0.1353-0.7236-0.0664l-6.374,1.832l1.7026-5.1851c0.1084-0.3306,0.0376-0.6938-0.1875-0.959    c-0.604-0.7119-1.1606-1.4844-1.6528-2.2944C0.5,24.8315,3.1851,13.895,11.5571,8.8232c4.0537-2.458,8.8218-3.1885,13.4282-2.0591    c4.6045,1.1304,8.4932,3.9863,10.9502,8.0425c1.5782,2.6036,2.4474,5.5574,2.5516,8.5797    c-2.6577,1.0986-5.0207,2.841-6.8978,5.1259c-2.8444,3.4614-4.1367,7.6871-3.9944,11.8476    C22.8245,42.3625,17.4745,42.2095,12.8066,39.8755z M57.4243,49.7456c-0.5303,0.645-1.1147,1.2524-1.7378,1.8062    c-0.2598,0.2305-0.3809,0.5791-0.3208,0.9209l0.8066,4.5908l-5.2051-2.3433c-0.1304-0.0586-0.2705-0.0879-0.4106-0.0879    c-0.106,0-0.2124,0.0166-0.3145,0.0508c-5.1646,1.7104-10.7529,0.6758-14.9463-2.7725    c-6.6953-5.5044-7.6646-15.4312-2.1616-22.1289c2.666-3.2446,6.436-5.2568,10.6157-5.6655    c4.1816-0.4072,8.2681,0.8345,11.5127,3.5005h-0.0005C61.957,33.1211,62.9268,43.0483,57.4243,49.7456z">

                          </path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="tt-heading tt-heading-lg">
                    <h2 className="tt-heading-title tt-anim-characters">
                      {"Say Hi!"}
                    </h2>
                  </div>
                  <div className="margin-bottom-40">
                    <p className="tt-anim-lines">
                      {"You're just one click away from taking your brand or product from great to incredible. Fill out the form to share more details about your project."}
                    </p>
                  </div>
                  <div className="margin-bottom-30 tt-anim-fadeinup">
                    <h3 className="tt-contact-info-heading">
                      {"Contact Details"}
                    </h3>
                    <ul className="tt-list">
                      <li>
                        <a href="https://www.google.com.au/maps/place/Envato+Pty+Ltd/@-37.8166193,144.968802,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d4c2b349649:0xb6899234e561db11!8m2!3d-37.8166193!4d144.968802!16s%2Fg%2F1tfgjz3b?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" className="tt-link" target="_blank" rel="noopener">
                          {" 180 Flinders St, Melbourne"}
                          <br />
                          {" Victoria, 3000 Australia "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="margin-bottom-30 tt-anim-fadeinup">
                    <ul className="tt-list">
                      <li>
                        <a href="tel:+123456789000" className="tt-link">
                          {"+(123) 456 789 000"}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:company@email.com" className="tt-link">
                          {"company@email.com"}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tt-social-buttons tt-sbtn-inline tt-sbtn-filled tt-anim-fadeinup">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-facebook-f">

                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-x-twitter">

                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-dribbble">

                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className="fa-brands fa-behance">

                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tt-col-xl-7">
              <form id="tt-contact-form" className="tt-form tt-form-lg tt-form-creative tt-form-tilted tt-form-counter">
                <div id="tt-contact-form-messages" role="alert">
                  <div className="tt-cfm-inner">

                  </div>
                  <div className="tt-cfm-close hide-cursor">
                    <i className="fa-solid fa-xmark">

                    </i>
                  </div>
                </div>
                <div className="tt-contact-form-inner">
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-name">
                      {"What's your name? "}
                      <span className="required">
                        {"*"}
                      </span>
                    </label>
                    <input className="tt-form-control" id="sender-name" type="text" name="name" placeholder="John Smith" required={true} />
                  </div>
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-email">
                      {"What's your email? "}
                      <span className="required">
                        {"*"}
                      </span>
                    </label>
                    <input className="tt-form-control" id="sender-email" type="email" name="email" placeholder="john@smith.com" required={true} />
                  </div>
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-option">
                      {"What would you like to talk about? "}
                      <span className="required">
                        {"*"}
                      </span>
                    </label>
                    <select className="tt-form-control" id="sender-option" name="option" required={true} defaultValue="">
                      <option value="" disabled={true}>
                        {"Please choose an option"}
                      </option>
                      <option value="Say Hello">
                        {"Say hello"}
                      </option>
                      <option value="New Project">
                        {"New project"}
                      </option>
                      <option value="Feedback">
                        {"Feedback"}
                      </option>
                      <option value="Other">
                        {"Other"}
                      </option>
                    </select>
                  </div>
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-message">
                      {"Your message "}
                      <span className="required">
                        {"*"}
                      </span>
                    </label>
                    <textarea className="tt-form-control" id="sender-message" rows={5} name="message" placeholder="Hello, can you help me with ..." required={true}>

                    </textarea>
                  </div>
                  <div className="tt-form-check margin-top-30 margin-bottom-30 tt-anim-fadeinup">
                    <input type="checkbox" id="privacy-policy-check" required={true} />
                    <label htmlFor="privacy-policy-check" className="text-small">
                      {"I have read and accept the "}
                      <a href="/privacy" className="tt-link-2" target="_blank">
                        {"privacy policy"}
                      </a>
                      {"."}
                    </label>
                  </div>
                  <button type="submit" className="tt-btn tt-btn-secondary tt-btn-full tt-anim-fadeinup">
                    <span data-hover="Send Message">
                      {"Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer id="tt-footer" className="border-top">
      <div className="tt-footer-inner">
        <div className="tt-row">
          <div className="tt-col-xxl-6 tt-col-xl-12">
            <div className="tt-footer-widget">
              <h2>
                {"Ready to push"}
                <br />
                {" beyond limits?"}
              </h2>
              <a href="#contact" className="tt-btn tt-btn-secondary tt-magnetic-item">
                <span data-hover="Let's Connect">
                  {"Let's Connect"}
                </span>
                <span className="tt-btn-icon">
                  <i className="fa-regular fa-envelope">

                  </i>
                </span>
              </a>
            </div>
          </div>
          <div className="tt-col-xxl-2 tt-col-md-4">
            <div className="tt-footer-widget">
              <h3 className="tt-footer-widget-heading">
                {"Links"}
              </h3>
              <ul className="tt-footer-widget-list">
                <li>
                  <a href="#faq" className="tt-link">
                    {"FAQ"}
                  </a>
                </li>
                <li>
                  <a href="#" className="tt-link">
                    {"Licenses"}
                  </a>
                </li>
                <li>
                  <a href="#" className="tt-link">
                    {"Terms of Use"}
                  </a>
                </li>
                <li>
                  <a href="#" className="tt-link">
                    {"Privacy Policy"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tt-col-xxl-2 tt-col-md-4">
            <div className="tt-footer-widget">
              <h3 className="tt-footer-widget-heading">
                {"Sitemap"}
              </h3>
              <ul className="tt-footer-widget-list">
                <li>
                  <a href="#about" className="tt-link">
                    {"About Me"}
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="tt-link">
                    {"Portfolio"}
                  </a>
                </li>
                <li>
                  <a href="#services" className="tt-link">
                    {"Services"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tt-col-xxl-2 tt-col-md-4">
            <div className="tt-footer-widget">
              <h3 className="tt-footer-widget-heading">
                {"Contact"}
              </h3>
              <ul className="tt-footer-widget-list">
                <li>
                  <a href="https://www.google.com.au/maps/place/Envato+Pty+Ltd/@-37.8166193,144.968802,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d4c2b349649:0xb6899234e561db11!8m2!3d-37.8166193!4d144.968802!16s%2Fg%2F1tfgjz3b?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" className="tt-link" target="_blank" rel="nofollow noopener">
                    {" 180 Flinders St, Melbourne"}
                    <br />
                    {" Victoria, 3000 Australia "}
                  </a>
                </li>
                <li>
                  <a href="mailto:company@email.com" className="tt-link">
                    {"company@email.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+(123)456789000" className="tt-link">
                    {" +(123) 456 789 000"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tt-footer-bottom">
          <div className="tt-row tt-sm-row-reverse">
            <div className="tt-col-md-4 tt-align-items-md-end tt-justify-content-md-end">
              <div className="tt-footer-widget">
                <div className="tt-social-buttons tt-sbtn-inline tt-sbtn-filled">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className="fa-brands fa-facebook-f">

                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className="fa-brands fa-x-twitter">

                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className="fa-brands fa-dribbble">

                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className="fa-brands fa-behance">

                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tt-col-md-4 tt-align-items-md-end tt-justify-content-md-center">
              <div className="tt-footer-widget text-center-to-md">
                {" Made with "}
                <i className="fa-regular fa-heart">

                </i>
              </div>
            </div>
            <div className="tt-col-md-4 tt-align-items-md-end">
              <div className="tt-footer-widget">
                <div className="tt-footer-copyright">
                  {" ©"}
                  <span className="tt-copyright-year">

                  </span>
                  <a href="https://themetorium.net/" className="tt-link" target="_blank" rel="nofollow noopener">
                    {"Themetorium.net"}
                  </a>
                  <br />
                  {" All Rights Reserved "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <div className="tt-scroll-to-top" data-top-offset="800" data-bottom-offset="200">
    <a href="#" className="tt-stt-inner tt-magnetic-item">
      <div className="tt-stt-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

          </path>
        </svg>
      </div>
    </a>
  </div>
</main>);
}
