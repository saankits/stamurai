import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const [togg, setTogg] = useState(false)
  const navigate= useNavigate()
  return (
    <div className='header'>
        <div className="h-container">
      <div className="h-left" onClick={()=>navigate("/")}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>Weather</span>
      </div>
      <div className="h-right">
            <input type="search" placeholder='Enter City' onChange={props.handleinput}/>
            <button onClick={()=>{navigate("/")}}>Search</button>
      </div>
      <div className="togglemenu" style={togg == true ? {display:"flex"} : {display:"none"}}>
      <input type="search" placeholder='Enter City' onChange={props.handleinput}/>
            <button onClick={()=>navigate("/")}>Search</button>
      </div>
      <i class="fa-solid fa-xmark" style={togg ? {display:"inline"}:{display:"none"}} onClick={()=>setTogg(false)}></i>
    </div>
    <div className="menu"><i class="fa-solid fa-bars" onClick={()=>setTogg(true)}></i></div>
    
    </div>
  )
}

export default Header
