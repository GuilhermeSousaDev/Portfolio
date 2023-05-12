import React from 'react';
import Box from "@mui/material/Box";;
import { useAppSelector } from '../../hooks/useAppSelector';

type IProps = {
    children: React.ReactNode;
}

export default function AppBox(props: IProps) {
  const isDarkTheme = useAppSelector(state => state.theme.default) === 'dark';  

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        bgcolor: isDarkTheme ? "#060e16" : "gray",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: isDarkTheme ? "#151B21" : "#fff",
          border: "1px solid #333a41",
          width: "97%",
          height: "100%",
          pl: 5,
          pr: 5,
          pt: 3,
        }}
      >
        { props.children }
      </Box>
    </Box>
  );
}
