import { FC } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { BoxProps } from '@mui/material/Box';


interface Props {
  start?: [number, number];
  end?: [number, number];
  rotate?: [number, number];
  delay?: number;
}

export const FadeIn: FC<BoxProps & Props> = ({ children, start, end, delay }) => {
  start = start || [0, 0];
  end = end || [0, 0];

  const variants: Variants = {
    hidden: {
      x: start[0] || 0,
      y: start[1] || 0,
      opacity: 0
    },
    visible: {
      x: end[0] || 0,
      y: end[1] || 0,
      opacity: 1
    }
  };

  const transition: Transition = {
    delay: delay || 0.3
  };

  return (
    <motion.div
      variants={variants}
      transition={transition}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export const FadeInRotate: FC<BoxProps & Props> = ({ children, start, end, rotate, delay }) => {
  start = start || [0, 0];
  end = end || [0, 0];
  rotate = rotate || [0, 0];

  const variants = {
    hidden: {
      x: start[0] || 0,
      y: start[1] || 0,
      opacity: 0,
      rotate: rotate[0]
    },
    visible: {
      x: end[0] || 0,
      y: end[1] || 0,
      opacity: 1,
      rotate: rotate[1]
    }
  };
  const transition = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: delay
  };

  return (
    <motion.div
      variants={variants}
      transition={transition}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}