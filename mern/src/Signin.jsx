import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function SignIn1(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    const handleSubmit=(e)=>{
        const form=document.querySelector('form')
        e.preventDefault()
        axios.post("http://localhost:3001/register",{name,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))

        form.reset()
    }
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
          <Link class="nav-link active" to='/Benifets'>Benifets</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/Guide'>Guide</Link>
        </li>
     
      </ul>
    
      <Link to='/Signin'><button class="btn btn-outline-light" > Sign in</button></Link>
    </div>
  </div>
</nav>
            <form onSubmit={handleSubmit}>
                <div class='center'>
                  <h3>Login</h3>
                <div class="form-group">
                    <label for="exampleInputEmail">Name</label>
                    <input type="text" class="form-control" id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='enter name' onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className='form-group'>
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id='exampleInputEmail'  aria-describedby='emailHelp' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className='form-group'>
                    <label for="exampleInputPassword1"> password</label>
                    <input type="password" class="form-control" id='exampleInputPassword1' aria-describedby='emailHelp'  placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
                </div><br />
              <button type='submit' class='btn' id='submit'>Submit</button>
                </div>
               
            </form>
        </div>
    )

}
export default SignIn1