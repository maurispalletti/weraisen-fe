import React from 'react';
import './Autocomplete.css';

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            text: '',

        };
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected(value) {
        localStorage.setItem(`filter_${this.props.name}`, value);
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.lengt === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li key={`item-${item}`} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render() {
        const { text } = this.state;
        return (
            <div className="AutoComplete" >
                <input placeholder={this.props.placeholder} value={text} onChange={this.onTextChanged} type="text"/>
                {this.renderSuggestions()}
            </div>
        )
    }
}