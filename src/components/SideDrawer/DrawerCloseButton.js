import React from 'react';
import './DrawerCloseButton.css';

const drawerCloseButton = props =>(
    <button className="close_button" onClick={props.click}>
        <div className="close_button_line"/>
        <div className="close_button_line"/>
    </button>

);

export default drawerCloseButton;