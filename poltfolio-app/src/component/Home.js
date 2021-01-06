import React, { useState } from 'react';
import me from '../image/me&home.jpg'
// import me from '../image/Khon-Kaen_.jpg'
import bangkok from '../image/bangkok.jpg'
import temple from '../image/templeBangkok.jpg'
import Carousel from 'react-bootstrap/Carousel'
import anime from 'animejs/lib/anime.es.js';
import Collapsible from 'react-collapsible';

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
                    <Carousel activeIndex={index} onSelect={handleSelect} pause={"hover"} >
                        <Carousel.Item >
                            <img src={me} className="d-block w-100" alt="first slide" width="1100" height="500"/>
                            <Carousel.Caption>
                                <h3 className="ml6">
                                    <span className="text-wrapper">
                                        <span className="letters">Hello! everyone I am Khwanchai</span>
                                    </span>
                                </h3>
                                <h4 className="ml2">Full Stack Web Developer</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src={bangkok} className="d-block" alt="second slide" width="1100" height="500"/>
                                <Carousel.Caption>
                                    <h3>Bangkok Thailand</h3>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={temple} className="d-block" alt="third slide" width="1100" height="500"/>
                                <Carousel.Caption>
                                    <h3>Wat Phra Kaew, Bangkok, Thailand</h3>
                                </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>           
                    
                <div className="info">
                    <div className="info-inner">
                        <div className="text">
                            <h5 className="info-text">Hello! everyone, I am a Full Stack Web Developer. I was born and raised in Khon Kaen, Thailand. Currently I am living in The USA, passionate to work as Front-End and Back-End developer, easy going, fast learning and adaptive to any position or any place. 
                            </h5> 
                        </div>     
                        <div className="expand">                  
                            <Collapsible trigger="Click to know more about me" className="collap" >
                                <div className="inner-expand">
                                    <Collapsible trigger="Education" className="education">
                                        <div className="education-info">
                                            <h6>KhonKaen Industrial And Community Education College</h6>
                                                <p>Vocational degree in Computer business, basic computer science</p>  
                                            <h6>Lambda School Sanfrancisco</h6> 
                                                <p>Full stack web development</p>
                                        </div>
                                    </Collapsible>
                                    <Collapsible trigger="Experience <" className="education">
                                        <div>
                                            <Collapsible trigger="Full stack developer <<" className="experience">
                                                <p>At Lambda School</p>
                                                    <p>
                                                        Dates EmployedOct 2020 – Present
                                                        Employment Duration3 mos
                                                        Human right first

                                                        Lab project for 1 month in Lambda shcool

                                                        • Develop team of 7 people
                                                        • Delivered the sign-up login feature
                                                        • Applied Router to the page with react-router-dom
                                                        • collaborated with other team member</p> 
                                                
                                            </Collapsible>
                                            <Collapsible trigger="Machine Operator <<" className="experience">
                                                    <p>Company Name:Fluvitex USA Full-time </p>
                                                    <p>
                                                        Dates EmployedAug 2019 – Mar 2020
                                                        Employment Duration8 mos
                                                        • Sewing machine with 3 years experience
                                                        • Computerized quilting machine operator.
                                                        • Processsed the material and product to the line to assembly the goods in time and target that company asked for.
                                                        • Recovered The line worker if neccesarly in assembly process

                                                        Reasons for living: As Covid -19 spread the kids have to take 3 weeks off without warning and I have no right people to do babysit for my 4 kids. I have to figured out and take time to find a right person to take care of my kids.
                                                    </p>
                                            </Collapsible>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khwanchai-phaipha-266885a7/">See more info here in my Linkedin</a>
                                        </div>
                                    </Collapsible>
                                    <Collapsible trigger="More about me" className="education">
                                        <div className="like">
                                            <p>I like to search and learn the interesting things.</p>
                                            <p>Spending time in the garden to relax.</p>
                                            <p>Challenging myself with something new for knowledge and growth.</p>
                                            <p>Listened to music when depressed.</p>
                                        </div>
                                    </Collapsible>   
                                </div>
                            </Collapsible>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )

}
export default HomePage;