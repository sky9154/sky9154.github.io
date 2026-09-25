import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";


const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, display: "flex", minHeight: 0 }}>
        <Suspense fallback={(
          <Box
            role="status"
            aria-label="Loading page"
            sx={{
              flex: 1,
              minHeight: "50vh",
              display: "grid",
              placeItems: "center",
              color: "var(--text-main)"
            }}>
            <CircularProgress size={32} color="inherit" />
          </Box>
        )}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;