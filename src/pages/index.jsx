import React from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"
import { useEffect, useState } from "react"
import "../styles/index.scss"
import Crypto from "crypto-js"
import swal from "sweetalert"

//assets
import usaFlag from "../images/icons/usa.png"
import banner from "../images/banner-image.webp"
import handleft from "../images/icons/hand-btn.png"
import handRight from "../images/icons/right-btn.png"
import arrowLeft from "../images/icons/left-arrow-btn.png"
import arrowRight from "../images/icons/right-arrow-btn.png"
import facial from "../images/product-image1.webp"
import facial2 from "../images/product-image2.webp"
import Logo from "../images/icons/footer-logo.png"
import Facebook from "../images/icons/facebook.png"
import Instagram from "../images/icons/instagram.png"
import Gallery1 from "../images/gallery6.webp"
import Gallery2 from "../images/gallery4.webp"
import Gallery3 from "../images/gallery1.webp"
import Gallery4 from "../images/gallery3.webp"
import Gallery5 from "../images/gallery2.webp"
import Result1 from "../images/r-1.webp"
import Result2 from "../images/r-2.webp"
import Result3 from "../images/r-3.webp"
import Result4 from "../images/r-4.webp"
import Result5 from "../images/r-5.webp"
import Elevatione from "../images/eliv.webp"
import Jelessi from "../images/jele.webp"
import Predire from "../images/pre.webp"
import Celestiole from "../images/cel.webp"
import Orogold from "../images/oro.webp"
import LedLight from "../images/se-1.webp"
import DigitalAnalysis from "../images/se-2.webp"
import UltramodernEquipment from "../images/se-3.webp"

//assets
/* import handleft from "../images/icons/left-btn.webp"
import handRight from "../images/icons/right-btn.webp"
import arrowLeft from "../images/icons/left-arrow-btn.webp"
import arrowRight from "../images/icons/right-arrow-btn.webp"
import facial from "../images/product-image1.webp";
import facial2 from "../images/product-image2.webp"; */

