import { Link } from "react-router-dom"

import "./performance.css"
import first_performance from "../../../images/first-performance.png"
import second_performance from "../../../images/second-performance.png"
import therd_performance from "../../../images/therd-performance.png"
import performance_img from "../../../images/performance-img.jpg"

function Performance () {

  return (
    <>
    <section className="performance">
      <div className="container">
        <ul className="performance__list">
          <li className="performance__item">
            <img src={first_performance} alt="performance img" className="performance__item-img"/>
            <h3 className="performance__item-heading">Cashless Claim</h3>
            <p className="performance__item-text">For cashless claim you need to follow a simple 3 step process. <br/> 1.Intimation <br/>2.Document upload <br/>3.Settlement</p>
          </li>

          <li className="performance__item">
            <img src={second_performance} alt="performance img" className="performance__item-img"/>
            <h3 className="performance__item-heading">Claim Process</h3>
            <p className="performance__item-text">The claim process is simple; if your hospital has cashless facility you can call on 1800-258-4242 or drop us mail at healthclaims@godigit.com with the details</p>
          </li>

          <li className="performance__item">
            <img src={therd_performance} alt="performance img" className="performance__item-img"/>
            <h3 className="performance__item-heading">Reimbursement Claim Process</h3>
            <p className="performance__item-text">f you visit a non-network hospital, then post discharge customer can claim the reimbursement from Digit for the treatment. This takes 3 easy steps & the settlement of the claim is done in approximately 3-4 days.</p>
          </li>
        </ul>

      </div>

      <div className="performance__about">
        <div className="container performance__container">
          <p className="performance__about-text">Get a free quote for your move now</p>

          <Link className="performance__about-link" to="#">
            <span>Get a moving quote</span>
          </Link>
        </div>
      </div>


      
    </section>

    <div className="container">
      <li className="about__item">
        <img src={performance_img} alt="About img" className="about__item-img"/>

        <div className="about__item-right">
          <span className="about__item-header">Accidental Insurance Cover</span>
          <h3 className="about__item-heading">Personal Accidental<br/> <span>Insurance Cover</span></h3>
          <p className="about__item-text">Dhani App bring comprehensive Health care plan for all your necessary medical expenses for you powered by GoDigit Health Insurance. This insurance comes with cashless facility across the country in more than 4700+ hospitals. This insurance covers comes with number of features which includes COVID-19 & easy claim process..</p>
          <Link to="#" className="about__btn">Know More</Link>
        </div>
      </li>
      </div>
    </>
  )
}

export default Performance;