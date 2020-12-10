import React from 'react';
import star from"../../../images/Capture42.PNG"
import love from"../../../images/Capture43.PNG"
import raeem from"../../../images/raeem.jpg";
import "./CatalogueCard.css"
const CatalogueCard = ({data}) => {
    return (
        <div className="col-6 col-md-3 mt-2 mb-2">
             <div class="card" style={{width:"210px"}}>
      <img src={raeem} class="card-img-top" alt="..."/>
      <div class="card-body">
    <p class="card-text text-secondary" style={{fontSize:'15px'}}><u>{data.name}</u></p>
         <h2 class="card-text">$59.00</h2>
        
         <div className=" d-flex justify-content-between">
         <img src={star} style={{height:'20px'}}/>
             <small className="text-secondary "><u>3 reviews</u></small>
            
         </div><br/>
         <div className="d-flex last-portion-card   justify-content-between ">
             <div className="last-portion-button"><button className="btn btn-secondary">Add To Cart</button></div>
             <div className="last-portion-image"><img src={love} style={{height:'24px'}}/></div>
         </div>
      </div>
    </div>
        
        </div>
    );
};

export default CatalogueCard;