import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class TheWinterFreeze extends Component {
    render() {
        return(
        <div>
            <div className="the-winter-freeze-div">
                <div className="container">
                    <div className="row">
                        <h1 id="zimniye-zamorazhivaniye" className="text-center" tabIndex="0">Зимние Замораживание</h1>
                        <h1 id="the-winter-freeze" className="text-center" tabIndex="0">The Winter Freeze</h1>                        
                    </div>
                    <div className="row">
                        <p id="the-winter-freeze-paragraph" className="col-xs-10 col-xs-offset-1 text-center">
                            By mid-December, the Russians had been held in all areas and a stalemate took place. The main worry for Mannerheim was that he had already used up 50% of his reserves. Despite this, the Finns felt confident enough to launch a counter-attack against the Russians on December 27th. It lasted until December 30th when it became apparent that it was not going to be successful as the Russians had dug in well and the Finnish troops were unused to large scale offensive campaigns. So by the end of the year, an effective stalemate had occurred in all areas – but Finnish military commanders were aware that their reserves were fast dwindling.<br/><br/>
                            The Russian Army also had another fundamental weakness: its command structure was so rigid that military commanders in the field would not make a decision without the approval of a higher officer who usually had to get permission from a political commissar that his tactics were correct. Such a set-up created delays in decision-making. Therefore the leviathan that was the Russian Army in late 1939, was frequently a slow moving dinosaur hindered by both the geography of Finland and its rigidity in terms of decision making. Whereas Blitzkrieg had been designed to incorporate all aspects of Germany’s army and air force, each part of the Russian army acted as separate entities. Whether this was a result of the purges in the military which decimated its officer corps or a result of fear of taking a decision that was unacceptable to higher authorities is difficult to know: probably it was a combination of both. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
