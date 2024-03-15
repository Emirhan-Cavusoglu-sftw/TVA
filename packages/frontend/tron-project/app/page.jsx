'use client'
import { motion } from 'framer-motion';
import useMousePosition from './Utils/useMousePosition';
import { useState ,useEffect} from 'react';




export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="bg-gradient-to-r flex items-center justify-center from-purple-950 to-violet-600 min-h-screen">
     
     <motion.div
     className="deneme" 
     
     animate={{
      WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
      WebkitMaskSize: `${size}px`,
    }}
    transition={{ type: "tween", ease: "backOut", duration:0.5}}
  >

      <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
      </p>
     </motion.div>
        
     <div className='bodyDiv'>
     "TVA is a secure and transparent blockchain-based platform facilitating the timestamped registration of designs and copyrights."
     </div>

    </div>
  );
}
