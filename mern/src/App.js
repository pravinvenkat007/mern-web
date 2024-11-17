
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Benifets } from './Benifets';
import { Guide } from './Guide';
import SignIn1 from './Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Skills'>Skills</Link></li>
        <li><Link to='/Benifits'>Benifits</Link></li>
        <li><Link to='/Guide'>Guide</Link></li>
        </ul>
      </nav> */}
      <Routes>
      <Route path='/Signin' element={<SignIn1/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Benifets' element={<Benifets/>}/>
        <Route path='/Guide' element={<Guide/>}/>
        
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
