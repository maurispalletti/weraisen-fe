import React, { Component } from 'react';
import CardChat from '../src/components/CardChatsAll';
import Header from '../src/components/Header';

class Chat extends Component {
    render() {
        return (

        <div>

          
                 <Header> </Header>
           
            <div className="chats" align="center" style={{paddingTop:"30px"}} >
                <h2>Mis mensajes</h2>
            </div>

            <div style={{paddingTop:"20px"}}>
              <CardChat></CardChat>
            </div>
        </div>

        );
    }
}
    export default Chat;