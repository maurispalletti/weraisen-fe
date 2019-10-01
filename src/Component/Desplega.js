import React from 'react';
import './Autocomplete.css';

export default class Desplega extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            text: ''

        };
    }


    suggestionSelected (value) {
        this.setState(() => ({
 
            text: value,
            suggestions: this.props,
        }))
    }

    renderSuggestions () {
        const {suggestions} = this.state;
        if (suggestions.lengt === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
  


    render() {
   
        
            return (
               <input
                   type="text"
                   value={this.state.value}
                   onChange={this.handleChange}
                />
            );
    }
}

