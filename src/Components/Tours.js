import React from "react";
import img_tours from '../Images/background2.png';
import white_img from '../Images/image3.png';
import heart_tours from '../Images/Heart .png';

function Tours(){
    return(
        <>
            <div className="tour_pg">
                <img className="img-fluid" src={img_tours} alt="tour_image" />
                <img className="img-fluid tour_shape h-50" width={580} src={white_img} alt="white_image" />
                <h2 className="tour_h2">your wedding</h2>
                <h4 className="tour_h4">on the best beaches</h4>
                <img className="img-fluid tour_heart" src={heart_tours} width={50} alt="heart" />
            </div>
        </>
    );
}
export default Tours;