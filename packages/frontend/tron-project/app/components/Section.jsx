import { useRef } from "react";
import { useInView ,motion} from "framer-motion";


function Section({ children , className}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
   console.log(children)
   
    return (
      <section ref={ref} className={className}>
        <motion.span
          style={{
            // transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: {
                duration: 1,
                delay: 0.5,
            }
          }}
        >
          {children}
        </motion.span>
      </section>
    );
  }

export default Section