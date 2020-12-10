import React from 'react';
import './Header.css'
import logo from "../../images/Capture40.png"
import one from "../../images/Capture41.PNG"
const Header = () => {
    return (
        <>
        
      <nav className="navbar welcome-container navbar-expand-lg navbar-light bg-secondary">
        <a href="/"></a>
       

        <div className=" ml-auto welcome" >
          <ul className="navbar-nav welcome-list">
            <li className="nav-item  welcome-home text-white mr-md-3 pr-md-5">
              Welcome Home 
            </li>
            <li className="nav-item mr-md-3 text-white ">
              <u> Sign In Create an Account</u>     
            </li>
           



          </ul>

        </div>
      </nav>
      
    <div className="bg-white fortune-creation ">
        
        <img src={logo} className="logo"/>
         <h1 className="my-auto text-secondary">Fortune Creation</h1>
         <form className="ml-auto my-auto mr-5 form-inline d-flex justify-content-between search-bar">
   
                <input style={{position: 'relative',width:'320px'}} type="text" className="form-control email-box" placeholder="Search for entire store here" />
                    <div style={{position:'absolute',marginLeft:"300px"}}><i  class="fas fa-search"></i>
                    </div>
                    <i class="fas fa-shopping-cart ml-2"></i>
            </form>
           

        
    </div>
           <div className="down-navbar custom-container mb-5 bg-light">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  mr-3">
              <a className="nav-link" href="/"><b>What's New</b> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Women</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Men</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Gear</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Wholesale</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Sale</a>
            </li>

           


          </ul>

        </div>
      </nav>
    </div>
    <div className="d-flex justify-content-between mobile-header ">
        <div className="d-flex">
    <div className="mobile-navbar custom-container mb-5 bg-white">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active  ">
              <a className="nav-link" href="/"><b>What's New</b> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">Women</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">Men</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">Gear</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">Wholesale</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">Sale</a>
            </li>

           


          </ul>

        </div>
      </nav>
    </div>
    <div>
      <img src={logo} className="logo-mobile "/>
      </div>
      </div>
    <div className="h-100 mobile-end-container">
  
    <i   class="fas fa-search h-100 mr-3"></i>
    <i  class="fas fa-shopping-cart mr-2 h-100 "></i>
    <img src={one} />
    </div>
    </div>

        </>
    );
};

export default Header;