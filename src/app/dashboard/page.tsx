'use client'
import React, { useState } from 'react'

const Dashboard = () => {
    let [counter, setCounter] = useState<number>(0);

  return (
    <>
    <div>Dashboard</div>
    <div>{counter}</div>
    <button onClick={() => {setCounter(counter++)}}>Increase</button>
    </>
  )
}

export default Dashboard