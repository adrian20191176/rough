import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <div>
        <h1>SCAARD 2021 FOOTER</h1>
      </div>
    </React.Fragment>

  )

}

export default Layout