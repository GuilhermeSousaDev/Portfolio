import { Avatar, useTheme } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";

type IProps = {
  iconName: string;
  color: string;
  isDeviconIcon?: boolean;
  onClick: () => void;
};

export default function Devicon({ iconName, color, isDeviconIcon, onClick }: IProps) {
  const theme = useTheme();
  const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';
  const adjustBorderColorForContrastTheme = color === "#fff" ? "#5135F0" : color === '#151B21' ? "gray" : color;

  return (
    <Avatar
      onClick={onClick}
      sx={{
        width: "58px",
        height: "58px",
        bgcolor: isThemeDark ? "#1f1f1f" : "#fff",
        border: `2px solid ${isThemeDark ? "#383838" : "#adb5bd"}`,
        ml: "-15px",
        "&:hover": {
          border: `2px solid ${adjustBorderColorForContrastTheme}`,
          zIndex: 2,
          cursor: "pointer",
        },
        [theme.breakpoints.down(500)]: {
          width: "50px",
          height: "50px",
        },
        [theme.breakpoints.down(350)]: {
          width: "40px",
          height: "40px",
        },
      }}
    >
      <i style={{ fontSize: '30px' }} className={iconName}></i>
    </Avatar>
  );
}
