import { useEffect, useRef } from "react";

/**
 * Adds a `is-visible` class to children with `.reveal` once they enter the viewport.
 * Pair with the `.reveal` utility in index.css for a subtle fade-up effect.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    const root = rootRef.current ?? document.body;
    const targets = root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return rootRef;
}
