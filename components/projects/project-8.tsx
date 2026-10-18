"use client";

import { Fragment } from "react";
import { mediaLabel } from "../../lib/media-label";
import { useSiteContent } from "../site-content-provider";


import type { ProjectPageProps } from "../../lib/project-types";
import { ProjectGallery } from "../project-gallery";
import { usePortfolioRuntime } from "../portfolio-runtime";

export default function Project8({ project, projectLinks }: ProjectPageProps) {
  const content = useSiteContent("project-8");
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
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                          {shared.values["navigation-b071da6c34ef"]}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href={shared.values["navigation-837654628ed0"]}>
                              {shared.values["navigation-c7227f304aad"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-837654628ed0"]}>
                              {shared.values["navigation-b770a608f8a3"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-837654628ed0"]}>
                              {shared.values["navigation-183f5dd424cf"]}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master active">
                      <div className="tt-submenu-trigger">
                        <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                          {shared.values["navigation-b5672ec2a011"]}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-50f1b49b25ff"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-9973060c66d7"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-6619a7158424"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-90d7fb4b3625"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-4d7cd6aca21c"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-a4556df51229"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-c3f46b460930"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-3340d0570d59"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-084be3f6b4a9"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-91fd0b9fe678"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-ee9b3226ba1d"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-ea545474ef6c"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-0149a6481d89"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-b7cc1d01cb0e"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-e7cced1cf9df"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-1eea3c144139"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-a27a68047b02"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-cbed9af00dc3"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-7c689318ad97"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-450a5ef26893"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-7e5c032b4eef"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-e226e78500b7"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-a3e5c5f8ab63"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-357a6d5b94c5"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-897253447989"]}>
                                    {shared.values["navigation-3727a43e3fe7"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap active">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-4dadd9c3ac6c"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={projectLinks["project-1"] || "/#portfolio"}>
                                    {shared.values["navigation-310c5824c4f7"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-2"] || "/#portfolio"}>
                                    {shared.values["navigation-830d77a0e3f9"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-3"] || "/#portfolio"}>
                                    {shared.values["navigation-4430bfba640b"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-4"] || "/#portfolio"}>
                                    {shared.values["navigation-30a49652be48"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-5"] || "/#portfolio"}>
                                    {shared.values["navigation-9c54bff8960b"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-6"] || "/#portfolio"}>
                                    {shared.values["navigation-e9e2997d476d"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-7"] || "/#portfolio"}>
                                    {shared.values["navigation-58cf6a967970"]}
                                  </a>
                                </li>
                                <li className="active">
                                  <a href={projectLinks["project-8"] || "/#portfolio"}>
                                    {shared.values["navigation-53132fbfae2b"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={projectLinks["project-9"] || "/#portfolio"}>
                                    {shared.values["navigation-0870ba26df26"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href={shared.values["navigation-897253447989"]}>
                              {shared.values["navigation-db908f8ddf00"]}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                          {shared.values["navigation-b604921848fa"]}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href={shared.values["navigation-0bec979588ab"]}>
                              {shared.values["navigation-f65a13e39e75"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-0bec979588ab"]}>
                              {shared.values["navigation-3e96777dfdb5"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-0bec979588ab"]}>
                              {shared.values["navigation-690898418660"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-0bec979588ab"]}>
                              {shared.values["navigation-2b0fa6c78de9"]}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                          {shared.values["navigation-c3ecfce05388"]}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href={shared.values["navigation-8b12c384cceb"]}>
                              {shared.values["navigation-ad311f472465"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-d62c409e3b14"]}>
                              {shared.values["navigation-6b2caa08b8b3"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-79044a9a450b"]}>
                              {shared.values["navigation-f7a0be952796"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-05b5e27d8837"]}>
                              {shared.values["navigation-2dbcc7ce4221"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-99a2a1415f82"]}>
                              {shared.values["navigation-62b8c6023a5f"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-ca11c0f97622"]}>
                              {shared.values["navigation-7879573db2b0"]}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                          {shared.values["navigation-e349bf04f7ac"]}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li>
                            <a href={shared.values["navigation-a857b8d87daf"]}>
                              {shared.values["navigation-8bcd6c150b6c"]}
                            </a>
                          </li>
                          <li>
                            <a href={shared.values["navigation-a857b8d87daf"]}>
                              {shared.values["navigation-bff6d15b3d5f"]}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="tt-submenu-wrap tt-submenu-master">
                      <div className="tt-submenu-trigger">
                        <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                          {shared.values["navigation-eaa063e8c7ea"]}
                        </a>
                      </div>
                      <div className="tt-submenu">
                        <ul className="tt-submenu-list">
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-bb65d46477c9"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-6e273d623dab"]}>
                                    {shared.values["navigation-576174b766ec"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-6e273d623dab"]}>
                                    {shared.values["navigation-4ce7c046c9b5"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-a857b8d87daf"]}>
                                    {shared.values["navigation-e63742bf10ef"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-e6f5aa1ce8ed"]}>
                                    {shared.values["navigation-0369a61e83f5"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-34cb87210d43"]}>
                                    {shared.values["navigation-26849a0893c6"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-c9c4527a65dd"]}>
                                    {shared.values["navigation-e9f8092528af"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-9c5046402a43"]}>
                                    {shared.values["navigation-e3e3fd513817"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-821f7cb117ca"]}>
                                    {shared.values["navigation-95d7ac1de57e"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-dc741b60a9f3"]}>
                                    {shared.values["navigation-2c23a942ef3a"]}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="tt-submenu-wrap">
                            <div className="tt-submenu-trigger">
                              <a href={shared.values["navigation-2c8dce6c5ff4"]}>
                                {shared.values["navigation-5e822c8804d8"]}
                              </a>
                            </div>
                            <div className="tt-submenu">
                              <ul className="tt-submenu-list">
                                <li>
                                  <a href={shared.values["navigation-90e224a48904"]}>
                                    {shared.values["navigation-5e822c8804d8"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-51304b99309c"]}>
                                    {shared.values["navigation-edf6271ba11f"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-1f1cf6ee590e"]}>
                                    {shared.values["navigation-cffeb27b00e4"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-7661de570420"]}>
                                    {shared.values["navigation-5b9ebbd7abce"]}
                                  </a>
                                </li>
                                <li>
                                  <a href={shared.values["navigation-106d0a502877"]}>
                                    {shared.values["navigation-7e30a6b728a2"]}
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
          <a href={shared.values["navigation-a857b8d87daf"]} className="tt-btn tt-btn-secondary hide-from-xlg tt-magnetic-item">
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
    <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-lg ph-image-parallax ph-caption-parallax">
      <div className="ph-image ph-image-cover-3">
        <div className="ph-image-inner">
          <img src={project.heroImage || project.image} alt={project.title} />
        </div>
      </div>
      <div className="page-header-inner">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <div className="ph-caption-categories">
              <a href={content.values["hero-1"]} className="ph-caption-category">{project.category}</a>
            </div>
            <h1 className="ph-caption-title">{project.title}</h1>
          </div>
        </div>
      </div>
      <div className="ph-share">
        <div className="ph-share-inner">
          <div className="ph-share-trigger">
            <div className="ph-share-text">
              {content.values["hero-2"]}
            </div>
            <div className="ph-share-icon">
              <i className={content.values["hero-3"]}>

              </i>
            </div>
          </div>
          <div className="ph-share-buttons">
            <ul>
              <li>
                <a href={content.values["hero-4"]} className="tt-magnetic-item" title={content.values["hero-5"]}>
                  <i className={content.values["hero-6"]}>

                  </i>
                </a>
              </li>
              <li>
                <a href={content.values["hero-7"]} className="tt-magnetic-item" title={content.values["hero-8"]}>
                  <i className={content.values["hero-9"]}>

                  </i>
                </a>
              </li>
              <li>
                <a href={content.values["hero-10"]} className="tt-magnetic-item" title={content.values["hero-11"]}>
                  <i className={content.values["hero-12"]}>

                  </i>
                </a>
              </li>
            </ul>
          </div>
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
    <div id="tt-page-content">{content.sectionOrder.filter(section => !content.hiddenSections.includes(section)).map(section => <Fragment key={section}>{section === "section-1" ? (<Fragment><div className="tt-section padding-top-xlg-120">
    <div className="tt-section-inner tt-wrap">
      <div className="tt-row">
        <div className="tt-col-lg-9">
          <div className="tt-heading margin-bottom-30 tt-anim-fadeinup">
            <h2 className="tt-heading-title">
              {content.values["section-1-1"]}
            </h2>
          </div>
          <div className="tt-anim-fadeinup">
            <p>{project.description}</p>
          </div>
        </div>
        <div className="tt-col-lg-3">

        </div>
      </div>
    </div>
  </div>
</Fragment>) : section === "section-2" ? (<Fragment><div className="tt-section no-padding-bottom">
    <div className="tt-section-inner tt-wrap">
      <div className="tt-sticker">
        <div className="tt-row tt-lg-row-reverse">
          <div className="tt-col-lg-3 margin-bottom-40">
            <div className="tt-sticker-sticky tt-sticky-element">
              <div className="tt-anim-fadeinup">
                <h3>
                  {content.values["section-2-1"]}
                </h3>
              </div>
              <div className="tt-project-info-list tt-anim-fadeinup margin-top-40">
                <ul>
                  <li>
                    <div className="pi-list-heading">
                      {content.values["section-2-2"]}
                    </div>
                    <div className="pi-list-cont">{project.client}</div>
                  </li>
                  <li>
                    <div className="pi-list-heading">
                      {content.values["section-2-3"]}
                    </div>
                    <div className="pi-list-cont">{project.year}</div>
                  </li>
                  <li>
                    <div className="pi-list-heading">
                      {content.values["section-2-4"]}
                    </div>
                    <div className="pi-list-cont">{project.role}</div>
                  </li>
                  <li>
                    <div className="pi-list-heading">
                      {content.values["section-2-5"]}
                    </div>
                    <div className="pi-list-cont"><a href={project.website || "#"} target="_blank" rel="noopener noreferrer">{content.values["section-2-6"]}<span className="pi-list-icon"><i className={content.values["section-2-7"]} /></span></a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tt-col-lg-9 padding-right-lg-5-p">
            <div className="tt-sticker-scroller">
              <div className="tt-image tti-border-radius tti-landscape tti-boxed tti-tilted-1 margin-bottom-80">
                <figure>
                  <a href={content.values["section-2-8"]} className="tt-image-link" data-cursor={mediaLabel(content.values["extra-label-1"])} data-fancybox="gallery-889420" data-caption={mediaLabel(content.values["extra-label-2"])}>
                    <img src={content.values["section-2-9"]} className="tt-anim-zoomin" loading="lazy" alt={content.values["section-2-10"]} />
                  </a>
                  <figcaption>
                    {content.values["section-2-11"]}
                  </figcaption>
                </figure>
              </div>
              <div className="tt-image tti-border-radius tti-landscape tti-boxed tti-tilted-2 margin-bottom-80">
                <figure>
                  <a href={content.values["section-2-12"]} className="tt-image-link" data-cursor={mediaLabel(content.values["extra-label-3"])} data-fancybox="gallery-889420" data-caption={mediaLabel(content.values["extra-label-4"])}>
                    <img src={content.values["section-2-13"]} className="tt-anim-zoomin" loading="lazy" alt={content.values["section-2-14"]} />
                  </a>
                  <figcaption>
                    {content.values["section-2-15"]}
                  </figcaption>
                </figure>
              </div>
              <div className="tt-image tti-border-radius tti-landscape tti-boxed tti-tilted-1 margin-bottom-80">
                <figure>
                  <a href={content.values["section-2-16"]} className="tt-image-link" data-cursor={mediaLabel(content.values["extra-label-5"])} data-fancybox="gallery-889420" data-caption={mediaLabel(content.values["extra-label-6"])}>
                    <img src={content.values["section-2-17"]} className="tt-anim-zoomin" loading="lazy" alt={content.values["section-2-18"]} />
                  </a>
                  <figcaption>
                    {content.values["section-2-19"]}
                  </figcaption>
                </figure>
              </div>
              <div className="tt-image tti-border-radius tti-landscape tti-boxed tti-tilted-2 margin-bottom-80">
                <figure>
                  <a href={content.values["section-2-20"]} className="tt-image-link" data-cursor={mediaLabel(content.values["extra-label-7"])} data-fancybox="gallery-889420" data-caption={mediaLabel(content.values["extra-label-8"])}>
                    <img src={content.values["section-2-21"]} className="tt-anim-zoomin" loading="lazy" alt={content.values["section-2-22"]} />
                  </a>
                  <figcaption>
                    {content.values["section-2-23"]}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Fragment>) : section === "section-3" ? (<Fragment><div className="tt-section padding-bottom-xlg-160">
    <div className="tt-section-inner tt-wrap">
      <div className="tt-row">
        <div className="tt-col-lg-9">
          <div className="tt-heading margin-bottom-30 tt-anim-fadeinup">
            <h2 className="tt-heading-title">
              {content.values["section-3-1"]}
            </h2>
          </div>
          <div className="tt-anim-fadeinup">
            <p>
              {content.values["section-3-2"]}
            </p>
          </div>
        </div>
        <div className="tt-col-lg-3">

        </div>
      </div>
    </div>
  </div>
</Fragment>) : section === "section-4" ? (<Fragment><div className="tt-section padding-top-xlg-100 padding-bottom-xlg-100 border-top">
    <div className="tt-section-inner max-width-1800">
      <div className="tt-portf-single-nav tt-ps-nav-boxed tt-ps-nav-tilted tt-anim-fadeinup">
        <div className="tt-row">
          <div className="tt-col-6 border-right">
            <div className="tt-ps-nav-item tt-ps-nav-prev">
              <a href={projectLinks["project-7"] || "/#portfolio"} className="tt-ps-nav-image" data-cursor={mediaLabel(content.values["extra-label-9"])}>
                <div className="tt-ps-nav-image-inner">
                  <img src={content.values["section-4-1"]} loading="lazy" alt={content.values["section-4-2"]} />
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
                  {content.values["section-4-3"]}
                  <br />
                  {content.values["section-4-4"]}
                </div>
                <h3 className="tt-ps-nav-title">
                  <a href={projectLinks["project-7"] || "/#portfolio"} className="tt-link">
                    {content.values["section-4-5"]}
                  </a>
                </h3>
                <div className="tt-ps-nav-categories">
                  <a href={content.values["section-4-6"]} className="tt-ps-nav-category">
                    {content.values["section-4-7"]}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tt-col-6">
            <div className="tt-ps-nav-item tt-ps-nav-next">
              <a href={projectLinks["project-9"] || "/#portfolio"} className="tt-ps-nav-image" data-cursor={mediaLabel(content.values["extra-label-10"])}>
                <div className="tt-ps-nav-image-inner">
                  <img src={content.values["section-4-8"]} loading="lazy" alt={content.values["section-4-9"]} />
                </div>
              </a>
              <div className="tt-ps-nav-text">
                <div className="tt-ps-nav-subtitle">
                  <div>
                    {content.values["section-4-10"]}
                    <br />
                    {content.values["section-4-11"]}
                  </div>
                  <div className="tt-ps-nav-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">

                      </path>
                    </svg>
                  </div>
                </div>
                <h3 className="tt-ps-nav-title">
                  <a href={projectLinks["project-9"] || "/#portfolio"} className="tt-link">
                    {content.values["section-4-12"]}
                  </a>
                </h3>
                <div className="tt-ps-nav-categories">
                  <a href={content.values["section-4-13"]} className="tt-ps-nav-category">
                    {content.values["section-4-14"]}
                  </a>
                  <a href={content.values["section-4-15"]} className="tt-ps-nav-category">
                    {content.values["section-4-16"]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Fragment>) : section === "section-5" ? (<Fragment><ProjectGallery project={project} />
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
              <a href={shared.values["footer-a857b8d87daf"]} className="tt-btn tt-btn-secondary tt-magnetic-item">
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
                  <a href={shared.values["footer-821f7cb117ca"]} className="tt-link">
                    {shared.values["footer-95d7ac1de57e"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-34cb87210d43"]} className="tt-link">
                    {shared.values["footer-70efe0187ebd"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-34cb87210d43"]} className="tt-link">
                    {shared.values["footer-76bdf9eaeb77"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-34cb87210d43"]} className="tt-link">
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
                  <a href={shared.values["footer-0bec979588ab"]} className="tt-link">
                    {shared.values["footer-00e6928a220e"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-897253447989"]} className="tt-link">
                    {shared.values["footer-da4deec83426"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-6e273d623dab"]} className="tt-link">
                    {shared.values["footer-b67954d42188"]}
                  </a>
                </li>
                <li>
                  <a href={shared.values["footer-d62c409e3b14"]} className="tt-link">
                    {shared.values["footer-c3ecfce05388"]}
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
    <a href={content.values["details-1"]} className="tt-stt-inner tt-magnetic-item">
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
