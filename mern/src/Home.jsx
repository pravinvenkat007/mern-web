import React from 'react';
import { Link } from 'react-router-dom';
export function Home(){
    return(
        <div>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" id='navbar'>
    <a class="navbar-brand" href="#"><img src="/image/logo1.jpeg" id='logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class='nav-link active' to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/About'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Skills'>Skills</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Benifets'>Benefits</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Guide'>Guide</Link>
        </li>
     
      </ul>
    
      <Link to='/Signin'><button class="btn btn-outline-light" > Sign in</button></Link>
    </div>
  </div>
</nav>
{/* title */}
<div class='title'>
  <img src="/image/mern.jpg" alt="" id='mernimg' class='img-fluid'/>
   <h1 id='text'>MERN</h1>
</div>
  <p id='blue'>Students can improve their success by setting realistic goals, having a positive attitude, and breaking down tasks</p>
  <br /><br /><br />
  {/* icons */}
<div class='container-fluid'>
  <div class='row'>
    
<div className='scroll'>
<i class="fa-brands fa-html5"><h5>HTML</h5></i>
<i class="fa-brands fa-css3-alt" id='css'><h5>CSS</h5></i>
<i class="fa-brands fa-js" id='js'><h5>JAVA SCRIPT</h5></i>
<i class="fa-brands fa-bootstrap" id='boostrap'><h5>BOOSTRAP</h5></i>
<i class="fa-brands fa-envira" id='mongod'><h5>MONGOD</h5></i>
<i class="fa-brands fa-react" id='react'><h5>REACT</h5></i>
<i class="fa-brands fa-node-js" id='node'><h5>NODE</h5></i>
{/* <i class="fa-brands fa-fedex" id='express'><h5>EXPRESS</h5></i> */}
<img src="/image/Express.png" alt="" id='express-icon'/>
</div>
</div>
</div>

        </div>
         
        
    )
}