import React from 'react';
import './Grid.css';

const Grid = () => {
    return (
        <>
          <div class="item5 pt-3  pb-3 pr-4 text-secondary "><div className=" ml-md-auto" style={{width:"600px",height:"200px",backgroundColor:"#F2F2F2"}}><h3 style={{marginLeft:"25px"}}>New Luma Yoga Collection</h3><p  style={{marginLeft:"25px"}}>Get fit and look fab in new sessional styles</p><button className="btn btn-secondary"  style={{marginLeft:"25px"}}>Shop New Yoga</button></div></div>

       <div class="grid-container">
  <div class="item1 d-flex justify-content-end "><div><h3 className="text-secondary">Even more ways<br/> to mix and match</h3><p>Buy 3 Luma tees get a 4th <br/>free<br/><u className="text-secondary">Shop items></u></p></div></div>
  <div class="item2 text-secondary"><h1 className="text-secondary text-end ">20% OFF</h1><p className="text-secondary text-end "> Luma pants when you shop today*</p><br/>
  <p className="text-secondary text-end "><u>Shop pants ></u></p>
 </div>
  <div class="item3 d-flex justify-content-end text-secondary"><div className="ml-auto"><h3>Take it from Erin</h3>
  <p>Luma founder Erin <br/>Renny shares her favorites!</p>
  <small className="text-secondary  "><u>Shop Erin Recommends</u>></small></div>  </div>
  <div class="item4 text-secondary"><div className=" m-auto" style={{width:"300px",height:"300px",backgroundColor:"#F2F2F2"}}><h1>Science meets <br/>performance</h1><p>Wicking to raingear, Luma covers you</p><small className="text-secondary  "><u>Shop performance</u>></small></div></div>
  <div class="item5 pt-3 pr-4 text-secondary"><div className=" ml-auto" style={{width:"600px",height:"300px",backgroundColor:"#F2F2F2"}}><h1>Twice around, twice as nice</h1><p>Wicking to raingear, Luma covers you</p><small className="text-secondary  "><u>Shop Eco-Friendly</u>></small></div></div>
</div>


        </>
    );
};

export default Grid;