import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Hobbies from "../../components/HomeComponents/Hobbies";
import AboutMe from "../../components/HomeComponents/AboutMe";

export default function Home() {
  return (
    <Box sx={{ mt: 10 }}>
      <AboutMe />
      <Hobbies />
      <Divider />
    </Box>
  );
}
