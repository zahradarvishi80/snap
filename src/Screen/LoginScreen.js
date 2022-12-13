
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import "../style/LoginScreen.css";
import { saveToken } from "../redux/features/user/userSlice";
const Login = () => {
    const [token, setToken] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const LoginToken = () => {
        dispatch(saveToken(token))
        navigate('/ListProjects')
    }
    return (
        <div id="header" className="container d-flex flex-row shadow-xl w-auto h-100">
            <h1 id="h1" className="h3 text-center">Wellcome to <br /> login page </h1>
            <div style={{ height: "90vh" }} className="d-flex w-50 ">

            </div>
            <div className="d-flex w-50 justify-content-center align-items-center ">
                <div className="container">

                    <form>
                     
                        <div className="form-group">
                            <label htmlFor="token"><h6 className="m-2">Token</h6></label>
                            <input value={token} onChange={(e) => setToken(e.target.value)} type="token" className="m-2 form-control" id="token" placeholder="Enter token" />
                        </div>
                       
                        <button onClick={()=>LoginToken()} type="submit" className="btn m-2 btn-primary">Signup</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login