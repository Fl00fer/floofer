export const slideLeft = {
  initial: {
    // opacity: 0,
    x: "-100vw",
    scale: 0.5,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    // opacity: 0,
    x: "100vw",
    // y: "100vh",
    scale: 0.5,
  },
};

export const slideRight = {
  initial: {
    // opacity: 0,
    x: "100vw",
    scale: 0.5,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    // opacity: 0,
    x: "-100vw",
    // y: "100vh",
    scale: 0.5,
  },
};

export const slideTransition = {
  ease: "anticipate",
  duration: 0.6,
};
