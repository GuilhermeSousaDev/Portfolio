import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { projectsData } from "../../config/projectsData";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function Projects() {
  const isThemeDark = useAppSelector((state) => state.theme.default) === "dark";

  const [buttonIndex, setButtonIndex] = useState<number | null>(null);

  const handleShowButton = (index: number) => {
    setButtonIndex(index);
  }

  return (
    <Box>
      <Typography
        variant="h3"
        color="text.primary"
        sx={{ textAlign: "center", mb: 5 }}
      >
        Projects
      </Typography>
      <Divider />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ bgcolor: "white", borderRadius: 3 }}
      >
        {projectsData.map((project, index) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              key={index}
              onMouseOver={() => handleShowButton(index)}
              onMouseLeave={() => setButtonIndex(null)}
              sx={{
                width: 170,
                height: 100,
                borderRadius: 3,
                border: "1px solid black",
                boxShadow: "2px 2px 2px #151B21",
                m: 5,
                "&:hover": {
                  cursor: "pointer",
                  filter: `drop-shadow(2px 2px 2px ${
                    isThemeDark ? "#5135F0" : "#E66D32"
                  })`,
                  boxShadow: "0px 0px 0px white",
                  
                },
              }}
              src={project.screenshot}
            />
            <Button
              onMouseOver={() => handleShowButton(index)}
              variant="contained"
              sx={{ 
                transform: "translateY(-105px)", 
                width: 100, 
                visibility: index === buttonIndex ? 'visible' : 'hidden',
            }}
            >
              See
            </Button>
            
          </Box>
        ))}
      </Box>
    </Box>
  );
}
