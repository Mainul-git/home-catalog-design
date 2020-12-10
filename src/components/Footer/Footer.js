import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className=" email-footer-container row  ">
            <div className="col-md-6 order-2 order-md-1">
            <div className="row">
                    <div className="col-md-6"><ul  className="list-unstyled">
                        <li className="list-mobile-container">About us</li>
                        <li className="list-mobile-container" >Customer Service</li>
                      </ul></div>
                    <div className="col-md-6"><ul  className="list-unstyled">
                        <li className="list-mobile-container">Privacy and cookie policy</li>
                        <li className="list-mobile-container">Search Terms</li>
                        <li className="list-mobile-container">Orders and Returns</li>
                        <li className="list-mobile-container">Advanced search</li>
                        <li className="list-mobile-container">Contact us</li>
                        <li className="list-mobile-container"></li></ul ></div>
            </div>    </div>
            <div className="col-md-6 my-auto d-flex order-1 order-md-2">
            <form className=" form-inline d-flex justify-content-between search-bar">
   
   <input style={{position: 'relative',width:'320px'}} type="text" className="form-control email-box" placeholder="  Enter your email address" />
       <div style={{position:'absolute', marginLeft:'1px'}}> <i class="fas fa-envelope"></i>
       </div>
      
</form>
<button className="btn btn-secondary">Subscribe</button>
           

            </div>
    </div>
    );
};

export default Footer;