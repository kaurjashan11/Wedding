import React from "react";
import fairmont from '../Images/fairmont.jpeg';
import chunda from '../Images/chundaPalace.jpg';
import grandhyatt from '../Images/grandHyatt.jpg';
import oberoiamarvilas from '../Images/oberoiAmarvilas.jpg';
import kumarakom from '../Images/kumarakomLakeResort.jpg';
import tajfalaknuma from '../Images/tajFalaknumaPalace.jpg';
function Places(){
    return(
        <>
        <div className="my-5">
            <h1 className="text-center places_head">Wedding Accommodations</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <img src={fairmont} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Fairmont Jaipur</h5>
                            <p className="card-text">This luxurious hotel offers a beautiful venue and accommodation for large wedding parties.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <img src={chunda} className="card-img-top" height={240} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Chunda Palace</h5>
                            <p className="card-text">This heritage hotel can host large weddings and provides accommodations.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <img src={grandhyatt} className="card-img-top" height={240} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Grand Hyatt Goa</h5>
                            <p className="card-text">A beachfront resort with extensive event spaces and accommodations for weddings or parties.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 pb-5">
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <img src={oberoiamarvilas} className="card-img-top" height={240} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">The Oberoi Amarvilas</h5>
                            <p className="card-text">Offers views of the Taj Mahal and has suitable accommodations for large weddings.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <img src={kumarakom} className="card-img-top" height={240} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Kumarakom Lake Resort</h5>
                            <p className="card-text">Set in the backwaters, it offers a serene setting for large weddings or parties.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="card">
                        <img src={tajfalaknuma} className="card-img-top" height={240} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Taj Falaknuma Palace</h5>
                            <p className="card-text">A palace hotel with spacious banquet halls and luxurious weddings accommodations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Places;