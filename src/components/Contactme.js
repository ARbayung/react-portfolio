import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk} from "react-icons/fa"
function Contactme () {
    return <div >
    <div class="projects-section">
    <h1 class="heading">CONTACTME</h1>
        <div class="contactme-content">
            <div class="row">
            <a class="p-2 col" href="https://github.com/ARbayung" role="button">
                <FaGithub class="icon" size="2em" />
                </a>
                <a class="p-2 col" href="#" role="button">
                <FaLinkedin class="icon" size="2em" />
                </a>
                <hr/>
                
            </div>
            <div>
            <form>
  <div class="form-group form-section">
    <p for="">Email address:</p>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email"/>
  </div>
  <div class="form-group form-section">
    <p for="exampleFormControlTextarea1">How can I help you?</p>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group form-section">
  <button type="submit" class="btn btn-secondary">Submit</button>
    </div>
</form>
            </div>
        </div>
    </div>
    
</div>
}

export default Contactme;