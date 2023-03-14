import React from "react";
import img1 from "./projects/Screenshot.png"
import img2 from "./projects/Screenshot2.png"
import img3 from "./projects/Screenshot3.png"
import {projectData} from "./data";
import Section1 from "./Section1";


function Projects({title, githubRep, deployedApp}){
    return<div class="projects-background">
        <div class="projects-section">
        <h1 class="heading">PROJECTS</h1>
        
        <div class="flex-row-reverse project-container">
            <h2 class="p-2">TEAM BUILDER APP</h2>
            <img src={img1} class="project col pb-2"/>
            <h2 class="p-2">DAILY PLANNER</h2>
            <img src={img2} class="project col pb-2"/>
            <h2 class="p-2">RECIPE FINDER WEB APP</h2>
            <img src={img3} class="project col pb-2"/>
        </div>
        </div>
        
    </div>
}

export default Projects;