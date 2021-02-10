import "./style.css"
import Logo from "../../../images/logo.svg"

function Header () {
  return (
    <section className="site-top-section">

      <header className="site-header">
        <div className="constainer">
          <a href="#" className="site-header__logo-link">
            <img src={Logo} alt="site-logo" />
          </a>
        </div>
      </header>

    </section>
  )
}

export default Header