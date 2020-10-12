import React, {Component} from 'react';
import './App.css';
import Toolbar from       './components/Toolbar/Toolbar';
import SideDrawer from    './components/SideDrawer/SideDrawer';
import Backdrop from      './components/Backdrop/Backdrop';
import IntroSection from  './components/IntroSection/IntroSection';
import BasicRows from     './components/PhotoGallery/PhotoGallery';

class App extends Component{
  state={
    sideDrawerOpen:false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false});
  };

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div sytle={{height:'100%'}} className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler}/>
        {backdrop}
        <main>
        <IntroSection/>
        <BasicRows/>

        </main>
      </div>
    );
  }
}

export default App;
