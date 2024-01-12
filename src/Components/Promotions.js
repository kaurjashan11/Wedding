import React from "react";
import img1 from '../Images/Image4.png';
import img2 from '../Images/Image5.png';
import img3 from '../Images/Image6.png';
import img4 from '../Images/Image7.png';
import img5 from '../Images/Image8.png';
import heart from '../Images/Heart .png';
import { Link } from "react-router-dom";
function Promotions(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-7 ps-5">
                        <img className="img-fluid pro_img1" width={210} src={img1} alt="image1"/>
                        <img className="img-fluid pro_img2 ms-3 mt-3" width={210} src={img2} alt="image2"/>
                        <img className="img-fluid pro_img3" width={210} src={img3} alt="image3"/>
                        <img className="img-fluid pro_img4 ms-3 mt-3" width={210} src={img4} alt="image4"/>
                    </div>
                    <div className="col-sm-12 col-lg-5 d-flex justify-content-center flex-column my-5 ps-5">
                        <h4 className="ms-5 pro_h4">enjoy the</h4>
                        <h4 className="pro_h4">best places to travel</h4>
                        <p className="pro_p">get to know the seasonal offers and promotions</p>
                        <button className="btn bg-dark text-white rounded-pill w-50 ms-5 pro_btn"><Link className="text-decoration-none text-white" to="/destinations">search here</Link></button>
                    </div>
                </div>
                <div className="row pt-5 mt-5">
                    <div className="col-sm-12 col-lg-9 d-flex justify-content-end position-relative">
                        <h3 className="position-absolute pro_h3">airfare and accommodation<br/>packages for your guests</h3>
                        <img className="img-fluid pb-3" width={600} src={img5} alt="image5" />
                    </div>
                    <div className="col-sm-12 col-lg-3 d-flex justify-content-start flex-column">
                        <div>
                            <img className="img-fluid w-25 mt-5 pro_heart" src={heart} alt="heart"/>
                            <p className="my-4 pro_p2">get to know accommodation packages for your guests</p>
                            <button className="btn bg-dark text-white rounded-pill pro_btn2"><Link className="text-decoration-none text-white" to="/packages">search</Link></button>
                            <p className="text-decoration-underline mt-3 pro_p3">We offer comfortable and clean accommodations that are perfect for wedding or leisure travel. We are located nearby many restaurants, shops, and attractions, making it easy for you to explore the area on foot or by public transport</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Promotions;