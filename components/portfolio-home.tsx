"use client";

import { Fragment } from "react";
import { mediaLabel } from "../lib/media-label";
import { useSiteContent } from "./site-content-provider";


import type { Project } from "../lib/project-types";
import { ProjectGrid } from "./project-grid";
import { usePortfolioRuntime } from "./portfolio-runtime";

export default function PortfolioHome({ projects }: { projects: Project[] }) {
  const content = useSiteContent("home");
  const shared = useSiteContent("global");
  usePortfolioRuntime();
  return (<main id="body-inner">
  <div id="tt-page-transition">
    <div className="tt-ptr-overlay-top">

    </div>
    <div className="tt-ptr-overlay-bottom">

    </div>
    <div className="tt-ptr-preloader">
      <div className="tt-ptr-prel-content">
        <img src={shared.values["branding-352021170840"]} className="tt-ptr-prel-image" alt={shared.values["branding-eb47624bd1e4"]} />
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
            <a href={shared.values["branding-837654628ed0"]} className="tt-magnetic-item">
              <img src={shared.values["branding-352021170840"]} className="tt-logo-light" alt={shared.values["branding-eb47624bd1e4"]} />
              <img src={shared.values["branding-eed568f752c9"]} className="tt-logo-dark" alt={shared.values["branding-eb47624bd1e4"]} />
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
                      <a href={shared.values["navigation-75028b91ed94"]}>
                        {shared.values["navigation-b071da6c34ef"]}
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["navigation-8c2d9d4dddbc"]}>
                        {shared.values["navigation-da4deec83426"]}
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["navigation-3dfe9ad6b2b0"]}>
                        {shared.values["navigation-b604921848fa"]}
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["navigation-b74d0b8c7591"]}>
                        {shared.values["navigation-b5e4a0d92e12"]}
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["navigation-80edc576f931"]}>
                        {shared.values["navigation-b67954d42188"]}
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["navigation-fe4a1d1d608b"]}>
                        {shared.values["navigation-95d7ac1de57e"]}
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["navigation-200dc7c7426a"]}>
                        {shared.values["navigation-e349bf04f7ac"]}
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
                {shared.values["navigation-968b11572783"]}
              </span>
              <span className="tt-m-menu-text-close">
                {shared.values["navigation-eff823d9ccef"]}
              </span>
            </div>
            <div className="tt-m-menu-toggle-btn-holder">
              <a href={shared.values["navigation-2c8dce6c5ff4"]} className="tt-m-menu-toggle-btn">
                <span>

                </span>
              </a>
            </div>
          </div>
          <a href={shared.values["navigation-200dc7c7426a"]} className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
            <span data-hover={shared.values["navigation-baef14aaf201"]}>
              {shared.values["navigation-baef14aaf201"]}
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
      {!!content.collections["hero-items"].length && <div className="ph-image-trail ph-itr-full">
        {content.collections["hero-items"].map(item => <Fragment key={item.id}>{item.template === "layout-1" ? (<img className="ph-itr-img" src={item.values["field-1"]} alt={item.values["field-2"]} />) : null}</Fragment>)}
      </div>}
      <div className="page-header-inner">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h2 className="ph-caption-subtitle">
              {content.values["hero-1"]}
            </h2>
            <h1 className="ph-caption-title">
              {content.values["hero-2"]}
            </h1>
            <div className="ph-caption-description max-width-700">
              {content.values["hero-3"]}
              <br />
              {content.values["hero-4"]}
            </div>
          </div>
        </div>
      </div>
      <div className="ph-social">
        <div className="tt-social-buttons">
          <ul>
            <li>
              <a href={content.values["hero-5"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className={content.values["hero-6"]}>

                </i>
              </a>
            </li>
            <li>
              <a href={content.values["hero-7"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className={content.values["hero-8"]}>

                </i>
              </a>
            </li>
            <li>
              <a href={content.values["hero-9"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className={content.values["hero-10"]}>

                </i>
              </a>
            </li>
            <li>
              <a href={content.values["hero-11"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                <i className={content.values["hero-12"]}>

                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tt-scroll-down">
        <a href={content.values["hero-13"]} className="tt-sd-inner tt-magnetic-item" data-offset="0">
          <div className="tt-sd-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

              </path>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div id="tt-page-content">{content.sectionOrder.filter(section => !content.hiddenSections.includes(section)).map(section => <Fragment key={section}>{section === "portfolio" ? (<Fragment><div id="portfolio" className="tt-section padding-top-xlg-20">
        <div className="tt-section-inner tt-wrap max-width-1600 margin-bottom-80">
          <div className="tt-heading tt-heading-lg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {content.values["portfolio-1"]}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {content.values["portfolio-2"]}
              <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-1">
                <img src={content.values["portfolio-3"]} alt={content.values["portfolio-4"]} />
              </span>
              {content.values["portfolio-5"]}
              <br />
              {content.values["portfolio-6"]}
              <br />
              <span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-2">
                <a href={content.values["portfolio-7"]} target="_blank" rel="nofollow noopener">
                  <img src={content.values["portfolio-8"]} alt={content.values["portfolio-9"]} />
                </a>
              </span>
              {content.values["portfolio-10"]}
            </h2>
            <p className="max-width-700 tt-anim-lines">
              {content.values["portfolio-11"]}
            </p>
          </div>
        </div>
        <div className="tt-section-inner">
          <div className="tt-portfolio-grid tt-pgi-boxed tt-pgi-tilted">
            <div className="tt-grid tt-grid-col-4 tt-grid-gap-3 tt-grid-appear">
              <div className="tt-grid-filter tt-grf-center tt-anim-fadeinup">
                <button type="button" className="tt-btn tt-btn-secondary tt-magnetic-item">
                  <span data-hover={content.values["portfolio-12"]}>
                    {content.values["portfolio-13"]}
                  </span>
                </button>
                <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".branding">
                  <span data-hover={content.values["portfolio-14"]}>
                    {content.values["portfolio-15"]}
                  </span>
                </button>
                <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".digital">
                  <span data-hover={content.values["portfolio-16"]}>
                    {content.values["portfolio-17"]}
                  </span>
                </button>
                <button type="button" className="tt-btn tt-btn-accent tt-magnetic-item" data-filter=".artistic">
                  <span data-hover={content.values["portfolio-18"]}>
                    {content.values["portfolio-19"]}
                  </span>
                </button>
              </div>
              <ProjectGrid projects={projects} />
              <div className="tt-grid-load-more" data-show-items="8" data-load-more-items="8">
                <div className="tt-grlm-btn-wrap">
                  <a href={content.values["portfolio-20"]} className="tt-grlm-btn tt-btn tt-btn-accent tt-magnetic-item">
                    <span data-hover={content.values["portfolio-21"]}>
                      {content.values["portfolio-22"]}
                    </span>
                    <span className="tt-btn-icon">
                      <i className={content.values["portfolio-23"]}>

                      </i>
                    </span>
                  </a>
                </div>
                <div className="tt-grid-no-more-msg">
                  {content.values["portfolio-24"]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</Fragment>) : section === "services" ? (<Fragment><div id="services" className="tt-section no-padding-bottom">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-heading tt-heading-xxxlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {content.values["services-1"]}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {content.values["services-2"]}
            </h2>
            <p className="max-width-600 tt-anim-lines">
              {content.values["services-3"]}
            </p>
          </div>
        </div>
      </div>
<div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-accordion tt-acc-xlg tt-acc-counter tt-acc-borders tt-acc-tilted">
            {content.collections["services-items"].map(item => <Fragment key={item.id}>{item.template === "layout-1" ? (<div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {item.values["field-1"]}
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
                      {item.values["field-2"]}
                    </p>
                    <p>
                      {item.values["field-3"]}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href={item.values["field-4"]} className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover={item.values["field-5"]}>
                        {item.values["field-6"]}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>) : item.template === "layout-2" ? (<div className="tt-accordion-item tt-anim-fadeinup">
              <div className="tt-accordion-heading">
                <div className="tt-acc-head cursor-alter">
                  <div className="tt-acc-head-inner">
                    <h3 className="tt-acc-head-title">
                      {item.values["field-1"]}
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
                      {item.values["field-2"]}
                    </p>
                    <p>
                      {item.values["field-3"]}
                    </p>
                    <p>
                      {item.values["field-4"]}
                    </p>
                  </div>
                  <div className="tt-col-lg-1">

                  </div>
                  <div className="tt-col-lg-3">
                    <a href={item.values["field-5"]} className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item" target="_blank">
                      <span data-hover={item.values["field-6"]}>
                        {item.values["field-7"]}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>) : null}</Fragment>)}
          </div>
        </div>
      </div>
</Fragment>) : section === "clients" ? (<Fragment><div id="clients" className="tt-section no-padding-bottom">
        <div className="tt-section-inner">
          <div className="tt-heading tt-heading-xlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {content.values["clients-1"]}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {content.values["clients-2"]}
            </h2>
            <p className="max-width-700 tt-anim-lines">
              {content.values["clients-3"]}
            </p>
          </div>
        </div>
      </div>
<div className="tt-section padding-bottom-xlg-120">
        <div className="tt-section-inner tt-wrap max-width-1800">
          <ul className="tt-logo-wall tt-lw-col-6 tt-lw-boxed tt-lw-tilted tt-anim-fadeinup">
            {content.collections["clients-items"].map(item => <Fragment key={item.id}>{item.template === "layout-1" ? (<li>
              <a href={item.values["field-1"]} className="tt-logo-wall-item cursor-alter" target="_blank" rel="noopener">
                <div className="tt-lv-item-inner">
                  <img src={item.values["field-2"]} className="tt-lv-img-light" loading="lazy" alt={item.values["field-3"]} />
                  <img src={item.values["field-4"]} className="tt-lv-img-dark" loading="lazy" alt={item.values["field-5"]} />
                </div>
              </a>
            </li>) : null}</Fragment>)}
          </ul>
        </div>
      </div>
</Fragment>) : section === "showreel" ? (<Fragment><div className="tt-section no-padding">
        <div className="tt-section-inner">
          <div className="tt-clipper">
            <a href={content.values["showreel-1"]} className="tt-clipper-inner" data-cursor={mediaLabel(content.values["extra-label-1"])} data-fancybox="" data-caption={mediaLabel(content.values["extra-label-2"])}>
              <div className="tt-clipper-bg">
                <video loop={true} muted={true} autoPlay={true} playsInline={true} preload="metadata" poster={content.values["showreel-2"]}>
                  <source src={content.values["showreel-3"]} data-src={content.values["showreel-4"]} type="video/mp4" />
                  <source src={content.values["showreel-5"]} data-src={content.values["showreel-6"]} type="video/webm" />
                </video>
              </div>
              <div className="tt-clipper-content">
                <div className="tt-clipper-btn">
                  <i className={content.values["showreel-7"]}>

                  </i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
</Fragment>) : section === "about" ? (<Fragment><div id="about" className="tt-section">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row">
            <div className="tt-col-lg-7 tt-align-self-center">
              <div className="tt-heading tt-heading-lg">
                <h3 className="tt-heading-subtitle tt-anim-lines">
                  {content.values["about-1"]}
                </h3>
                <h2 className="tt-heading-title tt-anim-lines">
                  {content.values["about-2"]}
                </h2>
              </div>
            </div>
            <div className="tt-col-lg-1">

            </div>
            <div className="tt-col-lg-4 tt-align-self-center">
              <p className="tt-anim-lines">
                {content.values["about-3"]}
              </p>
              <a href={content.values["about-4"]} className="tt-btn tt-btn-secondary tt-magnetic-item tt-anim-fadeinup">
                <span data-hover={content.values["about-5"]}>
                  {content.values["about-6"]}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
</Fragment>) : section === "testimonials" ? (<Fragment><div id="testimonials" className="tt-section">
        <div className="tt-section-inner tt-wrap max-width-1400">
          <div className="tt-sticker">
            <div className="tt-row tt-lg-row-reverse">
              <div className="tt-col-lg-4 margin-bottom-40">
                <div className="tt-sticker-sticky tt-sticky-element">
                  <div className="tt-heading tt-heading-xlg">
                    <h3 className="tt-heading-subtitle tt-anim-lines">
                      {content.values["testimonials-1"]}
                    </h3>
                    <h2 className="tt-heading-title tt-anim-characters">
                      {content.values["testimonials-2"]}
                      <br />
                      {content.values["testimonials-3"]}
                      <br />
                      {content.values["testimonials-4"]}
                    </h2>
                  </div>
                  <p className="tt-anim-lines">
                    {content.values["testimonials-5"]}
                  </p>
                  <a href={content.values["testimonials-6"]} className="tt-btn tt-btn-secondary tt-magnetic-item margin-top-20 tt-anim-fadeinup">
                    <span data-hover={content.values["testimonials-7"]}>
                      {content.values["testimonials-8"]}
                    </span>
                  </a>
                </div>
              </div>
              <div className="tt-col-lg-1">

              </div>
              <div className="tt-col-lg-7">
                <div className="tt-sticker-scroller">
                  <div className="tt-testimonials-list tt-tli-tilted tt-tli-lg">
                    {content.collections["testimonials-items"].map(item => <Fragment key={item.id}>{item.template === "layout-1" ? (<div className="tt-testimonials-list-item tt-tli-reverse-color">
                      <div className="tt-tli-inner">
                        <blockquote className="open-quote">
                          <cite>
                            {item.values["field-1"]}
                          </cite>
                          <footer>
                            <a href={item.values["field-2"]} className="tt-link" target="_blank" rel="noopener">
                              {item.values["field-3"]}
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    </div>) : null}</Fragment>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</Fragment>) : section === "marquee" ? (<Fragment><div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-scrolling-text scrt-dyn-separator tt-scrt-tilted-2 tt-scrt-bordered" data-scroll-speed="10" data-change-direction="true">
            <div className="tt-scrt-inner">
              <div className="tt-scrt-content">
                <div className="tt-scrt-text">
                  {content.values["marquee-1"]}
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
                  {content.values["marquee-2"]}
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
</Fragment>) : section === "highlights" ? (<Fragment><div className="tt-section no-padding-bottom">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-row">
            <div className="tt-col-lg-7 tt-align-self-center">
              <div className="tt-heading tt-heading-xxxlg">
                <h3 className="tt-heading-subtitle tt-anim-lines">
                  {content.values["highlights-1"]}
                </h3>
                <h2 className="tt-heading-title tt-anim-characters">
                  {content.values["highlights-2"]}
                </h2>
              </div>
            </div>
            <div className="tt-col-lg-1">

            </div>
            <div className="tt-col-lg-4 tt-align-self-center">
              <p className="tt-anim-lines">
                {content.values["highlights-3"]}
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="tt-section">
        <div className="tt-section-inner">
          <div className="tt-avards-list tt-avlist-tilted">
            {content.collections["highlights-items"].map(item => <Fragment key={item.id}>{item.template === "layout-1" ? (<a href={item.values["field-1"]} className="tt-avlist-item cursor-alter tt-anim-fadeinup" target="_blank" rel="nofollow">
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h3 className="tt-avlist-title">
                    {item.values["field-2"]}
                  </h3>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">

                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">
                    {item.values["field-3"]}
                  </div>
                </div>
              </div>
            </a>) : null}</Fragment>)}
          </div>
        </div>
      </div>
</Fragment>) : section === "faq" ? (<Fragment><div id="faq" className="tt-section">
        <div className="tt-section-inner tt-wrap max-width-1400">
          <div className="tt-heading tt-heading-xlg tt-heading-center margin-bottom-80">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {content.values["faq-1"]}
            </h3>
            <h2 className="tt-heading-title tt-anim-characters">
              {content.values["faq-2"]}
            </h2>
            <div className="max-width-600 tw:mx-auto">
              <p className="tt-anim-lines">
                {content.values["faq-3"]}
              </p>
            </div>
          </div>
          <div className="tt-row tt-justify-content-center">
            <div className="tt-col-lg-10">
              <div className="tt-accordion tt-acc-boxed tt-acc-counter tt-acc-tilted">
                {content.collections["faq-items"].map(item => <Fragment key={item.id}>{item.template === "layout-1" ? (<div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {item.values["field-1"]}
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
                      {item.values["field-2"]}
                    </p>
                    <p>
                      {item.values["field-3"]}
                    </p>
                  </div>
                </div>) : item.template === "layout-2" ? (<div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {item.values["field-1"]}
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
                      {item.values["field-2"]}
                    </p>
                    <ul>
                      <li>
                        {item.values["field-3"]}
                      </li>
                      <li>
                        {item.values["field-4"]}
                      </li>
                      <li>
                        {item.values["field-5"]}
                      </li>
                    </ul>
                  </div>
                </div>) : item.template === "layout-3" ? (<div className="tt-accordion-item tt-anim-fadeinup">
                  <div className="tt-accordion-heading">
                    <div className="tt-acc-head cursor-alter">
                      <div className="tt-acc-head-inner">
                        <h3 className="tt-acc-head-title">
                          {item.values["field-1"]}
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
                      {item.values["field-2"]}
                    </p>
                  </div>
                </div>) : null}</Fragment>)}
              </div>
            </div>
          </div>
        </div>
      </div>
</Fragment>) : section === "creative-power" ? (<Fragment><div className="tt-section padding-bottom-xlg-120">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-heading tt-heading-xxlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-anim-lines">
              {content.values["creative-power-1"]}
            </h3>
            <h2 className="tt-heading-title">
              <a href={content.values["creative-power-2"]} className="tt-anim-characters" data-cursor={mediaLabel(content.values["extra-label-3"])}>
                {content.values["creative-power-3"]}
              </a>
            </h2>
            <p className="tt-anim-lines">
              {content.values["creative-power-4"]}
            </p>
          </div>
        </div>
      </div>
</Fragment>) : section === "contact" ? (<Fragment><div id="contact" className="tt-section padding-top-40 padding-bottom-120">
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
                      {content.values["contact-1"]}
                    </h2>
                  </div>
                  <div className="margin-bottom-40">
                    <p className="tt-anim-lines">
                      {content.values["contact-2"]}
                    </p>
                  </div>
                  <div className="margin-bottom-30 tt-anim-fadeinup">
                    <h3 className="tt-contact-info-heading">
                      {content.values["contact-3"]}
                    </h3>
                    <ul className="tt-list">
                      <li>
                        <a href={content.values["contact-4"]} className="tt-link" target="_blank" rel="noopener">
                          {content.values["contact-5"]}
                          <br />
                          {content.values["contact-6"]}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="margin-bottom-30 tt-anim-fadeinup">
                    <ul className="tt-list">
                      <li>
                        <a href={content.values["contact-7"]} className="tt-link">
                          {content.values["contact-8"]}
                        </a>
                      </li>
                      <li>
                        <a href={content.values["contact-9"]} className="tt-link">
                          {content.values["contact-10"]}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tt-social-buttons tt-sbtn-inline tt-sbtn-filled tt-anim-fadeinup">
                    <ul>
                      <li>
                        <a href={content.values["contact-11"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className={content.values["contact-12"]}>

                          </i>
                        </a>
                      </li>
                      <li>
                        <a href={content.values["contact-13"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className={content.values["contact-14"]}>

                          </i>
                        </a>
                      </li>
                      <li>
                        <a href={content.values["contact-15"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className={content.values["contact-16"]}>

                          </i>
                        </a>
                      </li>
                      <li>
                        <a href={content.values["contact-17"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                          <i className={content.values["contact-18"]}>

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
                    <i className={content.values["contact-19"]}>

                    </i>
                  </div>
                </div>
                <div className="tt-contact-form-inner">
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-name">
                      {content.values["contact-20"]}
                      <span className="required">
                        {content.values["contact-21"]}
                      </span>
                    </label>
                    <input className="tt-form-control" id="sender-name" type="text" name="name" placeholder={content.values["contact-22"]} required={true} />
                  </div>
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-email">
                      {content.values["contact-23"]}
                      <span className="required">
                        {content.values["contact-24"]}
                      </span>
                    </label>
                    <input className="tt-form-control" id="sender-email" type="email" name="email" placeholder={content.values["contact-25"]} required={true} />
                  </div>
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-option">
                      {content.values["contact-26"]}
                      <span className="required">
                        {content.values["contact-27"]}
                      </span>
                    </label>
                    <select className="tt-form-control" id="sender-option" name="option" required={true} defaultValue="">
                      <option value="" disabled={true}>
                        {content.values["contact-28"]}
                      </option>
                      <option value={content.values["contact-29"] === "Say hello" ? "Say Hello" : content.values["contact-29"]}>
                        {content.values["contact-29"]}
                      </option>
                      <option value={content.values["contact-30"] === "New project" ? "New Project" : content.values["contact-30"]}>
                        {content.values["contact-30"]}
                      </option>
                      <option value={content.values["contact-31"]}>
                        {content.values["contact-31"]}
                      </option>
                      <option value={content.values["contact-32"]}>
                        {content.values["contact-32"]}
                      </option>
                    </select>
                  </div>
                  <div className="tt-form-group tt-anim-fadeinup">
                    <label htmlFor="sender-message">
                      {content.values["contact-33"]}
                      <span className="required">
                        {content.values["contact-34"]}
                      </span>
                    </label>
                    <textarea className="tt-form-control" id="sender-message" rows={5} name="message" placeholder={content.values["contact-35"]} required={true}>

                    </textarea>
                  </div>
                  <div className="tt-form-check margin-top-30 margin-bottom-30 tt-anim-fadeinup">
                    <input type="checkbox" id="privacy-policy-check" required={true} />
                    <label htmlFor="privacy-policy-check" className="text-small">
                      {content.values["contact-36"]}
                      <a href={content.values["contact-37"]} className="tt-link-2" target="_blank">
                        {content.values["contact-38"]}
                      </a>
                      {content.values["contact-39"]}
                    </label>
                  </div>
                  <button type="submit" className="tt-btn tt-btn-secondary tt-btn-full tt-anim-fadeinup">
                    <span data-hover={content.values["contact-40"]}>
                      {content.values["contact-41"]}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</Fragment>) : null}</Fragment>)}</div>
    <footer id="tt-footer" className="border-top">
      <div className="tt-footer-inner">
        <div className="tt-row">
          <div className="tt-col-xxl-6 tt-col-xl-12">
            <div className="tt-footer-widget">
              <h2>
                {shared.values["footer-cb8c2ac07c70"]}
                <br />
                {shared.values["footer-61b47e5614a6"]}
              </h2>
              <a href={shared.values["footer-200dc7c7426a"]} className="tt-btn tt-btn-secondary tt-magnetic-item">
                <span data-hover={shared.values["footer-c0b1528f88e7"]}>
                  {shared.values["footer-c0b1528f88e7"]}
                </span>
                <span className="tt-btn-icon">
                  <i className={shared.values["footer-81cf3defa4db"]}>

                  </i>
                </span>
              </a>
            </div>
          </div>
          <div className="tt-col-xxl-2 tt-col-md-4">
            <div className="tt-footer-widget">
              <h3 className="tt-footer-widget-heading">
                {shared.values["footer-cf14c4413f01"]}
              </h3>
              <ul className="tt-footer-widget-list">
                <li>
                  <a href={shared.values["footer-fe4a1d1d608b"]} className="tt-link">
                    {shared.values["footer-95d7ac1de57e"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-2c8dce6c5ff4"]} className="tt-link">
                    {shared.values["footer-70efe0187ebd"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-2c8dce6c5ff4"]} className="tt-link">
                    {shared.values["footer-76bdf9eaeb77"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-2c8dce6c5ff4"]} className="tt-link">
                    {shared.values["footer-029947bf6809"]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tt-col-xxl-2 tt-col-md-4">
            <div className="tt-footer-widget">
              <h3 className="tt-footer-widget-heading">
                {shared.values["footer-8ca86e79b7d3"]}
              </h3>
              <ul className="tt-footer-widget-list">
                <li>
                  <a href={shared.values["footer-3dfe9ad6b2b0"]} className="tt-link">
                    {shared.values["footer-87e499d8b006"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-8c2d9d4dddbc"]} className="tt-link">
                    {shared.values["footer-da4deec83426"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-80edc576f931"]} className="tt-link">
                    {shared.values["footer-b67954d42188"]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tt-col-xxl-2 tt-col-md-4">
            <div className="tt-footer-widget">
              <h3 className="tt-footer-widget-heading">
                {shared.values["footer-e349bf04f7ac"]}
              </h3>
              <ul className="tt-footer-widget-list">
                <li>
                  <a href={shared.values["footer-3bb8ce93f8ab"]} className="tt-link" target="_blank" rel="nofollow noopener">
                    {shared.values["footer-35d4c98f0160"]}
                    <br />
                    {shared.values["footer-20f933f5d168"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-63b02315c6ed"]} className="tt-link">
                    {shared.values["footer-535e907a97dd"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-52aa2eab88fe"]} className="tt-link">
                    {shared.values["footer-5d4801a31e83"]}
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
                      <a href={shared.values["footer-1bc54fe4a43c"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className={shared.values["footer-b66d446bf1da"]}>

                        </i>
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["footer-eb6eda3afead"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className={shared.values["footer-3d56b0bfe9a9"]}>

                        </i>
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["footer-917544815758"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className={shared.values["footer-72b624c19e56"]}>

                        </i>
                      </a>
                    </li>
                    <li>
                      <a href={shared.values["footer-312e058b5781"]} className="tt-magnetic-item" target="_blank" rel="noopener">
                        <i className={shared.values["footer-6c1c7e0eec53"]}>

                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tt-col-md-4 tt-align-items-md-end tt-justify-content-md-center">
              <div className="tt-footer-widget text-center-to-md">
                {shared.values["footer-54804282e5c1"]}
                <i className={shared.values["footer-625d10082fcc"]}>

                </i>
              </div>
            </div>
            <div className="tt-col-md-4 tt-align-items-md-end">
              <div className="tt-footer-widget">
                <div className="tt-footer-copyright">
                  {shared.values["footer-94aebbfc88a6"]}
                  <span className="tt-copyright-year">

                  </span>
                  <a href={shared.values["footer-bfab07f92c83"]} className="tt-link" target="_blank" rel="nofollow noopener">
                    {shared.values["footer-e70e263c9598"]}
                  </a>
                  <br />
                  {shared.values["footer-66a167229d37"]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <div className="tt-scroll-to-top" data-top-offset="800" data-bottom-offset="200">
    <a href={content.values["footer-1"]} className="tt-stt-inner tt-magnetic-item">
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
