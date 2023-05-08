import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { projectsData } from "../../config/projectsData";
import ProjectBox from "../../components/MuiCustomComponents/ProjectBox";
import { useTheme } from "@mui/material";

export default function Projects() {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        color="text.primary"
        sx={{
          mb: 5,
          fontSize: "48px",
          textAlign: "center",
          [theme.breakpoints.down(400)]: { fontSize: "30px" },
        }}
      >
        Projects
      </Typography>
      <Divider />
      <Box
        display="grid"
        gap="1rem"
        gridTemplateColumns="repeat(2, 1fr)"
        justifyContent="center"
        sx={{
          borderRadius: 3,
          mt: 5,
          [theme.breakpoints.down(750)]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {projectsData.map((project, index) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            key={index}
          >
            <ProjectBox project={project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
