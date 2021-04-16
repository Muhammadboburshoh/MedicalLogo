import { Link } from "react-router-dom"

import "./Servicas.css"

import first_company from "../../../images/first-company.svg"
import second_company from "../../../images/second-company.svg"
import third_company from "../../../images/third-company.svg"
import fourth_company from "../../../images/fourth-company.svg"
import fifth_company from "../../../images/fifth-company.svg"


function Services () {

  return (
    <main>
      <div className="container">

        <div className="services__company-logos">
          <Link to="#">
            <img className="servicase__compony-logo" src={first_company} alt="company img"/>
          </Link>
          <Link to="#">
            <img className="servicase__compony-logo" src={second_company} alt="company img"/>
          </Link>
          <Link to="#">
            <img className="servicase__compony-logo" src={third_company} alt="company img"/>
          </Link>
          <Link to="#">
            <img className="servicase__compony-logo" src={fourth_company} alt="company img"/>
          </Link>
          <Link to="#">
            <img className="servicase__compony-logo" src={fifth_company} alt="company img"/>
          </Link>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <h2 className="services__heading">Our <span>Services</span></h2>

          <ul className="services__list">
            <li className="service__item">
              <Link to="#" className="service__link">
                <span className="service__img service__img-first"> </span>
                <h3 className="service__heading">Medical Insurance Service</h3>
                <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus </p>
              </Link>
            </li>

            <li className="service__item">
              <Link to="#" className="service__link">
                <span className="service__img service__img-second"> </span>
                <h3 className="service__heading">Car Insurance Service</h3>
                <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus </p>
              </Link>
            </li>

            <li className="service__item">
              <Link to="#" className="service__link">
                <span className="service__img service__img-third"> </span>
                <h3 className="service__heading">Personal Accident Insurance</h3>
                <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus </p>
              </Link>
            </li>

            <li className="service__item">
              <Link to="#" className="service__link">
                <span className="service__img service__img-third"> </span>
                <h3 className="service__heading">Personal Accident Insurance</h3>
                <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus </p>
              </Link>
            </li>

            <li className="service__item">
              <Link to="#" className="service__link">
                <span className="service__img service__img-third"> </span>
                <h3 className="service__heading">Personal Accident Insurance</h3>
                <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus </p>
              </Link>
            </li>
          </ul>

          <div className="services__buttons">
            <button className="services__left services-btn services-btn-active"></button>
            <button className="services__right services-btn services-btn-active"></button>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Services