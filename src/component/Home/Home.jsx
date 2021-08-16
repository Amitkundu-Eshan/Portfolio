import React,{useEffect,useRef} from 'react'
import "./Home.scss"
import amit from "../../Images/amit.png"
import video from "../../Videos/video1.mp4"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {init} from "ityped";
import {motion} from "framer-motion";

const Home = () => {

    const textRef = useRef();
    const webRef = useRef();

    useEffect(() => {
        init(textRef.current,
             { 
                 showCursor: false, 
                 backDelay:  1500,
                 strings: ['Web developer...', 'Web Designer...','Competetive Programmer...' ]         
            })
    }, [])
    useEffect(() => {
        init(webRef.current,
             { 
                 showCursor: true, 
                 backDelay:  1500,
                 strings: ['Web developer...', 'Web Designer...','Competetive Programmer...' ]         
            })
    }, [])

    return (
        <>
            <div className="homediv" id="Home">
                <div className="kul">
                    
                    <motion.img initial={{y:-500}} animate={{y:0}} className="img" src={amit} alt=""/>
                    
                    <motion.div initial={{x:500}} animate={{x:0}} className="letter">
                        <h1 className="na"><span className="line"></span>Amit <br/>kundu</h1>
                        <h3 className="pro">I Am a <span ref={webRef}></span></h3>
                        <p className="st"> I completed my graduation in Electronics And 
                    Communication Engineering.</p>
                        <a href="#About" className="btton">show more</a>
                    </motion.div>
                </div>
                <div className="mobile">
                    <video className="video" src={video} type="video/mp4" autoPlay loop muted>
                    </video>
                    <div className="mobdiv" style={{position:"absolute"}}>
                    <motion.h1 initial={{x:400}} animate={{x:0}} className="ami">Amit Kundu</motion.h1>
                    <p className="kikori">I am a <span ref={textRef}></span></p>
                    <p className="info"> I completed my graduation in Electronics And 
                    Communication Engineering.</p>
                    <motion.a initial={{x:-500}} animate={{x:0}} href="#About" className="btna">Show More<br/><ExpandMoreIcon className="down"/></motion.a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
