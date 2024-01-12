import React from "react";
import imgdest from '../Images/Image.png';
import { Link } from "react-router-dom";

function Destinations(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        <img className="img-fluid mt-5 pt-5 ms-5 ps-2 dest_img" width={620} src={imgdest} alt="destination" />
                    </div>
                    <div className="col-sm-12 col-lg-4 mt-5 py-5">
                        <h1 className="dest_h1">Wedding</h1>
                        <h3 className="dest_h3">amazing places<br/>to celebrate your<br/>wedding</h3>
                        <p className="dest_p1 mt-5">As the couple of honor, you've probably been counting down the moment to unveil your newlywed status on social media. Those gorgeous wedding photos deserve an in-feed moment,</p>
                        <button className="btn bg-dark text-white rounded-pill dest_btn mt-2"><Link className="text-decoration-none text-white" to="/places">Search</Link></button>
                        <p className="dest_p2 mt-4">Here find out our best wedding destinations for your special day</p>
                
                    </div>
                </div>
            </div>
        </>
    );
}
export default Destinations;