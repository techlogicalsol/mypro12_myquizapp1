import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">

  <Link class="navbar-brand" to="/">Game Show</Link>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
    
    </ul>
  </div>
</nav>
        
        
        
        </>
    )
}

export default NavBar