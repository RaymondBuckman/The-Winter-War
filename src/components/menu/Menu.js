import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

export default class Menu extends Component {
    openNavigation(e){
        e.preventDefault();
        $('.navbar').addClass('navbar-displayed');
        $(this).addClass('fade-out');
    }
    
    render() {
        return(
        <div>
            <img id="menu" className="hidden-xs" src="https://png.icons8.com/ios/50/ffffff/menu.png" height="35px" width="35px" tabIndex="0" alt="opens navigation" onClick={this.openNavigation}></img>
            <img id="menu-clone" className="hidden-xs"src="https://png.icons8.com/ios/50/ffffff/menu.png" height="35px" width="35px" alt="opens navigation" onClick={this.openNavigation}></img>
        </div>
        );
    }
}

