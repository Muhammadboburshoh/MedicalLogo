import { Link } from "react-router-dom"

import "./about.css"
import first_about from '../../../images/first-about.jpg'
import second_about from '../../../images/second-about.jpg'

function About() {
  return (
    <section className="about">
      <div className="container">
        <ul className="about__list">
          <li className="about__item">
            <img src={first_about} alt="About img" className="about__item-img"/>

            <div className="about__item-right">
              <span className="about__item-header">Medical Insurance Services</span>
              <h3 className="about__item-heading">About Medical <br/> <span>Insurance</span></h3>
              <p className="about__item-text">Dhani App bring comprehensive Health care plan for all your necessary medical expenses for you powered by GoDigit Health Insurance. This insurance comes with cashless facility across the country in more than 4700+ hospitals. This insurance covers comes with number of features which includes COVID-19 & easy claim process.</p>
              <Link to="#" className="about__btn green-link "><span className="green__btn-text">Know More</span></Link>
            </div>
          </li>

          <li className="about__item about__item-second">
            <img src={second_about} alt="About img" className="about__item-img"/>

            <div className="about__item-right">
              <span className="about__item-header">Medical Insurance FAQS</span>
              <h3 className="about__item-heading">This Medical Insurance <span>FAQS:</span></h3>
              <p className="about__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus suscipit ultricies rhoncus. Egestas platea in mauris urna gravida odio nam quisque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus suscipit ultricies rhoncus. Egestas platea in mauris urna gravida odio nam quisque </p>
              <Link to="#" className="about__btn green-link"><span className="green__btn-text">Know More</span></Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
