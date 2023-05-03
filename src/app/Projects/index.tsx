import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { projectsData } from "../../config/projectsData";

export default function Projects() {
  return (
    <Box>
      <Typography>Projects</Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
      >
        {projectsData.map((project) => (
          <>
            <img 
                style={{ width: 170, height: 100, marginBottom: 20 }} 
                src={project.screenshot} 
            />
          </>
        ))}
      </Box>
    </Box>
  );
}
