import React, { Component } from 'react';
import './Chat.css';
import Toolbar from './components/navbar/chat/toolbarchat'
import SideDrawer from './components/navbar/chat/sideDrawerchat'
import Backdrop from './components/navbar/backdrop/backdrop'
import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { Formik, Form, Field } from 'formik'
import enviar from './avatars/enviar.png'
import usuario from '../src/Imagenes_Alvo/006.png'

const selfName = "Yo"

class Chat extends Component {
  state = {
    goToMatches: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false, //para ir al perfil al hacer click en user
    valorate: false,
    messages: [],
    otherName: "",
    otherUser: "",
    chatId: "",
    userId: "",
    placeholder: "Enviar mensaje...",
  }

  componentDidMount() {
    this.getConversation();
  }

  getConversation = async () => {
    console.log(`Getting conversation...`)
    let userId = this.state.userId || localStorage.getItem("userId");
    let chatId = this.state.chatId || localStorage.getItem("chatId");
    let otherName;
    let otherUser;

    try {
      const response = await userServices.getChat(chatId)

      if (response.data && response.data.messages) {
        const { data: { messages, guide, tourist } } = response;

        if (!this.state.otherUser) {
          otherUser = (userId === tourist) ? guide : tourist;

          const { data: { firstName, lastName, id } } = await userServices.getProfile(otherUser)
          otherName = `${firstName} ${lastName}`
          localStorage.setItem("ownerId", id);

          console.log(`Getting match id with chatId ${chatId}`)
          const { data: { id: matchId } } = await userServices.getMatchByChatId(chatId)
          localStorage.setItem("matchId", matchId);
        }

        this.setState({
          messages,
          otherName: otherName || this.state.otherName,
          otherUser: otherUser || this.state.otherUser,
          userId,
          chatId,
        })

        setTimeout(() => this.getConversation(), 3000);
      }
    } catch (error) {
      console.error(`There was an error trying to get the chat`)
      console.error(`Error: ${error}`)
    }
  }
  
  renderMessages = (messages) => {
    console.log(`Rendering messages`)
    return messages.map((message) => (
      <div key={message._id}>
        {message.emisor === this.state.userId ? (
          <li className="self">
            <div className="msg">
              <div className="msgNameRight">{selfName}</div>
              <div className="message">{message.text}</div>
            </div>
          </li>
        ) : (
            <li className="other">
              <div className="msg">
                <div className="msgNameLeft">{this.state.otherName}</div>
                <div className="message">{message.text}</div>
              </div>
            </li>
          )}
      </div>
    ))
  }


  sendMessage = async (values, resetForm) => {
    console.log(values);

    const newMessage = {
      emisor: this.state.userId,
      receptor: this.state.otherUser,
      text: values.message
    }

    if (this.state.messages) {
      try {
        const messagesArray = this.state.messages;
        messagesArray.push(newMessage)

        const newChat = await userServices.sendMessage(this.state.chatId, messagesArray)
        console.log(newChat);
      } catch (error) {
        console.error(`There was an error trying to send message`)
        console.error(`Error: ${error}`)
      }
    }
    resetForm();
  }

  async goToValoration() {
    try {
      const status = 'Finalizado'
      await userServices.updateMatch(this.state.chatId, status)
      this.setState({ valorate: true })

    } catch (error) {
      console.error(`There was an error ending match`)
      console.error(`Error: ${error}`)
    }
  }

  async cancelMatch() {
    try {
      const status = 'Cancelado'
      await userServices.updateMatch(this.state.chatId, status)
      this.setState({ goToMatches: true })
    } catch (error) {
      console.error(`There was an error canceling match`)
      console.error(`Error: ${error}`)
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    if (this.state.goToMatches) {
      return <Redirect to="/matches" />
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
      sideDrawer = <SideDrawer 
                   />;
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="Chat">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} nombre={this.otherName} img={usuario} />
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
              <Formik
                initialValues={{ message: '' }}
                onSubmit={(values, { resetForm }) => this.sendMessage(values, resetForm)}
              >
                <Form>
                  <div className="formInputChat">
                    <Field
                      name="message"
                      aria-label="inputChat"
                      className="inputChat"
                      type="text"
                      placeholder={this.state.placeholder}
                      autoComplete="off"
                      style={{ textAlign: 'left', paddingLeft: 10 }}
                    />
                  </div>
                  <button type="submit" className="send-button"><img src={enviar} alt={"Home"} width="35" /></button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
