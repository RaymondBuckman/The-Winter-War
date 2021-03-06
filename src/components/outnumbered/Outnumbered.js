import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class Outnumbered extends Component {
    render() {
        return(
        <div>
            <div id="outnumbered-div" className="outnumbered-div">
                <div className="container">
                    <div className="row">
                        <h1 id="alakynnessa" className="text-center">Alakynnessä</h1>
                        <h1 id="outnumbered" className="text-center" tabIndex="0">Outnumbered</h1>                        
                    </div>
                    <div className="row">
                        <p id="outnumbered-paragraph" className="col-xs-10 col-xs-offset-1 col-lg-10 col-lg-offset-1 text-center">
                            The U.S.S.R. had committed a number of men to the Polish campaign, but with 1,250,000 men in the regular army, there were many more Stalin could call on. For the Winter War, the Soviet Union used 45 divisions, each division had 18,000 men. That adds up to 810,000 men in total, nearly 25% of the whole of Finland’s entire population. In fact, for the whole duration of the war, the Soviets used 1,200,000 men in total in some form of military capacity. The Soviets also used 1,500 tanks and 3,000 planes. Whereas the Finns had difficulty supplying her troops with ammunition, the Red Army had a virtually unlimited supply and a vastly superior communication system <a href="https://ww2-weapons.com/red-army-1939/" target="_blank">(see more info on the Red Army...)</a>. The Finns were completely & utterly outnumbered. The country only had a population of 4 million and as a result of this any army could only have been small. Finland could muster a small army of professionals. <br/><br/>     
            
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

