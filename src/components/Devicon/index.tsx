import { Avatar, useTheme } from "@mui/material";

type IProps = {
  iconName: string;
  color: string;
  onClick: () => void;
};

export default function Devicon({ iconName, color, onClick }: IProps) {
  const theme = useTheme();

  return (
    <Avatar
      onClick={onClick}
      sx={{
        width: "58px",
        height: "58px",
        bgcolor: "white",
        border: "2px solid #adb5bd",
        ml: "-15px",
        "&:hover": {
          border: `2px solid ${color === "#fff" ? "#5135F0" : color}`,
          zIndex: 2,
          cursor: "pointer",
        },
        [theme.breakpoints.down(500)]: {
          width: "50px",
          height: "50px",
        },
      }}
    >
      <i style={{ fontSize: '30px' }} className={iconName}></i>
    </Avatar>
  );
}
