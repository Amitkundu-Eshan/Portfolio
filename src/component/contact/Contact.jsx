import React from 'react'
import "./Contact.scss"
import {GrFacebook} from 'react-icons/gr';
import {AiFillLinkedin} from "react-icons/ai"
import {GrTwitter} from "react-icons/gr"
import {FaInstagram} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import {FaPhoneAlt} from "react-icons/fa"
import {Button} from "@material-ui/core"

const Contact = () => {


    const d = new Date();
    const date= d.getFullYear();
    console.log(date)
    return (
        <>
        <div className="Contactdiv" id="Contact">
            <div className="footer">
                <div className="sec">
                    <p className="portfolio">Social</p>
                    <span className="len"/>
                    <div style={{display:"flex",width:"100%",alignItem:"center",justifyContent:"space-around"}}>
                    <a style={{textDecoration:"none"}} href="https://www.facebook.com/profile.php?id=100007367328728"><GrFacebook className="facebook"/></a>
                    <a style={{textDecoration:"none"}} href="https://www.instagram.com/___e_s_h_a_n____/" ><FaInstagram className="instagram"/></a>
                    <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/amit-kundu-92041a20b/" ><AiFillLinkedin className="linkedin"/></a>    
                    <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/amit-kundu-92041a20b/" ><GrTwitter className="twitter"/></a>
                    </div>
                </div>
                <div className="dish">
                    <p className="menu">Menu</p>
                    <span className="pen"/>
                    <a href="#Home" className="menuele">Home</a><br/>
                    <a href="#About" className="menuele">About</a><br/>
                    <a href="#Projects" className="menuele">Projects</a><br/>
                    <a href="#Contacts" className="menuele">Contacts</a><br/>
                    
                </div>
                <div className="inpuera">
                    <p className="touch">Get in touch</p>
                    <div className="input"><SiGmail className="gmail"/><input className="panel"/></div>
                    <div className="input"><FaPhoneAlt className="phone"/><input className="panel"/></div>
                    <Button className="submit" color="primary" variant="contained">
                    Submit
                    </Button>
                </div>
                <div className="date">@{date} | all right reserved</div>
            </div>
            
        </div>
            
        </>
    )
}

export default Contact
