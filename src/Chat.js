import React, { Component } from 'react';
import './Chat.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import userServices from './services/userServices'

import { Redirect } from 'react-router'

const touristId = "5da12937326a149dfa699f19"
const guideId = "5da194007cb0d8dda8604ed9"

const touristName = "Yo"
const guideName = "Guía"

class Chat extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
    messages: null
  }

  getConversation = async () => {
    try {
      // const userId = localStorage.getItem("userId");

      const response = await userServices.getConversation({ touristId, guideId })

      console.log(response.data);

      return response.data;


      // setTimeout(yourFunction, 5000);
      // const { messages } = await this.getConversation();
      // this.setState({ messages })


    } catch (error) {
      console.error(`There was an error trying to get the chat`)
    }
  }

  renderMessages = (messages) => (
    messages.map(message => (
      <div key={message.id}>
        {message.emisor === touristId ? (
          <li className="self">
            <div className="msg">
              <div className="msgNameRight">{touristName}</div>
              <div className="message">{message.text}</div>
            </div>
          </li>
        ) : (
            <li className="other">
              <div className="msg">
                <div className="msgNameLeft">{guideName}</div>
                <div className="message">{message.text}</div>
              </div>
            </li>
          )}
      </div>
    ))
  )

  async componentDidMount() {

    const { messages } = await this.getConversation();
    this.setState({ messages })
    // await this.getConversation();
  }

  render() {
    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }

    return (
      <div className="Chat">
        <div className="Header">
          <button className="HomeIcon" onClick={() => this.setState({ goToProfile: true })}>
            <img src={home} alt={"Home"} />
          </button>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_1} alt={"User"} />
            </a>
          </div>
        </div>
        <div className="BodyChat">
          <div className="chatWindow">
            <ul className="chat" id="chatList">
              <div className="messagesWrapper" key={123}>
                {this.state.messages && this.renderMessages(this.state.messages)}
              </div>
            </ul>
            <div className="chatInputWrapper">
              <form className="formInputChat">
                {/* <form onSubmit={this.handleSubmit}> */}
                <input
                  className="inputChat"
                  type="text"
                  placeholder="Enter your message..."
                // onChange={this.handleChange}
                />
              </form>
              <input type="submit" className="send-button" value="Enviar" />
            </div>
          </div>




        </div>
      </div>
    );
  }
}

export default Chat;





// <div className="chatWindow">
// <ul className="chat" id="chatList">
//   {this.state.groupMessage.map(data => (
//     <div key={data.id}>
//       {this.state.user.uid === data.sender.uid ? (
//         <li className="self">
//           <div className="msg">
//             <p>{data.sender.uid}</p>
//             <div className="message"> {data.data.text}</div>
//           </div>
//         </li>
//       ) : (
//         <li className="other">
//           <div className="msg">
//             <p>{data.sender.uid}</p>
//            <div className="message"> {data.data.text} </div>
//           </div>
//         </li>
//       )}
//     </div>
//   ))}
// </ul>
// <div className="chatInputWrapper">
//   <form onSubmit={this.handleSubmit}>
//     <input
//       className="textarea input"
//       type="text"
//       placeholder="Enter your message..."
//       onChange={this.handleChange}
//     />
//   </form>
// </div>
// </div>