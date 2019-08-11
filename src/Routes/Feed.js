import React, {Component} from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import Backdrop from '../Components/Backdrop/Backdrop';

class Feed extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {Backdrop}
        <main style={{marginTop:'64px'}}>
          <p>this is the profile page!!</p>
        </main>
      </div>
    );
  }
}

export default Feed;
