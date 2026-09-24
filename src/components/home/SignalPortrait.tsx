import { PointerEvent, useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import BentoCard from "@components/ui/BentoCard";
import { useThemeModeContext } from "@context/ThemeModeContext";
import ProfileB from "@assets/images/illustration/profile-b.png";
import ProfileG from "@assets/images/illustration/profile-g.png";


type Point = {
  x: number;
  y: number;
};

const SignalPortrait = ({ label }: { label: string }) => {
  const { themeMode } = useThemeModeContext();
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const stageRef = useRef<HTMLDivElement>(null);
  const coordinateRef = useRef<HTMLSpanElement>(null);
  const targetRef = useRef<Point>({ x: 0.56, y: 0.42 });
  const currentRef = useRef<Point>({ x: 0.56, y: 0.42 });
  const interactingRef = useRef(false);
  const lastCoordinateRef = useRef("X 056 / Y 042");

  const baseImage = (themeMode === "dark") ? ProfileB : ProfileG;
  const revealImage = (themeMode === "dark") ? ProfileG : ProfileB;

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage || prefersReducedMotion) {
      return;
    }

    let frameId = 0;
    let previousTime = performance.now();
    const startedAt = previousTime;

    const update = (time: number) => {
      const deltaTime = Math.min((time - previousTime) / 1000, 0.05);
      const elapsed = (time - startedAt) / 1000;
      previousTime = time;

      if (!interactingRef.current) {
        targetRef.current = {
          x: 0.52 + Math.cos(elapsed * 0.52) * 0.16,
          y: 0.46 + Math.sin(elapsed * 0.68) * 0.12
        };
      }

      const follow = 1 - Math.exp(-9 * deltaTime);
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * follow;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * follow;

      stage.style.setProperty("--lens-x", `${currentRef.current.x * 100}%`);
      stage.style.setProperty("--lens-y", `${currentRef.current.y * 100}%`);

      const coordinate = `X ${String(Math.round(currentRef.current.x * 100)).padStart(3, "0")} / Y ${String(Math.round(currentRef.current.y * 100)).padStart(3, "0")}`;

      if (coordinate !== lastCoordinateRef.current && coordinateRef.current) {
        coordinateRef.current.textContent = coordinate;
        lastCoordinateRef.current = coordinate;
      }

      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, [prefersReducedMotion]);

  const updateTarget = (event: PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const bounds = stage.getBoundingClientRect();
    targetRef.current = {
      x: Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width)),
      y: Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height))
    };
    interactingRef.current = true;
  };

  return (
    <BentoCard colSpan={4} rowSpan={3}>
      <Box
        ref={stageRef}
        role="img"
        aria-label={label}
        onPointerMove={updateTarget}
        onPointerDown={updateTarget}
        onPointerLeave={() => {
          interactingRef.current = false;
        }}
        onPointerUp={() => {
          interactingRef.current = false;
        }}
        sx={{
          "--lens-x": "56%",
          "--lens-y": "42%",
          "--lens-size": { xs: "108px", sm: "148px", md: "176px" },
          position: "relative",
          display: "grid",
          placeItems: "center",
          width: "100%",
          minHeight: { xs: "320px", sm: "440px", md: "560px" },
          overflow: "hidden",
          borderRadius: 3,
          cursor: "crosshair",
          touchAction: "pan-y",
          isolation: "isolate",
          "&::before": {
            position: "absolute",
            width: { xs: "260px", sm: "380px", md: "450px" },
            maxWidth: "76%",
            aspectRatio: "1",
            border: "1px solid color-mix(in srgb, var(--text-main), transparent 82%)",
            borderRadius: "50%",
            content: "''",
            transform: "rotate(-8deg) scale(0.98, 1.04)"
          }
        }}>
        <Box
          component="img"
          src={baseImage}
          alt=""
          aria-hidden="true"
          sx={{
            display: "block",
            width: { xs: "280px", sm: "420px", md: "480px" },
            maxWidth: "88%",
            aspectRatio: "1",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "drop-shadow(0 24px 28px color-mix(in srgb, var(--black), transparent 78%))",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none"
            }
          }} />
        <Box sx={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          bgcolor: (themeMode === "dark") ? "var(--blue-100)" : "var(--green-400)",
          maskImage: `radial-gradient(
            circle calc(var(--lens-size) * 0.5) at var(--lens-x) var(--lens-y),
            #000 0 68%,
            transparent 76%
          )`
        }} aria-hidden="true">
          <Box
            component="img"
            src={revealImage}
            alt=""
            sx={{
              display: "block",
              width: { xs: "280px", sm: "420px", md: "480px" },
              maxWidth: "88%",
              aspectRatio: "1",
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none"
              }
            }} />
        </Box>
        <Box aria-hidden="true" sx={{
          position: "absolute",
          top: "var(--lens-y)",
          left: "var(--lens-x)",
          width: "var(--lens-size)",
          aspectRatio: "1",
          border: "1px solid color-mix(in srgb, var(--text-main), transparent 28%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          "&::before, &::after": {
            position: "absolute",
            top: "50%",
            left: "50%",
            bgcolor: "color-mix(in srgb, var(--text-main), transparent 52%)",
            content: "''",
            transform: "translate(-50%, -50%)"
          },
          "&::before": {
            width: "calc(100% + 16px)",
            height: "1px"
          },
          "&::after": {
            width: "1px",
            height: "calc(100% + 16px)"
          }
        }} />
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            left: { xs: 2, sm: 3, md: 3.5 },
            bottom: { xs: 2, sm: 3, md: 3.5 },
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            color: "color-mix(in srgb, var(--text-main), transparent 28%)",
            pointerEvents: "none",
            "&::before": {
              width: { xs: "18px", sm: "26px" },
              height: "1px",
              bgcolor: "currentColor",
              content: "''"
            }
          }}>
          <Box
            component="span"
            ref={coordinateRef}
            sx={{
              fontSize: { xs: "10px", sm: "11px" },
              lineHeight: 1,
              letterSpacing: "0.12em",
              fontVariantNumeric: "tabular-nums"
            }}>
            X 056 / Y 042
          </Box>
        </Box>
      </Box>
    </BentoCard>
  );
};

export default SignalPortrait;
