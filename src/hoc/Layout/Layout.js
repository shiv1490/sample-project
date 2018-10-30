import React, { Component } from "react";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Header from "./../../components/Header/Header";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <div>
        <Header clicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          toggleClicked={this.state.showSideDrawer}
          clicked={this.sideDrawerClosedHandler}
        />
      </div>
    );
  }
}

export default Layout;
