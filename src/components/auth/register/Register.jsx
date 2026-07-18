import { useState } from "react";

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
// import UserService from '../../services/UserService'

export default function Register() {

    // useState() - hook


    // STATE HANDLING

    // let count = 1;

    // function inc(){
    //     count = count + 1;
    //     console.log(count);
    // }

    // const [count, setCount] = useState(0)

    // function inc() {
    //     setCount(count+1)
    //     console.log(count);
    // }

    const nav = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function getEmail(e) {
        setEmail(e.target.value)
    }

    function getPassword(e) {
        setPassword(e.target.value)
    }
    function getName(e) {
        setName(e.target.value)
    }
    function getContact(e){
        setContact(e.target.value)
    }

    async function submitForm(e) {
        e.preventDefault();
        let payload = {
            name,
            email,
            password
        }
        await UserService.register(payload)
        toast.success("Registered")
    }

    return (
        <>

           <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Register</h3>
      </div>
      </div>
            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">
                    <form action="" className="" onSubmit={submitForm}>


                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Name" onChange={getName}
                        />
                        <input
                            type="email"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Email" onChange={getEmail}
                        />
                        <input
                            type="password"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Your Password" onChange={getPassword}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Contact No." onChange={getContact}
                        />
                        <select name="" id="" className="w-100 form-control border-0 py-3 mb-4">
                            <option value="" selected disabled>Select user type</option>
                            <option value="admin">admin</option>
                            <option value="user">customer</option>
                        </select>

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