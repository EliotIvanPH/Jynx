import React from "react"
import { Link } from "gatsby"
import "../styles/Header.scss"
import { useTranslation } from "react-i18next"
import Logo from "../images/venis-logo.png"
import ShoppingCart from "../images/icons/shopping-cart.png"
import MenuIcon from "../images/icons/menu-icon.png"

export default function Header({ switchLang }) {
  const [t, i18n] = useTranslation()

  return (
    <header>
      <div className="fixed">
        <nav>
          <img className="imagenLogo" src={Logo} alt="Logo" />
          <ul>
            <li>{t("aboutUs")}</li>
            <li>{t("howWe")}</li>
            <li>{t("benefits")}</li>
            <li>{t("clients")}</li>
            <li>Blog</li>
            <li>
              <button
                onClick={() => {
                  switchLang("en")
                }}
              >
                EN
              </button>
              |
              <button
                onClick={() => {
                  switchLang("es")
                }}
              >
                ES
              </button>
            </li>
            <li>
              <img src={ShoppingCart} alt="Shopping Cart" />
            </li>
          </ul>
          <img src={MenuIcon} alt="Menu" className="menuIcon" />
        </nav>
      </div>
    </header>
  )
}
