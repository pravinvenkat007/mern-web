import React from 'react';
import { Link } from 'react-router-dom';
export function Benifets(){
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
  <div class='col-lg-6 col-md-6 col-12'>
  <img src="/image/human img.png" alt=""  class='img-fluid' id='human'/>

  </div>
  <div class='col-lg-6 col-md-6 col-12'>
    <div id='style'>
 
    <marquee behavior="slide"><b>Salary</b>
    <li>Average salary is $1.8Lakhs to $16.2 Lakhs per annum</li></marquee>
<marquee direction="right" behavior="slide">  <b>Resposibilities</b>
      <li>Development of front-end</li>
      <li>Design the backend of the application</li>
      <li>Creating databases and servers</li></marquee>
<marquee behavior="slide">  <b>Skills</b>
      <li>HTML,CSS&JavaScript</li>
      <li>Backend Technologies and Frameworks</li>
      <li>Database Mangement Systems</li></marquee>
<marquee scrollamount="10" behavior="slide" direction='right'><b>Benefits</b>
      <li>Highest Paid job</li>
      <li>Complete ownership of the project</li>
      <li>Comprehensive scope for progress</li></marquee>
<marquee scrolldelay="20" behavior="slide"> <b>Career Possibilities</b>
      <li>WEb Developer</li>
      <li>Moblie App Developer</li>
      <li>Front-end & Back-end developer</li></marquee>

    </div>
  </div>
</div>
</div>
    
        </div>
    )
}