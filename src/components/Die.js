import React from 'react'
import './die.css'

const Die = (props) => {
  // const dieString = ["one", "two", "three", "four", "five", "six"]
  // const dieNum = Math.floor(Math.random()*6)
  // console.log(dieNum)
  return (
    <div className="dice-thang">
      <i className={`fas fa-dice-${props.num}`}></i>
    </div>
  )
}

export default Die