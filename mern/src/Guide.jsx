import React from 'react';
import { Link } from 'react-router-dom';
export function Guide(){
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
    <div class='container'>
      <div class='row'>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card1'>
          <i class="fa-brands fa-html5" id='guidehtml'><h5>HTML</h5></i>
          <h5>1</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card2'>
          <i class="fa-brands fa-css3-alt" id='guidecss'><h5>CSS</h5></i>
          <h5>2</h5>
             <b>duration:2 to 3 weekes</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card3'>
          <i class="fa-brands fa-js" id='guidejs'><h5>JAVA SCRIPT</h5></i>
          <h5>3</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card4'>
          <i class="fa-brands fa-bootstrap" id='guideboostrap'><h5>BOOSTRAP</h5></i>
          <h5>4</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card5'>
          <i class="fa-brands fa-envira" id='guidemongod'><h5>MONGOD</h5></i>
          <h5>5</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card6'>
          <i class="fa-brands fa-react" id='guidereact'><h5>REACT</h5></i>
          <h5>6</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class=' col-lg-4 col-md-4 col-12'>
          <div class='card7'>
          <i class="fa-brands fa-node-js" id='guidenode'><h5>NODE</h5></i>
          <h5>7</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card8'>
          {/* <i class="fa-brands fa-fedex" id='guideexpress'><h5>EXPRESS</h5></i> */}
          <img src="/image/Express.png" alt="" id='e-icon'/>
          <h5>8</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>
        <div class='col-lg-4 col-md-4 col-12'>
          <div class='card9'>
          <img src="/image/mongoose.png" id='guidemongoose' width='200px' height='150px'/>
          
          <b>mongoose</b><br />
          <h5>9</h5>
             <b>duration:4 to 5 days</b>
          </div>
        </div>


      </div>

    </div>
</div>
    )
}