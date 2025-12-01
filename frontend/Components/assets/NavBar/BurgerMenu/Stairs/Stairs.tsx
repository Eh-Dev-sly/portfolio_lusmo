import './Stairs.scss';
import { height, background, mountAnim } from '../anim';
import { motion } from 'framer-motion';

export default function Stairs() {

  return (
    <motion.div className="stairs">
      {
        [...Array(5)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={height}
              {...mountAnim}
              custom={4 - index}
              className="stair"
            />
          );
        })
      }
      <motion.div
        variants={background}
        {...mountAnim}
        className="background"
      />
    </motion.div>
  );
}
