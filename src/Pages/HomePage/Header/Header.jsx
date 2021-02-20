import Intro from "../Intro/Intro"
import "./style.css"
import Logo from "../../../images/logo.svg"

function Header () {

  return (
    <section className="site-top-section">

      <header className="site-header">
        <div className="container">
          <nav className="site-header__navbar">
            <a href="#" className="site-header__logo-link">
              <img className="site-header__logo-img" src={Logo} alt="site-logo" />
            </a>

            <ul className="site-header__menu">
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Loans</a>
              </li>
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Privilege line</a>
              </li>
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Stocks</a>
              </li>
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Insurance</a>
              </li>
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Servicase</a>
              </li>
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Wallet & Cards</a>
              </li>
              <li className="site-header_menu-item">
                <a href="" className="site-header_menu-link">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Intro />

    </section>
  )
}

export default Header