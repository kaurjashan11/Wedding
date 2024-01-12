import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";

const Contact = () => {
    const [formInfo,setFormInfo]=useState('');
    const [clickst,setClickst]=useState(false);
    const form=useRef();
    const formData=(e)=>{
        e.preventDefault();
        const gmail=form.current.gmail.value;
        const pass=form.current.pass.value;
        setFormInfo({gmail,pass});
        e.target.reset();
        
    }
    
    console.log(formInfo);
    return(
        <>
        <div className="my-5">
            <h1 className="text-center signup_head">Sign In</h1>
        </div>
        <div className="container signup_div">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <form action="" ref={form} onSubmit={formData}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name="gmail" className="form-control rounded-pill border border-dark" id="exampleFormControlInput1" placeholder="abc@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                            <input type="password" name="pass" className="form-control border border-dark rounded-pill" id="exampleFormControlInput1" placeholder="password"/>
                        </div>
                        <div className="col-12 mb-5">
                            <button className="btn bg-dark text-white rounded-pill contact_submit" type="submit" onClick={()=>setClickst(!clickst)}>submit</button>
                        </div>
                        <p>don't have an account<Link to="/signup">sign up</Link></p>
                    </form>
                </div>
                <div className="col-sm-12 col-lg-6 ps-5 mt-4">
                    {
                    clickst && (<div>
                        <h1 className="text-decoration-underline signup_data">Your data:-</h1>
                        <h4>Email: {formInfo.gmail}</h4>
                        <h4>Password: {formInfo.pass}</h4>
                        <h3>Sign In successful!</h3>
                    </div>)
                    }

                </div>
            </div>
        </div>
        </>
    );
}
export default Contact;