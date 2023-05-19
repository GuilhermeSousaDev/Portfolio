import { useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import DeveloperModeTwoToneIcon from "@mui/icons-material/DeveloperModeTwoTone";
import StorageTwoToneIcon from "@mui/icons-material/StorageTwoTone";
import DataObjectTwoToneIcon from "@mui/icons-material/DataObjectTwoTone";
import ComputerIcon from "@mui/icons-material/Computer";
import Devicon from "../Devicon";
import SkillModal from "./SkillModal";
import { skillset } from "../../config/skillsetData";
import { useAppSelector } from "../../hooks/useAppSelector";
import { motion } from "framer-motion";

interface ISkillInfo {
  name: string;
  url: string;
  icon: string;
  subskills: string[];
  isDeviconIcon: boolean;
}
type ISkills = "frontend" | "backend" | "mobile" | "database" | "others";

const skillsGroupColors = {
  frontend: ["#fff", "#5135F0"],
  backend: ["#151B21", "gray"],
  mobile: ["#E66D32", "#fac6ad"],
  database: ["#F0354A", "#f7a6af"],
  others: ["#993399", "#e0a9e0"],
};

const icon = (skillName: ISkills) => {
  const propStyle = { color: skillsGroupColors[skillName][0] };

  return (
    <>
      {skillName == "frontend" && <LanguageIcon sx={propStyle} />}
      {skillName == "backend" && <DataObjectTwoToneIcon sx={propStyle} />}
      {skillName == "mobile" && <DeveloperModeTwoToneIcon sx={propStyle} />}
      {skillName == "database" && <StorageTwoToneIcon sx={propStyle} />}
      {skillName == "others" && <ComputerIcon sx={propStyle} />}
    </>
  );
};

export default function SkillsetBox({ skillName }: { skillName: ISkills }) {
  const theme = useTheme();
  const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [skill, setSkill] = useState<ISkillInfo & { color: string }>();

  const showSkillModal = (languageName: string) => {
    const findedSkill = skillset[skillName].find(
      (skill) => skill.name === languageName
    ) as ISkillInfo;
    const color = skillsGroupColors[skillName][0];

    if (findedSkill) {
      setSkill({
        ...findedSkill,
        color,
      });
      setIsOpenModal(true);
    }
  };

  return (
    <Box
      color="secondary"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "500px",
        height: "300px",
        mb: 5,
        bgcolor: isThemeDark ? "#1f1f1f" : "#fff",
        textAlign: "center",
        borderRadius: "10px",
        border: "1px solid #525557",
        [theme.breakpoints.down("lg")]: {
          width: "600px",
        },
        [theme.breakpoints.down(750)]: {
          width: "400px",
        },
        [theme.breakpoints.down(500)]: {
          width: "275px",
          height: "200px",
        },
        [theme.breakpoints.down(350)]: {
          width: "200px",
          height: "200px",
        },
      }}
    >
      {skill && (
        <SkillModal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          skill={skill}
        />
      )}
      <Avatar sx={{ bgcolor: skillsGroupColors[skillName][1], mb: 5 }}>
        {icon(skillName)}
      </Avatar>
      <Typography
        color={skillsGroupColors[skillName][1]}
        variant="h5"
        sx={{ mb: 1 }}
      >
        {skillName[0].toUpperCase() + skillName.slice(1, skillName.length)}
      </Typography>
      <Box display="flex">
        {skillset[skillName].map((skill, i) => (
          <motion.div key={i} whileTap={{ scale: 0.95 }}>
            <Devicon
              onClick={() => showSkillModal(skill.name)}
              color={skillsGroupColors[skillName][0]}
              iconName={skill.icon}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
