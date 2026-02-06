import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";


const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default MainLayout;