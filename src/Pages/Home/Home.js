import React from 'react'
import amit from "../../Images/amit.png"
import "./Home.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Home = () => {
    return (
        <>
        <div className="homediv">
            <div className="imgdiv">
                <img className="image" alt="" src={amit}/>
            </div>
            <div className="worddiv">
            <div className="line"/>
            <h1 className="name">AMIT<br className="break"/> 
            KUNDU</h1>
            <h3 className="prof">I am a web developer</h3>
            <div className="button">show more<ArrowForwardIcon className="arrow"/></div>
            
            </div>
        </div>
        </>
    )
}

export default Home
