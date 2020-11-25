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


//assets
import banner from "../images/banner-image.jpg";
import handleft from "../images/icons/hand-btn.png"
import handRight from "../images/icons/right-btn.png"
import arrowLeft from "../images/icons/left-arrow-btn.png"
import arrowRight from "../images/icons/right-arrow-btn.png"
import facial from "../images/product-image1.png";
import facial2 from "../images/product-image2.png";
import circle1 from "../images/se-1.png";
import circle2 from "../images/se-2.png";
import circle3 from "../images/se-3.png";

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
        <section className="form-info">
          <div className="container">
            <h3>
              We Work With High-End Luxury<br/>
              Brands & Boutiques
            </h3>
            <div className="row">
              <div>
                <div className="form-group">
                  <input id="name" type="text" className="form-control" placeholder="Name" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <input id="email" type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div >
                <div className="form-group">
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                    placeholder="Phone No."
                  />
                </div>
              </div>
            </div>
            <div className="form-main-btn">
              <div className="form-btn">
                <img className="arrow-btn-left" src={arrowLeft} />
                <div className="free-skin-btn">
                  <div className="free-skin-btn-anim">
                    <a href="#;">
                      <img className="left" src={handleft} />
                      I Want Flawless
                      Skin Today
                      <img className="right" src={handRight}/>
                    </a>
                    <span></span>
                  </div>
                </div>
                <img className="arrow-btn-right" src={arrowRight} />
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-do">
          <div className="container">
            <div  className="info-row"> 
              <div  className="text-info">
                <h5>HOW WE DO IT</h5>
                <h3>Anti-Aging Facial Treatments With The Latest Skincare Technology</h3>
                <p>Meet the Ultrasonix - a state-of-the-art device that erases wrinkles and defies 
                  the signs of aging while reducing the size of pores. Ultrasonic pulses 
                  enhance the performance of skincare products, leaving a rejuvenated and youthful appearance.
                </p>
                <p>Cooling and warming vibration technology makes skin smoother than ever,
                giving your skin an airbrushed appearance.
                </p>
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
                <h5>A DEEP DIVE BELOW THE SKIN</h5>
                <h3>At Venis, we personalize each experience with care, from start to finish</h3>
                <p>
                  After providing contact information, one of our skin advisers will be in touch and 
                  complete a brief evaluation based on your target concerns. We’ll match you with
                  a top-rated skincare center and customized products that fit your needs, at an 
                  unbeatable price.
                </p>
                <p>
                We always take care of of our clients we make sure you will always be with a smile!
                </p>
                <button>Book a Call</button>
              </div>
            </div>
            <div  className="info-col"> 
              <div className="info-col-container">
                <div className="img-info">
                  <img src={circle1} alt="light therapy"/>
                </div>
                <div  className="text-info">
                  <h3>LED LIGHT THERAPY</h3>
                  <p>
                  Cure your skin troubles with different wavelengths of light in 
                  this advanced treatment.
                  </p>
                </div>
              </div>
              <div className="info-col-container">
                <div className="img-info">
                  <img src={circle2} alt="light therapy"/>
                </div>
                <div  className="text-info">
                  <h3>DIGITAL ANALYSIS DEVICE</h3>
                  <p>
                  Get to know your skin like never before with the latest 
                  technology that's redefining skincare consultations and results globally.
                  </p>
                </div>
              </div>
              <div className="info-col-container">
                <div className="img-info">
                  <img src={circle3} alt="light therapy"/>
                </div>
                <div  className="text-info">
                  <h3>ULTRAMODERN EQUIPMENT AND SKINCARE</h3>
                  <p>
                  We use the worlds most advanced systems that maximize the effects of the 
                  applied serum rewinding the years in your face with a dashing radiant look.s
                  </p>
                </div>
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
