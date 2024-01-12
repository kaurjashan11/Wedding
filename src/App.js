import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from './Images/Logo.png';
import Home from './Components/Home';
// import Destinations from './Components/Destinations';
import Packages from './Components/Packages';
import Tours from './Components/Tours';
import Promotions from './Components/Promotions';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Places from './Components/Places';
import './App.css';

function App() {
  let navBar = document.querySelectorAll('.nav-link');
  let navCollapse = document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(function(a){
    a.addEventListener("click",function(){
      navCollapse.classList.remove("show");
    })
  })
  return (
    <Router>
      <div className="container">
        <header className="fixed-top row">
          <div className="bg-light">
            <img src={logo} className="img-fluid mx-auto d-block pt-5" alt="logo" width={200}/>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            <div className="container">
              <Link className="navbar-brand ms-5 nav_text fs-2" to="#">Wedding</Link>
              <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav_ul">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/places">destinations</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tours">events</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/promotions">promotions</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gallery">gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/packages">find options</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">contact</Link>
                  </li>
                </ul>
                <div className='d-flex flex-column crt_acc'>
                  <p className='me-5'>create new account</p>
                  <button className="btn bg-dark text-white me-5 rounded-pill w-75 header_sign" type="button"><Link className="nav-link" to="/signin">sign in/sign up</Link></button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section className="row route_comp">
          <div className="col-sm-12">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              {/* <Route exact path="/destinations" element={<Destinations/>}/> */}
              <Route exact path="/packages" element={<Packages/>}/>
              <Route exact path="/tours" element={<Tours/>}/>
              <Route exact path="/promotions" element={<Promotions/>} />
              <Route exact path="/gallery" element={<Gallery/>} />
              <Route exact path="/contact" element={<Contact/>} />
              <Route exact path="/signin" element={<Signin/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/places" element={<Places/>} />
            </Routes>
          </div>
        </section>
        <section className="row footer_row mx-5 py-5">
          <div className="col-sm-12 col-lg-3 footer_col1 mt-5">
            <ul className="footer_list">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations">destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tours">tours</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/promotions">promotions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">contact</Link>
              </li>
            </ul>
            <div className="vl ms-5"></div>
          </div>
          <div className="col-sm-12 col-lg-4 mt-5 footer_col2">
            <img src={logo} className="img-fluid ms-2" width={220} alt="logo" />
            <button className="btn bg-dark text-white rounded-pill w-50 ms-5 mt-5 footer_btn"><Link className="text-decoration-none text-white" to="/signup">enter</Link></button>
            <p className="ms-5 ps-2 footer_p1">create new account</p>
            <p className="mt-4 footer_p2">The secret of a happy marriage is finding the right person. You know they're right if you love to be with them all the time</p>
          </div>
          <div className="col-sm-12 col-lg-5 mt-5">
            <h3 className="footer_news">subscribe to<br/>our newsletter</h3>
            <input type="email" className="form-control rounded-pill w-75 border border-dark mt-3 footer_input" id="inputEmail4" placeholder="email"/>
            <button className="btn bg-dark text-white rounded-pill w-75 mt-2 footer_btn2"><Link className="text-decoration-none text-white" to="/signup">sign up</Link></button>
            <p className="footer_p3 mt-4">Let there be spaces in your togetherness and let the winds of the heavens dance between you</p>
          </div>
        </section>
      </div>
  </Router>
  );
}

export default App;
