import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectBoxButton from "./ProjectBoxButton";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IProps {
  project: {
    name: string;
    url: string;
    description: string;
    source: string;
    screenshot: string;
    createdAt: number;
  };
}

export default function ProjectBox({ project }: IProps) {
  const theme = useTheme();
  const isDarkTheme = useAppSelector((state) => state.theme.default) === "dark";

  const variantTheme = {
    bgcolor: isDarkTheme ? "#1f1f1f" : "#fff",
    color: isDarkTheme ? "#fff" : "#1f1f1f",
    descriptionColor: isDarkTheme ? "#999999" : "#242121",
  };

  return (
    <Box
      sx={{
        border: "1px solid #2c2c2c",
        bgcolor: variantTheme.bgcolor,
        borderRadius: "6px",
        padding: "1rem",
        height: "400px",
        width: "300px",
        [theme.breakpoints.down(900)]: { 
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        [theme.breakpoints.down(350)]: { width: "200px" },
        [theme.breakpoints.down(280)]: { width: "150px" },
      }}
    >
      <Typography
        sx={{
          fontSize: "14.4px",
          [theme.breakpoints.down(400)]: { fontSize: "9px" },
        }}
        color="text.primary"
      >
        {project.createdAt}
      </Typography>
      <Typography
        sx={{
          fontSize: "17.6px",
          m: "1.6px 0px 8px",
          [theme.breakpoints.down(400)]: { fontSize: "15px" },
        }}
        color={variantTheme.color}
      >
        {project.name}
      </Typography>
      <Box 
        component="img" 
        src={project.screenshot} 
        sx={{ 
          width: 200, 
          m: "1.6px 0px 8px", 
          borderRadius: "6px",
          [theme.breakpoints.down(400)]: {
            width: '80%',
          }
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: "14.4px",
          [theme.breakpoints.down(400)]: { fontSize: "10px" },
        }}
        color={variantTheme.descriptionColor}
      >
        {project.description}
      </Typography>

      <Box
        display="flex"
        gap="0.5rem"
        sx={{
          mt: "1rem",
          [theme.breakpoints.down(380)]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <a href={project.url} target="_blank">
          <ProjectBoxButton isDarkTheme={isDarkTheme}>Demo</ProjectBoxButton>
        </a>
        {project.source && (
          <a href={project.source} target="_blank">
            <ProjectBoxButton isDarkTheme={isDarkTheme}>
              Source
            </ProjectBoxButton>
          </a>
        )}
      </Box>
    </Box>
  );
}
