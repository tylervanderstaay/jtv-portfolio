import React, { useState, useEffect } from 'react';
import '../css/Portfolio.css'
import { AnimatePresence, motion } from "framer-motion"
import blues from '../images/blues.jpg'
import drinks from '../images/drinks.jpg'

const projects = [{
    name: 'Drink Assist',
    repo: 'https://github.com/tylervanderstaay/Locs',
    page: 'https://tylervanderstaay.github.io/Locs/',
    image: drinks
},
{
    name: 'Social-Revue',
    repo: '',
    page: '',
    image: ''
},
{
    name: 'Persuade-Me',
    repo: '',
    page: '',
    image: ''
}]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: .8,
        transition: {
            staggerChildren: .6
        }
    }
}

const proj = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

function getDistance(x1, y1, x2, y2) {
    const dX = x2 - x1;
    const dY = y2 - y1;
    
    const distance = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    
    return distance;
  }

const Portfolio = () => {

    const [focus, setFocus] = useState({})
    const [fade, setFade] = useState(false)
    const [target, setTarget] = useState({left:0,top:0})
    const [sonic, setSonic] = useState({left:0, top:0})
    const [sonicRunning, setRunning] = useState(true)
    const [canMove, setMove] = useState(true)
    const [allTravel, setTravel] = useState(0);
    const [sonicSpeed, setSpeed] = useState({x:10,y:10})

    const getSonicTarget = (origin, destination) => {
        setTravel(getDistance(sonic.left, sonic.top, target.left, target.top))        
        const thisCycle = getDistance(sonic.left, sonic.top, sonic.top+sonic.speed.x, sonic.left+sonic.speed.y)
    }

    useEffect(()=>{
        setMove(false);
        setTimeout(()=>{
            setMove(true)
        },500)
    },[target])

    const handleMouseMove = (event) => {
        if(canMove){
        setTarget({left:event.pageX, top:event.pageY})
        console.log(target)
        }
    }

    console.log(focus)
    return (
        <>
            <motion.div 
            onMouseMove={handleMouseMove}
            className='portfoliowrap'>
            <motion.div
            style={{left:sonic.left, top:sonic.right}} 
            animate={{left:sonicSpeed.x,top:sonicSpeed.y}}
            transition={{duration:.26}}
            className='sonic'
        ></motion.div>
                <img src={blues} className='portfoliobg' >
                </img>
                <div className='projwindow'>
                        <motion.ul
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className='portfolioMain' id='carousel'>

                            {projects.map(project => {
                                const lets = ['A', 'B', 'C']
                                let index = projects.indexOf(project)
                                return (
                                        <motion.li
                                            key={`proj${index}`}
                                            variants={proj}
                                            onMouseEnter={() => { setFocus(project); setFade(false); }}
                                            onMouseLeave={() => { setFade(true) }}
                                            whileHover={{
                                                width: 200,
                                                height: 200,
                                                scale: 1.2,
                                                opacity: .9,
                                                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8879114145658263) 25%, rgba(255,255,255,0.6778273809523809) 37%, rgba(163,163,163,0.39771533613445376) 60%, rgba(163,163,163,0) 75%)'
                                            }}
                                            className='project-card'
                                            id={`project-${lets[index]}`}>
                                            <motion.h2
                                                initial={{ scale: .3 }}
                                                whileHover={{ scale: 1 }}>{project.name}</motion.h2>
                                        </motion.li>
                                )
                            })}

                        </motion.ul>
                </div>
            </motion.div>
        </>
    )
}

export default Portfolio;