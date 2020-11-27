import React from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"
import { useEffect, useState } from "react"
import "../styles/index.scss"
//assets
import banner from "../images/banner-image.jpg";
import handleft from "../images/icons/hand-btn.png"
import handRight from "../images/icons/right-btn.png"
import arrowLeft from "../images/icons/left-arrow-btn.png"
import arrowRight from "../images/icons/right-arrow-btn.png"
import facial from "../images/product-image1.png";
import facial2 from "../images/product-image2.png";
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


//assets
import handleft from "../images/icons/hand-btn.png"
import handRight from "../images/icons/right-btn.png"
import arrowLeft from "../images/icons/left-arrow-btn.png"
import arrowRight from "../images/icons/right-arrow-btn.png"
import facial from "../images/product-image1.png";
import facial2 from "../images/product-image2.png";

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
    console.log('stateVariable has been updated!');
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
        <section className="banner">
            <div className="container">
              <div></div>
              <span>
              <div >
                <h5>{t("bannerInfoh5")}</h5>
                <h1>{t("bannerInfoh1")}</h1>
                <p>{t("bannerInfop1")}</p>
                <p>{t("bannerInfop2")}</p>
                <button>{t("bannerInfob1")}</button>
              </div>
              </span>
            </div>
        </section>
        <section className="mobile-container">
          <h5>{t("bannerInfoh5")}</h5>
          <h1>{t("bannerInfoh1")}</h1>
          <p>{t("bannerInfop1")}</p>
          <p>{t("bannerInfop2")}</p>
          <button>{t("bannerInfob1")}</button>
        </section>
        <section className="form-info">
          <div className="container">
            <h3>{t("form-info")}</h3>
            <div className="row">
              <div>
                <div className="form-group">
                  <input id="name" type="text" className="form-control" placeholder={t("name")} />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <input id="email" type="email" className="form-control" placeholder={t("email")} />
                </div>
              </div>
              <div >
                <div className="form-group">
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                    placeholder={t("phone")}
                  />
                </div>
              </div>
            </div>
              <div className="form-btn">
                <img className="arrow-btn-left f" src={arrowLeft} />
                <div className="free-skin-btn">
                  <button className="buttonFlaw">
                      <img className="left" src={handleft} />
                    {t("form-info-button")}
                      <img className="right" src={handRight}/>
                    </button>
                </div>
                <img className="arrow-btn-right f" src={arrowRight} />
              </div>
          </div>
        </section>
        <section className="how-we-do">
          <div className="container">
            <div  className="info-row"> 
              <div  className="text-info">
                <h5>{t("title-blog-1")}</h5>
                <h3>{t("sub-title-1")}</h3>
                <p>{t("p-1-1")}</p>
                <p>{t("p-2-1")}</p>
              </div>
              <div className="img-info">
                <img src={facial} alt="anti-agnig facial"/>
              </div>
            </div>
            <div  className="info-row"> 
              <div className="img-info">
                <img src={facial2} alt="anti-agnig facial"/>
              </div>
              <div  className="text-info reverse">
                <h5>{t("title-blog-2")}</h5>
                <h3>{t("sub-title-2")}</h3>
                <p>{t("p-1-2")}</p>
                <p>{t("p-2-2")}</p>
                <button >{t("button-blog")}</button>
              </div>
            </div>
          </div>
        </section>

        <section className="blog">
          <div className="container">
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
            <div className="text">
              <h5>{t("testimonialTitle")}</h5>
              <div className="border">
                <p>{t("testimonialText")}</p>
              </div>
              <p className="author">SANEZ P.</p>
            </div>
          </div>
        </section>

        <div className="callContainer">
          <h2>{t("callTitle")}</h2>
          <button>{t("callButton")}</button>
        </div>

        <section className="results">
          <h2>{t("resultTitle")}</h2>
          <div class="scrolling-wrapper">
            <div className="card">
              <img src={Result1} alt="picture" />
              <div className="text">
                <p>{t("")}</p>
              </div>
            </div>
            <div className="card">
              <img src={Result2} alt="picture" />
              <div className="text">
                <p>{t("")}</p>
              </div>
            </div>
            <div className="card">
              <img src={Result3} alt="picture" />
              <div className="text">
                <p>{t("")}</p>
              </div>
            </div>
            <div className="card">
              <img src={Result4} alt="picture" />
              <div className="text">
                <p>{t("")}</p>
              </div>
            </div>
            <div className="card">
              <img src={Result5} alt="picture" />
              <div className="text">
                <p>{t("result5")}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container">
            <h2>{t("galleryTitle")}</h2>
            <div className="images">
              <img src={ Gallery1 } alt="gallery"/>
              <div>
                <img src={ Gallery2 } alt="gallery" className="heightImg"/>
                <img src={ Gallery3 } alt="gallery"/>
              </div>
              <div>
                <img src={ Gallery4 } alt="gallery"/>
                <img src={ Gallery5 } alt="gallery" className="heightImg"/>
              </div>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>{t("faqTitle")}</h2>
        
          <div className="cardCollapse">
            <input id="faq1" className="toggle" type="checkbox"/>
            <label htmlFor="faq1" className="cardHeader"><p>{t("faq1")}</p></label>
            <div className="cardContent">
              <p>{t("answer1")}</p>
            </div>
          </div>

           <div className="cardCollapse">
            <input id="faq2" className="toggle" type="checkbox"/>
            <label htmlFor="faq2" className="cardHeader"><p>{t("faq2")}</p></label>
            <div className="cardContent">
              <p>{t("answer2")}</p>
            </div>
          </div>

           <div className="cardCollapse">
            <input id="faq3" className="toggle" type="checkbox"/>
            <label htmlFor="faq3" className="cardHeader"><p>{t("faq3")}</p></label>
            <div className="cardContent">
              <p>{t("answer3")}</p>
            </div>
          </div>

           <div className="cardCollapse">
            <input id="faq4" className="toggle" type="checkbox"/>
            <label htmlFor="faq4" className="cardHeader"><p>{t("faq4")}</p></label>
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

