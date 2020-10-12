import React from 'react';
import './ActionButtons.css'

const ActionButtons = props =>(

        <div className="container_botones">
            <button className="action_button">
                <span>accion1</span>
            </button>
            <button className="action_button">
                <span>accion2</span>
            </button>
            <button className="action_button">
                <span>accion3</span>
            </button>
        </div>

);

export default ActionButtons;