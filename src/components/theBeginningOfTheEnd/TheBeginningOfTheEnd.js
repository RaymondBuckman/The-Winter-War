import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class TheBeginningOfTheEnd extends Component {
    render() {
        return(
        <div>
            <div className="the-beginning-of-the-end-div">
                <div className="container">
                    <div className="row">
                        <h1 id="nachalo-kontsa" className="text-center" tabIndex="0">Начало Конца</h1>
                        <h1 id="the-beginning-of-the-end" className="text-center" tabIndex="0">The Beginning Of The End</h1>                        
                    </div>
                    <div className="row">
                        <p id="the-beginning-of-the-end-paragraph" className="col-xs-10 col-xs-offset-1 text-center">
                            On January 15th Russia started a systematic artillery bombardment of Finland’s defences in the Karelian Isthmus. The Russians had a free hand in this as their artillery guns were more powerful than Finland’s and so could fire at Finnish positions in the Isthmus but were out of range from any Finnish attack. Also with complete mastery of the air, Russian gunners were given specific co-ordinates to aim for.<br/><br/>
                            The main Russian attack came on February 1st. The Finns had six divisions (about 85,000 men) at the front and three in reserve positions. However, two of the reserve divisions were newly created and had no experience of combat. The Russians had learned their lessons from the previous two months. Tanks attacked first with infantry literally in tow as many tanks pulled along infantry soldiers on sledges. The tanks placed themselves in front of the Finnish bunkers therefore protecting the infantry soldiers. The usual tactic of the Finns against this was to evacuate all fortified emplacements during the day and return to them at night once the Russians had moved back. During the night, the bunkers would be repaired. However, this was exhausting work and wore down the Finnish defenders. The Russians used a policy of attacking for three days and then pausing for 24 hours before attacking again for another three days. On February 11th, the Russians made an expected breakthrough at Summa in the Karelian Isthmus. The Mannerheim Line was broken at this point.<br/><br/>
                            The Russians simply wore down the defenders and exhaustion was a major factor in why the front line at Summa collapsed. By February 17th, those survivors at Summa had withdrawn from the Mannerheim Line. On February 25th, the Finns attempted a counter-attack using the remaining fifteen tanks that they possessed. Ironically, as these tanks advanced to the front line to support the infantry, they caused panic among many Finnish troops who did not know that Finland had any tanks – they assumed that they were Russian tanks that had got behind them in an encircling movement. The counter-attack failed. Wary of previous problems encountered in Finland, the Russians advanced steadily. However, they did advance and the Finns had to retreat despite the cautious approach of the Russians. By March 13th, the Finns were in retreat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
