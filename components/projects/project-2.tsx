"use client";

import type { CSSProperties } from "react";
import type { ProjectPageProps } from "../../lib/project-types";
import { ProjectGallery } from "../project-gallery";
import { usePortfolioRuntime } from "../portfolio-runtime";
import { ProjectHero } from "../project-hero";

export default function Project2({ project, projectLinks }: ProjectPageProps) {
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
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          {"Home"}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href="/">
                              {"Landing Page v.1"}
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              {"Landing Page v.2"}
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              {"Landing Page v.3"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master active">
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          {"Work"}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Portfolio Grid"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="/#portfolio">
                                    {"Grid Default"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Grid 2 Columns"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Grid Boxed"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Grid No Gap"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Masonry Grid"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Masonry Grid Boxed"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Portfolio List"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="/#portfolio">
                                    {"List Default"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"List Shifted"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"List Boxed"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"List Inline"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"List Inline Shifted"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Portfolio Scrolling"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="/#portfolio">
                                    {"Scrolling Default"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Scrolling Tilted"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Scrolling Boxed"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Fullscreen Carousel"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="/#portfolio">
                                    {"Carousel Default"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Carousel Boxed"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Carousel Focused"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Carousel Small"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Fullscreen Slider"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="/#portfolio">
                                    {"Slider Horizontal"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#portfolio">
                                    {"Slider Vertical"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap active">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Project Pages"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={projectLinks["project-1"] || "/#portfolio"}>
                                    {"Project Page v.1"}
                                  </a>
                                </li>
                                <li className="active">
                                  <a href={projectLinks["project-2"] || "/#portfolio"}>
                                    {"Project Page v.2"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-3"] || "/#portfolio"}>
                                    {"Project Page v.3"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-4"] || "/#portfolio"}>
                                    {"Project Page v.4"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-5"] || "/#portfolio"}>
                                    {"Project Page v.5"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-6"] || "/#portfolio"}>
                                    {"Project Page v.6"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-7"] || "/#portfolio"}>
                                    {"Project Page v.7"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-8"] || "/#portfolio"}>
                                    {"Project Page v.8"}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-9"] || "/#portfolio"}>
                                    {"Project Page v.9"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="/#portfolio">
                              {"Portfolio Category"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          {"About"}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href="/#about">
                              {"About Us v.1"}
                            </a>
                          </li>
                          <li>
                            <a href="/#about">
                              {"About Us v.2"}
                            </a>
                          </li>
                          <li>
                            <a href="/#about">
                              {"About Me v.1"}
                            </a>
                          </li>
                          <li>
                            <a href="/#about">
                              {"About Me v.2"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          {"Blog"}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href="blog.html">
                              {"Blog List"}
                            </a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">
                              {"Blog Sidebar"}
                            </a>
                          </li>
                          <li>
                            <a href="blog-compact.html">
                              {"Blog Compact"}
                            </a>
                          </li>
                          <li>
                            <a href="blog-post.html">
                              {"Blog Post"}
                            </a>
                          </li>
                          <li>
                            <a href="blog-post-sidebar.html">
                              {"Blog Post Sidebar"}
                            </a>
                          </li>
                          <li>
                            <a href="blog-archive.html">
                              {"Blog Archive"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          {"Contact"}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href="/#contact">
                              {"Contact Form"}
                            </a>
                          </li>
                          <li>
                            <a href="/#contact">
                              {"Contact Simple"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href="#">
                          {"More"}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Extra Pages"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="/#services">
                                    {"Services v.1"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#services">
                                    {"Services v.2"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#contact">
                                    {"Pricing Plans"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#testimonials">
                                    {"Testimonials"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/privacy">
                                    {"Dummy Page v.1"}
                                  </a>
                                </li>
                                <li>
                                  <a href="dummy-2.html">
                                    {"Dummy Page v.2"}
                                  </a>
                                </li>
                                <li>
                                  <a href="dummy-3.html">
                                    {"Dummy Page v.3"}
                                  </a>
                                </li>
                                <li>
                                  <a href="/#faq">
                                    {"FAQ"}
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">
                                    {"404 Error"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href="#">
                                {"Elements"}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href="elements.html">
                                    {"Elements"}
                                  </a>
                                </li>
                                <li>
                                  <a href="elements-buttons.html">
                                    {"Buttons"}
                                  </a>
                                </li>
                                <li>
                                  <a href="elements-forms.html">
                                    {"Forms"}
                                  </a>
                                </li>
                                <li>
                                  <a href="elements-media.html">
                                    {"Multimedia"}
                                  </a>
                                </li>
                                <li>
                                  <a href="elements-typography.html">
                                    {"Typography"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
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
          <a href="/#contact" className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
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
    <div id="page-header" className="ph-center ph-cap-xxlg ph-image-parallax ph-caption-parallax">
      <ProjectHero project={project} />
      <div className="page-header-inner">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <div className="ph-caption-categories">
              <a href="/#portfolio" className="ph-caption-category">{project.category}</a>
            </div>
            <h1 className="ph-caption-title">{project.title}</h1>
          </div>
        </div>
      </div>
      <div className="ph-share">
        <div className="ph-share-inner">
          <div className="ph-share-trigger">
            <div className="ph-share-text">
              {"Share"}
            </div>
            <div className="ph-share-icon">
              <i className="fas fa-share">

              </i>
            </div>
          </div>
          <div className="ph-share-buttons">
            <ul>
              <li>
                <a href="#" className="tt-magnetic-item" title="Share on Facebook">
                  <i className="fa-brands fa-facebook-f">

                  </i>
                </a>
              </li>
              <li>
                <a href="#" className="tt-magnetic-item" title="Share on X">
                  <i className="fa-brands fa-x-twitter">

                  </i>
                </a>
              </li>
              <li>
                <a href="#" className="tt-magnetic-item" title="Share on Pinterest">
                  <i className="fa-brands fa-pinterest">

                  </i>
                </a>
              </li>
            </ul>
          </div>
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
  <div className="tt-section no-padding-top">
    <div className="tt-section-inner padding-left-3-p padding-right-3-p">
      <div className="tt-image tti-fixed-height tti-border-radius">
        <figure>
          <img src="/assets/img/portfolio/single-project/project-2/1920/project-2-1-1920.jpg" className="tt-image-parallax tt-anim-zoomin" loading="lazy" alt="Image" />
          <figcaption>
            {" Image caption "}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
  <div className="tt-section">
    <div className="tt-section-inner tt-wrap">
      <div className="tt-row">
        <div className="tt-col-lg-4 padding-right-md-5-p">
          <div className="tt-heading tt-heading-lg margin-bottom-30 tt-anim-fadeinup">
            <h2 className="tt-heading-title">
              {"About the"}
              <br />
              {" Project"}
            </h2>
          </div>
        </div>
        <div className="tt-col-lg-8">
          <div className="tt-anim-fadeinup">
            <p>{project.description}</p>
          </div>
          <div className="tt-project-info-list tt-pil-inline tt-anim-fadeinup margin-top-40">
            <ul>
              <li>
                <div className="pi-list-heading">
                  {"Client"}
                </div>
                <div className="pi-list-cont">{project.client}</div>
              </li>
              <li>
                <div className="pi-list-heading">
                  {"Year"}
                </div>
                <div className="pi-list-cont">{project.year}</div>
              </li>
              <li>
                <div className="pi-list-heading">
                  {"Role"}
                </div>
                <div className="pi-list-cont">{project.role}</div>
              </li>
              <li>
                <div className="pi-list-heading">
                  {"Website"}
                </div>
                <div className="pi-list-cont"><a href={project.website || "#"} target="_blank" rel="noopener noreferrer">Visit site<span className="pi-list-icon"><i className="fas fa-arrow-right" /></span></a></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tt-section no-padding-bottom">
    <div className="tt-section-inner tt-wrap">
      <div className="tt-row margin-bottom-120">
        <div className="tt-col-lg-7">
          <div className="tt-image tti-border-radius tti-tilted-2">
            <figure>
              <a href="/assets/img/portfolio/single-project/project-2/1920/project-2-2-1920.jpg" className="tt-image-link" data-cursor="View" data-fancybox="gallery-348730" data-caption="Image caption">
                <img src="/assets/img/portfolio/single-project/project-2/1200/project-2-1-1200.jpg" className="tt-anim-zoomin" loading="lazy" alt="Image" />
              </a>
              <figcaption>
                {" Image caption "}
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="tt-col-lg-5">

        </div>
      </div>
      <div className="tt-row margin-bottom-120 tt-row-reverse">
        <div className="tt-col-lg-7">
          <div className="tt-image tti-border-radius tti-tilted-1">
            <figure>
              <a href="/assets/img/portfolio/single-project/project-2/1920/project-2-3-1920.jpg" className="tt-image-link" data-cursor="View" data-fancybox="gallery-348730" data-caption="Image caption">
                <img src="/assets/img/portfolio/single-project/project-2/1200/project-2-2-1200.jpg" className="tt-anim-zoomin" loading="lazy" alt="Image" />
              </a>
              <figcaption>
                {" Image caption "}
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="tt-col-lg-5">

        </div>
      </div>
      <div className="tt-row margin-bottom-120">
        <div className="tt-col-lg-7">
          <div className="tt-image tti-border-radius tti-tilted-2">
            <figure>
              <a href="/assets/img/portfolio/single-project/project-2/1920/project-2-4-1920.jpg" className="tt-image-link" data-cursor="View" data-fancybox="gallery-348730" data-caption="Image caption">
                <img src="/assets/img/portfolio/single-project/project-2/1200/project-2-3-1200.jpg" className="tt-anim-zoomin" loading="lazy" alt="Image" />
              </a>
              <figcaption>
                {" Image caption "}
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="tt-col-lg-5">

        </div>
      </div>
    </div>
  </div>
  <div className="tt-section no-padding-top padding-bottom-xlg-160">
    <div className="tt-section-inner tt-wrap">
      <div className="tt-row">
        <div className="tt-col-lg-8">
          <div className="tt-heading margin-bottom-30 tt-anim-fadeinup">
            <h2 className="tt-heading-title">
              {"The Result"}
            </h2>
          </div>
          <div className="tt-anim-fadeinup">
            <p>
              {"The result is a cohesive collection of luxury handbags that balances strong geometric character with refined elegance. Each design feels confident yet understated, highlighting premium leather, precise construction, and lasting appeal. The project delivers a clear visual identity that communicates quality, craftsmanship, and modern luxury."}
            </p>
          </div>
        </div>
        <div className="tt-col-lg-4">

        </div>
      </div>
    </div>
  </div>
  <div className="tt-section padding-top-xlg-100 padding-bottom-xlg-100 border-top">
    <div className="tt-section-inner max-width-1800">
      <div className="tt-portf-single-nav tt-ps-nav-tilted tt-anim-fadeinup">
        <div className="tt-row">
          <div className="tt-col-6 border-right">
            <div className="tt-ps-nav-item tt-ps-nav-prev">
              <a href={projectLinks["project-1"] || "/#portfolio"} className="tt-ps-nav-image" data-cursor="View<br> Project">
                <div className="tt-ps-nav-image-inner">
                  <img src="/assets/img/portfolio/800/portfolio-1-800.jpg" loading="lazy" alt="Image" />
                </div>
              </a>
              <div className="tt-ps-nav-text">
                <div className="tt-ps-nav-subtitle">
                  <div className="tt-ps-nav-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                  {" Prev"}
                  <br />
                  {" Project "}
                </div>
                <h3 className="tt-ps-nav-title">
                  <a href={projectLinks["project-1"] || "/#portfolio"} className="tt-link">
                    {"Aero Dog"}
                  </a>
                </h3>
                <div className="tt-ps-nav-categories">
                  <a href="/#portfolio" className="tt-ps-nav-category">
                    {"Branding"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tt-col-6">
            <div className="tt-ps-nav-item tt-ps-nav-next">
              <a href={projectLinks["project-3"] || "/#portfolio"} className="tt-ps-nav-image" data-cursor="View<br> Project">
                <div className="tt-ps-nav-image-inner">
                  <img src="/assets/img/portfolio/800/portfolio-3-800.jpg" loading="lazy" alt="Image" />
                </div>
              </a>
              <div className="tt-ps-nav-text">
                <div className="tt-ps-nav-subtitle">
                  <div>
                    {"Next"}
                    <br />
                    {" Project"}
                  </div>
                  <div className="tt-ps-nav-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
                <h3 className="tt-ps-nav-title">
                  <a href={projectLinks["project-3"] || "/#portfolio"} className="tt-link">
                    {"Virtual Glam"}
                  </a>
                </h3>
                <div className="tt-ps-nav-categories">
                  <a href="/#portfolio" className="tt-ps-nav-category">
                    {"Digital"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<ProjectGallery project={project} /></div>
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
              <a href="/#contact" className="tt-btn tt-btn-secondary tt-magnetic-item">
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
                  <a href="/#faq" className="tt-link">
                    {"FAQ"}
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="tt-link">
                    {"Licenses"}
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="tt-link">
                    {"Terms of Use"}
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="tt-link">
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
                  <a href="/#about" className="tt-link">
                    {"About Us"}
                  </a>
                </li>
                <li>
                  <a href="/#portfolio" className="tt-link">
                    {"Portfolio"}
                  </a>
                </li>
                <li>
                  <a href="/#services" className="tt-link">
                    {"Services"}
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html" className="tt-link">
                    {"Blog"}
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
