import React from 'react';
import './SideDrawer.css';
import DrawerCloseButton from './DrawerCloseButton';

const sideDrawer = props =>{
    let drawerClasses='side_drawer';
    let listClasses='list'
    if (props.show){
        drawerClasses = ['side_drawer open']
        listClasses=['list open']
    }
    
    return(
        <nav className={drawerClasses}>
            <DrawerCloseButton click={props.drawerClickHandler}/>
            <ul className={listClasses}>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Users2</a></li>
                
            </ul>
            

        </nav>
        
    )
}

export default sideDrawer;