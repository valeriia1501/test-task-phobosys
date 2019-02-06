import * as React from 'react';


import whiteMenuItem from '@assets/menu-white.svg'



export class Header extends React.Component{
    render(){
        return(
            <header className="header">
            <div>
              <span className="logo">borvo</span>
                  <nav>
                    <ul>
                      <li>Services</li>
                      <li>About us</li>
                      <li>Contact Us</li>
                    </ul>
                  </nav>
                <nav className="mobile none" id="mobile">
                  <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
            </div>
              <img id="burger" src={whiteMenuItem}/>
            <button>Get in touch</button>
          </header>
        )
    }
}