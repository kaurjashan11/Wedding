import React from "react";
import imgpack from '../Images/Image2.png';
import logo from '../Images/Logo.png';
import {Link} from "react-router-dom";

function Packages(){
    return(
        <>
            <div className="container pack_cont">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <img className="img-fluid position-absolute pack_logo" width={200} src={logo} alt="logo" />
                        <p className="position-absolute pack_p">quote your honeymoon
                            <br/>airplane and stay for guests
                            <br/>package for bride and groom
                        </p>
                        <img className="img-fluid my-3" src={imgpack} alt="packages"/>
                    </div>
                    <div className="col-sm-12 col-lg-6 pack_col2">
                        <h3 className="pack_h3 ms-5 mt-5 pt-5">travel on your wedding</h3>
                        <input className="form-control w-75 ms-5 rounded-pill border border-dark" list="datalistOptions1" id="exampleDataList" placeholder="destination"/>
                        <datalist id="datalistOptions1">
                            <option value="Rajasthan"/>
                            <option value="Goa"/>
                            <option value="Kerala"/>
                            <option value="Hyderabad"/>
                            <option value="Uttar Pradesh"/>
                        </datalist>
                        <input className="form-control w-75 ms-5 rounded-pill border border-dark mt-2" list="datalistOptions2" id="exampleDataList" placeholder="travel on your wedding"/>
                        <datalist id="datalistOptions2">
                            <option value="Yes"/>
                            <option value="No"/>
                            <option value="May be"/>
                        </datalist>
                        <input className="form-control w-75 ms-5 rounded-pill border border-dark mt-2" list="datalistOptions3" id="exampleDataList" placeholder="number of guests"/>
                        <datalist id="datalistOptions3">
                            <option value="<=50"/>
                            <option value="<=100"/>
                            <option value=">100"/>
                        </datalist>
                        <input className="form-control w-75 ms-5 rounded-pill border border-dark mt-2" list="datalistOptions4" id="exampleDataList" placeholder="days of stay"/>
                        <datalist id="datalistOptions4">
                            <option value="<=3"/>
                            <option value="<=5"/>
                            <option value="<=7"/>
                            <option value=">7"/>
                        </datalist>
                        <button className="btn bg-dark text-white rounded-pill w-75 mt-2 ms-5"><Link className="text-decoration-none text-white" to="/places">find the best options</Link></button>
                        <p className="ms-5 mt-3 me-5 pack_p2">Scoring an invite to a destination wedding is a huge privilege. Not only do you get to celebrate your loved ones tying the knot, you get to do so in a stunning location</p>
                        <button className="btn btn-outline-dark pack_btn mt-5 ms-5"><Link className="text-decoration-none text-white" to="/contact">Contact an advisor</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Packages;