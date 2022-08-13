import React, { useEffect, useState } from 'react'
import axios from "axios"
const QAndA = () => {
  const [Data, setData] = useState([])
  const [Qustion, setQustion] = useState([])
  const [Ans, setAns] = useState([])

  // ....................
  const [isCheck, setIsCheck] = useState({})
  const [IsRight, setIsRight] = useState({})
  const [TRight, setTRight] = useState(0)
  const [TWrong, setTWrong] = useState(0)
  const [Total, setTotal] = useState(0)
  const [count, setCount] = useState(1)

const [IsTrue, setIsTrue] = useState(false)



  useEffect(() => {
    usersData()
  }, [])

  const usersData = () => {
    axios.get(`https://opentdb.com/api.php?amount=10`).then((res) => { // this line of code fatch data from api we use axios for it 
      if (res.status === 200) {
        setData(res.data.results)
        setQustion(res.data.results[0]?.question) // this line of code use to solv undefined question 
        setAns(res.data.results[0]) // this line of code use to solv undefined answer
      }
    }).catch((err) => {
      console.log(err)
    })
  }

// this function make for to go on next question and answer
  const nextQus = () => {
    setCount(count + 1)
    setQustion(Data?.[count]?.question) // this line of code set next question for show on screen 
    setAns(Data[count]) 

  }
 
  // this is function make for go on prev question and answer
  const prevQus = () => {
    setCount(count - 1)
    setQustion(Data?.[count]?.question) //this line of code set prev question for show on screen 
    setAns(Data[count])      // this line of code set prev answer 
  }

  const handleChange = (e) => {
    e.target.checked && setIsCheck(prev => ({ ...prev, [Qustion]: e.target.value }))
    setIsRight(prev => ({ ...prev, [Qustion]: e.target.value === Ans?.correct_answer }))
  }
 
  const handleSubmit = () => {
      setTRight(Object.values(IsRight).filter(Boolean).length) // this line of code filter all true in arry
      setTWrong(Object.values(IsRight).length - TRight)
      setTotal((100 * TRight) / 10)
      alert("thank for the give  test ")
      setIsTrue(true)
  }
  
  return (
    <>
      <div className='d-flex'>
        <div className="testbox mx-auto mt-5 rounded  p-5">
          <p className=' font-weight-bold'>{`Q${count} ${Qustion}`}</p>
          <div className=' d-flex align-content-center w-100'>
            <p className=' font-weight-bold' >(1) {`${Ans?.correct_answer}`} </p>
            <input className='active mt-1' type="radio" name="ans" value={Ans?.correct_answer} checked={isCheck[Qustion] === Ans?.correct_answer} onChange={(e) => handleChange(e)} />
          </div>
          {Ans?.incorrect_answers?.map((item, index) => {
            return <>
              <div key={item} className=' d-flex align-content-center w-100'>
                <p className=' font-weight-bold' >({index + 2}) {item}  </p>
                <input className='active mt-1' type="radio" name="ans" value={item} checked={isCheck[Qustion] === item} onChange={(e) => handleChange(e)} />
              </div></>
          })}


          <div className=' w-100 d-flex justify-content-between'>
            <button disabled={(count === 1)||IsTrue} className='btn-info rounded-pill px-3 pb-2 font-weight-bold' onClick={prevQus} >prev</button>
            <button disabled={(count === 10)||IsTrue} className='btn-info rounded-pill px-3 pb-2 font-weight-bold' onClick={nextQus} >next</button>
          </div>
          <div className=' w-100 d-flex justify-content-center mt-5'>
            <button onClick={handleSubmit} className='btn-info rounded-pill px-3 pb-2 font-weight-bold'>submit</button>
          </div>
        </div>
        <div className='resultbox mx-auto mt-5 rounded  p-5'>
          <h1> Result</h1> 
          <p> Total right =      {TRight} </p>
          <p> Total wrong =      {TWrong} </p>
          <p> Total percent %  = {Total}  </p>
          
        </div>
      </div>
      <style jsx>
        {`
        .testbox{
            background:#fff;
            color: #000;
            width: 50vw;
            height: 70vh;

          }
          .resultbox{
              background:#fff;
              color: #000;
              width: 25vw;
              height: 70vh;
  
            }
          .active {
            width: 3vw;
            height: 3vh;
        }
        `}
      </style>
    </>
  )
}

export default QAndA