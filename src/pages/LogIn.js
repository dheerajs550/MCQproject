import React from 'react'
import FormComponents from '../components/FormComponents'
import heroimg from "../image/heroImg.jpg"
// import FormComponents from './FormComponents'
const LogIn = () => {
  return (
    <>
    <div style={{ }} className=" boxmain d-md-flex " >
    <div className='w-100 h-100 bg-info'>
        <img className='w-100 h-100' src={heroimg} alt=""  />
    </div>
    <div className='leftBox w-100 h-100 '>
      <FormComponents/>
    </div>
  
    </div>
    <style jsx>
    {`
    .boxmain{
    height:100vh;
    width:100vw;
}

.leftBox{
  background:#010527fa;
  color: #fff;
}
    `}
    </style>
    </>
  )
}

export default LogIn