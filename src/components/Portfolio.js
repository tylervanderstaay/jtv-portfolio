import React, { useState } from 'react';
import '../css/Portfolio.css'
import { AnimatePresence, motion } from "framer-motion"
import blues from '../images/blues.jpg'
import drinks from '../images/drinks.jpg'

const projects = [{
    name: 'Drink Assist',
    repo: 'https://github.com/tylervanderstaay/Locs',
    page: 'https://tylervanderstaay.github.io/Locs/',
    image: drinks
}]

const Portfolio = () => {

    return (
        <>
            <div className='portfoliowrap'>
                <img src={blues} className='portfoliobg' >
                </img>
                <AnimatePresence>
                    <motion.div
                        className='portfolioMain' id='carousel'>

                        {projects.map(project => {
                            const lets = ['A', 'B', 'C']
                            let index = 0;
                            return (
                                <div className='projectwrap'>
                                <img src={drinks} className='project-img'/>
                                <motion.div
                                    key={`proj${index}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ x: 100, opacity: .5 }}
                                    whileHover={{
                                        scale: 1.2,
                                        opacity: .9
                                    }}
                                    className='project-card'
                                    id={`project-${lets[index]}`}>
                                    <h2>Drink Assist</h2>
                                </motion.div>
                                </div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default Portfolio;