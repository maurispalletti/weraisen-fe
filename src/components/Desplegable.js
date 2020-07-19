import React from 'react'

import './Desplegable.css'

export default class Desplegable extends React.Component {
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
 

    this.setState(() => ({ value: hoy, min: hoy }));
    

  }

  render() {
    return (

        <div><label>
          <input  className="input" name="trip-start" min={this.state.min} value={this.state.value} onInput={this.handleChange} required type="date" {...console.log('fecha en deplegable '+ this.state.value)} />
        </label>
        </div>

    );
  }
}


