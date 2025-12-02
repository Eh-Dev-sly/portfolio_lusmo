import { Variants, transition } from "framer-motion";

export const height = {
    initial: { height: 0 },
    enter: (i: number) => ({
        height: "100%",
        transition: { duration: 0.5, delay: 0.05 * i, ease: "easeInOut" }
    }),
    exit: (i: number) => ({
        height: 0,
        transition: { duration: 0.3, delay: 0.05 * i, ease: "easeInOut" }
    })
}

export const background = {
    initial: { opacity: 0 },
    enter: {
        opacity: 0.5,
        transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
}

export const opacity: Variants = {
  initial: { opacity: 0 },
  enter: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut", // string standard accepté
      delay: custom * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
export const slideLeft = {
    initial: { x: 150 },
    enter: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: 150, transition: { duration: 0.5, ease: "easeInOut" } }
}

export const rotateX = {
    initial: { rotateX: 90, opacity: 0 },
    enter: (i: number) => ({
        rotateX: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 + (i * 0.05) }
    }),
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
}

export const mountAnim = { initial: 'initial', animate: 'enter', exit: 'exit' };
