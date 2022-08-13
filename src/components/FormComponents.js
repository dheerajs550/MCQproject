import React, { useState } from 'react'
import logo from "../../src/logo.svg"
import {Link} from "react-router-dom"
const FormComponents = () => {
const [Email, setEmail] = useState("")
const [PassWord, setPassWord] = useState("")





    return (
        <>
            <form className='form p-3' >
                <h5>Login to MCQ test app</h5>
                <div className='image-upload  m-auto logiImg text-center'>
                    <img src={logo} />
                </div>
                <div className='d-flex flex-column  w-md-50 mt-5'>
                    <label htmlFor="" >Email</label>
                    <input  type="email" value={Email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='d-flex flex-column w-md-50'>
                    <label htmlFor="">PassWord</label>
                    <input type="pasword" value={PassWord} onChange={(e)=> setPassWord(e.target.value)}/>
                </div>
                <div className='d-flex justify-content-between align-items-center w-md-50 pt-2'>
                   <Link to={"/testpage"}>
                    <button disabled={(Email && PassWord)===""} className='rounded-pill px-3 btn-info ' type="submit" value="SingUp" >LogIn</button>
                   </Link>
                </div>
            </form>
            <style jsx>
                {`
                
                .leftBox{
                    width: 100%;
                    height:100%;
                    background:yellow;
                }
                .logiImg{
                    width: 100px;
                    height: 100px;
                    // background: red;
                }
                .image-upload>input {
                    display: none;
                  }
                .form{
                    width: 90%;
                    // background-color: #dc3545!important;
                    height: 100%;
                
                }
                .btn-link-bg{
                    width: 35%;
                    height:80%;
                }
                `}

            </style>
        </>

    )
}

export default FormComponents