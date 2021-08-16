import React, {  } from 'react'
import "./Navbar.scss"
import { FaBars } from 'react-icons/fa';
import {motion} from "framer-motion";

const Navbar = ({menuopen,setMenuopen}) => {



    return (
        <>
        <div className="navbar">
            <motion.div initial={{fontSize:"20px"}} animate={{fontSize:"28px"}} className="logoarea">
                <a style={{textDecoration:"none",color:"inherit"}} href="#Home">Portfolio.</a>
            </motion.div>
            
            <div className="nav-menu">
            <FaBars  className="bar" onClick={()=>setMenuopen(!menuopen)}/>
                <ul className="nav-items">
                    <a style={{textDecoration:"none",color:"inherit"}} href="#Home"><li id="myDiv" className="nav-item">Home</li></a>
                    <a style={{textDecoration:"none",color:"inherit"}} href="#About"><li  className="nav-item">About</li></a>
                    <a style={{textDecoration:"none",color:"inherit"}} href="#Projects"><li  className="nav-item">Projects</li></a>
                    <a style={{textDecoration:"none",color:"inherit"}} href="#Contact"><li  className="nav-item">Contact</li></a>
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default Navbar
