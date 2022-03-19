import React, { useMemo, useContext } from "react";
import { motion } from "framer-motion";
import { IntersectionContext } from "./intersection-observer";
import  styles from './BlogCard.module.css'



export const BlogCard = ({
  children,
  delayOrder, // order of appearance
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1] // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing
    }),
    [duration, delayOrder, easing]
  );

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition
    },
    show: {
      scale: 1,
      opacity: 1,
      transition
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      variants={variants}

      className="post-box"
    >

      
                          <div className="text-holder">
                              <a href="post.html" className="title">designing for the web</a>
                              <div className="text" >But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                          </div>
                          <div className="img-holder">
                              <img src="images/post1.png" alt=""/>
                          </div>
    </motion.div>
  );
};
