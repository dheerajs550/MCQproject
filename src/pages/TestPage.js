import React from 'react'
import Navbar from '../components/Navbar'
import QAndA from '../components/QAndA'

const TestPage = () => {
  return (
    <>

    <div className='testbos'>
    <Navbar/>
   <QAndA/>
    </div>
    <style jsx>
        {`
        .testbos{
            background:#76767bfa;
            color: #fff;
            width: 100vw;
            height: 100vh;

          }
        `}
    </style>
    </>
  )
}

export default TestPage