import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";
import { projectsData } from "../../config/projectsData";

export default function Projects() {
  const theme = useTheme();

  return (
    <Box>
      <Typography 
        variant="h3" 
        color="text.primary" 
        sx={{ textAlign: 'center', mb: 5 }}
      >
        Projects
      </Typography>
      <Divider />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        {projectsData.map((project) => (
          <>
            <Box
              component="img"
              sx={{
                width: 170,
                height: 100,
                borderRadius: 3,
                m: 5,
                '&:hover': {
                  cursor: 'pointer',
                  filter: 'drop-shadow(2px 2px 2px #5135F0)',
                },
              }}
              src={project.screenshot}
            />
          </>
        ))}
      </Box>
    </Box>
  );
}
