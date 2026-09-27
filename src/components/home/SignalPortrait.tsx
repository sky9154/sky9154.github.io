import { useEffect, useRef, type PointerEvent } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { useThemeModeContext } from "@context/ThemeModeContext";
import ProfileDark from "@assets/images/illustration/profile-dark.webp";
import ProfileLight from "@assets/images/illustration/profile-light.webp";
import CelestialLeft from "@assets/images/celestial/celestial-left.svg";
import CelestialRight from "@assets/images/celestial/celestial-right.svg";


const stars = [
  [126, 58], [246, 76], [392, 46], [510, 80], [180, 144],
  [458, 111], [105, 258], [544, 222], [83, 350], [563, 340],
  [130, 437], [207, 474], [432, 469], [548, 489], [152, 548],
  [280, 562], [401, 545], [510, 570], [346, 106], [568, 152]
].map(([x, y], index) => ({ x, y, r: (index % 5 === 0) ? 1.4 : 0.8 }));

const SignalPortrait = ({ label }: { label: string }) => {
  const { t } = useTranslation();
  const { themeMode } = useThemeModeContext();

  const stageRef = useRef<HTMLDivElement>(null);
  const coordinateRef = useRef<HTMLSpanElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const boundsRef = useRef<DOMRect | null>(null);
  const wakeRef = useRef<() => void>(() => { });
  const enabledRef = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frameId = 0;
    let previousTime = 0;
    let visible = false;
    let lastCoordinate = "";

    const stop = () => {
      cancelAnimationFrame(frameId); frameId = 0;
    };

    const update = (time: number) => {
      frameId = 0;

      if (!enabledRef.current) {
        return;
      }

      const delta = Math.min((time - previousTime) / 1000, 0.05);

      previousTime = time;

      const follow = 1 - Math.exp(-8 * delta);
      const point = currentRef.current;

      point.x += (targetRef.current.x - point.x) * follow;
      point.y += (targetRef.current.y - point.y) * follow;

      const settled = Math.abs(targetRef.current.x - point.x) + Math.abs(targetRef.current.y - point.y) < 0.025;

      if (settled) {
        Object.assign(point, targetRef.current);
      }

      stage.style.setProperty("--pointer-x", `${point.x.toFixed(3)}px`);
      stage.style.setProperty("--pointer-y", `${point.y.toFixed(3)}px`);

      const coordinate = `X ${Math.round(point.x + 50).toString().padStart(3, "0")} / Y ${Math.round(point.y + 50).toString().padStart(3, "0")}`;

      if (coordinate !== lastCoordinate && coordinateRef.current) {
        coordinateRef.current.textContent = coordinate;
        lastCoordinate = coordinate;
      }

      if (!settled) {
        frameId = requestAnimationFrame(update);
      }
    };
    const wake = () => {
      if (enabledRef.current && !frameId) {
        previousTime = performance.now();
        frameId = requestAnimationFrame(update);
      }
    };
    wakeRef.current = wake;
    const reset = () => {
      stop();

      targetRef.current = { x: 0, y: 0 };
      currentRef.current = { x: 0, y: 0 };
      stage.style.setProperty("--pointer-x", "0px");
      stage.style.setProperty("--pointer-y", "0px");

      if (coordinateRef.current) {
        coordinateRef.current.textContent = "X 050 / Y 050";
      }

      lastCoordinate = "";
    };
    const sync = () => {
      const active = visible && !document.hidden;

      stage.dataset.active = String(active);
      stage.dataset.visible = String(visible);
      enabledRef.current = active && !reduced.matches && finePointer.matches;

      if (!enabledRef.current) {
        reset();
      }

      boundsRef.current = null;
    };

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0 });

    observer.observe(stage);

    const invalidateBounds = () => { boundsRef.current = null; };
    const resizeObserver = new ResizeObserver(invalidateBounds);

    resizeObserver.observe(stage);
    reduced.addEventListener("change", sync);
    finePointer.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("scroll", invalidateBounds, { passive: true });

    sync();

    return () => {
      stop();

      enabledRef.current = false;
      wakeRef.current = () => { };
      observer.disconnect();
      resizeObserver.disconnect();
      reduced.removeEventListener("change", sync);
      finePointer.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("scroll", invalidateBounds);
    };
  }, []);

  const updateTarget = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabledRef.current || event.pointerType === "touch" || !stageRef.current) {
      return;
    }

    const bounds = boundsRef.current ?? (boundsRef.current = stageRef.current.getBoundingClientRect());

    targetRef.current = {
      x: (Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) - 0.5) * 28,
      y: (Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)) - 0.5) * 24
    };

    wakeRef.current();
  };

  return (
    <Box sx={{ minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box ref={stageRef} className="celestial-stage" role="img" aria-label={label}
        data-active="false" data-visible="false"
        onPointerMove={updateTarget}
        onPointerLeave={() => {
          if (!enabledRef.current) {
            return;
          }

          targetRef.current = { x: 0, y: 0 };
          boundsRef.current = null;
          wakeRef.current();
        }}>
        <div className="parallax-layer layer-stars" aria-hidden="true">
          <svg viewBox="0 0 640 600" focusable="false">
            {stars.map((star, index) => (
              <circle key={index} cx={star.x} cy={star.y} r={star.r}
                className={(index % 3 === 0) ? "star star-twinkle" : "star star-secondary"}
                style={{ animationDelay: `${index * -0.7}s` }} />
            ))}
            <path d="M120 180v16m-8-8h16M532 406v20m-10-10h20M174 444v12m-6-6h12" className="celestial-gold" />
          </svg>
        </div>
        <div className="parallax-layer layer-geometry" aria-hidden="true">
          <svg viewBox="0 0 640 600" focusable="false">
            <circle cx="320" cy="300" r="218" className="celestial-faint" />
            <circle cx="320" cy="300" r="197" className="celestial-stroke" />
            <circle cx="320" cy="300" r="156" className="celestial-faint" />
            <g className="orbit-turn">
              {Array.from({ length: 60 }, (_, i) => (
                <line key={i} x1="320" x2="320" y1="82" y2={(i % 5 === 0) ? "96" : "87"}
                  transform={`rotate(${i * 6} 320 300)`} className={(i % 5 === 0) ? "celestial-gold" : "celestial-stroke"} />
              ))}
              <circle cx="320" cy="82" r="4" fill="var(--color-accent)" />
            </g>
            <path d="M91 300h458M320 66v468M165 145l310 310M165 455l310-310" className="celestial-faint geometry-secondary" />
            <ellipse cx="320" cy="300" rx="250" ry="91" transform="rotate(-28 320 300)" className="celestial-gold" />
            <ellipse cx="320" cy="300" rx="245" ry="108" transform="rotate(48 320 300)" className="celestial-stroke geometry-secondary" />
            <g className="clock-hand"><path d="M320 300V106" className="celestial-gold" /><circle cx="320" cy="111" r="3" fill="var(--color-accent)" /></g>
          </svg>
        </div>
        <div className="parallax-layer layer-moon" aria-hidden="true">
          <svg viewBox="0 0 640 600" focusable="false">
            <g className="moon-drift">
              <circle cx="288" cy="254" r="94" fill="var(--color-moon)" />
              <path d="M290 160a94 94 0 0 0 0 188c-47-48-47-140 0-188Z" fill="var(--color-accent-muted)" opacity="0.28" />
              <circle cx="270" cy="224" r="21" fill="none" stroke="var(--color-accent-muted)" opacity="0.34" />
              <circle cx="315" cy="274" r="32" fill="none" stroke="var(--color-accent-muted)" opacity="0.23" />
              <circle cx="245" cy="281" r="9" fill="var(--color-accent-muted)" opacity="0.15" />
              <path d="M217 240q70-42 145 5M216 260q72-30 143 12" fill="none" stroke="var(--color-accent-muted)" opacity="0.2" />
            </g>
            <path d="M166 520h308" className="celestial-faint" />
            {[0, 1, 2, 3, 4].map((phase) => (
              <g key={phase} transform={`translate(${208 + phase * 56} 520)`}>
                <circle r="12" fill="var(--color-bg)" stroke="var(--color-accent-muted)" />
                {(phase === 2) ? <circle r="10" fill="var(--color-moon)" /> :
                  <path d={(phase < 2) ? "M0-10a10 10 0 0 1 0 20Q12 0 0-10" : "M0-10a10 10 0 0 0 0 20Q-12 0 0-10"}
                    fill="var(--color-moon)" transform={(phase % 2 === 0) ? "scale(.65 1)" : undefined} />}
              </g>
            ))}
          </svg>
          <img className="celestial-character" src={(themeMode === "dark") ? ProfileDark : ProfileLight} alt="" draggable={false} width="400" height="400" />
        </div>
        <div className="parallax-layer layer-foreground" aria-hidden="true">
          <span
            className="celestial-vertical-svg celestial-vertical-left"
            style={{
              maskImage: `url(${CelestialLeft})`,
              WebkitMaskImage: `url(${CelestialLeft})`,
              aspectRatio: "1040 / 8000",
            }}
            aria-hidden="true"
          />
          <span
            className="celestial-vertical-svg celestial-vertical-right"
            style={{
              maskImage: `url(${CelestialRight})`,
              WebkitMaskImage: `url(${CelestialRight})`,
              aspectRatio: "1040 / 9160",
            }}
            aria-hidden="true"
          />
          <svg viewBox="0 0 640 600" focusable="false">
            <path d="M84 140v-20h20M536 450h20v-20M93 394l6-6 6 6-6 6Z" className="celestial-gold" />
            <circle cx="484" cy="166" r="8" className="celestial-gold" />
            <path d="M472 166h24M484 154v24" className="celestial-gold" />
          </svg>
        </div>
        <span className="celestial-status" aria-hidden="true">{t("home.signal.mode")} / {t(`home.signal.${themeMode}`)}</span>
        <span ref={coordinateRef} className="celestial-coordinate" aria-hidden="true">X 050 / Y 050</span>
        <span className="celestial-hint" aria-hidden="true">{t("home.signal.hint")}</span>
      </Box>
    </Box>
  );
};

export default SignalPortrait;