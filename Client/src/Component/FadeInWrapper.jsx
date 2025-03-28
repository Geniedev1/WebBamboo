// FadeInWrapper.jsx
import React, { useRef, useEffect, useState } from "react";
import { cloneElement } from "react";

const FadeInWrapper = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target); // chỉ chạy 1 lần
          }
        });
      },
      { threshold: 0.8 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [delay]);

  return React.isValidElement(children)
    ? cloneElement(children, {
        className: `${children.props.className || ""} transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`,
        ref: domRef,
      })
    : <div ref={domRef}> {children} </div>;
};

export default FadeInWrapper;
