import Box from "@mui/material/Box";
import ThemeModeButton from "../../components/NavbarComponents/ThemeModeButton";
import BlogLink from "../../components/NavbarComponents/PageLink";
import MyAvatarImage from "../../components/NavbarComponents/MyAvatarImage";

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between">
      <MyAvatarImage />
      <ThemeModeButton />
    </Box>
  );
}
