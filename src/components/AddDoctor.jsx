import React from 'react'
import {useState, useEffect} from 'react'
import Home from './Home'

function AddDoctor() {
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [gender, setGender]=useState('')
    const [specialization, setSpecialization]=useState('')
    const [sal, setSal]=useState('')

    const [newdoctor, setNewDoctor] = useState(null)

    function handleform(e) {
        e.preventDefault()
        const formdata = {
            name, age, gender, specialization, sal,
            id:Date.now()
        }
        setNewDoctor(formdata)
        console.log(formdata)
    }
  return (
    <div>
        <h2>Add New Doctor</h2>
        <div className='formcontainer'>
            <form onSubmit={handleform} action="">
                <input type="text" className='textfield' value={name} placeholder='Enter Doctor Name' onChange={e=>setName(e.target.value)} />
                <input type="number" className='textfield' value={age} placeholder='Enter Age' onChange={e=>setAge(e.target.value)}/>
                <select className='textfield' value={gender} onChange={e=>setGender(e.target.value)}>
                    <option value="" disabled>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="text" className='textfield' value={specialization} placeholder='Enter Specialization' onChange={e=>setSpecialization(e.target.value)}/>
                <input type="text" className='textfield' value={sal} placeholder='Enter Salary' onChange={e=>setSal(e.target.value)}/>
                <button>Add Doctor</button>
            </form>
        </div>
        <Home newdoctor={newdoctor}/>
    </div> 
  )
}

export default AddDoctor