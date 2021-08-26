import React, { useState } from 'react'
import "./Navbar.scss"
import { FaBars } from 'react-icons/fa';
import {motion} from "framer-motion";

const Navbar = ({menuopen,setMenuopen}) => {
    
    const [menuState,changeState]=useState({
        ActiveObject:null,
        Objects:[{id:0,name:"Home"},{id:1,name:"About"},{id:2,name:"Projects"},{id:3,name:"Contact"}]
    });
    const toggoleActive = (index) =>{
        changeState({...menuState,ActiveObject:menuState.Objects[index.id]});
    }
    const toggleactiveStyle = (index) =>{
        if(menuState.Objects[index.id] === menuState.ActiveObject){
            return "bt active";
        }else{
            return "bt inactive"
        }
    }

    return (
        <>
        <div className="navbar">
            <motion.div initial={{fontSize:"20px"}} animate={{fontSize:"28px"}} className="logoarea">
                <a style={{textDecoration:"none",color:"inherit"}} href="#Home">Portfolio.</a>
            </motion.div>
            
            <div className="nav-menu">
            <FaBars  className="bar" onClick={()=>setMenuopen(!menuopen)}/>
                <ul className="nav-items" id="menu">
                {menuState.Objects.map((index)=>(
                    <a 
                    key={index} 
                    className={toggleactiveStyle(index)}  
                    href={`#${index.name}`} 
                    onClick={()=>{toggoleActive(index)}}>{index.name}</a>
                ))}
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default Navbar
