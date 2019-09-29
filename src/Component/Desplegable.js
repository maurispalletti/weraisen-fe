import React from 'react'
import '../Home.css'
 import './Desplegable.css'

 export default class Desplegable extends React.Component {
    constructor(props) {
      super(props);
       this.state = {value: '', min: ''};
  
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    componentDidMount(){
        let hoy = new Date();
        const dia = hoy.getDate();
        let mes = (hoy.getMonth() + 1);
        mes = mes.toString() 
       
        mes = mes.length === 1 ? "0" + mes : mes

        const año = hoy.getFullYear();
        hoy = año + "-" + mes + "-" + dia;
        this.setState({value:hoy, min:hoy})
    }
    render() {
   
  
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="calendario"><label>
                
                <input  name="trip-start" min={this.state.min} value={this.state.value} onChange={this.handleChange} required type="date"/>
      
            </label>
            </div>
        </form>
       
 
      );
    }
  }
   

