import React from 'react';


 export default class Buttom extends React.Component {
    render() {
        return(
        <p><a href={this.props.link} className={this.props.className}>{this.props.name}</a></p>
        )
    }
  }