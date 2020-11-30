import React from "react"
import { Link } from "gatsby"
import "../styles/Header.scss"
import { useTranslation } from "react-i18next"
import Logo from "../images/logo.png"
import ShoppingCart from "../images/icons/shop.png"
import MenuIcon from "../images/icons/menu-icon.png"

import mxFlag from "../images/icons/mx.png"
import usaFlag from "../images/icons/usa.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
// Disable the auto CSS insertion
config.autoAddCss = false

export default function Header({ switchLang }) {
  const [t, i18n] = useTranslation()

  return (
    <header>
      <div className="fixed">
        <nav>
          <img className="imagenLogo" src={Logo} alt="Logo" />
          <ul>
            <li className="review">
            <FontAwesomeIcon style={{color:"gold", height: '30px'}} icon={faStar} size="1x" />
            <FontAwesomeIcon style={{color:"gold", height: '30px'}} icon={faStar} size="1x" />
            <FontAwesomeIcon style={{color:"gold", height: '30px'}} icon={faStar} size="1x" />
            <FontAwesomeIcon style={{color:"gold", height: '30px'}} icon={faStar} size="1x" />
            <FontAwesomeIcon style={{color:"gold", height: '30px'}} icon={faStar} size="1x" />
            </li>
            <span className="review">{"(2,264 "+t("review")+")"}</span>
            <li>
              <img src={usaFlag} alt="Flag"/>
            </li>
            <li>
              <img src={ShoppingCart} alt="Shopping Cart" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
