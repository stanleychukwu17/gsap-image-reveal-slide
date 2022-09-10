import { motion } from 'framer-motion';

import DelayChildren from '../delayChildren/DelayChildren'


import './app.scss';

const parentVariant = {
    initial: {
    },
    animate: {
        transition: { staggerChildren: .3, when: "beforeChildren" }
    },
}

const boxVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        marginTop:'100px',
        opacity: 1,
        scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
        originX:'40%',
        rotateZ:360,
        // borderRadius: '100px',
        transition: {
            ease: 'easeOut',
            duration: .7,
            opacity: {duration:1.2, ease: 'linear'},
            rotateZ: { delay:1, duration: 1.5 },
            scale: { delay:2.2, duration: 2.5 },
        }
    },
}



const App = () => {

    return (
        <>
            <motion.div
                variants={parentVariant}
                initial="initial"
                animate='animate'
                className="AppCvr"
            >
                <motion.div className="AppMain"
                    variants={boxVariant}
                >A</motion.div>
                <motion.div className="AppMain"
                    variants={boxVariant}
                >B</motion.div>
                <motion.div className="AppMain"
                    variants={boxVariant}
                >C</motion.div>
            </motion.div>

            <DelayChildren />
        </>

    )

}

export default App;