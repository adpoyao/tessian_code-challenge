import React, { Component } from 'react';

export default class Nav extends Component {
  render(){
    return (
      <div className="navigation">
        <div className="left-wrapper">
          <a href="https://www.tessian.com/">
            <div className="logo-wrapper">  
              <img className="tessian-logo" src="http://res.cloudinary.com/adpoyao/image/upload/v1519806920/Code%20Challenges/Tessian_Logo.png" alt="company logo"/>
              <p className="tessian-name">TESSIAN</p>
            </div>
          </a>
        </div>
        <div  className="right-wrapper">
          <a href="https://www.eddiepo.co/" target="_blank"><button>About</button></a>
        </div>
      </div>
    )
  }
};