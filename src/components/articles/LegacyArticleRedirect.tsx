import { Navigate, useLocation } from "react-router-dom";


function LegacyArticleRedirect() {
  const { pathname, search, hash } = useLocation();

  return <Navigate to={`/articles${pathname.slice("/blog".length)}${search}${hash}`} replace />;
}

export default LegacyArticleRedirect;
