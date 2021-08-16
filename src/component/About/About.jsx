import React from 'react'
import { useEffect } from 'react';
import "./About.scss"
import Accordation from "./Acordation";
import Skill from "./Skill";
//import skill from "../../Images/1.jpg"
import { GiSkills } from 'react-icons/gi';
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    },[])

    return (
        <>
            <div className="aboutdiv" id="About">
            <div className="middle">
            <GiSkills className="icon"/>
            <div className="area">
            <h1  className="jana">Qualification</h1>
            <div  className="accr">
            <Accordation className="poo"/>
            </div>
            </div>
            <div className="area">
            <h1 className="qual">Skill</h1>
            <div className="accr">
            <Skill />
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default About
