import React from "react";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  isDarkTheme: Boolean;
}

export default function ProjectBoxButton({ children, isDarkTheme }: IProps) {
  const theme = useTheme();

  const buttonStyle = {
    p: "0.75rem 1.2rem",
    bgcolor: isDarkTheme ? "#252525" : "#f6f6f6",
    color: isDarkTheme ? "#e6e6e6" : "#2c2c2c",
    border: `1px solid ${isDarkTheme ? "#2c2c2c" : "#ddd"}`,
    fontSize: "11px",
    borderRadius: "6px",
    maxWidth: 300,
    height: 40,
    '&:hover': {
      border: `1px solid ${isDarkTheme ? "#e6e6e6" : "#2c2c2c"}`,
    }
  };

  return (
    <Button
      sx={[
        buttonStyle,
        {
          [theme.breakpoints.down(460)]: {
            width: 50,
            fontSize: 8,
            height: 30,
          },
          [theme.breakpoints.down(380)]: {
            width: 10,
            fontSize: 7,
            height: 10,
          },
        },
      ]}
      endIcon={<LaunchIcon sx={{ width: 15 }} />}
    >
      {children}
    </Button>
  );
}
