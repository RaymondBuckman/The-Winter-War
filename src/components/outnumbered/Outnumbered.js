import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

class Outnumbered extends Component {
    render() {
        return(
        <div>
            <div className="Outnumbered-1">
                <div className="container">
                    <div className="row">
                        <h1 id="alakynnessa" className="text-center" tabIndex="0">Alakynnessä</h1>
                        <h1 id="outnumbered" className="text-center" tabIndex="0">Outnumbered</h1>                        
                    </div>
                    <div className="row">
                        <p id="outnumbered-paragraph" className="col-xs-6 col-xs-offset-6 text-right">
                            Soviet Red Army's initial invasion consisted of 500,000 troops. The Finns were completely & utterly outnumbered. The country only had a population of 4 million and as a result of this any army could only have been small. Finland could muster a small army of professionals. <br/><br/>     
                            The country also had a peacetime army of conscripts which was boosted each year by an annual intake of new men. There was also a reserve which all conscripts passed into after a year’s service. Compared to the vast potential resources of the Red Army, the Finnish Army was dwarfed.<br/><br/>    
                            In time of war, it was planned by Mannerheim that the peacetime army should act as a covering force to delay any attack until the reservists got to the front. The army was also short of equipment including uniforms and modern artillery pieces – the army only had 112 decent anti-tank guns in November 1939.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Outnumbered;