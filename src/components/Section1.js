import React from "react"
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa"

function Section1(){
    return <div>
        <div class="section p-3">
            
            <div class="row">
            <FaCss3 class="col" size="3em"/>
            <FaJs class="col" size="3em"/>
            <FaBootstrap class="col" size="3em"/>
            <FaReact class="col" size="3em"/>
            <FaHtml5 class="col" size="3em"/>
            </div>
        </div>
    </div>
}

export default Section1