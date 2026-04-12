import { useEffect, useRef, useCallback, forwardRef, useState } from "react";
import styled from "styled-components";
import {
  DepthType,
  VariantType,
  ParallaxItem,
} from "./parallaxItem/ParallaxItem";

type DepthSpeedMap = {
  [key: string]: number;
};

type GridItem = {
  iconId?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  depth?: DepthType;
  variant?: VariantType;
};

export const Parallax = forwardRef<HTMLDivElement>((props, ref) => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 1024);

  const internalRef = useRef<HTMLDivElement>(null);
  const movingElementsRef = useRef<NodeListOf<Element> | null>(null);
  const animationRef = useRef<number>();

  const currentX = useRef(0);
  const currentY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  const settings = {
    maxMove: 100,
    smoothness: 0.03,
  };

  const depthSpeeds: DepthSpeedMap = {
    "depth-plus-2": 0.8,
    "depth-plus-1": 0.7,
    "depth-minus-1": 0.5,
    "depth-minus-2": 0.4,
    default: 0.7,
  };

  const getElementSpeed = useCallback((element: Element): number => {
    const parent = element.parentElement;
    if (!parent) return depthSpeeds.default;

    for (const className of parent.classList) {
      if (depthSpeeds[className]) {
        return depthSpeeds[className];
      }
    }
    return depthSpeeds.default;
  }, []);

  const applyTransform = useCallback(
    (element: Element, x: number, y: number, speed: number) => {
      const moveX = x * speed;
      const moveY = y * speed;
      (element as HTMLElement).style.transform =
        `translate3d(${moveX}px, ${moveY}px, 0px)`;
    },
    [],
  );

  const updateTargetFromMouse = useCallback(
    (clientX: number, clientY: number) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      let mouseX = (clientX - centerX) / (window.innerWidth / 2);
      let mouseY = (clientY - centerY) / (window.innerHeight / 2);

      mouseX = Math.max(-1, Math.min(1, mouseX));
      mouseY = Math.max(-1, Math.min(1, mouseY));

      targetX.current = mouseX * settings.maxMove;
      targetY.current = mouseY * settings.maxMove;
    },
    [settings.maxMove],
  );

  const animate = useCallback(() => {
    if (!movingElementsRef.current) return;

    currentX.current +=
      (targetX.current - currentX.current) * settings.smoothness;
    currentY.current +=
      (targetY.current - currentY.current) * settings.smoothness;

    movingElementsRef.current.forEach((element) => {
      const speed = getElementSpeed(element);
      applyTransform(element, currentX.current, currentY.current, speed);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [settings.smoothness, getElementSpeed, applyTransform]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const container =
      (ref && typeof ref === "object" && ref.current) || internalRef.current;
    if (!container) return;

    const movingElements = container.querySelectorAll(".item-x-y");
    if (movingElements.length === 0) return;

    movingElementsRef.current = movingElements;
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      updateTargetFromMouse(e.clientX, e.clientY);
    };

    const handleResize = () => {
      targetX.current = 0;
      targetY.current = 0;
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop, ref, animate, updateTargetFromMouse]);

  const gridItems: GridItem[] = [
    { iconId: "parallax-ts", width: "26" },
    {
      iconId: "parallax-react",
      width: "30",
      depth: "minus-1",
      viewBox: "0 0 53 53",
    },
    { variant: "none" },
    { variant: "bright" },
    {
      iconId: "parallax-redux",
      width: "30",
      depth: "minus-1",
      viewBox: "0 0 53 53",
    },
    {
      iconId: "parallax-js",
      width: "24",
      viewBox: "0 0 24 24",
      depth: "plus-1",
    },
    { variant: "none" },
    {},
    { depth: "plus-2" },
    {},
    { depth: "minus-2", variant: "outline" },
    {
      iconId: "parallax-js",
      width: "24",
      viewBox: "0 0 24 24",
      depth: "plus-2",
    },
    { variant: "none" },
    { depth: "minus-2" },
    { iconId: "parallax-react", width: "30", viewBox: "0 0 53 53" },
    { depth: "plus-1", variant: "outline" },
    {
      iconId: "parallax-redux",
      width: "30",
      depth: "plus-2",
      viewBox: "0 0 53 53",
    },
    {
      iconId: "parallax-router",
      width: "30",
      depth: "plus-1",
      viewBox: "0 -7 55 55",
    },
    { variant: "none" },
    { depth: "minus-1", variant: "outline" },
    { variant: "none" },
    { variant: "outline" },
    {
      iconId: "parallax-redux",
      width: "30",
      depth: "plus-2",
      viewBox: "0 0 53 53",
    },
    { variant: "outline", depth: "minus-2" },
    { width: "24", iconId: "parallax-js", viewBox: "0 0 24 24" },
    { variant: "none" },
    { depth: "plus-1" },
    { depth: "minus-1", iconId: "parallax-ts", width: "26" },
    { variant: "none" },
    {
      iconId: "parallax-js",
      width: "24",
      viewBox: "0 0 24 24",
      depth: "plus-2",
    },
    { iconId: "parallax-router", width: "30", viewBox: "0 -7 55 55" },
  ];

  return (
    <StyledParallax ref={internalRef}>
      {gridItems.map((item, index) => (
        <ParallaxItem key={index} {...item} />
      ))}
    </StyledParallax>
  );
});

Parallax.displayName = "Parallax";

const StyledParallax = styled.div`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  perspective: 350px;
  perspective-origin: 50%;
  grid-template-rows: auto;
  grid-template-columns: repeat(8, auto);
  grid-auto-columns: auto;
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
  overflow: hidden;
  transform: none;
  z-index: 1;
  pointer-events: none;
`;
