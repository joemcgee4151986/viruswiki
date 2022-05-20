import React from 'react';
import './Style.css';



export default function Sidebar() {
 
    return (

      <div className="wrapAll clearfix">
        <div className="Sidebar">
          <div className="logo">
            <a href="/"><img src alt="" /></a>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#">Main page</a></li>
              <li><a href="#">Contents</a></li>
              <li><a href="#">Featured content</a></li>
            </ul>
            <h3>Interaction</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portal</a></li>
            </ul>
            <h3>Interaction</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portal</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
;