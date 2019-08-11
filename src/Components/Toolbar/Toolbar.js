import React from 'react';

import DraewrToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DraewrToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/">Profile</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
