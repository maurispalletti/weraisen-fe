import React, { Component } from 'react';
import './Chat.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { Formik, Form, Field } from 'formik'

import Buttom from './components/Boton.js'

// const guideId = "5da12937326a149dfa699f19"
// const touristId = "5da194007cb0d8dda8604ed9"

// const touristId = "5da12937326a149dfa699f19"
// const guideId = "5da194007cb0d8dda8604ed9"

// const chatId = "5daf572ef05f869fd8d53760"

const selfName = "Yo"
let otherName;

let userId;
let chatId;
let otherUser;

class Chat extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
    messages: [],
  }

  componentDidMount() {
    userId = localStorage.getItem("userId");
    chatId = localStorage.getItem("chatId");

    this.getConversation();
  }

  getConversation = async () => {
    try {
      const response = await userServices.getChat(chatId)

      if (response.data && response.data.messages) {
        const { data: { messages, guide, tourist } } = response;

        if (!otherName) {
          otherUser = (userId === tourist) ? guide : tourist;
          
          const { data: { firstName, lastName } } = await userServices.getProfile(otherUser)
          
          otherName = `${firstName} ${lastName}`
        }  

        this.setState({ messages })

        setTimeout(() => this.getConversation(), 3000);
      }
    } catch (error) {
      console.error(`There was an error trying to get the chat`)
    }
  }

  renderMessages = (messages) => (
    messages.map(message => (
      <div key={message.id}>
        {message.emisor === userId ? (
          <li className="self">
            <div className="msg">
              <div className="msgNameRight">{selfName}</div>
              <div className="message">{message.text}</div>
            </div>
          </li>
        ) : (
            <li className="other">
              <div className="msg">
                <div className="msgNameLeft">{otherName}</div>
                <div className="message">{message.text}</div>
              </div>
            </li>
          )}
      </div>
    ))
  )

  sendMessage = async (values) => {
    console.log(values);

    const newMessage = {
      emisor: userId,
      receptor: otherUser,
      text: values.message
    }

    if (this.state.messages) {
      try {
        const messagesArray = this.state.messages;
        messagesArray.push(newMessage)

        const newChat = await userServices.sendMessage(chatId, messagesArray)
        console.log(newChat);

      } catch (error) {
        console.error(`There was an error trying to send message`)
      }
    }


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
              <Formik onSubmit={(values) => this.sendMessage(values)}>
                <Form>
                  <div className="formInputChat">
                    <Field
                      name="message"
                      aria-label="inputChat"
                      className="inputChat"
                      type="text"
                      placeholder="Ingresa tu mensaje"
                    />
                  </div>
                  <input type="submit" className="send-button" value="Enviar" />
                </Form>
              </Formik>

            </div>
          </div>

          <Buttom link={'/valoration'} className={"botons"} name={"Finalizar visita"} />


        </div>
      </div>
    );
  }
}

export default Chat;
