import facepaint from "facepaint";

const breakpoints = [1200, 992, 768, 576];
// const breakpoints = [576, 768, 992, 1200]

export const mq = facepaint(
  breakpoints.map((bp) => `@media (max-width: ${bp}px)`)
);

export const colors = {
  primary: "#fb8f8f",
  secondary: "#ffd8e4",
};
