import { animations } from './theme';

// reusable animation classes
export const transitionClasses = {
  // Basic transitions with durations from theme
  base: `transition-all duration-${animations.normal} ease-in-out`,
  fast: `transition-all duration-${animations.fast} ease-in-out`,
  slow: `transition-all duration-${animations.slow} ease-in-out`,

  // Interactive effects for user feedback
  hover: 'hover:scale-105',
  hoverSmall: 'hover:scale-[1.02]',
  fadeIn: 'opacity-0 animate-fadeIn',
  slideIn: 'translate-y-4 animate-slideIn',
  
  hoverFade: 'transition-opacity duration-300 opacity-80 hover:opacity-100',
  hoverScale: 'transition-transform duration-300 hover:scale-[1.05]',
  colorChange: 'transition-colors duration-300',
};

// CSS keyframes animations
export const keyframes = {
  fadeIn: {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  slideIn: {
    '0%': { transform: 'translateY(1rem)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 },
  },
  pulse: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.7 },
  },
};

// Animation durations
export const animationDurations = {
  'fade-in': '300ms',
  'slide-in': '500ms',
  'pulse': '2s',
}; 