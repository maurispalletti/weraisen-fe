import React, { Component } from 'react';
import './Chat.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'



import { Redirect } from 'react-router'


class Chat extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
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
              {/* {this.state.groupMessage.map(data => (
            <div key={data.id}>
              {this.state.user.uid === data.sender.uid ? (
                <li className="self">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                    <div className="message"> {data.data.text}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                   <div className="message"> {data.data.text} </div>
                  </div>
                </li>
              )}
            </div>
          ))} */}

              <div className="messagesWrapper" key={123}>

                {/* <li className="self">
                  <div className="msg">
                    <p>dmixof</p>
                    <div className="message"> ESTE ES OTRO MENSAJEEEEE </div>
                  </div>
                </li> */}

                <li className="self">
                  <div className="msg">
                    <div className="msgNameRight">Yo</div>
                    <div className="message"> ESTE ES OTRO MENSAJEEEEE </div>
                  </div>
                </li>

                <li className="other">
                  <div className="msg">
                  <div className="msgNameLeft">Otra persona</div>
                    <div className="message"> ESTE ES EL MENSfsdfdsm sdfdsfsdjkf sfl jdsfkls dfj sdj sdjlf sdkAJE del receptor </div>
                  </div>
                </li>




                <li className="other">
                  <div className="msg">
                  <div className="msgNameLeft">Otra persona</div>
                    <div className="message"> ESTE ES EL MENSfsdfdsm sdfdsfsdjkf sfl jdsfkls dfj sdj sdjlf sdkAJE del receptor </div>
                  </div>
                </li>
                <li className="other">
                  <div className="msg">
                  <div className="msgNameLeft">Otra persona</div>
                    <div className="message"> ESTE ES EL MENSfsdfdsm sdfdsfsdjkf sfl jdsfkls dfj sdj sdjlf sdkAJE del receptor </div>
                  </div>
                </li>

                <li className="self">
                  <div className="msg">
                    <div className="msgNameRight">Yo</div>
                    <div className="message"> ESTE ES OTRO MENSAJEEEEE </div>
                  </div>
                </li>

                <li className="self">
                  <div className="msg">
                    <div className="msgNameRight">Yo</div>
                    <div className="message"> ESTE ES OTRO MENSAJEEEEE </div>
                  </div>
                </li>
                <li className="other">
                  <div className="msg">
                  <div className="msgNameLeft">Otra persona</div>
                    <div className="message"> ESTE ES EL MENSfsdfdsm sdfdsfsdjkf sfl jdsfkls dfj sdj sdjlf sdkAJE del receptor </div>
                  </div>
                </li>
                <li className="other">
                  <div className="msg">
                  <div className="msgNameLeft">Otra persona</div>
                    <div className="message"> ESTE ES EL MENSfsdfdsm sdfdsfsdjkf sfl jdsfkls dfj sdj sdjlf sdkAJE del receptor </div>
                  </div>
                </li>

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