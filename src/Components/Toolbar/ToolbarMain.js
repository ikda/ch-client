import React from 'react';

import './ToolbarMain.css';
import '../../Routes/Profile.js';


const toolbarmain = props => (
  <header className="toolbarmain">
    <nav className="toolbarmain__navigation">

      <div className="toolbarmain__logo"><a href="/">Clubhouse</a></div>
      <div className="spacer" />
      <div className="toolbarmain_navigation_items">
        <ul>
          <li><a href='../../Routes/Profile.js'>profile image!!</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbarmain;
