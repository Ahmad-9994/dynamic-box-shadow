import React, { useState } from 'react'
import "./style.css"
const Home = () => {

  const[hori ,setHori]=useState(30)
  const[vertical ,setVertical]=useState(30)
  const[blur ,setBlur]=useState(30)
  const[shadowColor ,setShadowColor]=useState("black")
  return (
    <div className='home'>
    
      <h1>Home</h1>

    
       <label>Horrizontal Length</label>
      <input type='range' max="100" min="-200" value={hori} onChange={(e)=>setHori(e.target.value)}></input>
      <br></br>

      <label>Horrizontal Length</label>
      <input type='range' max="100" min="-200" value={vertical} onChange={(e)=>setVertical(e.target.value)}></input>
      <br></br>

      <label>Blur</label>
      <input type='range' max="100" min="0" value={blur} onChange={(e)=>setBlur(e.target.value)}></input>
      <br></br>

      <label>Select shadow color</label>
      <input type='color' value={blur} onChange={(e)=>setShadowColor(e.target.value)}></input>
      
      <div className='box' style={{boxShadow:`${hori}px ${vertical}px ${blur}px ${shadowColor}` }}></div>
      
      </div>
   
  )
}

export default Home

