import React from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"
import { useEffect, useState } from "react"
import "../styles/index.scss"
import Jelessi from "../images/venis-products-jelessi.png"
import DeepDive from "../images/venis-deep-dive.png"

export default function index() {
  const [windowLoaded, setWindowLoaded] = useState(undefined)
  useEffect(() => {
    if (!windowLoaded) {
      if (typeof window !== "undefined" && window) {
        setWindowLoaded(true)
        i18n.use(initReactI18next).init({
          lng: localStorage.getItem("i18nextLng")
            ? localStorage.getItem("i18nextLng")
            : "en",
        })
      }
    }
  }, [windowLoaded])
  const [t, i18n] = useTranslation()
  function switchLang(lang) {
    i18n.use(initReactI18next).init({ lng: lang })

    localStorage.setItem("i18nextLng", lang)
  }
  return (
    <>
      <Layout switchLang={switchLang}>
        <SEO title="Inicio" />
        <section className="hero">
          <div className="fixed">
            <div className="heroText">
              <h1>{t("heroTitle")}</h1>
              <p>{t("heroParagraph")}</p>
              <p>{t("heroParagraphTwo")}</p>
              <span>
                <button className="primaryButton">{t("heroButton")}</button>
              </span>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="fixed">
            <div
              className="contactForm"
              data-sal="zoom-in"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <h2>{t("contactTitle")}</h2>
              <form action="">
                <span>
                  <article>
                    <label htmlFor="name">{t("contactName")}:</label>
                    <input id="name" type="text" />
                  </article>
                  <article>
                    <label htmlFor="email">{t("contactEmail")}:</label>
                    <input id="email" type="email" />
                  </article>
                  <article>
                    <label htmlFor="phone">{t("contactPhone")}:</label>
                    <input id="tel" type="tel" />
                  </article>
                </span>
                <span>
                  <article className="termsCheck">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">{t("contactTerms")}</label>
                  </article>
                  <article>
                    <button className="secondaryButton">
                      {t("contactSubmit")}
                    </button>
                  </article>
                </span>
              </form>
            </div>
          </div>
        </section>
        <section className="howDo">
          <article>
            <img src={Jelessi} alt="Jelessi Products" />
          </article>
          <article>
            <span className="titleShadow">
              <h2 data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                {t("howTitle")}
              </h2>
              <h3>{t("howTitle")}</h3>
            </span>
            <h4>{t("howSubtitle")}</h4>
            <p className="generalParagraph">{t("howParagraph")}</p>
            <p className="generalParagraph">{t("howParagraphTwo")}</p>
          </article>
        </section>
        <section className="deepDive">
          <div className="deepContainer">
            <article>
              <span className="titleShadow">
                <h2>{t("deepTitle")}</h2>
                <h3>{t("deepTitle")}</h3>
              </span>
              <h4>{t("deepSubtitle")}</h4>
              <p className="generalParagraph">{t("deepParagraph")}</p>
              <p className="generalParagraph">{t("deepParagraphTwo")}</p>
              <span>
                <button className="primaryButton">{t("deepButton")}</button>
              </span>
            </article>
            <article>
              <img src={DeepDive} alt="Deep Dive" />
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}
