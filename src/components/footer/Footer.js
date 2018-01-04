import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class Footer extends Component {
    render() {
        return(
        <div className="footer-div">
            <div className="container">
                
                <div className="row">
                    <h1 id="linkit" className="text-center" tabIndex="0">Linkit</h1>
                    <h1 id="links" className="text-center" tabIndex="0">Links</h1>
                </div>
                <div className="row">
                    <ul id="videos-list" className="col-xs-4 col-xs-offset-0 text-center">
                        <li>Videos</li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=71cZbqtGBJQ" target="_blank" role="link">Soviet Union vs Finland - The Winter War 1939</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=lWi2Kclq0DE" target="_blank" role="link">The Winter War: A Soviet Failure</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=yHrndb0oZEc" target="_blank" role="link">Motti Tactics - How The Finns Destroyed Soviet Divisions</a>
                        </li>
                    </ul>
                    <ul id="details-list" className="col-xs-4 col-xs-offset-0 text-center">
                        <li>Details</li>
                        <li>
                            <a href="http://www.historylearningsite.co.uk/world-war-two/world-war-two-and-eastern-europe/the-winter-war-1939/the-winter-war-1939/" target="_blank" role="link">Causes of the War</a>
                        </li>
                        <li>
                            <a href="https://warontherocks.com/2016/07/lessons-from-the-winter-war-frozen-grit-and-finlands-fabian-defense/" target="_blank" role="link">Lessons from The Winter War: Frozen Grit and Finland’s Fabian Defense</a>
                        </li>
                        <li>
                            <a href="http://nationalinterest.org/feature/how-finland-lost-world-war-ii-the-soviets-won-peace-17412" target="_blank" role="link">How Finland Lost World War II to the Soviets, But Won Peace</a>
                        </li>
                    </ul>
                    <ul id="images-list" className="col-xs-4 col-xs-offset-0 text-center">
                        <li>Images</li>
                        <li>
                            <a href="http://www.businessinsider.com/ussr-russia-finald-wwii-winter-war-photos-2017-3/#a-finnish-soldier-at-his-post-on-the-mannerheim-line-in-finland-on-december-14-1939-5" target="_blank" role="link">These 17 photos show Finland's brutally cold World War II battle with the Soviet Union</a>
                        </li>
                        <li>
                            <a href="https://commons.wikimedia.org/wiki/Category:Declassified_photos_of_the_Winter_War" target="_blank" role="link">Declassified photos of the Winter War</a>
                        </li>
                    </ul>                   
                </div>
            </div>
        </div>
        );
    }
}
