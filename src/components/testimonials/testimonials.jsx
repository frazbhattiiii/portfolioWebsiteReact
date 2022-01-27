import React from 'react'
import './testimonials.scss'
function Testimonials() {
  const data =[
    {
    id:1,
    content:"I am a Front End Web Developer and also a Python, Java and Cpp developer. Having good hand in React Js as front end and node and express as backend and mongo and SQL both as Data base.I can develop any desirable web app, softwares and creative content"
  
  },
 
  
];
  return (
    <div className='testimonals'
    id ="about">
      <h1>
        About Me
      </h1>

      <div className="container">

          <h2>Muhammad Ahmed Fraz</h2>
          <div className='items'> 
        {data.map((d)=>(
        <div className="card">
        <p>
          {d.content}
        </p>
        </div>
        ))}  
        <div className="imgContainer">
          <img src="assets/certificate.png" alt="" />
        </div>
        </div>
        <div>
      </div>
    </div>
    <div class="skills-area">
      <div class="skill">
        <div class="skill-title">HTML and CSS</div>
        <div class="skill-bar"></div>
        <div class="html skill-fill">
          <span class="skill-percent">90%</span>
        </div>
      </div>
    
   
      <div class="skill">
        <div class="skill-title"> Java Script and React</div>
        <div class="skill-bar"></div>
        <div class="js skill-fill">
          <span class="skill-percent">80%</span>
        </div>
      </div>
      <div class="skill">
        <div class="skill-title"> Python and Java</div>
        <div class="skill-bar"></div>
        <div class="html skill-fill">
          <span class="skill-percent">90%</span>
        </div>
      </div>
      <div class="skill">
        <div class="skill-title">C++</div>
        <div class="skill-bar"></div>
        <div class="js skill-fill">
          <span class="skill-percent">80%</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
