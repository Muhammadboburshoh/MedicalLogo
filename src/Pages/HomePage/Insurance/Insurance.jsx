function Insurance () {

  return (
    <section className="insurance">
    <div className="container">
    <form className="insurance__form">
      <h3 className="insurance__form-header"></h3>

      <ul className="insurance__form-list">
        <li className="insurance__form-item">
          <input type="text" className="insurance__form-input"/>
        </li>
        <li className="insurance__form-item">
          <input type="email" className="insurance__form-input"/>
        </li>
        <li className="insurance__form-item">
          <input type="phone" className="insurance__form-input"/>
        </li>
        <li className="insurance__form-item">
          <select className="insurance__form-select">
            <option value="insurance">Insurance</option>
          </select>
        </li>
      </ul>
    </form>
    </div>
    </section>
  )
}

export default Insurance