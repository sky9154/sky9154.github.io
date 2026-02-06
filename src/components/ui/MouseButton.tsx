import { Box } from "@mui/material";
import { useThemeModeContext } from "@context/ThemeModeContext";
import MouseB from "@assets/images/illustration/mouse-b.svg";
import MouseG from "@assets/images/illustration/mouse-g.svg";


const MouseButton = () => {
  const { themeMode } = useThemeModeContext();

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");

    if (aboutElement) {
      window.scrollTo(0, aboutElement.offsetTop - 84);
    }
  }

  return (
    <Box onClick={scrollToAbout} sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      height: "100%"
    }}>
      <img
        src={(themeMode === "dark") ? MouseB : MouseG}
        alt="MouseButton"
      />
    </Box>
  );
}


export default MouseButton;