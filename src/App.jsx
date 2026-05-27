import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import AddDoctor from './components/AddDoctor'
import { useState, useEffect } from 'react'

function App() {
  let[count, setCount] = useState(0)
  function addcount() {
    setCount(count+1)
    console.log(count)
  }
  useEffect(()=>{
    console.log("useEffect is running")
  },[count])
  return (
    <div>
      {count}
      <button onClick={addcount}>Click</button>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
        <Doctorcard name='Ramakrishna' specialization='Rheumatology' gender='Male'/>
        <Doctorcard name='Prasad' specialization='General' gender='Male'/>
        <Doctorcard name='Shivani' specialization='Cosmetology' gender='Female'/>
        <Doctorcard name='Krishna' specialization='Orthopedic' gender='Male'/>
      </div>
      <AddDoctor/>
    </div>
  )
}

export default App