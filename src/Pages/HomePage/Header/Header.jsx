import { Link } from 'react-router-dom'
import { useRef } from 'react'

import Intro from "../Intro/Intro"
import "./style.css"
import Logo from "../../../images/logo.svg"

function Header () {

  const refMenu = useRef(null)

  const refButton = useRef(null)

  return (
    <section className="site-top-section">

      <header className="site-header">
        <div className="container site-header__conatiner">
          <nav className="site-header__navbar">
            <Link to="#" className="site-header__logo-link">
              <img className="site-header__logo-img" src={Logo} alt="site-logo" />
            </Link>

            <ul ref={refMenu} className="site-header__menu">
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Loans</Link>
              </li>
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Privilege line</Link>
              </li>
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Stocks</Link>
              </li>
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Insurance</Link>
              </li>
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Servicase</Link>
              </li>
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Wallet & Cards</Link>
              </li>
              <li className="site-header_menu-item">
                <Link to="#" className="site-header_menu-link">Contact Us</Link>
              </li>
            </ul>

            <button ref={refButton} onClick={
              e => {
                refMenu.current.classList.toggle('site-header__menu-open')
                refButton.current.classList.toggle('hamburger-nofixed')
                refButton.current.classList.toggle('open-menu')
                refButton.current.classList.toggle('close-menu')
              }
            } className="hamburger-button open-menu hamburger-nofixed"></button>
          </nav>
        </div>
      </header>

      <Intro />

    </section>
  )
}

export default Header