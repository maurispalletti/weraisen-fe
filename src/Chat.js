import React, { Component } from 'react';
import './Chat.css';
import Toolbar from './components/navbar/chat/toolbarchat'
import SideDrawer from './components/navbar/chat/sideDrawerchat'
import Backdrop from './components/navbar/backdrop/backdrop'
import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { Formik, Form, Field } from 'formik'
import enviar from './avatars/enviar.png'
const selfName = "Yo"
let otherName;

let userId;
let chatId;
let otherUser;
let matchStatus;

class Chat extends Component {
  state = {
    goToMatches: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
    iniciated: false,
    valorate: false,
    messages: [],
    currentStatus: "",
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
          const { data: { id, firstName, lastName } } = await userServices.getProfile(otherUser)
          otherName = `${firstName} ${lastName}`
          localStorage.setItem("ownerId", id);
        }

        if (!matchStatus) {
          const { data: { status, id } } = await userServices.getMatchByChatId(chatId)
          matchStatus = status
          localStorage.setItem("matchId", id);
        }

        this.setState({
          messages,
          iniciated: matchStatus === 'Iniciado',
          currentStatus: matchStatus,
        })

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
        this.setState({ goToMatches: true })
      }
    } catch (error) {
      console.error(`There was an error updating status`)
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
           return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    if (this.state.goToMatches) {
      return <Redirect to="/Matches" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }
    if (this.state.valorate) {
      return <Redirect to="/valoration" />
    }

    let sideDrawer;
    let backdrop;
   
    if (this.state.sideDrawerOpen) {
      sideDrawer =<SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>

    }

    return (
      <div className="Chat">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
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
                      placeholder="Enviar mensaje..."
                    />
                  </div>
                  <input type="submit" className="send-button" value="➡" />
                  <div className="send-button"><a href="/search"><img src={enviar} alt={"Home"} width="35" /></a></div>
                </Form>
              </Formik>
            </div>
          </div>
          {/* <div className="buttonsSectionChat">
            <input type="button"
              value={this.state.currentStatus === "Finalizado" ? "Ir a review" :
                this.state.iniciated ? "Finalizar" : "Iniciar"}
              onClick={() => { this.goToValoration() }}
              disabled={this.state.currentStatus === "Anulado" || this.state.currentStatus === "Cancelado"}
              className={this.state.currentStatus === "Anulado" || this.state.currentStatus === "Cancelado" ?
                "buttonLeftChatDisabled" : "buttonLeftChat"}
            />
            <input type="button" className="buttonRightChat"
              value={this.state.currentStatus === "Finalizado"
                || this.state.currentStatus === "Cancelado"
                || this.state.currentStatus === "Anulado"
                ? "Volver" : this.state.iniciated ? "Anular" : "Cancelar"}
              onClick={() => {
                this.state.currentStatus === "Finalizado"
                  || this.state.currentStatus === "Cancelado"
                  || this.state.currentStatus === "Anulado"
                  ? this.setState({ goToHome: true }) : this.cancelMatch()
              }} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Chat;
