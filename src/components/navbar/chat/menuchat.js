import React from 'react';

import './menuchat.css'

const Menuchat = props => (
    <button className="toggle-buttonchat" onClick={props.click}>
        <div className="toggle-button__linechat"/>
        <div className="toggle-button__linechat"/>
        <div className="toggle-button__linechat"/>
    </button>
);

export default Menuchat;