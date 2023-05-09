import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <Box
      sx={{
        bgcolor: "#060e16",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        mt: 10,
        p: "2rem",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "30px" }} color="primary">
          Thank you for visite my portfolio!
        </Typography>
        <Typography color="text.secondary" variant="subtitle1">
          Contact me on these platforms.
        </Typography>
      </Box>
      <Typography sx={{ mt: 5, mb: -3 }} variant="body2" color="text.secondary">
        © 2023 Designed by GuilhermeSousaDev
      </Typography>
    </Box>
  );
}
