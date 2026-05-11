import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  speed?: number; // -1..1, negative = moves opposite to scroll
  className?: string;
  children: ReactNode;
};

const Parallax = ({ speed = 0.2, className, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2 - vh / 2;
      setY(center * speed * -1);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }}>
      {children}
    </div>
  );
};

export default Parallax;
