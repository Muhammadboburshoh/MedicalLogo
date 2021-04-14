import { Link } from "react-router-dom"

import "./Insurance.css"

function Insurance () {

  return (
    <section className="insurance">
      <div className="container">
        <div className="insurance__wrapper">
          <form className="insurance__form">
            <h3 className="insurance__form-header">Get In Touch With Insurance Company!</h3>

            <ul className="insurance__form-list">
              <li className="insurance__form-item">
                <input type="text" className="insurance__form-input" placeholder="Name*" />
              </li>
              <li className="insurance__form-item">
                <input type="email" className="insurance__form-input" placeholder="Email*" />
              </li>
              <li className="insurance__form-item">
                <input type="phone" className="insurance__form-input" placeholder="Phone" />
              </li>
              <li className="insurance__form-item">
              <input type="phone" className="insurance__form-input" placeholder="Phone" />
              </li>
            </ul>
            <button className="insurance__btn">Submit Now</button>
          </form>
        </div>
      </div>

      <div className="insurance__about">
        <div className="container">
          <div className="about__item-right insurance__about_wrapper">
            <span className="about__item-header">Why Company Name</span>
            <h3 className="about__item-heading">Why<br/> <span>Company Name?</span></h3>
            <p className="about__item-text">Dhani App bring comprehensive Health care plan for all your necessary medical expenses for you powered by GoDigit Health Insurance. This insurance comes with cashless facility across the country in more than 4700+ hospitals. This insurance covers comes with number of features which includes COVID-19 & easy claim process.</p>
            <Link to="#" className="about__btn">Know More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insurance