import React, { Children } from "react";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

function Navbar(){
    return  <nav class="navbar navbar-expand-lg navbar-expand-md px-1">
    <div class="container">
    <div class="navbar-brand p-2"><h1>AR</h1></div>
        <div class="">
        <ul class="navbar-nav justify-content-end d-flex flex-row pe-3">
            <li class="nav-item d-flex flex-row">
                <Link class="nav-link p-2" to="/Home">HOME</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link p-2" to="/Projects">PROJECTS</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link p-2" to="/Contactme">CONTACTME</Link>
            </li>
            <li>
            ------------------------------------
            </li>
        </ul>
    </div>
    </div>
</nav>
}
export default Navbar;