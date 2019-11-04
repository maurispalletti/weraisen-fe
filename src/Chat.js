import React, { Component } from 'react';
import './Chat.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { Formik, Form, Field } from 'formik'

const selfName = "Yo"
let otherName;

let userId;
let chatId;
let otherUser;
let matchStatus;

class Chat extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
    iniciated: false,
    valorate: false,
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

        if (!matchStatus) {
          const { data: { status } } = await userServices.getMatchByChatId(chatId)
          matchStatus = status
        }

        this.setState({ messages, iniciated: matchStatus === 'Iniciado' })

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

  async goToValoration() {
    try {
      if (this.state.iniciated) {
        const status = 'Finalizado'
        await userServices.updateMatch(chatId, status)
        this.setState({ valorate: true })
      } else {
        const status = 'Iniciado'
        await userServices.updateMatch(chatId, status)
        this.setState({ iniciated: true })
      }
    } catch (error) {
      console.error(`There was an error updating status`)
    }
  }

  async cancelMatch() {
    try {
      if (this.state.iniciated) {
        const status = 'Anulado'
        await userServices.updateMatch(chatId, status)
        this.setState({ valorate: true })
      } else {
        const status = 'Cancelado'
        await userServices.updateMatch(chatId, status)
        this.setState({ goToResults: true })
      }
    } catch (error) {
      console.error(`There was an error updating status`)
    }
  }

  render() {
    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }
    if (this.state.valorate) {
      return <Redirect to="/valoration" />
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
                  <input type="submit" className="send-button" value="➡" />
                </Form>
              </Formik>
            </div>
          </div>
          <div className="buttonsSectionChat">
            <input type="button" className="buttonLeftChat"
              value={this.state.iniciated ? "Finalizar" : "Iniciar"}
              onClick={() => { this.goToValoration() }} />
            <input type="submit" className="buttonRightChat" value="Guardar"
              value={this.state.iniciated ? "Anular" : "Cancelar"}
              onClick={() => { this.cancelMatch() }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
