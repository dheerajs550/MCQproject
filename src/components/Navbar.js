import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='px-5 d-flex justify-content-between align-content-center navBox w-100'>
        <div className=''>
       <p className='mt-3 font-weight-bold text-light'>MCQ TEST APP</p>
        </div>
       <div className=''>
        <Link to={"/"}><p  className='mt-3 p-1 rounded-pill px-3 btn-info'>LogOut</p>         </Link>
       </div>

    </div>
    <style jsx>
        {`
        .navBox{
            background:#010527fa;
            color: #fff;
             height:10vh;
          }
        `}
    </style>
    </>
  )
}

export default Navbar