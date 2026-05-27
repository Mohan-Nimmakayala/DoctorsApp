import React from 'react'

function Doctorcard({name, specialization, gender}) {
  return (
    <div className='doctorcard'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Male_Doctor_Flat_Icon_Vector.svg/1280px-Male_Doctor_Flat_Icon_Vector.svg.png?_=20180301082314" alt="" width='100'/>
        <h2>{name}</h2>
        <div>{specialization}</div>
        <p>{gender}</p>
        <button>View more</button>
    </div>
  )
}

export default Doctorcard