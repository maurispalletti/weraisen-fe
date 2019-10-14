import React from 'react'
import '../SignUp.css'
import './CalendarioCompleto.css'
import FieldWithError from '../forms/FieldWithError'

export default class CalendarioCompleto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', min: '' };

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    let hoy = new Date();
    const dia = hoy.getDate();
    let mes = (hoy.getMonth() + 1);
    mes = mes.toString()

    mes = mes.length === 1 ? "0" + mes : mes

    const año = hoy.getFullYear();
    hoy = año + "-" + mes + "-" + dia;
    this.setState({ value: hoy, min: hoy })
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
        <div className="calendario2" ><label>
          {/* <FieldWithError name="age"  placeholder="Edad" aria-label="age" className="input" onChange={this.handleChange} required type="date" /> */}
          <input name="trip-start" placeholder="Edad"  onChange={this.handleChange} required type="date" />
        </label>
        </div>
      // </form>
    );
  }
}


