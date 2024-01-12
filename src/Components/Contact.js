import React, {useRef, useState} from "react";

const Contact = () => {
    const [formInfo,setFormInfo]=useState('');
    const [clickst,setClickst]=useState(false);
    const form=useRef();
    const formData=(e)=>{
        e.preventDefault();
        const name=form.current.name.value;
        const phone=form.current.phone.value;
        const gmail=form.current.gmail.value;
        const query=form.current.query.value;
        setFormInfo({name,phone,gmail,query});
        e.target.reset();
        
    }
    
    console.log(formInfo);
    return(
        <>
        <div className="my-5">
            <h1 className="text-center contact_head">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <form action="" ref={form} onSubmit={formData}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" name="name" className="form-control rounded-pill border border-dark" id="exampleFormControlInput1" placeholder="enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" name="phone" className="form-control rounded-pill border border-dark" id="exampleFormControlInput1" placeholder="mobile number"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name="gmail" className="form-control rounded-pill border border-dark" id="exampleFormControlInput1" placeholder="abc@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Query/Comment</label>
                            <textarea name="query" className="form-control border border-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-12 mb-5">
                            <button className="btn bg-dark text-white rounded-pill contact_submit" type="submit" onClick={()=>setClickst(!clickst)}>submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 col-lg-6 ps-5 mt-4">
                    {
                    clickst && (<div>
                        <h1 className="text-decoration-underline contact_data">Your data:-</h1>
                        <h4>Name: {formInfo.name}</h4>
                        <h4>Phone: {formInfo.phone}</h4>
                        <h4>Email: {formInfo.gmail}</h4>
                        <h4>Query/Comment: {formInfo.query}</h4>
                        <h3>Submition successful!</h3>
                    </div>)
                    }

                </div>
            </div>
        </div>
        </>
    );
}
export default Contact;