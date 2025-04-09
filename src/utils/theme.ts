// Theme configuration for the application

// Colors
export const colors = {
  primary: {
    black: "#000000",
    white: "#FFFFFF",
    grey: "#F5F5F5",
  },
  secondary: {
    red: "#E63946",
    darkGrey: "#333333",
    lightGrey: "#CCCCCC",
  },
  text: {
    primary: "#000000",
    secondary: "#666666",
    light: "#999999",
  },
};

// Font families
export const fonts = {
  plak: "Neue Plak, sans-serif",
  plakBold: "Neue Plak Bold, sans-serif",
  plakCondBlack: "Neue Plak Condensed Black, sans-serif",
};

// Spacing (can be used for margins, paddings)
export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
};

// Breakpoints matching TailwindCSS defaults
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Animation durations
export const animations = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
};

// Common border radiuses
export const borderRadius = {
  none: "0",
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  full: "9999px",
};

// Z-index values
export const zIndex = {
  base: 0,
  overlay: 10,
  dropdown: 20,
  modal: 30,
  tooltip: 40,
};
