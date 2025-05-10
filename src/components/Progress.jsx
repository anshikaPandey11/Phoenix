/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
*/

/**
 * Node modules
 */
import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Circular progress
 */
const CircularProgress = ({ classes = '', size = '' }) => {
    return (
        <div
            role='progressbar'
            className={`circular-progress ${size} ${classes}`}
        ></div>
    );
};

CircularProgress.PropTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
};
/*
  * Linear Progress
*/
const LinearProgress = ({ classes = '' }) => {
  // Defines Framer Motion variants for animating a progress bar and an active indicator.

  const progressbarVariant = {
    start: { scaleY: 0 },
    end: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const actionIndicatorVariant = {
    start: { translateX: '-100%' },
    end: { translateX: '100%' },
  };

  return (
    <motion.div
      role='progressbar'
      variants={progressbarVariant}
      initial='start'
      animate='end'
      exit='exit'
      className={`linear-progress ${classes}`}
    >
      <motion.div
        className='action-indicator'
        variants={actionIndicatorVariant}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.2, 0, 0, 1],
        }}
      ></motion.div>
    </motion.div>
  );
};

LinearProgress.propTypes = {
  classes: PropTypes.string,
};


export { CircularProgress, LinearProgress };