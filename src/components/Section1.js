import React from "react"
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa"

function Section1(){
    return <div>
        <div class="section p-5">
            <h2 class="display-4"></h2>
            <div class="row">
            <FaCss3 class="col" size="8em"/>
            <FaJs class="col" size="8em"/>
            <FaBootstrap class="col" size="8em"/>
            <FaReact class="col" size="8em"/>
            <FaHtml5 class="col" size="8em"/>
            </div>
        </div>
    </div>
}

export default Section1