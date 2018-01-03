import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class Navbar extends Component {
    render() {
        return(
        <div>
            <nav className="navbar navbar-default visible-lg" role="navigation">
                <div className="container-fluid">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#buffer-zone-div">Buffer Zone</a></li>
                        <li><a href="#inevitable-war-div">Inevitable War</a></li>
                        <li><a href="#outnumbered-div">Outnumbered</a></li>
                        <li><a href="#home-field-advantage-div">Home-Field Advantage</a></li>
                        <li><a href="#it-begins-div">It Begins</a></li>
                        <li><a href="#the-winter-freeze-div">The Winter Freeze</a></li>
                        <li><a href="#the-white-death-div">The White Death</a></li>
                        <li><a href="#perseverance-div">Perseverance</a></li>
                        <li><a href="#the-beginning-of-the-end-div">The Beginning Of The End</a></li>
                        <li><a href="#the-treaty-of-moscow-div">The Treaty of Moscow</a></li>
                        <li><a href="#aftermath-div">Aftermath</a></li>
                    </ul>
                    <img id="menu-green" src="https://png.icons8.com/ios/50/30472e/menu.png" height="35px" width="35px" tabIndex="0" alt="closes navigation"></img>   
                </div>
            </nav>
        </div>
        );
    }
}