import React from 'react';
import raeem from"../../images/raeem.jpg";
import love from"../../images/Capture43.PNG";
import star from"../../images/Capture42.PNG"
const CardHomeChild = ({data}) => {
    return (
        <div className="col-12 w-100 col-md-2 mt-2 mb-2 " >
        
    <div class="card" style={{width:"210px"}}>
      <img src={raeem} class="card-img-top" alt="..."/>
      <div class="card-body">
    <p class="card-text text-secondary" style={{fontSize:'15px'}}><u>{data.name}</u></p>
         <h2 class="card-text">$59.00</h2>
         <img src={star} style={{height:'30px'}}/>
         <div className=" d-flex justify-content-between">
             <small className="text-secondary "><u>3 reviews</u></small>
            <small className="text-secondary"><u>Add your reviews</u></small>
         </div><br/>
         <div className="d-flex justify-content-between ">
             <div className=""><button className="btn btn-secondary">Add To Cart</button></div>
             <div className=""><img src={love} style={{height:'24px'}}/></div>
         </div>
      </div>
    </div>
        </div>
    );
};

export default CardHomeChild;