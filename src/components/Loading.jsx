import  *  as React from  "react"
import { render  } from "react-dom"
import { motion } from  "framer-motion" 

const Loading  = () => {
    return (
        <div className="example-container">
             <motion.div animate={{ 
                rotate: [0,200,200,0],
                x:[0,200,200,0,-200,-200,0]}}
                transition={{repeat:Infinity, duration: 1}}
                >

             </motion.div>
        </div>
    )
}

export default Loading