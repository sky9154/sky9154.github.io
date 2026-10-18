import { useEffect, useRef } from "react";


function useDecorationMotion() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isInView = false;

    const updateMotion = () => {
      const isActive = isInView && !document.hidden && !reducedMotion.matches;

      scene.style.setProperty("--decoration-play-state", isActive ? "running" : "paused");
      scene.dataset.motionActive = String(isActive);
    };
    const observer = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting;

      updateMotion();
    });

    observer.observe(scene);
    document.addEventListener("visibilitychange", updateMotion);
    reducedMotion.addEventListener("change", updateMotion);

    updateMotion();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateMotion);
      reducedMotion.removeEventListener("change", updateMotion);
    };
  }, []);

  return sceneRef;
}

export default useDecorationMotion;
