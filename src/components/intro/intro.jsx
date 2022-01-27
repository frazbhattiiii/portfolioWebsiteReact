import React from 'react'
import "./intro.scss"
import {init} from 'ityped'
import {useEffect,useRef} from "react"
function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
        backDelay:1500,
        backSpeed:60,
        
        showCursor:true,
        strings:["Developer","Programmer","Content Creator"]
        
    });
  }, [])
  return (
    <div className='intro' id='Intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/myPic.png" alt="picture" />
        </div>
      </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1 className="line-1 anim-typewriter">
         
          Muhmmad Ahmed Fraz</h1>
        <h3> 
          Freelance <span ref={textRef}>
             
          </span>
          </h3>
          <div className="resume">
          <a href='assets/resume.pdf' download>Download Resume</a>
          </div>
    </div>
    <a href="#Portfolio">
      <img src="assets/down.png" alt="downArrow" />
    </a>
    </div>
    </div>
  )
}

export default Intro
