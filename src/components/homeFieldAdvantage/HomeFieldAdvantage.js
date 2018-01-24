import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class HomeFieldAdvantage extends Component {
    render() {
        return(
        <div>
            <div id="home-field-advantage-div" className="home-field-advantage-div">
                <div className="container">
                    <div className="row">
                        <h1 id="kotikenttaetu" className="text-center" tabIndex="0">Kotikenttäetu</h1>
                        <h1 id="home-field-advantage" className="text-center" tabIndex="0">Home-Field Advantage</h1>
                    </div>
                    <div className="row">
                        <p id="home-field-advantage-paragraph" className="col-lg-7 col-lg-offset-0 text-left">
                            In one sense the Finnish Army was in an excellent position to defend its nation. Finnish troops were trained to use their own terrain to their advantage. Finnish troops were well suited to the forests and snow-covered regions of Finland and they knew the lay of the land. Finnish ski troops were highly mobile and well trained.<br/><br/>     
                            For the Soviet Union it was completely different. It was used to war games on large expanses of open ground. The snow covered forests of Finland were a different matter and the Soviets were to find that they were frequently confined to the area around roads as many of their men were unused to Finland’s terrain and the majority of their vehicles were unable to go off road. Their tactics developed during training did not include such terrain.<br/><br/>
                            The Red Army was ill-equipped for a winter war. Whereas the army was well supplied with standard military equipment, it had little that was required for the snow-covered forests of Finland. White camouflage clothing was not issued and vehicles simply could not cope with the cold. The winter of 1939-40 was particularly severe.
                        </p>
                        <div id="home-field-advantage-image" className="col-lg-4 col-lg-offset-8">
                            <div id="finnish-soldiers"></div>
                            <span className="text-container">
                                <p>The Finns' mobility & knowledge of the terrain allowed them to use Motti tactics against the Soviets <a href="https://www.youtube.com/watch?v=yHrndb0oZEc" target="_blank">(view more on Motti tactics...)</a></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
