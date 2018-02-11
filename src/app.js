const css = require('./app.scss');
require('./img/favicon.ico');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import Particles from 'react-particles-js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
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

function openNavigation(e){
        e.preventDefault();
        $('.navbar').addClass('navbar-displayed');
        $(this).addClass('fade-out');
}

function closeNavigation(){
        //e.preventDefault();
        $('.navbar').removeClass('navbar-displayed');
}

ReactDOM.render(
    <div className="App">
        <img id="menu" className="hidden-xs" src="https://png.icons8.com/ios/50/ffffff/menu.png" height="35px" width="35px" tabIndex="0" alt="opens navigation" onClick={openNavigation}></img>
        <img id="menu-clone" className="hidden-xs"src="https://png.icons8.com/ios/50/ffffff/menu.png" height="35px" width="35px" alt="opens navigation" onClick={openNavigation}></img>
        <Navbar/>
        <div className="main-content" role="main" onClick={closeNavigation}>
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
    var laptopsAndDesktops = window.matchMedia( "(min-width: 1420px)" );
    var triggerHook;
    
    if(laptopsAndDesktops.matches){
        triggerHook = 0.5;
    }else{
        triggerHook = 0.7;
    }
    
    //Brings down nav menu when <a> tags are on focus
    $('.nav li a').focus(function(){
        $('.navbar').addClass('navbar-displayed');
        $('#menu, #menu-clone').addClass('fade-out');
    })
    
    //Replicates the white text-shadow text animation for images
    $('#menu, #menu-clone').hover(
        function(){
            $('#menu-clone').addClass('blinking-image-class');
        },  
        function(){
            $('#menu-clone').removeClass('blinking-image-class');
        }
    );
    
    //Replicates the white text-shadow text animation for images
    $('#up-arrow, #up-arrow-clone').hover(
        function(){
            $('#up-arrow-clone').addClass('blinking-image-class');
        },  
        function(){
            $('#up-arrow-clone').removeClass('blinking-image-class');
        }
    );
    
    var controller = new ScrollMagic.Controller();
    
    var heightOfBufferZone = $('.inevitable-war-div').offset().top - $('.buffer-zone-div').offset().top;
    var heightOfInevitableWar = $('.outnumbered-div').offset().top - $('.inevitable-war-div').offset().top;
    var heightOfOutnumbered = $('.home-field-advantage-div').offset().top - $('.outnumbered-div').offset().top;
    var heightOfHomeFieldAdvantage = $('.it-begins-div').offset().top - $('.home-field-advantage-div').offset().top;
    var heightOfItBegins = $('.the-winter-freeze-div').offset().top - $('.it-begins-div').offset().top;
    var heightOfTheWinterFreeze = $('.the-white-death-div').offset().top - $('.the-winter-freeze-div').offset().top;
    var heightOfTheWhiteDeath = $('.perseverance-div').offset().top - $('.the-white-death-div').offset().top;
    var heightOfPerseverance = $('.the-beginning-of-the-end-div').offset().top - $('.perseverance-div').offset().top;
    var heightOfTheBeginningOfTheEnd = $('.the-treaty-of-moscow-div').offset().top - $('.the-beginning-of-the-end-div').offset().top;
    var heightOfTheTreatyOfMoscow = $('.aftermath-div').offset().top - $('.the-treaty-of-moscow-div').offset().top;
    var heightOfAftermath = $('.footer-div').offset().top - $('.aftermath-div').offset().top;
    
    
    /*
    console.log(window.innerHeight);
    console.log($('#buffer-zone-paragraph').height());
    
    console.log($('#buffer-zone-paragraph').height() / window.innerHeight);
    var heightOfBufferZoneParagraph = (($('#buffer-zone-paragraph').height() / window.innerHeight) * 100).toString();   */
        
    /* ----- Navbar Highlighting scenes ----- */    
    var navBufferZoneScene = new ScrollMagic.Scene({
        triggerElement: ".buffer-zone-div",
        triggerHook: 0.5,
        duration: heightOfBufferZone
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(1)", "active")
    .addTo(controller);
    
    var navInevitableWarScene = new ScrollMagic.Scene({
        triggerElement: ".inevitable-war-div",
        triggerHook: 0.5,
        duration: heightOfInevitableWar
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active")
    .addTo(controller);
    
    var navOutnumberedScene = new ScrollMagic.Scene({
        triggerElement: ".outnumbered-div",
        triggerHook: 0.5,
        duration: heightOfOutnumbered
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active")
    .addTo(controller);
    
    var navHomeFieldAdvantageScene = new ScrollMagic.Scene({
        triggerElement: ".home-field-advantage-div",
        triggerHook: 0.5,
        duration: heightOfHomeFieldAdvantage
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active")
    .addTo(controller);
    
    var navItBeginsScene = new ScrollMagic.Scene({
        triggerElement: ".it-begins-div",
        triggerHook: 0.5,
        duration: heightOfItBegins
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active")
    .addTo(controller);
    
    var navTheWinterFreezeScene = new ScrollMagic.Scene({
        triggerElement: ".the-winter-freeze-div",
        triggerHook: 0.5,
        duration: heightOfTheWinterFreeze
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(6)", "active")
    .addTo(controller);
    
    var navTheWhiteDeathScene = new ScrollMagic.Scene({
        triggerElement: ".the-white-death-div",
        triggerHook: 0.5,
        duration: heightOfTheWhiteDeath
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(7)", "active")
    .addTo(controller);
    
    var navPerseveranceScene = new ScrollMagic.Scene({
        triggerElement: ".perseverance-div",
        triggerHook: 0.5,
        duration: heightOfPerseverance
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(8)", "active")
    .addTo(controller);
    
    var navTheBeginningOfTheEndScene = new ScrollMagic.Scene({
        triggerElement: ".the-beginning-of-the-end-div",
        triggerHook: 0.5,
        duration: heightOfTheBeginningOfTheEnd
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(9)", "active")
    .addTo(controller);
    
    var navTheTreatyOfMoscowScene = new ScrollMagic.Scene({
        triggerElement: ".the-treaty-of-moscow-div",
        triggerHook: 0.5,
        duration: heightOfTheTreatyOfMoscow
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(10)", "active")
    .addTo(controller);
    
    var navAftermathScene = new ScrollMagic.Scene({
        triggerElement: ".aftermath-div",
        triggerHook: 0.5,
        duration: heightOfAftermath
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(11)", "active")
    .addTo(controller);
    
    
    /* ----- Finnish/Russian header changing scenes ----- */    
    var bufernayaZonaScene = new ScrollMagic.Scene({
        triggerElement: ".buffer-zone-div",
        triggerHook: 0.5
    })
    .setClassToggle("#bufernaya-zona", "fade-out")
    .addTo(controller);

    var bufferZoneScene = new ScrollMagic.Scene({
        triggerElement: ".buffer-zone-div",
        triggerHook: 0.5
    })
    .setClassToggle("#buffer-zone", "fade-in")
    .addTo(controller);
    
    var neizbezhnayaVoynaScene = new ScrollMagic.Scene({
        triggerElement: ".inevitable-war-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#neizbezhnaya-voyna", "fade-out")
    .addTo(controller);

    var inevitableWarScene = new ScrollMagic.Scene({
        triggerElement: ".inevitable-war-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#inevitable-war", "fade-in")
    .addTo(controller);
    
    var alakynnessaScene = new ScrollMagic.Scene({
        triggerElement: ".outnumbered-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#alakynnessa", "fade-out")
    .addTo(controller);

    var outnumberedScene = new ScrollMagic.Scene({
        triggerElement: ".outnumbered-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#outnumbered", "fade-in")
    .addTo(controller);
    
    var kotikenttaetuScene = new ScrollMagic.Scene({
        triggerElement: ".home-field-advantage-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#kotikenttaetu", "fade-out")
    .addTo(controller);

    var homeFieldAdvantageScene = new ScrollMagic.Scene({
        triggerElement: ".home-field-advantage-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#home-field-advantage", "fade-in")
    .addTo(controller);
    
    var nachinayetsyaScene = new ScrollMagic.Scene({
        triggerElement: ".it-begins-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#nachinayetsya", "fade-out")
    .addTo(controller);

    var itBeginsScene = new ScrollMagic.Scene({
        triggerElement: ".it-begins-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#it-begins", "fade-in")
    .addTo(controller);
    
    var zimniyeZamorazhivaniyeScene = new ScrollMagic.Scene({
        triggerElement: ".the-winter-freeze-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#zimniye-zamorazhivaniye", "fade-out")
    .addTo(controller);

    var theWinterFreezeScene = new ScrollMagic.Scene({
        triggerElement: ".the-winter-freeze-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#the-winter-freeze", "fade-in")
    .addTo(controller);
    
    var valkoinenKuolemaScene = new ScrollMagic.Scene({
        triggerElement: ".the-white-death-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#valkoinen-kuolema", "fade-out")
    .addTo(controller);

    var theWhiteDeathScene = new ScrollMagic.Scene({
        triggerElement: ".the-white-death-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#the-white-death", "fade-in")
    .addTo(controller);
    
    var sisuScene = new ScrollMagic.Scene({
        triggerElement: ".perseverance-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#sisu", "fade-out")
    .addTo(controller);

    var perseveranceScene = new ScrollMagic.Scene({
        triggerElement: ".perseverance-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#perseverance", "fade-in")
    .addTo(controller);
    
    var nachaloKontsaScene = new ScrollMagic.Scene({
        triggerElement: ".the-beginning-of-the-end-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#nachalo-kontsa", "fade-out")
    .addTo(controller);

    var theBeginningOfTheEndScene = new ScrollMagic.Scene({
        triggerElement: ".the-beginning-of-the-end-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#the-beginning-of-the-end", "fade-in")
    .addTo(controller);
    
    var dogovorMoskvyScene = new ScrollMagic.Scene({
        triggerElement: ".the-treaty-of-moscow-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#dogovor-moskvy", "fade-out")
    .addTo(controller);

    var theTreatyOfMoscowScene = new ScrollMagic.Scene({
        triggerElement: ".the-treaty-of-moscow-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#the-treaty-of-moscow", "fade-in")
    .addTo(controller);
    
    var jalkiseurauksetScene = new ScrollMagic.Scene({
        triggerElement: ".aftermath-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#jalkiseuraukset", "fade-out")
    .addTo(controller);

    var aftermathScene = new ScrollMagic.Scene({
        triggerElement: ".aftermath-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#aftermath", "fade-in")
    .addTo(controller);
    
    var lisaaLinkkejaScene = new ScrollMagic.Scene({
        triggerElement: ".footer-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#lisaa-linkkeja", "fade-out")
    .addTo(controller);

    var moreLinksScene = new ScrollMagic.Scene({
        triggerElement: ".footer-div",
        triggerHook: triggerHook
    })
    .setClassToggle("#more-links", "fade-in")
    .addTo(controller);
    
    
    
    /* ----- Image pinning scenes ----- */
    //Only active on laptop & desktop screens
    if(laptopsAndDesktops.matches){
        var kareliaPinScene = new ScrollMagic.Scene({
            triggerElement: "#buffer-zone-image",
            triggerHook: 0.2,
            duration: "60%"
        })
        .addTo(controller);
        kareliaPinScene.setPin("#buffer-zone-image", {pushFollowers: false});

        var stalinPinScene = new ScrollMagic.Scene({
            triggerElement: "#inevitable-war-image",
            triggerHook: 0.2,
            duration: "40%"
        })
        .addTo(controller);
        stalinPinScene.setPin("#inevitable-war-image", {pushFollowers: false});

        var finnishSoldiersPinScene = new ScrollMagic.Scene({
            triggerElement: "#home-field-advantage-image",
            triggerHook: 0.2,
            duration: "60%"
        })
        .addTo(controller);
        finnishSoldiersPinScene.setPin("#home-field-advantage-image", {pushFollowers: false});

        var sovietTroopsPinScene = new ScrollMagic.Scene({
            triggerElement: "#it-begins-image",
            triggerHook: 0.2,
            duration: "40%"
        })
        .addTo(controller);
        sovietTroopsPinScene.setPin("#it-begins-image", {pushFollowers: false});


        var simoHayhaPinScene = new ScrollMagic.Scene({
            triggerElement: "#the-white-death-image",
            triggerHook: 0.2,
            duration: "90%"
        })
        .addTo(controller);
        simoHayhaPinScene.setPin("#the-white-death-image", {pushFollowers: false});

        var finnishFlagPinScene = new ScrollMagic.Scene({
            triggerElement: "#perseverance-image",
            triggerHook: 0.2,
            duration: "80%"
        })
        .addTo(controller);
        finnishFlagPinScene.setPin("#perseverance-image", {pushFollowers: false});

        var newspaperPinScene = new ScrollMagic.Scene({
            triggerElement: "#the-treaty-of-moscow-image",
            triggerHook: 0.2,
            duration: "110%"
        })
        .addTo(controller);
        newspaperPinScene.setPin("#the-treaty-of-moscow-image", {pushFollowers: false});

        var vyborgPinScene = new ScrollMagic.Scene({
            triggerElement: "#aftermath-image",
            triggerHook: 0.2,
            duration: "30%"
        })
        .addTo(controller);
        vyborgPinScene.setPin("#aftermath-image", {pushFollowers: false});
        
    }   
    
    /* ----- Image parallaxing tweens ----- */
    //Only active on laptop & desktop screens
    if(laptopsAndDesktops.matches){
        var kareliaParallaxTween = TweenMax.to("#karelia-map", 1, {
            backgroundPositionX: "+=75%",
            ease:Power2.easeInOut
        });

        var kareliaParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#buffer-zone-image", 
            triggerHook: 0.2,
            duration: "60%"
        })
        .setTween(kareliaParallaxTween)
        .addTo(controller);


        var stalinParallaxTween = TweenMax.from("#stalin", 1, {
            backgroundSize: "+=10% +=11.5%",
            ease:Power0.easeIn
        });

        var stalinParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#inevitable-war-image",
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
            triggerElement: "#home-field-advantage-image",
            triggerHook: 0.2,
            duration: "80%"
        })
        .setTween(finnishSoldiersParallaxTween)
        .addTo(controller);

        var sovietTroopsParallaxTween = TweenMax.to("#soviet-tanks", 1, {
            backgroundPositionX: "50%",
            ease:Power2.easeIn
        });

        var sovietTroopsParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#it-begins-image",
            triggerHook: 0.2,
            duration: "40%"
        })
        .setTween(sovietTroopsParallaxTween)
        .addTo(controller);

        var simoHayhaParallaxTween = TweenMax.to("#simo-hayha", 1, {
            backgroundPositionY: "+=20%",
            ease:Power0.easeIn
        });

        var simoHayhaParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#the-white-death-image",
            triggerHook: 0.2,
            duration: "90%"
        })
        .setTween(simoHayhaParallaxTween)
        .addTo(controller);

        var finnishFlagParallaxTween = TweenMax.to("#finnish-flag", 1, {
            backgroundSize: "+=17.225% +=12.5%",
            backgroundPositionY: "-=50%",
            ease:Power0.easeIn
        });

        var finnishFlagParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#perseverance-image",
            triggerHook: 0.2,
            duration: "70%"
        })
        .setTween(finnishFlagParallaxTween)
        .addTo(controller);

        var newspaperParallaxTween = TweenMax.to("#newspaper", 1, {
            backgroundPositionX: "+=100%",
            ease:Power2.easeIn
        });

        var newspaperParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#the-treaty-of-moscow-image",
            triggerHook: 0.2,
            duration: "110%"
        })
        .setTween(newspaperParallaxTween)
        .addTo(controller);

        var vyborgParallaxTween = TweenMax.to("#vyborg", 1, {
            backgroundPositionX: "+=40%",
            ease:Power0.easeIn
        });

        var vyborgParallaxScene = new ScrollMagic.Scene({
            triggerElement: "#aftermath-image",
            triggerHook: 0.2,
            duration: "30%"
        })
        .setTween(vyborgParallaxTween)
        .addTo(controller);
    }
    
    /*
    var particlesJSBufferZoneScene = new ScrollMagic.Scene({
        triggerElement: ".buffer-zone-div",
        triggerHook: 0.5,
        duration: heightOfBufferZone
    })
    .setClassToggle(".buffer-zone-div > .snow-background > canvas", "fade-in")
    .addTo(controller);*/
})

