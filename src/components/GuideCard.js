import React from 'react';
import star from './rating/star.png'
import starEmpty from './rating/star-empty.png'
import avatar_woman_1 from '../avatars/avatar_1.svg';
// import avatar_woman_2 from './avatars/avatar_2.svg';
// import avatar_woman_3 from './avatars/avatar_3.svg';
import avatar_man_1 from '../avatars/avatar_4.svg';
// import avatar_man_2 from './avatars/avatar_5.svg';

export default class GuideCard extends React.Component {
  state = {
    show: false
  }

  render() {

    const { firstName, lastName, city, age, gender, languages, knowledge, description } = this.props;
    const avatar = gender === 'Femenino' ? avatar_woman_1 : avatar_man_1;

    const languagesString = languages.join(', ')
    const knowledgeString = knowledge.join(', ')

    return (
      <div onClick={() => this.setState({ show: !this.state.show })} className="GuideCard">
        <div className="GuideCardText">
          <div className="GuideNameText">{firstName} {lastName}</div>
          <div className="GuideText">Ciudad: {city}</div>
          <div className="GuideText">Edad: {age}</div>
          <div className="GuideText">Idiomas: {languagesString}</div>
          {this.state.show && <div className="GuideText">Descripción: {description}</div>}
          {this.state.show && <div className="GuideText">Conocimientos: {knowledgeString}</div>}
        </div>
        <div className="ImageCard">
          <img src={avatar} alt={`${firstName} ${lastName}`} />
        
        </div>
      </div>
    )
  }
}