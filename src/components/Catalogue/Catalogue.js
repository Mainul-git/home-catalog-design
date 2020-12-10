import React from 'react';
import Header from '../Header/Header';
import CatalogueCard from '../Home/CatalogueCard/CatalogueCard';
import image from"../../images/Capture35.PNG"
import './Catalogue.css';

const FakeData=[{name: 'Fusion BackPack'},{name: 'Push it Messenger Bag'},{name: 'Lifelong Fitness Iv'},{name: 'Hero Hoodie'},{name: 'Argus-All Weather Tank'},{name: 'Fusion BackPack'},{name: 'Fusion BackPack'},{name: 'Push it Messenger Bag'},{name: 'Lifelong Fitness Iv'}]
const Catalogue = () => {
    return (
        <>
        <Header></Header>
        <p className="text-secondary down-sidebar-child">Home>New Huma Yoga Collection</p>
        <h1 className="text-secondary " style={{fontWeight:"550px"}}>New Huma Yoga Collection</h1>
           <div className="row ">
               <div className="col-md-3 ml-2">
                   <div className="shopping-option mb-3"  ><b className="text-secondary">Shopping options </b></div>
                   <div className="dropdown">
               <div class="dropdown-content">
  <p>Category </p>
   
  </div>
   <div class="dropdown-content">
  <p>Style </p>
   
  </div> <div class="dropdown-content">
  <p>Size</p>
   
  </div> <div class="dropdown-content">
  <p>Price </p>
   
  </div> <div class="dropdown-content">
  <p>Color </p>
   
  </div> <div class="dropdown-content">
  <p>Activity </p>
   
  </div> <div class="dropdown-content">
  <p>Material </p>
   
  </div> <div class="dropdown-content">
  <p>Strap/Handle </p>
   
  </div> <div class="dropdown-content">
  <p>Features </p>
   
  </div> <div class="dropdown-content">
  <p>Gender </p>
   
  </div> <div class="dropdown-content">
  <p>Pattern </p>
   
  </div></div>
 <div className=" d-flex  down-sidebar flex-column mt-5">
        <div className="down-sidebar-child"><h4 className="compare text-secondary d-flex  ">Compare Product <small className="mt-1">(2 items)</small></h4></div>      
             <div className="d-flex ml-3 down-sidebar-child"> <i class="fas fa-times my-auto mr-2 ml-2 down-sidebar-child"></i> <p className="text-dark my-auto down-sidebar-child"><u>Summit Watch</u></p> </div>
             <div className="d-flex ml-3 down-sidebar-child "> <i class="fas fa-times my-auto mr-2 ml-2 down-sidebar-child"></i> <p className="text-darK my-auto down-sidebar-child"><u>Cruise Dual Analog</u></p> </div>
          <div className="d-flex mt-5 down-sidebar-child"><button style={{backgroundColor:"#E0E0E0"}} className=" btn ml-5 text-secondary down-sidebar-child">Compare</button>
          <p className="text-secondary ml-3 down-sidebar-child"><u>Clear all</u></p>

          </div> 
          <h4 className="text-secondary ml-3 mt-3 down-sidebar-child">My Wish List </h4>
          <p className="down-sidebar-child" style={{fontWeight:"bold"}}> You have no items in your wish list</p>  
          </div>
             </div>
               <div className="col-md-8"> 
               <div className="row">
                   {
                       FakeData.map(data=><CatalogueCard data={data}></CatalogueCard>)
                   }
               </div>
               </div></div>
        </>
    );
};

export default Catalogue;