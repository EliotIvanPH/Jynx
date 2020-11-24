import React from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"
import { useEffect, useState } from "react"
import 'react-awesome-slider/dist/styles.css';
import "../styles/index.scss"
import Logo from "../images/icons/footer-logo.png";
import Facebook from "../images/icons/facebook.png";
import Instagram from "../images/icons/instagram.png";
import Gallery1 from "../images/gallery6.jpg";
import Gallery2 from "../images/gallery4.jpg";
import Gallery3 from "../images/gallery1.jpg";
import Gallery4 from "../images/gallery3.jpg";
import Gallery5 from "../images/gallery2.jpg";
import Result1 from "../images/r-1.jpg";
import Result2 from "../images/r-2.jpg";
import Result3 from "../images/r-3.jpg";
import Result4 from "../images/r-4.jpg";
import Result5 from "../images/r-5.jpg";
import Elevatione from "../images/eliv.png";
import Jelessi from "../images/jele.png";
import Predire from "../images/pre.png";
import Celestiole from "../images/cel.png";
import Orogold from "../images/oro.png";
import LedLight from "../images/se-1.png";
import DigitalAnalysis from "../images/se-2.png";
import UltramodernEquipment from "../images/se-3.png";

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
        <section className="blog">
          <div>
            <img src={LedLight}  alt="processing"/>
            <h3>{t("ledLight")}</h3>
            <p>{t("ledLightText")}</p>
          </div>
          <div>
            <img src={DigitalAnalysis}  alt="processing"/>
            <h3>{t("digitalAnalysis")}</h3>
            <p>{t("digitalAnalysisText")}</p>
          </div>
          <div>
            <img src={UltramodernEquipment}  alt="processing"/>
            <h3>{t("ultramodernEquipment")}</h3>
            <p>{t("ultramodernEquipmentText")}</p>
          </div>
        </section>
        <section className="partners">
          <div className="container">
            <h5>{t("biggestBrands")}</h5>
            <h3>{t("partnerTitle")}</h3>
            <p>{t("partnerText")}</p>
            <div className="images">
              <img src={Celestiole} alt="partner"/>
              <img src={Elevatione} alt="partner" />
              <img src={Orogold} alt="partner" />
              <img src={Jelessi} alt="partner" />
              <img src={Predire} alt="partner"/>
            </div>
          </div>
        </section>
        <section className="testimonial">
          <div className="container">
            <h5>{t("testimonialTitle")}</h5>
            <div className="border">
              <p>{t("testimonialText")}</p>
            </div>
            <p className="author">SANEZ P.</p>
          </div>
        </section>
        <div className="callContainer">
          <h2>{t("callTitle")}</h2>
          <button>{t("callButton")}</button>
        </div>
        <section className="results">
          <h2>{t("resultTitle")}</h2>

        </section>
        <section className="gallery">
          <h2>{t("galleryTitle")}</h2>
          <div>
            <img src={ Gallery1 } alt="gallery"/>
          </div>
          <div>
            <img src={ Gallery2 } alt="gallery"/>
          </div>
          <div>
            <img src={ Gallery3 } alt="gallery"/>
          </div>
          <div>
            <img src={ Gallery4 } alt="gallery"/>
          </div>
          <div>
            <img src={ Gallery5 } alt="gallery"/>
          </div>
        </section>
        <section className="faq">
          <h2>{t("faqTitle")}</h2>
          <div className="cardCollapse">
            <div className="cardHeader collapsed">
              <p>{t("faq1")}</p>
            </div>
            <div className="cardContent">
              <p>{t("answer1")}</p>
            </div>
          </div>
          <div className="cardCollapse">
            <div className="cardHeader">
              <p>{t("faq2")}</p>
            </div>
            <div className="cardContent">
              <p>{t("answer2")}</p>
            </div>
          </div>
          <div className="cardCollapse">
            <div className="cardHeader">
              <p>{t("faq3")}</p>
            </div>
            <div className="cardContent">
              <p>{t("answer3")}</p>
            </div>
          </div>
          <div className="cardCollapse">
            <div className="cardHeader">
              <p>{t("faq4")}</p>
            </div>
            <div className="cardContent">
              <p>{t("answer4")}</p>
            </div>
          </div>

        </section>
        <section className="subscribe">
          <h2>{t("subscribeTitle")}</h2>
          <form>
            <input placeholder={t("name")} />
            <input placeholder={t("email")} />
            <input placeholder={t("phone")} />
            <button>{t("callButton")}</button>
          </form>
        </section>
        <footer>
          <div className="logo">
            <img src={ Logo } alt="icon" />
          </div>
          <div className="disclaimer">
            <p>{t("footerText")}</p>
          </div>
          <div>
            <div className="socialMedia">
              <img src={ Facebook } alt="icon" />
              <img src={ Instagram } alt="icon" />
              <p>{t("copyWrite")}</p>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  )
}
