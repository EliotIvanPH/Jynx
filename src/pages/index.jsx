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
        <footer>
        </footer>
      </Layout>
    </>
  )
}
