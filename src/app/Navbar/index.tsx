import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { changeDefaultTheme } from "../../store/ThemeSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { motion } from "framer-motion";
import img from '../../assets/img.jpeg';

export default function Navbar() {
  const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';
  const dispatch = useAppDispatch();

  const variantTheme = {
    borderColor: isThemeDark ? '#232a31' : 'gray',
    bgcolor: isThemeDark ? '#151B21' : 'gray',
    hoverBgColor: isThemeDark ? '#202931' : '#E66D32',
  }

  return (
    <Box display="flex" justifyContent="space-between">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Avatar src={img} color="#F0354A" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <IconButton
          sx={{
            borderRadius: '30%',
            bgcolor: variantTheme.bgcolor,
            border: `1px solid ${variantTheme.borderColor}`,
            '&:hover': {
              bgcolor: variantTheme.hoverBgColor,
            }
          }}
          onClick={() => dispatch(changeDefaultTheme())}
        >
          {isThemeDark ?
            <DarkModeIcon color="primary" /> :
            <LightModeIcon />
          }
        </IconButton>
      </motion.div>
    </Box>
  );
}
