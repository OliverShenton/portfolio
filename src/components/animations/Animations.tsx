export const HerofadeUpAnimation = {
  initial: { opacity: 0, y: 33 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

export const HerofadeUpAnimationOpaque = {
  initial: { opacity: 0, y: 33 },
  animate: { opacity: 0.3, y: 0 },
  transition: { duration: 1 },
};

export const sectionTitleFadeUp = {
  initial: { opacity: 0, y: 33 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};

// export const projectCardParentVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.1,
//     },
//   },
// };

// export const projectCardChildVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0 },
// };

// // Techstack staggered load

// export const techstackParentVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// export const techstackChildVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0 },
// };
