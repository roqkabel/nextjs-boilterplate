import { motion } from "framer-motion";
import styled from "styled-components";
interface Props {
  message: string;
  type: string;

}
interface AnimatedProps {
  text: string;
  type: string;
}


const animationVarients = {
  hidden: {
    scale: 0.1
  },
  animate: {
    scale: 1
  },
}

const marqueeVariantsLeft = {
  animate: {
    x: [0, -1335],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsRight = {
  inital: {

  },
  animate: {
    x: [-1300, 1300],
    y: [-100, 200,-100],
    opacity: 0.5,
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 9,
        ease: "linear",
      },
      y :{
        repeat: Infinity,
        repeatType: "loop",
        ease: 'linear',
        duration: 2,

      }
    },
  },


};

const AnimatedText = ({text, type = 'right'}:AnimatedProps ) => {
  return (

    
      type == 'right' ? (
        <motion.div variants={marqueeVariantsRight} exit='exit' animate="animate" >
        {text}
      </motion.div>
      ) : (
        <motion.div variants={marqueeVariantsLeft} animate="animate" >
        {text}
      </motion.div>
      )
    
   
  )
}

function Greeting({ message, type }: Props) {
  return(
  <MainMessage>
     <AnimatedText text={message} type={type}/>
  </MainMessage> );
}

const MainMessage = styled.div`
  color: white;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  margin: auto;
  width: 100%;
  font-family: monospace;
  margin-top: 3rem;
  margin-bottom: 3rem;

`;
export default Greeting;
