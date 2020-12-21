import React, { useState } from 'react';
import bangkok from '../image/vitalijs-barilo-6Tt24FRiOYo-unsplash.jpg'
import me from '../image/me&home.jpg'
import dog from '../image/manny-pantoja-10bgCz0qkto-unsplash.jpg'
import rabbit from '../image/scott-graham-5fNmWej4tAA-unsplash.jpg'
import Carousel from 'react-bootstrap/Carousel'
import anime from 'animejs/lib/anime.es.js';
import '../../src/App.css'
function HomePage(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex)
    var textWrapper = document.querySelector('.ml6 .letters');
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
    }
    return(
        <div>
            <div className="info-section" >
                <div className="info">
                    <h1>Myself info section</h1>
                </div>
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
                                <h4>Full Stack Web Developer</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src={dog} className="d-block w-100" alt="second slide" width="1100" height="500"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={rabbit} className="d-block w-100" alt="third slide" width="1100" height="500"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="project">
                <h2>Project section</h2>
            </div>
        </div>
    )

}
export default HomePage;