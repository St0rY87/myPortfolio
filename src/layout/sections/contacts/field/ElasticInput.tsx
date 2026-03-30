import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useElasticLine = (isResetForm?: boolean) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const placeholderRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startPath =
    "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
  const endPath =
    "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

  const getTopValue = () => (window.innerWidth < 576 ? -21 : -25);

  // Effect for resetting the form and animating the placeholder back to its original position
  useEffect(() => {
    if (isResetForm && inputRef.current && placeholderRef.current) {
      const placeholder = placeholderRef.current;
      gsap.to(placeholder, {
        top: 0,
        left: 0,
        scale: 1,
        duration: 0.5,
      });
      inputRef.current.blur();
    }
  }, [isResetForm]);
// Effect for handling focus and blur events on the input field to animate the line and placeholder
  useEffect(() => {
    const input = inputRef.current;
    const line = lineRef.current;
    const placeholder = placeholderRef.current;
    const topValue = getTopValue();

    if (!input || !line || !placeholder) return;

    const handleFocus = () => {
      if (!input.value) {
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        tl.fromTo(
          line,
          { attr: { d: startPath } },
          { attr: { d: endPath }, ease: "power2.out", duration: 0.75 },
          0,
        );
        tl.to(
          line,
          { attr: { d: startPath }, ease: "elastic.out(3, 0.5)" },
          "<50%",
        );

        tl.to(
          placeholder,
          {
            top: topValue,
            left: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.out",
          },
          "<15%",
        );
      }
    };

    const handleBlur = () => {
      if (!input.value) {
        gsap.to(placeholder, {
          top: 0,
          left: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return { inputRef, lineRef, placeholderRef, containerRef };
};
