import React, { Component } from 'react';
import CardChat from '../src/components/CardChatsAll';
// import home from './icons/home.svg';
import Header from '../src/components/Header';

class Chat extends Component {
    render() {
        return (

        <div>

            <div>
                 <Header> </Header>
            </div> 

            <div className="chats">
                <h1>Conversaciones</h1>
            </div>

            <div>
              <CardChat></CardChat>
            </div>
        </div>

        );
    }
}
    export default Chat;