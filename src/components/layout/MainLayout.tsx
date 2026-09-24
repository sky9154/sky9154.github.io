import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";


const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, display: "flex", minHeight: 0 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;