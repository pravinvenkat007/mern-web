import React from 'react';
import { Link } from 'react-router-dom';
export function About(){
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
       <div class='container' id='about'>
            <div class='row'>
              <div class='col-lg-6 col-md-6 col-12'>
                <img src="/image/anime face.png" class='img-fluid' id='anime'/>
              </div>
              <div class='col-lg-6 col-md-6 col-12 my-5'>
                 <div id='para'><h5>Educational website content is different from other types of web content. It has to be informative, 
                  engaging, and relevant to the learners’ needs and goals. It also has to follow certain standards and best practices to
                   ensure quality and effectiveness. In this article, we will share  13 effective practices for writing educational
                  website content that can help you create a better learning experience for your audience.The next step is to write content
                   that is relevant to your audience and your niche. You want to provide value and solve their problems, not just fill up space with fluff. 

To write relevant content, you need to do some research and find out what topics and keywords your audience is searching for.
The funneling or inverted pyramid is a writing technique that helps you organize your content in a logical and clear way. 

It involves starting with the most important and general information at the top, and then gradually moving to the more specific and detailed information at the bottom. 

This way, you can capture your readers’ attention and interest from the beginning, and then provide them with more depth and context as they scroll down. 

The funneling or inverted pyramid also helps you optimize your content for search engines, as they tend to prioritize the content that appears at the top of the page.//Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam assumenda suscipit ipsum, praesentium ab labore maiores
                   </h5></div>  
              </div>
            </div>
        </div>

       <marquee scrollamount="10">
        <h1>The importance of education enables us to become aware of our abilities, which allows us to go the extra mile. Education helps people to develop strong morals and ethical values in themselves. The first values we learn in school are reading, writing, and comprehending.</h1>
       </marquee>
  
 
        </div>
    )
}