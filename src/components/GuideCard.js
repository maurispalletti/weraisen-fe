import React from 'react';


 export default class GuideCard extends React.Component {
    render() {
        return(
            <div className="GuideCard">
            <div className="GuideCardText">
              <div className="GuideNameText">{this.props.name}</div>
              <div className="GuideText">{this.props.ubicacion}</div>
              <div className="GuideText">{this.props.edad}</div>
              <div className="GuideText">{this.props.idiomas}</div>
            </div>
            <div className="ImageCard">
              <img src={this.props.avatar} alt={"User"} />
            </div>
          </div>
        )
    }
  }