"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type HTMLMotionProps,
  type SpringOptions,
} from "motion/react";

import { cn } from "@/lib/utils";

type CursorContextType = {
  cursorPos: { x: number; y: number };
  isActive: boolean;
  cursorRef: React.RefObject<HTMLDivElement | null>;
};

const CursorContext = React.createContext<CursorContextType | undefined>(
  undefined
);

const useCursor = (): CursorContextType => {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

type CursorProviderProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

function CursorProvider({ children, ...props }: CursorProviderProps) {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = React.useState(false);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };
    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorPos, isActive, cursorRef }}>
      <div {...props}>{children}</div>
    </CursorContext.Provider>
  );
}

type CursorProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

function Cursor({ children, className, style, ...props }: CursorProps) {
  const { cursorPos, isActive, cursorRef } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  React.useEffect(() => {
    x.set(cursorPos.x);
    y.set(cursorPos.y);
  }, [cursorPos, x, y]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={cursorRef}
          className={cn(
            "transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] fixed",
            className
          )}
          style={{ top: y, left: x, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type Align =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"
  | "center";

type CursorFollowProps = HTMLMotionProps<"div"> & {
  sideOffset?: number;
  align?: Align;
  transition?: SpringOptions;
  children: React.ReactNode;
};

function CursorFollow({
  sideOffset = 15,
  align = "bottom-right",
  children,
  className,
  style,
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  ...props
}: CursorFollowProps) {
  const { cursorPos, isActive, cursorRef } = useCursor();
  const cursorFollowRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, transition);
  const springY = useSpring(y, transition);

  const calculateOffset = React.useCallback(() => {
    const rect = cursorFollowRef.current?.getBoundingClientRect();
    const width = rect?.width ?? 0;
    const height = rect?.height ?? 0;

    switch (align) {
      case "center":
        return { x: width / 2, y: height / 2 };
      case "top":
        return { x: width / 2, y: height + sideOffset };
      case "top-left":
        return { x: width + sideOffset, y: height + sideOffset };
      case "top-right":
        return { x: -sideOffset, y: height + sideOffset };
      case "bottom":
        return { x: width / 2, y: -sideOffset };
      case "bottom-left":
        return { x: width + sideOffset, y: -sideOffset };
      case "bottom-right":
        return { x: -sideOffset, y: -sideOffset };
      case "left":
        return { x: width + sideOffset, y: height / 2 };
      case "right":
        return { x: -sideOffset, y: height / 2 };
      default:
        return { x: 0, y: 0 };
    }
  }, [align, sideOffset]);

  React.useEffect(() => {
    const offset = calculateOffset();
    const cursorRect = cursorRef.current?.getBoundingClientRect();
    const cursorWidth = cursorRect?.width ?? 20;
    const cursorHeight = cursorRect?.height ?? 20;

    x.set(cursorPos.x - offset.x + cursorWidth / 2);
    y.set(cursorPos.y - offset.y + cursorHeight / 2);
  }, [calculateOffset, cursorPos, cursorRef, x, y]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={cursorFollowRef}
          className={cn(
            "transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] fixed",
            className
          )}
          style={{ top: springY, left: springX, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export {
  CursorProvider,
  Cursor,
  CursorFollow,
  useCursor,
  type CursorContextType,
  type CursorProviderProps,
  type CursorProps,
  type CursorFollowProps,
};
