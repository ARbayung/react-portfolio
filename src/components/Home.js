import React from "react";
import { FaGithub, FaLinkedin, FaCode} from "react-icons/fa"
import Section1 from "./Section1";

function Home(){
    return <div>
    <div class="jumbotron p-5">
        <div class="socials">
            <p> 
                <a class="p-2" href="#" role="button">
                <FaGithub class="icon" size="2em" />
                </a>
                <a class="p-2" href="#" role="button">
                <FaLinkedin class="icon" size="2em" />
                </a>
            </p>
        </div>
        <div class="header-qoute">
            <p>"In my spare time i like to cuddle Kurtis"</p>
        </div>
        <div class="head-container">

            <p><FaCode size="10em"/></p> 
            <h2 class="display-5">HELLO, I AM</h2>
            <p class="lead">a software engineering graduate with a passion for front-end development.</p> 
            <h2 class="display-1 name">-ABISKAR.R</h2>
            
        </div>
      
    </div>
        <Section1/>
    </div>
}

export default Home;  