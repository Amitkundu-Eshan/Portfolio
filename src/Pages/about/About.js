import React from 'react'
import "./About.css";

const About = () => {
    return (
        <>
          <div className="About">
              <h1 className="heading">ABOUT</h1>
              <h1 className="Qualication">Qualication</h1>
              <div className="line1"/>
              <div className="circle1"><div className="solid1"></div></div>
              <div className="line1" />
              <div className="circle1"><div className="solid1"></div></div>
              <div className="line1"/>
              <div className="circle1"><div className="solid1"></div></div>
              <div className="line1"/>
              <div className="line2"></div>
              <div className="box1">
              <div style={{padding:"15px"}}>
              <h4 style={{marginBottom:"5px",fontSize:"18px"}}>College:</h4>
              <p style={{marginBottom:"0px"}}>Bengal college of engineering and technology.</p>
              <p style={{marginBottom:"0px"}}>B.TECH in ECE</p>
              <p>Aggreated CGPA: 8.52</p>
              </div>
              </div>
              <div className="line2"style={{bottom: "320px",width: "250px"}}>
              </div>
              <div className="box1"style={{left: "450px" ,bottom: "392px"}}>
              <div style={{padding:"15px"}}>
              <h4 style={{marginBottom:"5px",fontSize:"18px"}}>Higher Secondary Exam (10+2):</h4>
              <p style={{marginBottom:"0px"}}>Mira High School</p>
              <p style={{marginBottom:"0px"}}>West Bengal Council of Higher Secondary Education</p>
              <p style={{marginBottom:"0px"}}>Aggreated Percentage: 65.4%</p>
              </div>
              </div>
              <div className="line2"style={{bottom: "365px"}}></div>
              <div className="box1" style={{bottom: "440px"}}>
              <div style={{padding:"15px"}}>
              <h4 style={{marginBottom:"5px",fontSize:"18px"}}>Secondary Exam (10th):</h4>
              <p style={{marginBottom:"0px"}}>Mira High School</p>
              <p style={{marginBottom:"0px"}}>West Bengal Board Of Secondary Education</p>
              <p style={{marginBottom:"0px"}}>Aggreated Percentage: 71.5%</p>
              </div>
              </div>
              <h1 className="skill">Skill</h1>
              <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                  <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">70%</div>
                      <h4 className="point">Python</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">85%</div>
                      <h4 className="point">C language</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">80%</div>
                      <h4 className="point">Javascript</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">90%</div>
                      <h4 className="point">HTML5</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">82%</div>
                      <h4 className="point">CSS3</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">75%</div>
                      <h4 className="point">ReactJS</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">70%</div>
                      <h4 className="point">NodeJS</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">85%</div>
                      <h4 className="point">ExpressJS</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="skillbox1">
                      <div className="circleskill1">80%</div>
                      <h4 className="point">MongoDB</h4>
                    </div>
                </div>
              </div>    
          </div> 
          </div> 
        </>
    )
}

export default About