export default function index() {
  const [windowLoaded, setWindowLoaded] = useState(undefined)
  const [modal, setmodal] = useState(false)
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
    console.log("stateVariable has been updated!")
  }, [windowLoaded])

  const [t, i18n] = useTranslation()

  function handleChange() {
    setmodal(!modal)
  }

  function switchLang(lang) {
    i18n.use(initReactI18next).init({ lng: lang })

    localStorage.setItem("i18nextLng", lang)
  }
  const uploadNewLead = (e, index) => {
    e.preventDefault()
    // let dataToken = {
    //   Partner_Id: "81739",
    //   Secret_Key:
    //     "HVGOhJe39DhJET7QKisJZUaiL7Q9bmnCuati6d3OFWXbL9SvCIDwxDFY0I8k7OBt",
    //   Time: new Date().getTime(),
    // }
    // dataToken["Sign"] = Crypto.SHA256(
    //   dataToken["Partner_Id"].toString() +
    //     dataToken["Time"].toString() +
    //     dataToken["Secret_Key"]
    // )
    // dataToken["Sign"] = dataToken["Sign"].toString(Crypto.enc.Hex)
    // console.log(
    //   dataToken.Partner_Id +
    //     " " +
    //     dataToken.Secret_Key +
    //     " " +
    //     dataToken.Time +
    //     " " +
    //     dataToken.Sing +
    //     " " +
    //     " data token"
    // )
    // fetch("https://cosmetics.epasero.com/api/auth/", {
    //   method: "POST",
    //   body: JSON.stringify(dataToken),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(res => res.json())
    //   .then(response => {
    //     if (response.token) {
    //       console.log(response.token)

    let dataLead = {
      firstName: document.getElementById(`name${index}`).value,
      lastName: document.getElementById(`lastName${index}`).value,
      email: document.getElementById(`email${index}`).value,
      phoneCountryCode: document.getElementById(`phoneCode${index}`).value,
      phoneNumber: document.getElementById(`phone${index}`).value,
      country: "US",
      referral: "https://veniskin.com/lp/",
      gender: "Choose",
      partner_id: "81739",
      source: "lead",
      city: "USA",
    }
    console.log(dataLead)
    fetch("https://cosmetics.epasero.com/cron/signUpVenisApp.php", {
      method: "POST",
      body: JSON.stringify(dataLead),
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + response.token,
      },
    })
      .then(res => res.json())
      .then(response => {
        if (response.result === "success") {
          !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return
            n = f.fbq = function () {
              n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments)
            }
            if (!f._fbq) f._fbq = n
            n.push = n
            n.loaded = !0
            n.version = "2.0"
            n.queue = []
            t = b.createElement(e)
            t.async = !0
            t.src = v
            s = b.getElementsByTagName(e)[0]
            s.parentNode.insertBefore(t, s)
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          )
          fbq("init", "412679316762929")
          fbq("track", "Lead")
          swal(response.result).then(() => {
            location.reload()
          })
        } else {
          swal(response.error).then(() => {
            console.log("Listo")
          })
        }
      })
    //   } else {
    //     console.log("No entro" + response)
    //   }
    // })
  }
  return (
    <>
      <Layout handleChange={handleChange} switchLang={switchLang}>
        <SEO title="Inicio" />
        <section className="banner">
          <div className="container">
            <div></div>
            <span>
              <div>
                <h5>{t("bannerInfoh5")}</h5>
                <h1>{t("bannerInfoh1")}</h1>
                <p>{t("bannerInfop1")}</p>
                <p>{t("bannerInfop2")}</p>
                <button
                  onClick={e => {
                    handleChange()
                  }}
                  onTouchEnd={e => {
                    handleChange(), e.preventDefault()
                  }}
                >
                  {t("bannerInfob1")}
                </button>
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
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder={t("contactName")}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    placeholder={t("contactLastName")}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder={t("contactEmail")}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="form-group phoneInput">
                  <img src={usaFlag} alt="Flag" />
                  <input
                    id="phoneCode"
                    type="text"
                    pattern="/^\+(\d{1}\-)?(\d{1,3})$/"
                    className="form-control"
                    placeholder={"+1"}
                    value={"+1"}
                    required
                  />
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                    placeholder={t("contactPhone")}
                    required
                  />
                </div>
              </div>
            </div>
            <div onClick={e => uploadNewLead(e, "")} className="form-btn">
              <img
                className="arrow-btn-left f"
                src={arrowLeft}
                alt="icon arrow"
              />
              <div className="free-skin-btn">
                <button className="buttonFlaw">
                  <img className="left" src={handleft} alt="icon hand" />
                  {t("form-info-button")}
                  <img className="right" src={handRight} alt="icon hand" />
                </button>
              </div>
              <img
                className="arrow-btn-right f"
                src={arrowRight}
                alt="icon arrow"
              />
            </div>
          </div>
        </section>
        <section className="how-we-do">
          <div className="container">
            <div className="info-row">
              <div className="text-info">
                <h5>{t("title-blog-1")}</h5>
                <h3>{t("sub-title-1")}</h3>
                <p>{t("p-1-1")}</p>
                <p>{t("p-2-1")}</p>
              </div>
              <div className="img-info">
                <img src={facial} alt="anti-agnig facial" />
              </div>
            </div>
            <div className="info-row">
              <div className="img-info">
                <img src={facial2} alt="anti-agnig facial" />
              </div>
              <div className="text-info reverse">
                <h5>{t("title-blog-2")}</h5>
                <h3>{t("sub-title-2")}</h3>
                <p>{t("p-1-2")}</p>
                <p>{t("p-2-2")}</p>
                <button
                  onClick={e => {
                    handleChange(), e.preventDefault()
                  }}
                >
                  {t("button-blog")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="blog">
          <div className="container">
            <div>
              <img src={LedLight} alt="processing" />
              <h3>{t("ledLight")}</h3>
              <p>{t("ledLightText")}</p>
            </div>
            <div>
              <img src={DigitalAnalysis} alt="processing" />
              <h3>{t("digitalAnalysis")}</h3>
              <p>{t("digitalAnalysisText")}</p>
            </div>
            <div>
              <img src={UltramodernEquipment} alt="processing" />
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
              <img src={Celestiole} alt="partner" />
              <img src={Elevatione} alt="partner" />
              <img src={Orogold} alt="partner" />
              <img src={Jelessi} alt="partner" />
              <img src={Predire} alt="partner" />
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
          <button
            onClick={e => {
              handleChange(), e.preventDefault()
            }}
          >
            {t("callButton")}
          </button>
        </div>

        <section className="results">
          <h2>{t("resultTitle")}</h2>
          <div className="scrolling-wrapper">
            <div className="card">
              <img src={Result1} alt="picture" />
              <div className="text">
                <p>{t("result1")}</p>
                <small>
                  JAMES L. 29 <span>{t("years")}</span>
                </small>
              </div>
            </div>
            <div className="card">
              <img src={Result2} alt="picture" />
              <div className="text">
                <p>{t("result2")}</p>
                <small>
                  EVELYN W. 54 <span>{t("years")}</span>
                </small>
              </div>
            </div>
            <div className="card">
              <img src={Result3} alt="picture" />
              <div className="text">
                <p>{t("result3")}</p>
                <small>
                  SHARON W. 50 <span>{t("years")}</span>
                </small>
              </div>
            </div>
            <div className="card">
              <img src={Result4} alt="picture" />
              <div className="text">
                <p>{t("result4")}</p>
                <small>
                  LILY B. 65 <span>{t("years")}</span>
                </small>
              </div>
            </div>
            <div className="card">
              <img src={Result5} alt="picture" />
              <div className="text">
                <p>{t("result5")}</p>
                <small>
                  ELLIE K. 35 <span>{t("years")}</span>
                </small>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="container">
            <h2>{t("galleryTitle")}</h2>
            <div className="images">
              <article>
                <img src={Gallery1} alt="gallery" />
              </article>
              <article>
                <img src={Gallery2} alt="gallery" />
              </article>
              <article>
                <img src={Gallery3} alt="gallery" />
              </article>
              <article>
                <img src={Gallery4} alt="gallery" />
              </article>
              <article>
                <img src={Gallery5} alt="gallery" />
              </article>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>{t("faqTitle")}</h2>

          <div className="cardCollapse">
            <input id="faq1" className="toggle" type="checkbox" />
            <label htmlFor="faq1" className="cardHeader">
              <p>{t("faq1")}</p>
            </label>
            <div className="cardContent">
              <p>{t("answer1")}</p>
            </div>
          </div>

          <div className="cardCollapse">
            <input id="faq2" className="toggle" type="checkbox" />
            <label htmlFor="faq2" className="cardHeader">
              <p>{t("faq2")}</p>
            </label>
            <div className="cardContent">
              <p>{t("answer2")}</p>
            </div>
          </div>

          <div className="cardCollapse">
            <input id="faq3" className="toggle" type="checkbox" />
            <label htmlFor="faq3" className="cardHeader">
              <p>{t("faq3")}</p>
            </label>
            <div className="cardContent">
              <p>{t("answer3")}</p>
            </div>
          </div>

          <div className="cardCollapse">
            <input id="faq4" className="toggle" type="checkbox" />
            <label htmlFor="faq4" className="cardHeader">
              <p>{t("faq4")}</p>
            </label>
            <div className="cardContent">
              <p>{t("answer4")}</p>
            </div>
          </div>
        </section>

        <section className="subscribe">
          <h2>{t("subscribeTitle")}</h2>
          <form onSubmit={e => uploadNewLead(e, "2")}>
            <article>
              <label htmlFor="name2">{t("contactName")} </label>
              <input required id="name2" name="name2" />
            </article>
            <article>
              <label htmlFor="lastName2">{t("contactLastName")} </label>
              <input required id="lastName2" name="lastname2" />
            </article>
            <article>
              <label htmlFor="email2">{t("contactEmail")} </label>
              <input required id="email2" name="email2" />
            </article>
            <article>
              <label htmlFor="phone2">{t("contactPhone")} </label>
              <div>
                <img src={usaFlag} alt="Flag" />
                <input
                  required
                  id="phoneCode2"
                  name="phoneCode2"
                  placeholder={"+1"}
                  value={"+1"}
                />
                <input required id="phone2" name="phone2" />
              </div>
            </article>
            <button type="submit">{t("callButton")}</button>
          </form>
        </section>

        <footer>
          <div className="logo">
            <img src={Logo} alt="icon" />
          </div>
          <div className="disclaimer">
            <p>{t("footerText")}</p>
          </div>
          <div>
            <div className="socialMedia">
              <img src={Facebook} alt="icon" />
              <img src={Instagram} alt="icon" />
              <p>{t("copyWrite")}</p>
            </div>
          </div>
        </footer>
        {modal ? (
          <div className="modal">
            <div className="container">
              <div className="x">
                <div onClick={() => setmodal(!modal)}>x</div>
              </div>
              <h2>I Want Flawless Skin Today</h2>
              <form onSubmit={e => uploadNewLead(e, "3")}>
                <article>
                  <label htmlFor="name3">{t("contactName")}</label>
                  <input required type="text" name="name3" id="name3" />
                </article>
                <article>
                  <label htmlFor="lastName3">{t("contactLastName")}</label>
                  <input required type="text" name="lastName3" id="lastName3" />
                </article>
                <article>
                  <label htmlFor="email3">{t("contactEmail")}</label>
                  <input required type="text" name="email3" id="email3" />
                </article>
                <article>
                  <label htmlFor="phone3">{t("contactPhone")}</label>
                  <div>
                    <img src={usaFlag} alt="Flag" />
                    <input
                      required
                      type="text"
                      name="phoneCode2"
                      id="phoneCode3"
                      placeholder={"+1"}
                      value={"+1"}
                    />
                    <input required type="text" name="phone3" id="phone3" />
                  </div>
                </article>
                {/*                 <div>
                  <input type="checkbox" id="" name=""/>
                  <label for="">He leído y acepto el <span>Aviso de Privacidad</span></label>
                </div> */}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Layout>
    </>
  )
}
