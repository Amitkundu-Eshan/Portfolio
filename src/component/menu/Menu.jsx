import React from 'react'
import "./menu.scss"
import { ImCross } from 'react-icons/im';
import image from "../../Images/1.jpeg"
const Menu = ({menuopen,setMenuopen}) => {
    return (
        <>
            <div className={"amit "+(menuopen && "active")}>
            <ImCross className="cross" onClick={()=>setMenuopen(!menuopen)}/>
            <div className="photo">
            <div className="borders">
            <img alt="" className="image" src={image}/>
            </div>
            <h1 className="name">Amit kundu</h1>
            <p className="skill">Web Developer</p>
            </div>
                <ul className="menuitems">
                    <li className="list">
                    <a className="menuitem" href="#Home" onClick={()=>setMenuopen(!menuopen)} >Home</a>
                    </li>
                    <li className="list">
                    <a className="menuitem" href="#About" onClick={()=>setMenuopen(!menuopen)}>About</a>
                    </li>
                    <li className="list">
                    <a className="menuitem" href="#Projects" onClick={()=>setMenuopen(!menuopen)}>Projects</a>
                    </li>
                    <li className="list">
                    <a className="menuitem" href="#Contact" onClick={()=>setMenuopen(!menuopen)}>Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
