const css = require('./app.scss');
require('./img/favicon.ico');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import ReactTooltip from 'react-tooltip'; 
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/Intro';
import $ from "jquery";

ReactDOM.render(
    <div className="App">
        <Intro />
    </div>,
    document.getElementById('root')
);

$("#arrow-group > img").click(function() {
    $('html, body').animate({
        scrollTop: $(".Intro-2").offset().top
    }, 2000);
});

$(document).ready(function(){  
})
