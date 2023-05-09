import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Devicon from "../Devicon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../hooks/useAppSelector";

interface ISkillInfo {
  name: string;
  url: string;
  icon: string;
  color: string;
  subskills: string[];
  isSelected: boolean;
}

type IProps = {
  open: boolean;
  skill: ISkillInfo;
  onClose: () => void;
};

export default function SkillModal({ open, skill, onClose }: IProps) {
  const isThemeDark = useAppSelector((state) => state.theme.default) === "dark";

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: isThemeDark ? "#1f1f1f" : "#fff",
    p: 4,
    boxShadow: 24,
    oveflow: "scroll",
    overflowX: "hidden",
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <a style={{ textDecoration: "none" }} href={skill.url}>
          <Devicon
            iconName={skill.icon}
            color={skill.color}
            onClick={() => null}
          />
        </a>
        <Typography
          variant="h5"
          color="secondary"
          sx={{ mb: 5, ml: "-15px", mt: 1 }}
        >
          {skill.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Sub Skills
        </Typography>
        <List>
          {skill.subskills
            ? skill.subskills.map((subskill, i) => (
                <ListItem key={i}>
                  <ListItemText
                    sx={{ color: isThemeDark ? "#fff" : "#000" }}
                    primary={subskill}
                  />
                </ListItem>
              ))
            : ""}
        </List>
      </Box>
    </Modal>
  );
}
