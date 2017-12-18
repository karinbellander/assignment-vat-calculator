import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      incVat: 0,
      exVat: 0,
      vatRate: 25
    }
  }

handleIncVat = event => {
  this.setState({
    incVat: parseInt(event.target.value, 10),
    exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value, 10))
  })
}

handleExVat = event => {
  this.setState({
    exVat: parseInt(event.target.value, 10),
    IncVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value, 10))
  })
}

handleVatRate = event => {
  this.setState({
    vatRate: parseInt(event.target.value, 10),
    exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value, 10)),
    IncVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value, 10))

  })
}

render() {
  return (
    <div className="App">
      <div className="container-radio-vat">
        <form>
          <input type="radio" name="vatRate" onChange={this.handleVatRate} value="25" id="vat-25" />
          <label htmlFor="vat-25">25%</label>
          <input type="radio" name="vatRate" onChange={this.handleVatRate} value="12" id="vat-12" />
          <label htmlFor="vat-12">12%</label>
          <input type="radio" name="vatRate" onChange={this.handleVatRate} value="6" id="vat-6" />
          <label htmlFor="vat-6">6%</label>
        </form>
      </div>

      <div className="">
        <form>
          <label>Inklusive moms</label>
          <input type="number" name="incVat" value={this.state.incVat} onChange={this.handleIncVat} />
          <label>Exklusive moms</label>
          <input type="number" name="excVat" value={this.state.exVat} onChange={this.handleExVat} />
        </form>
      </div>
    </div>
  )
}

}

export default App
