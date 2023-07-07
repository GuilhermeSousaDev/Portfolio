import '../../index.css';
import Box from "@mui/material/Box";
import Hobbies from "../../components/HomeComponents/Hobbies";
import AboutMe from "../../components/HomeComponents/AboutMe";
import CustomDivider from '../../components/MuiCustomComponents/CustomDivider';

export default function Home() {
  return (
    <Box sx={{ mt: 10 }}>
      <AboutMe />
      <Hobbies />
      <CustomDivider />
    </Box>
  );
}
