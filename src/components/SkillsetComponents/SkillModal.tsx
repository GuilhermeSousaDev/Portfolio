import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Devicon from "../Devicon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface ISkillInfo {
  name: string;
  url: string;
  icon: string;
  color: string;
  subskills: string[];
  isDeviconIcon: boolean;
}

type IProps = {
  open: boolean;
  skill: ISkillInfo;
  onClose: () => void;
};

export default function SkillModal({ open, skill, onClose }: IProps) {
  const theme = useTheme();
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
    borderRadius: "10px",
    [theme.breakpoints.down(500)]: { width: 300 },
    [theme.breakpoints.down(350)]: { width: 'auto' },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
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
                    sx={{ color: isThemeDark ? "#fff" : "#000", textAlign: "center" }}
                    primary={subskill}
                  />
                </ListItem>
              ))
              : ""}
          </List>
        </motion.div>
      </Box>
    </Modal>
  );
}
