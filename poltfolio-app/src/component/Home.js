import React, { useState } from 'react';
import me from '../image/me&home.jpg'
import bangkok from '../image/bangkok.jpg'
import temple from '../image/templeBangkok.jpg'
import Carousel from 'react-bootstrap/Carousel'
import anime from 'animejs/lib/anime.es.js';
function HomePage(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex)
        let textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
        }).add({
            targets: '.ml6',
            opacity: 2,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 500
        });
        let textWrappers = document.querySelector('.ml2');
        textWrappers.innerHTML = textWrappers.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 750,
            delay: (el, i) => 70*i
        }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1200
        });
    }
    return(
        <div>
            <div className="info-section" >

                <div className="image">
                    <Carousel activeIndex={index} onSelect={handleSelect} pause={"hover"}>
                        <Carousel.Item >
                            <img src={me} className="d-block w-100" alt="first slide" width="1100" height="500"/>
                            <Carousel.Caption>
                                <h3 className="ml6">
                                    <span className="text-wrapper">
                                    <span className="letters">Hello! everyone I am Khwanchai</span>
                                    </span>
                                </h3>
                                <h4 className="ml2">
                                    Full Stack Web Developer
                                   </h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src={bangkok} className="d-block w-100" alt="second slide" width="1100" height="500"/>
                            <Carousel.Caption>
                                <h3>Bangkok Thailand</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={temple} className="d-block w-100" alt="third slide" width="1100" height="500"/>
                            <Carousel.Caption>
                                <h3>Wat Phra Kaew, Bangkok, Thailand</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>                
                <div className="info">
                    <div className="text">
                        <h5 className="info-text">Hello! everyone, I am a Full Stack Web Developer. I was born and raised in Khon Kaen, Thailand. Currently I am living in The USA, passionate to work as Front-End and Back-End developer, easy going, fast learning and adaptive to any position or any place. </h5> 
                    </div>
                    <div className="expand">
                        <button className="btn">Learn more about me</button>
                    </div>
                   
                </div>
            </div>
            <div className="project">
                <h2>Project section</h2>
            </div>
        </div>
    )

}
export default HomePage;