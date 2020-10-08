import React from 'react';
import './SideDrawer.css';
import DrawerCloseButton from './DrawerCloseButton';

const sideDrawer = props =>{
    let drawerClasses='side_drawer';
    if (props.show){
        drawerClasses = ['side_drawer open']
    }
    
    return(
        <nav className={drawerClasses}>
            <DrawerCloseButton click={props.drawerClickHandler}/>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                
            </ul>
            

        </nav>
        
    )
}

export default sideDrawer;