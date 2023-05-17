import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectBox from "../../components/ProjectsComponents/ProjectBox";
import CustomDivider from "../../components/MuiCustomComponents/CustomDivider";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { projectsData } from "../../config/projectsData";

const windowWidth = window.innerWidth;

export default function Projects() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(200px)' }}
      whileInView={{ opacity: 1, transform: 'translate(0)' }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Box sx={{ mb: 15 }}>
        <Typography
          color="text.primary"
          sx={{
            mb: 3,
            mt: 10,
            fontSize: "48px",
            textAlign: "center",
            [theme.breakpoints.down(400)]: { fontSize: "30px" },
          }}
        >
          Projects
        </Typography>
        <CustomDivider />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="2rem"
          sx={{
            borderRadius: 3,
            mt: 5,
            [theme.breakpoints.down(900)]: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            },
            [theme.breakpoints.down(350)]: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, transform: 'translateY(200px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ 
                duration: 1, 
                delay: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center" 
                alignItems="center"
              >
                <ProjectBox project={project} />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}
