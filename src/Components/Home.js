import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

import Banner from "./Banner";
import Categories from "./Categories";


function Home({fname, setFName, lname, setLName, error, setError}){

    const navigate = useNavigate() 
   
    // const [category, setCategory] = useState("")

    const handleSubmit = ()=>{
        if(!fname || !lname){
            setError(true)
            return;
        }else{
            setError(false)
            navigate('/quiz')
        }
    }

    return(
        <div className="container-fluid main_Container">

        <div className="bg_img">
            <Banner />
        </div>

   
        <div className="col-md-4 myform">
        {error && <ErrorMsg>Please Fill all the fields</ErrorMsg> }
            <div className="form-group">
            <label>First Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    required
                    onChange={(e)=> setFName(e.target.value)}
                    
                />
            </div>

            <div className="form-group">
            <label>Last Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    required
                    onChange={(e)=> setLName(e.target.value)}
                    
                />
            </div>

            {/* <div className="form-group">
                <label htmlFor="Select Category">Select Category</label>
                <select className="form-control"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                >
                    {Categories.map((item)=>(
                        <option key={item.category}>
                           {item.category}
                        </option>
                    ))}
                 
                </select>
            </div> */}

            <button className="btn btn-warning btn-block" onClick={handleSubmit}>
                Start Game
            </button>

         </div>
    
        
        </div>
    )
}

export default Home