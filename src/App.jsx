import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [result, setReult] = useState(0)

  const [a, setA] = useState(0)
  const [b, setB]= useState(0)

  const [calculation, setCalculation]= useState('')

  function handleClick(e) {
    // console.log('ok');
    setCalculation(e.target.value)
  }

  function nhapA(e) {
    setA(e.target.value)
  }

  function nhapB(e) {
    setB(e.target.value)
  }

  function handleClick(e) {
    setCalculation(e.target.value)
    // console.log(calculation);
  }

  function tinhToan(e) {
    console.log(calculation);
    if(calculation=='+'){
      setReult(parseInt(a)+ parseInt(b))
    }
    else if(calculation=='-'){
      setReult(parseInt(a)- parseInt(b))
    }
    else if(calculation=='*'){
      setReult(parseInt(a)* parseInt(b))
    }
    else if(calculation=='/'){
      setReult(parseInt(a)/ parseInt(b))
    }
  }
  return (
    <>

      <input type="text" placeholder='Nhap a' onChange={nhapA}/> <br />
      <input type="text" placeholder='Nhap b' onChange={nhapB}/> <br />
      
      <input type="radio" value='+' name='calcu' onClick={handleClick}/><span>+</span>
      <input type="radio" value='-' name='calcu' onClick={handleClick}/><span>-</span>
      <input type="radio" value='*' name='calcu' onClick={handleClick}/><span>*</span>
      <input type="radio" value='/' name='calcu' onClick={handleClick}/><span>/</span>
      <br />

      <button onClick={tinhToan}>Ok</button>
      <br />
      <span>Ket qua: {result}</span>
    </>
  )
}

export default App
