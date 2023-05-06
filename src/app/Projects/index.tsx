import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { projectsData } from "../../config/projectsData";
import { useAppSelector } from "../../hooks/useAppSelector";
import ProjectBox from "../../components/MuiCustomComponents/ProjectBox";

export default function Projects() {
  const isThemeDark = useAppSelector((state) => state.theme.default) === "dark";

  const [buttonIndex, setButtonIndex] = useState<number | null>(null);

  const handleShowButton = (index: number) => {
    setButtonIndex(index);
  };

  return (
    <Box>
      
      <Typography
        color="text.primary"
        sx={{ textAlign: "center", mb: 5, fontSize: "48px" }}
      >
        Projects
      </Typography>
      <Divider />
      <Box
        display="grid"
        gap="1rem"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{ borderRadius: 3, mt: 5 }}
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
