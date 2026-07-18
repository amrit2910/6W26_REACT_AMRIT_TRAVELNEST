import { useState } from "react";

import { toast, ToastContainer } from 'react-toastify'

import { useNavigate } from "react-router-dom";

export default function Login() {

    // let count = 1;

    // function increment() {
    //     count = count + 1;
    //     console.log(count);
    // }

    // STATE HANDLING

    // HOOK - special function used to access features of react

    // useState()

    // SYNTAX

    // const [stateVariable, stateUpdationFunction] = useState(initialValue)

    // const [count, setCount] = useState(0);


    // function increment() {
    //     setCount(count + 1);
    //     console.log(count);
    // }




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function getEmail(e){
        // console.log("Event: ", e.target.value);
        
        setEmail(e.target.value)
    }

    function getPassword(e){
        // console.log("Password :" , e.target.value);
        
        setPassword(e.target.value)
    }

    const nav = useNavigate()

    function submitForm(e){
        e.preventDefault();
        // console.log("Email: ", email);
        // console.log("Password: ", password);

        if(email == "" || password == ""){
            toast.info("All Fields are required");
            return;
        }

        if(email == "admin@gmail.com" && password == "123"){
            toast.success("Login Success")
            console.log("Login Success");
            nav('/');
        }else{
            console.log("User not found");
            toast.error("User not found")
        }
        
        
    }


    return (
        <>

            <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Login</h3>
      {/* <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">About</li>
      </ol> */}
    </div>
  </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">
                    <form onSubmit={submitForm} action="" className="">
            
                        <input
                            type="email"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Email"
                            onChange={getEmail}
                        />

                        <input
                            type="password"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Password"
                            onChange={getPassword}
                        />

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                            type="submit" 
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}
