import { useState, useEffect, useMemo, useCallback } from "react";
import { breakpoints as themeBreakpoints } from "../utils/theme";

type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

const defaultBreakpoints: Breakpoints = themeBreakpoints as Breakpoints;

interface UseResponsiveOptions {
  breakpoints?: Partial<Breakpoints>;
}

function useResponsive(options: UseResponsiveOptions = {}) {
  // Memoize breakpoints to prevent recreation on every render
  const breakpoints = useMemo(() => {
    return { ...defaultBreakpoints, ...options.breakpoints };
  }, [options.breakpoints]);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<BreakpointType>("xs");

  // Memoized size handler to prevent recreation
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    //breakpoint from largest to smallest to ensure correct cascading behavior
    if (window.innerWidth >= breakpoints["2xl"]) {
      setCurrentBreakpoint("2xl");
    } else if (window.innerWidth >= breakpoints.xl) {
      setCurrentBreakpoint("xl");
    } else if (window.innerWidth >= breakpoints.lg) {
      setCurrentBreakpoint("lg");
    } else if (window.innerWidth >= breakpoints.md) {
      setCurrentBreakpoint("md");
    } else if (window.innerWidth >= breakpoints.sm) {
      setCurrentBreakpoint("sm");
    } else {
      setCurrentBreakpoint("xs");
    }
  }, [breakpoints]);

  useEffect(() => {
    // Initialize on mount and when breakpoints change
    handleResize();

    window.addEventListener("resize", handleResize);
    // some cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Memoized return object to prevent unnecessary rerenders in consumer components
  return useMemo(
    () => ({
      width: windowSize.width,
      height: windowSize.height,
      isMobile: windowSize.width < breakpoints.md,
      isTablet:
        windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
      isDesktop: windowSize.width >= breakpoints.lg,
      breakpoint: currentBreakpoint,
      isXs: currentBreakpoint === "xs",
      isSm: currentBreakpoint === "sm",
      isMd: currentBreakpoint === "md",
      isLg: currentBreakpoint === "lg",
      isXl: currentBreakpoint === "xl",
      is2Xl: currentBreakpoint === "2xl",
      // Convenience object for min-width breakpoint queries
      atLeast: {
        sm: windowSize.width >= breakpoints.sm,
        md: windowSize.width >= breakpoints.md,
        lg: windowSize.width >= breakpoints.lg,
        xl: windowSize.width >= breakpoints.xl,
        "2xl": windowSize.width >= breakpoints["2xl"],
      },
    }),
    [windowSize, breakpoints, currentBreakpoint]
  );
}

export default useResponsive;
