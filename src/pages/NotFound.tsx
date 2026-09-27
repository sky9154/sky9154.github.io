import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { H1, H3 } from "@components/ui/Typography";


const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Box className="not-found" sx={{
      minHeight: "100dvh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      bgcolor: "var(--main-bg)",
      color: "var(--text-main)"
    }}>
      <Box className="lost-orbit-chart" aria-hidden="true">
        <svg viewBox="0 0 520 440" focusable="false">
          <g fill="none" stroke="var(--color-decoration)" opacity="0.65">
            {Array.from({ length: 36 }, (_, i) => <path key={i} d={(i % 3 === 0) ? "M260 40v12" : "M260 40v5"} transform={`rotate(${i * 10} 260 215)`} />)}
            <circle cx="63" cy="305" r="22" />
            <circle cx="456" cy="150" r="17" />
            <path d="M41 305h44m-22-22v44M439 150h34M78 94h14m-7-7v14M429 370h12m-6-6v12" />
          </g>
          <g className="lost-orbit-background" fill="none" stroke="var(--color-decoration)">
            <circle cx="260" cy="215" r="175" />
            <circle className="lost-orbit-extra" cx="244" cy="230" r="155" />
            <path d="M260 12v100m0 222v89M246 33h28M253 405h14M82 215h28m300 0h28" />
          </g>
          <g fill="none" stroke="var(--color-accent-muted)" strokeWidth="1.2">
            <path d="M115 215A145 145 0 0 1 405 215" />
            <path d="M180 355A160 160 0 0 1 285 66" />
            <circle cx="295" cy="62" r="9" strokeDasharray="2 4" />
          </g>
          <circle cx="312" cy="37" r="6" fill="var(--color-moon)" />
          <path d="M303 52l5-8M260 116v13m-6-6h12" className="celestial-gold" />
          <text x="260" y="257" textAnchor="middle" className="lost-orbit-number">404</text>
          <circle cx="260" cy="213" r="7" fill="var(--color-moon)" />
          <path d="M260 213l12-19m-12 19l8 11" className="celestial-gold" />
          <g fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
            <path d="M134.426 287.5A145 145 0 0 0 385.574 287.5M135 277l-1 10 11 3" />
            <circle cx="374" cy="304.605" r="4" fill="var(--color-bg)" />
            <path d="M252 365h16m-8-8v16" />
          </g>
          <circle cx="142" cy="328" r="2" fill="var(--color-decoration)" />
          <g className="lost-orbit-background" fill="none" stroke="var(--color-decoration)">
            <path d="M70 215A190 190 0 0 1 155 56M398 338a185 185 0 0 1-75 50M88 202h10m335 26h10M163 71l5 8M355 66l-5 8" />
            <circle cx="408" cy="125" r="8" />
          </g>
          <path d="M109 123h10m-5-5v10M409 330h8m-4-4v8" className="celestial-gold" />
          <circle cx="177" cy="391" r="1.5" fill="var(--color-decoration)" />
        </svg>
      </Box>
      <H1 sx={{ fontSize: { xs: "32px", sm: "44px" }, fontWeight: "700", marginTop: "4px" }}>
        {t("notFound.title")}
      </H1>
      <H3 sx={{ fontWeight: "500", marginTop: "8px", color: "var(--text-sub)" }}>
        {t("notFound.description")}
      </H3>
      <Box
        component={Link}
        to="/"
        sx={{
          display: "block",
          marginTop: "16px",
          fontWeight: "600",
          textDecoration: "underline",
          color: "var(--text-main)",
          minHeight: "44px",
          padding: "12px 20px",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-sm)",
          transition: "background-color var(--motion-fast) var(--ease-standard)",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "none",
            bgcolor: "var(--color-surface-subtle)"
          }
        }}>
        {t("notFound.backHome")}
      </Box>
    </Box>
  );
};

export default NotFound;