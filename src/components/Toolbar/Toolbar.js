import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props =>(
  	<header className="toolbar">
      <nav className="toolbar_navigation">
         
         <div className="toolbar_logo"><a href="/">LOGO</a></div>
			<div className="spacer"/>
         <div className="toolbar_navigation_items">
            <ul>
               <li><a href="/">Productos</a></li>
               <li><a href="/">users</a></li>
            </ul>
         </div>
			<div>
				<DrawerToggleButton click={props.drawerClickHandler}/>
			</div>
    	</nav>
  	</header>
)

export default toolbar;