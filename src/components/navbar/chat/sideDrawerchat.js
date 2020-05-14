//import React from 'react';
import './sideDrawerchat.css';
import React, { Component } from 'react';
//import { DenunciaModal } from '.../Component/DenunciaPopUp';
import DenunciaModal_Alvo  from './DenunciaModal_Alvo';

class sideDrawerchat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            denunciaModalShow: false
        }
    }

    render() {

        let denunciaModalClose = () => this.setState({ denunciaModalShow: false });

        return (

            <nav className="side-drawerchat">
                <ul>
                    <li><a style={{color: '#272b30'}} href="/chat">Cancelar encuentro</a></li>
                    <li><a style={{color: '#272b30'}} onClick ={()=> this.setState({denunciaModalShow : true}) }>Denunciar</a></li>  
                </ul>

                <DenunciaModal_Alvo
                show = {this.state.denunciaModalShow}
                onHide = {denunciaModalClose}
                />
            </nav>
        );
    }
};

export default sideDrawerchat;