import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class TheTreatyOfMoscow extends Component {
    render() {
        return(
        <div>
            <div className="the-treaty-of-moscow-div">
                <div className="container">
                    <div className="row">
                        <h1 id="dogovor-moskvy" className="text-center" tabIndex="0">Договор Москвы</h1>
                        <h1 id="the-treaty-of-moscow" className="text-center" tabIndex="0">The Treaty Of Moscow</h1>
                    </div>
                    <div className="row">
                        <p id="the-treaty-of-moscow-paragraph" className="col-xs-7 col-xs-offset-0 text-left">
                            A peace settlement was not long in coming. If the Russians had fully broken through the Karelian Isthmus, Helsinki was less than 200 miles away. If the Finnish army had been destroyed, nothing would have been in the way to stop the Russian army. In fact peace talks had been going on while Russia had made military gains. The Finns had been told the precise terms the Russians wanted on February 23rd. The Russians wanted a 30-year lease of Hanko, along with the cessation of the whole of the Karelian Isthmus and the shores of Lake Lagoda on the Finnish side. In return, the Russians would evacuate the Petsamo area.<br/><br/>
                            The Finnish government was unwilling to negotiate on these terms. However, the declining military situation meant that they were not in a position to do so. The hope of military assistance from Britain and France failed to materialise. In all senses, the Finns were by themselves. Sweden urged Finland to accept the Russian demands. The Russians had set March 1st as a deadline for negotiations. With the ever decreasing military situation confronting them, the Finnish government saw no alternative to acceptance.<br/><br/>
                            The March 1st deadline passed but the Finnish government was assured that the terms still stood and that the deadline had been extended. On March 6th, a Finnish delegation left for Moscow. Talks opened on March 8th. The Russians, led by Molotov, now demanded more land than their earlier terms. The Finns were outraged but could do little about this because of their poor military situation. On March 12th, the Finnish government gave its permission for the delegation to accept the terms. On March 13th, the Treaty of Moscow was signed and hostilities ceased at 11 a.m.
                        </p>
                        <div id="soviet-star" className="col-xs-4 col-xs-offset-8"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
