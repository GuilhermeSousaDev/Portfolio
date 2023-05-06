import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

interface IProps {
  project: {
    name: string;
    url: string;
    description: string;
    screenshot: string;
    createdAt: number;
  };
}

export default function ProjectBox({ project }: IProps) {
  return (
    <Box
      sx={{
        border: "1px solid #2c2c2c",
        bgcolor: "#1f1f1f",
        borderRadius: "6px",
        padding: "1rem",
        width: "370px",
        height: "183px",
      }}
    >
      <Typography sx={{ fontSize: "14.4px" }} color="text.primary">
        {project.createdAt}
      </Typography>
      <Typography
        sx={{ fontSize: "17.6px", margin: "1.6px 0px 8px" }}
        color="#fff"
      >
        {project.name}
      </Typography>
      <Typography sx={{ fontSize: "14.4px" }} color="#999999">
        {project.description}
      </Typography>
      <Box display="flex" gap="0.5rem" sx={{ mt: "1rem" }}>
        <Button
          sx={{
            p: "0.75rem 1.2rem",
            bgcolor: "#252525",
            color: "#e6e6e6",
            fontSize: "11px",
            borderRadius: "6px",
          }}
          endIcon={<LaunchIcon fontSize="small" />}
        >
          Demo
        </Button>
        <a href={project.url}>
          <Button
            sx={{
              p: "0.75rem 1.2rem",
              bgcolor: "#252525",
              color: "#e6e6e6",
              fontSize: "11px",
              borderRadius: "6px",
            }}
            endIcon={<LaunchIcon fontSize="small" />}
          >
            Source
          </Button>
        </a>
      </Box>
    </Box>
  );
}
