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
import HomeFieldAdvantage from './components/homeFieldAdvantage/HomeFieldAdvantage'
import ItBegins from './components/itBegins/ItBegins'
import TheWinterFreeze from './components/theWinterFreeze/TheWinterFreeze'
import TheWhiteDeath from './components/theWhiteDeath/TheWhiteDeath'
import Perseverance from './components/perseverance/Perseverance'
import TheBeginningOfTheEnd from './components/theBeginningOfTheEnd/TheBeginningOfTheEnd'
import TheTreatyOfMoscow from './components/theTreatyOfMoscow/TheTreatyOfMoscow'


import $ from "jquery";

ReactDOM.render(
    <div className="App">
        <Intro />
        <BufferZone/>
        <InevitableWar/>
        <Outnumbered/>
        <HomeFieldAdvantage/>
        <ItBegins/>
        <TheWinterFreeze/>
        <TheWhiteDeath/>
        <Perseverance/>
        <TheBeginningOfTheEnd/>
        <TheTreatyOfMoscow/>
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
        duration: "75%"
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
    
    var stalinPinScene = new ScrollMagic.Scene({
        triggerElement: "#stalin",
        triggerHook: 0.2,
        duration: "40%"
    })
    .setPin("#stalin")
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
    
    var kotikenttaetuTween = new ScrollMagic.Scene({
        triggerElement: "#kotikenttaetu",
        triggerHook: 0.6
    })
    .setClassToggle("#kotikenttaetu", "fade-out") // add class toggle
    .addTo(controller);

    var homeFieldAdvantageTween = new ScrollMagic.Scene({
        triggerElement: "#kotikenttaetu",
        triggerHook: 0.6
    })
    .setClassToggle("#home-field-advantage", "fade-in") // add class toggle
    .addTo(controller);
    
    var kareliaPinScene = new ScrollMagic.Scene({
        triggerElement: "#finnish-soldiers",
        triggerHook: 0.2,
        duration: "80%"
    })
    .setPin("#finnish-soldiers")
    .addTo(controller);
    
    var nachinayetsyaTween = new ScrollMagic.Scene({
        triggerElement: "#nachinayetsya",
        triggerHook: 0.6
    })
    .setClassToggle("#nachinayetsya", "fade-out") // add class toggle
    .addTo(controller);

    var itBeginsTween = new ScrollMagic.Scene({
        triggerElement: "#nachinayetsya",
        triggerHook: 0.6
    })
    .setClassToggle("#it-begins", "fade-in") // add class toggle
    .addTo(controller);
    
    var sovietTroopsPinScene = new ScrollMagic.Scene({
        triggerElement: "#soviet-troops",
        triggerHook: 0.2,
        duration: "65%"
    })
    .setPin("#soviet-troops")
    .addTo(controller);
    
    var zimniyeZamorazhivaniyeTween = new ScrollMagic.Scene({
        triggerElement: "#zimniye-zamorazhivaniye",
        triggerHook: 0.6
    })
    .setClassToggle("#zimniye-zamorazhivaniye", "fade-out") // add class toggle
    .addTo(controller);

    var theWinterFreezeTween = new ScrollMagic.Scene({
        triggerElement: "#zimniye-zamorazhivaniye",
        triggerHook: 0.6
    })
    .setClassToggle("#the-winter-freeze", "fade-in") // add class toggle
    .addTo(controller);
    
    var valkoinenKuolemaTween = new ScrollMagic.Scene({
        triggerElement: "#valkoinen-kuolema",
        triggerHook: 0.6
    })
    .setClassToggle("#valkoinen-kuolema", "fade-out") // add class toggle
    .addTo(controller);

    var theWhiteDeathTween = new ScrollMagic.Scene({
        triggerElement: "#the-white-death",
        triggerHook: 0.6
    })
    .setClassToggle("#the-white-death", "fade-in") // add class toggle
    .addTo(controller);
    
    var simoHayhaScene = new ScrollMagic.Scene({
        triggerElement: "#simo-hayha",
        triggerHook: 0.2,
        duration: "90%"
    })
    .setPin("#simo-hayha")
    .addTo(controller);
    
    var sisuTween = new ScrollMagic.Scene({
        triggerElement: "#sisu",
        triggerHook: 0.6
    })
    .setClassToggle("#sisu", "fade-out") // add class toggle
    .addTo(controller);

    var perseveranceTween = new ScrollMagic.Scene({
        triggerElement: "#sisu",
        triggerHook: 0.6
    })
    .setClassToggle("#perseverance", "fade-in") // add class toggle
    .addTo(controller);
    
    var finnishFlagScene = new ScrollMagic.Scene({
        triggerElement: "#finnish-flag",
        triggerHook: 0.2,
        duration: "40%"
    })
    .setPin("#finnish-flag")
    .addTo(controller);
    
    var nachaloKontsaTween = new ScrollMagic.Scene({
        triggerElement: "#nachalo-kontsa",
        triggerHook: 0.6
    })
    .setClassToggle("#nachalo-kontsa", "fade-out") // add class toggle
    .addTo(controller);

    var theBeginningOfTheEndTween = new ScrollMagic.Scene({
        triggerElement: "#nachalo-kontsa",
        triggerHook: 0.6
    })
    .setClassToggle("#the-beginning-of-the-end", "fade-in") // add class toggle
    .addTo(controller);
    
    var dogovorMoskvyTween = new ScrollMagic.Scene({
        triggerElement: "#dogovor-moskvy",
        triggerHook: 0.6
    })
    .setClassToggle("#dogovor-moskvy", "fade-out") // add class toggle
    .addTo(controller);

    var theTreatyOfMoscowTween = new ScrollMagic.Scene({
        triggerElement: "#dogovor-moskvy",
        triggerHook: 0.6
    })
    .setClassToggle("#the-treaty-of-moscow", "fade-in") // add class toggle
    .addTo(controller);
    
    var sovietStarScene = new ScrollMagic.Scene({
        triggerElement: "#soviet-star",
        triggerHook: 0.2,
        duration: "110%"
    })
    .setPin("#soviet-star")
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
