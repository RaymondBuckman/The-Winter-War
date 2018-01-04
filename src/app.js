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
import Navbar from './components/navbar/Navbar';
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
import Aftermath from './components/aftermath/Aftermath'
import Footer from './components/footer/Footer'


import $ from "jquery";

ReactDOM.render(
    <div className="App">
        <img id="menu-white" src="https://png.icons8.com/ios/50/ffffff/menu.png" height="35px" width="35px" tabIndex="0" alt="opens navigation"></img>  
        <Navbar/>
        <div className="main-content">
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
            <Aftermath/>
            <Footer/>
        </div>
    </div>,
    document.getElementById('root')
);

$(document).ready(function(){ 
    $('#menu-white').click(function(){
        $('.navbar').addClass('navbar-displayed');
        $('#menu-white').addClass('fade-out');
        $('#menu-green').addClass('fade-in');
    });
    
    $('.main-content').click(function(){
        $('.navbar').removeClass('navbar-displayed');
        $('#menu-white').removeClass('fade-out');
        $('#menu-green').removeClass('fade-in');
    });
    
    $('#menu-green').click(function(){
        $('.navbar').removeClass('navbar-displayed');
        $('#menu-white').removeClass('fade-out');
        $('#menu-green').removeClass('fade-in');
    });
    
    var controller = new ScrollMagic.Controller();
    
    
    /* ----- Finnish/Russian header changing scenes ----- */
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
    
    var jalkiseurauksetTween = new ScrollMagic.Scene({
        triggerElement: "#jalkiseuraukset",
        triggerHook: 0.6
    })
    .setClassToggle("#jalkiseuraukset", "fade-out") // add class toggle
    .addTo(controller);

    var aftermathTween = new ScrollMagic.Scene({
        triggerElement: "#jalkiseuraukset",
        triggerHook: 0.6
    })
    .setClassToggle("#aftermath", "fade-in") // add class toggle
    .addTo(controller);
    
    var linkitTween = new ScrollMagic.Scene({
        triggerElement: "#linkit",
        triggerHook: 0.7
    })
    .setClassToggle("#linkit", "fade-out") // add class toggle
    .addTo(controller);

    var linksTween = new ScrollMagic.Scene({
        triggerElement: "#linkit",
        triggerHook: 0.7
    })
    .setClassToggle("#links", "fade-in") // add class toggle
    .addTo(controller);
    
    
    
    /* ----- Image pinning scenes ----- */
    var kareliaPinScene = new ScrollMagic.Scene({
        triggerElement: "#karelia-map",
        triggerHook: 0.2,
        duration: "60%"
    })
    .setPin("#karelia-map")
    .addTo(controller);
    
    var stalinPinScene = new ScrollMagic.Scene({
        triggerElement: "#stalin",
        triggerHook: 0.2,
        duration: "40%"
    })
    .setPin("#stalin")
    .addTo(controller);
    
    var finnishSoldiersPinScene = new ScrollMagic.Scene({
        triggerElement: "#finnish-soldiers",
        triggerHook: 0.2,
        duration: "60%"
    })
    .setPin("#finnish-soldiers")
    .addTo(controller);
    
    var sovietTroopsPinScene = new ScrollMagic.Scene({
        triggerElement: "#soviet-troops",
        triggerHook: 0.2,
        duration: "40%"
    })
    .setPin("#soviet-troops")
    .addTo(controller);
    
    var simoHayhaPinScene = new ScrollMagic.Scene({
        triggerElement: "#simo-hayha",
        triggerHook: 0.2,
        duration: "90%"
    })
    .setPin("#simo-hayha")
    .addTo(controller);
    
    var finnishFlagPinScene = new ScrollMagic.Scene({
        triggerElement: "#finnish-flag",
        triggerHook: 0.2,
        duration: "80%"
    })
    .setPin("#finnish-flag")
    .addTo(controller);
    
    var newspaperPinScene = new ScrollMagic.Scene({
        triggerElement: "#newspaper",
        triggerHook: 0.2,
        duration: "110%"
    })
    .setPin("#newspaper")
    .addTo(controller);
    
    var vyborgPinScene = new ScrollMagic.Scene({
        triggerElement: "#vyborg",
        triggerHook: 0.2,
        duration: "30%"
    })
    .setPin("#vyborg")
    .addTo(controller);
    
    
    /* ----- Image parallaxing tweens ----- */
    var kareliaParallaxTween = TweenMax.to("#karelia-map", 1, {
        backgroundPositionX: "+=95%",
        ease:Power2.easeIn
    });

    var kareliaParallaxScene = new ScrollMagic.Scene({
        triggerElement: "#karelia-map", 
        triggerHook: 0.2,
        duration: "75%"
    })
    .setTween(kareliaParallaxTween)
    .addTo(controller);
    
    
    var stalinParallaxTween = TweenMax.from("#stalin", 1, {
        backgroundSize: "+=10% +=11.5%",
        ease:Power0.easeIn
    });
    
    var stalinParallaxScene = new ScrollMagic.Scene({
        triggerElement: "#stalin",
        triggerHook: 0.2,
        duration: "40%"
    })
    .setTween(stalinParallaxTween)
    .addTo(controller);
    
    var finnishSoldiersParallaxTween = TweenMax.to("#finnish-soldiers", 1, {
        backgroundPositionX: "-=75%",
        ease:Power1.easeOut
    });
    
     var finnishSoldiersParallaxScene = new ScrollMagic.Scene({
        triggerElement: "#finnish-soldiers",
        triggerHook: 0.2,
        duration: "80%"
    })
    .setTween(finnishSoldiersParallaxTween)
    .addTo(controller);
    
    var sovietTroopsParallaxTween = TweenMax.to("#soviet-troops", 1, {
        backgroundPositionX: "50%",
        ease:Power2.easeIn
    });
    
    var sovietTroopsParallaxScene = new ScrollMagic.Scene({
        triggerElement: "#soviet-troops",
        triggerHook: 0.2,
        duration: "55%"
    })
    .setTween(sovietTroopsParallaxTween)
    .addTo(controller);
    
    var simoHayhaParallaxTween = TweenMax.to("#simo-hayha", 1, {
        backgroundPositionY: "+=20%",
        ease:Power0.easeIn
    });
    
    var simoHayhaParallaxScene = new ScrollMagic.Scene({
        triggerElement: "#simo-hayha",
        triggerHook: 0.2,
        duration: "90%"
    })
    .setTween(simoHayhaParallaxTween)
    .addTo(controller);
    
    var finnishFlagParallaxTween = TweenMax.to("#finnish-flag", 1, {
        backgroundSize: "+=34.45% +=25%",
        backgroundPositionY: "-=50%",
        ease:Power0.easeIn
    });
    
    var finnishFlagParallaxScene = new ScrollMagic.Scene({
        triggerElement: "#finnish-flag",
        triggerHook: 0.2,
        duration: "70%"
    })
    .setTween(finnishFlagParallaxTween)
    .addTo(controller);
    
    var newspaperParallaxTween = TweenMax.to("#newspaper", 1, {
        backgroundPositionX: "+=100%",
        ease:Power2.easeIn
    });
    
    var newspaperParallaxnScene = new ScrollMagic.Scene({
        triggerElement: "#newspaper",
        triggerHook: 0.2,
        duration: "110%"
    })
    .setTween(newspaperParallaxTween)
    .addTo(controller);
    
    var vyborgParallaxTween = TweenMax.to("#vyborg", 1, {
        backgroundPositionX: "+=80%",
        ease:Power0.easeIn
    });
    
    var vyborgParallaxnScene = new ScrollMagic.Scene({
        triggerElement: "#vyborg",
        triggerHook: 0.2,
        duration: "30%"
    })
    .setTween(vyborgParallaxTween)
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
