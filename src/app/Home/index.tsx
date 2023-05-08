import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LinearProgressWithLabel from "../../components/MuiCustomComponents/LinearProgressWithLabel";

const typographyStyle = { mb: "1rem", mt: "1rem", width: "auto" };

export default function Home() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        color="text.primary"
        sx={{ typography: { xs: "h5", sm: "h3", md: "h2" } }}
      >
        Hi, I'm Guilherme
      </Typography>
      <Typography
        color="text.secondary"
        sx={{
          width: "50%",
          mb: 5,
          typography: { xs: "subtitle1", sm: "h6", md: "h5" },
        }}
      >
        Fullstack Developer
      </Typography>
      <Typography
        sx={{ typography: { xs: "body2", sm: "body1", md: "h6" }, mb: 8 }}
        color="text.disabled"
      >
        I am 18 years old and a programming student passionate about the world
        of technology. I live in Macaúbas-BA, Brazil, and have been studying
        programming for two years. I am always seeking new knowledge and
        challenges to develop professionally.
        <br /> <br />I am excited about the possibility of showcasing my
        projects and skills in my portfolio, and I hope that my enthusiasm and
        dedication for programming can be evident in every line of code I write.
        My goal is to contribute to the creation of technological solutions that
        can make a difference in people's and companies' lives.
      </Typography>
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
          books, playing chess, or solving logic tests. Additionally, I also
          enjoy physical activities like playing soccer and going to the gym to
          keep my body healthy. Outside of my routine, I love traveling to
          discover new places. As for entertainment, my favorite TV show is
          Breaking Bad.
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}
