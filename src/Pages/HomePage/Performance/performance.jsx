import "./performance.css"
import first_performance from "../../../images/first-performance.png"
import second_performance from "../../../images/second-performance.png"
import therd_performance from "../../../images/therd-performance.png"

function Performance () {

  return (
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
    </section>
  )
}

export default Performance;