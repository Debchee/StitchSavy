import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, 
  Route, Routes, Redirect,} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './Pages/Login';
import {Link} from 'react-router-dom';



function App() {
  return (
    <>
    
      <Navbar/>
      <Home />

      {/* <Router> */}
        {/* <Link to='/Login'>Login</Link> */}

      {/* <Routes>
        

        

        <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
