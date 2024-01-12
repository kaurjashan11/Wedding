import React from "react";
import bgimg from '../Images/background1.png';
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="bg-image">
            <img src={bgimg} className="img-fluid home_img" alt="background"/>
            <h3 className="home_text ps-5">your wedding on the best <br/> beaches in the world</h3>
            <button className="btn bg-dark text-white rounded-pill btn_home ms-5" type="button"><Link className="text-decoration-none text-white" to="/places">quote your event</Link></button>
            <p className="position-absolute home_quote ps-5">A successful marriage requires falling in love<br/>many times, always with the same person</p>
        </div>
        </>
    );
}

export default Home;