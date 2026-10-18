import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Button, Skeleton, useMediaQuery } from "@mui/material";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

import SignalPortrait from "@components/home/SignalPortrait";
import HomeProfile from "@components/home/HomeProfile";
import ProjectPreview from "@components/home/ProjectPreview";
import { H2, Paragraph } from "@components/ui/Typography";
import { FEATURED_PROJECT_LIMIT } from "@assets/data/featuredProjects";
import { fetchPostCollection, type PostSummary } from "@services/notionApi";


function HomeSequence() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const [projects, setProjects] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const observatoryRef = useRef<HTMLDivElement>(null);
  const lastProjectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sequenceRef, offset: ["start start", "end end"] });
  const { scrollYProgress: portraitProgress } = useScroll({ target: observatoryRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const portraitY = useTransform(portraitProgress, [0, 1], [0, -10]);
  const animated = !reducedMotion;

  useLayoutEffect(() => {
    const sequence = sequenceRef.current;
    const stage = observatoryRef.current?.querySelector(".celestial-stage");
    const lastProject = lastProjectRef.current?.querySelector(".project-preview");

    if (!isDesktop || !sequence || !stage || !lastProject) {
      sequence?.style.removeProperty("--home-content-height");

      return;
    }

    const updateHeight = () => {
      const height = Math.max(stage.getBoundingClientRect().height, lastProject.getBoundingClientRect().height);

      sequence.style.setProperty("--home-content-height", `${height}px`);
    };
    const observer = new ResizeObserver(updateHeight);

    updateHeight();
    observer.observe(stage);
    observer.observe(lastProject);

    return () => {
      observer.disconnect();
      sequence.style.removeProperty("--home-content-height");
    };
  }, [isDesktop, projects]);

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        const data = await fetchPostCollection("projects", { featured: true, signal: controller.signal });

        if (!controller.signal.aborted) {
          setProjects(data.results.slice(0, FEATURED_PROJECT_LIMIT));
        }
      } catch {
        if (!controller.signal.aborted) {
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadProjects();
    return () => controller.abort();
  }, []);

  return (
    <>
      <Box ref={sequenceRef} className="home-sequence" sx={{
        display: "grid", alignItems: "start",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1.1fr)" },
        columnGap: { md: 5, lg: 9 }
      }}>
        <Box className="home-observatory-track">
          <Box ref={observatoryRef} className="home-observatory">
            <motion.div style={{ y: animated && !isDesktop ? portraitY : 0, opacity: animated && isDesktop ? opacity : 1 }}>
              <SignalPortrait label={t("home.artworkLabel")} progress={isDesktop ? scrollYProgress : portraitProgress} isScrollAnimated={animated} />
            </motion.div>
          </Box>
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Box className="home-introduction home-panel">
            <Box className="home-introduction-content" sx={{ display: "flex", flexDirection: "column" }}>
              <HomeProfile />
              <Button disableRipple component="a" href="#featured-work" className="home-scroll-link home-action-link" endIcon={<FaArrowDownLong aria-hidden="true" />} sx={{ alignSelf: { xs: "center", md: "flex-start" }, mt: 4, color: "var(--color-accent)" }}>
                {t("home.scrollToWork")}
              </Button>
            </Box>
          </Box>
          <Box id="featured-work" component="section" aria-labelledby="featured-title" aria-busy={loading} sx={{ pt: { xs: 7, md: 8 } }}>
            <Box className="featured-heading" sx={{ mb: { xs: 5, md: 6 }, pb: 3, borderBottom: "1px solid var(--color-border-subtle)" }}>
              <H2 id="featured-title" className="portfolio-heading">{t("home.featured.title")}</H2>
              <Paragraph sx={{ color: "var(--text-sub)", mt: 2, lineHeight: 1.8 }}>{t("home.featured.description")}</Paragraph>
            </Box>
            {loading ? (
              <Box role="status" aria-label={t("projects.loading")}>
                <Paragraph sx={{ color: "var(--text-sub)", mb: 2 }}>{t("projects.loading")}</Paragraph>
                <Skeleton variant="text" width="85%" />
                <Skeleton variant="text" width="65%" />
              </Box>
            ) : hasError ? (
              <Paragraph role="alert" sx={{ color: "var(--text-sub)", lineHeight: 1.8 }}>{t("home.featured.error")}</Paragraph>
            ) : projects.length === 0 ? (
              <Paragraph role="status" sx={{ color: "var(--text-sub)", lineHeight: 1.8 }}>{t("home.featured.empty")}</Paragraph>
            ) : (
              <Box sx={{ display: "grid", gap: { xs: 8, md: 10 } }}>
                {projects.map((project, index) => (
                  <Box key={project.id} ref={index === projects.length - 1 ? lastProjectRef : undefined} className="home-project-panel">
                    <ProjectPreview project={project} priority={index === 0} />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button disableRipple component={Link} to="/projects" className="home-action-link project-list-link" endIcon={<FaArrowRightLong aria-hidden="true" />} sx={{ color: "var(--text-main)", borderBottom: "1px solid var(--color-accent)", borderRadius: 0 }}>
          {t("home.featured.allProjects")}
        </Button>
      </Box>
    </>
  );
}

export default HomeSequence;
