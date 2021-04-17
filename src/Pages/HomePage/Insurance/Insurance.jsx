import { Link } from "react-router-dom"

import first_insurance from "../../../images/first-insurance.png"
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
                <input type="text" className="insurance__form-input" placeholder="Phone" />
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
        <div className="container insurance__about-container">

          <div className="about__item-right insurance__about_wrapper">
            <span className="about__item-header">Why Company Name</span>
            <h3 className="about__item-heading">Why<br/> <span>Company Name?</span></h3>
            <p className="about__item-text">Dhani App bring comprehensive Health care plan for all your necessary medical expenses for you powered by GoDigit Health Insurance. This insurance comes with cashless facility across the country in more than 4700+ hospitals. This insurance covers comes with number of features which includes COVID-19 & easy claim process.</p>
            <Link to="#" className="about__btn green-link">
              <span className="green__btn-text">Know More</span>
            </Link>
          </div>

          <ul className="insurance__about-list">
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
            <li className="insurance__about-item">
              <img src={first_insurance} alt="insurance img" className="insurance__about-img"/>
              <span className="insurance__about-text">1 Cr + Policies Issued last year</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact">
        <div className="container contact__container">
          <div className="contact__left-wrapper">
            <h2 className="contact__heading">Contact</h2>
            <p className="contact__text">Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hoursQuestions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
          </div>

          <form className="contact__form">
            <div className="contact__username">
              <input className="contact__input username" type="text" placeholder="First Name" />
              <input className="contact__input username" type="text" placeholder="Last Name" />
            </div>

            <input className="contact__input" type="text" placeholder="Phone Number"/>

            <select className="contact__select">
              <option value="Select Service">Select Service</option>
            </select>

            <button className="contact__button green-link about__btn">
              <span className="green__btn-text">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Insurance