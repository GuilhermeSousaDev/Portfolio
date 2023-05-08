import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LinearProgressWithLabel from "../../components/MuiCustomComponents/LinearProgressWithLabel";

const typographyStyle = { mb: "1rem", mt: "1rem", width: "auto" };

export default function Hobbies() {
  return (
    <Box>
      <Typography color="text.secondary" variant="h6" sx={{ mb: "1rem" }}>
        Spoken Languages
      </Typography>
      <Divider />
      <Typography color="text.secondary" variant="body1" sx={typographyStyle}>
        English
      </Typography>
      <LinearProgressWithLabel value={30} />
      <Typography color="text.secondary" variant="body1" sx={typographyStyle}>
        Português-BR
      </Typography>
      <LinearProgressWithLabel value={100} />
      <Typography
        color="text.secondary"
        variant="h6"
        sx={{ mt: "1rem", mb: "1rem" }}
      >
        My Hobbies
      </Typography>
      <Divider />
      <Typography color="text.secondary" variant="body2" sx={typographyStyle}>
        I really enjoy exercising my brain in various ways, such as reading
        books, playing chess, or solving logic tests. Additionally, I also enjoy
        physical activities like playing soccer and going to the gym to keep my
        body healthy. Outside of my routine, I love traveling to discover new
        places. As for entertainment, my favorite TV show is Breaking Bad.
      </Typography>
    </Box>
  );
}
