import React from 'react';

import avatar_woman_1 from './avatars/avatar_1.svg';
import avatar_woman_2 from './avatars/avatar_2.svg';
import avatar_woman_3 from './avatars/avatar_3.svg';
import avatar_man_1 from './avatars/avatar_4.svg';
import avatar_man_2 from './avatars/avatar_5.svg';
import Buttom from './Boton';

export default class GuideCard extends React.Component {
  state = {
    show: false
  }

  render() {

    const { firstName, lastName, city, age, gender, languages, knowledge, description } = this.props;
    const avatar = gender === 'FEMALE' ? avatar_woman_1 : avatar_man_1;
    return (
      <div onClick={() => this.setState({ show: !this.state.show })} className="GuideCard">
        <div className="GuideCardText">
          <div className="GuideNameText">{firstName} {lastName}</div>
          <div className="GuideText">Ciudad: {city}</div>
          <div className="GuideText">Edad: {age}</div>
          <div className="GuideText">Idiomas: {this.props.languages}</div>
          {this.state.show && <div className="GuideText">Descripción: {description}</div>}
        </div>
        <div className="ImageCard">
          <img src={avatar} alt={`${firstName} ${lastName}`} />
        </div>
      </div>
    )
  }
}