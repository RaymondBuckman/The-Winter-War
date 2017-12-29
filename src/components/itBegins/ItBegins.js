import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class ItBegins extends Component {
    render() {
        return(
        <div>
            <div className="it-begins-div">
                <div className="container">
                    <div className="row">
                        <h1 id="nachinayetsya" className="text-center" tabIndex="0">Начинается</h1>
                        <h1 id="it-begins" className="text-center" tabIndex="0">It Begins</h1>
                    </div>
                    <div className="row">
                        <div id="soviet-troops" className="col-xs-4 col-xs-offset-0"></div>
                        <p id="it-begins-paragraph" className="col-xs-7 col-xs-offset-5 text-right">
                            The Russians were forced to fight on a small front despite the sheer size of the Russian-Finnish border. Many parts of the 600 mile-long border were simply impassable, so the Finns had a good idea as to the route any Russian force might take. The Russian air force was also limited in the amount of time it could help the army because the days were so short during the winter months. When they did fly, the Russians took heavy casualties, losing 800 planes during the war – over 25% of the planes used in the war.<br/><br/>
                            The war started on November 30th. The initial stages went to the Finns' plan as they held up the first advances of the Red Army in the Karelian Isthmus. The Finnish troops also picked up valuable experience of fighting tanks; in this the Russians all but assisted the Finns as the tanks of the Russians operated separate to the infantry and the Finns found it relatively easy to pick off individually operating tanks. The Finns had less success around the northern shores of Lake Lagoda where the Russians did make gains.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}