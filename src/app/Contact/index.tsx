import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import GithubIcon from "@mui/icons-material/Github";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function Contact() {
  const theme = useTheme();
  const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';

  return (
    <Box
      sx={{
        bgcolor: isThemeDark ? "#060e16" : "#f4f5f7",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        border: isThemeDark ? "none" : "1px solid #ddd",
        mt: 10,
        p: "2rem",
      }}
    >
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ [theme.breakpoints.down(1080)]: {
            flexDirection: "column"
          } }}
        >
          <Box>
            <Typography sx={{ fontSize: "30px" }} color="primary">
              Thank you for visite my portfolio!
            </Typography>
            <Typography color="text.secondary" variant="subtitle1">
              Contact me on these platforms.
            </Typography>
          </Box>
          <Box display="flex" gap="1rem" sx={{ mt: 1 }}>
            <a href="https://github.com/GuilhermeSousaDev">
              <GithubIcon color="primary" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-augusto-435420220">
            <LinkedinIcon color="primary" />
            </a>
            <a href="mailto:a.guilhermerocha250@gmail.com">
            <MailIcon color="primary" />
            </a>
          </Box>
        </Box>
      </Box>
      <Divider color={isThemeDark ? "#2c2c2c" : "#ddd"} sx={{ mt: 5, mb: 1 }} />
      <Typography sx={{ mb: -3 }} variant="body2" color="text.secondary">
        © 2023 Designed by GuilhermeSousaDev
      </Typography>
    </Box>
  );
}
