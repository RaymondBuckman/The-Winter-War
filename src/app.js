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
import BufferZone from './components/bufferZone/BufferZone';
import InevitableWar from './components/inevitableWar/InevitableWar';
import Outnumbered from './components/outnumbered/Outnumbered';
import $ from "jquery";

ReactDOM.render(
    <div className="App">
        <Intro />
        <BufferZone/>
        <InevitableWar/>
        <Outnumbered/>
    </div>,
    document.getElementById('root')
);

$("#arrow-group > img").click(function() {
    $('html, body').animate({
        scrollTop: $(".Intro-2").offset().top
    }, 2000);
});

$(document).ready(function(){  
    var controller = new ScrollMagic.Controller();
    
    var theWinterWarTween = new ScrollMagic.Scene({
        triggerElement: "#the-winter-war",
        triggerHook: 0.2
    })
    .setClassToggle("#the-winter-war", "fade-out") // add class toggle
    .addTo(controller);

    var talvisotaTween = new ScrollMagic.Scene({
        triggerElement: "#the-winter-war",
        triggerHook: 0.2
    })
    .setClassToggle("#talvisota", "fade-in") // add class toggle
    .addTo(controller);
    
    var bufernayaZonaTween = new ScrollMagic.Scene({
        triggerElement: "#bufernaya-zona",
        triggerHook: 0.6
    })
    .setClassToggle("#bufernaya-zona", "fade-out") // add class toggle
    .addTo(controller);

    var bufferzoneTween = new ScrollMagic.Scene({
        triggerElement: "#bufernaya-zona",
        triggerHook: 0.6
    })
    .setClassToggle("#buffer-zone", "fade-in") // add class toggle
    .addTo(controller);
    
    var kareliaPinScene = new ScrollMagic.Scene({
        triggerElement: "#karelia-map",
        triggerHook: 0.2,
        duration: "80%"
    })
    .setPin("#karelia-map")
    .addTo(controller);
    
    var neizbezhnayaVoynaTween = new ScrollMagic.Scene({
        triggerElement: "#neizbezhnaya-voyna",
        triggerHook: 0.6
    })
    .setClassToggle("#neizbezhnaya-voyna", "fade-out") // add class toggle
    .addTo(controller);

    var inevitableWarTween = new ScrollMagic.Scene({
        triggerElement: "#neizbezhnaya-voyna",
        triggerHook: 0.6
    })
    .setClassToggle("#inevitable-war", "fade-in") // add class toggle
    .addTo(controller);
    
    var alakynnessaTween = new ScrollMagic.Scene({
        triggerElement: "#alakynnessa",
        triggerHook: 0.6
    })
    .setClassToggle("#alakynnessa", "fade-out") // add class toggle
    .addTo(controller);

    var outnumberedTween = new ScrollMagic.Scene({
        triggerElement: "#alakynnessa",
        triggerHook: 0.6
    })
    .setClassToggle("#outnumbered", "fade-in") // add class toggle
    .addTo(controller);
/*
    var zimnyayaVoynaTween = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.5,
        duration: "100%"
    })
    .setClassToggle("#zimnyaya-voyna", "fade-in") 
    .addTo(controller);*/
})
