import "../../../App.css"
import "./Intro.css"

function Intro () {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__right">
          <span className="intro__span">Get Best Insurance</span>
          <span className="intro__circle"></span>
          <h1 className="intro__heading"><span> Welcome to</span><br/><p>Medical</p><br/>Insurance</h1>
          <p className="inpto__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus suscipit ultricies rhoncus. Egestas platea in mauris urna gravida odio nam quisque </p>
          <h3 className="intro__bottom-heading">Which Type of Insurance you want?</h3>

          <select className="intro__select" name="insurance" id="select">
            <option className="intro__option" value="accident">Personal Accident Insurance</option>
          </select>
          <a href="#" className="green-link intro__link">Get a free Quote</a>
        </div>
      </div>
    </section>
  )
}

export default Intro