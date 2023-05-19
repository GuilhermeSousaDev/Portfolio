import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";

const typographyStyle = { typography: { xs: "h4", sm: "h3", md: "h2" } };

export default function AboutMe() {
  const theme = useTheme();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Box display="flex" sx={{ [theme.breakpoints.down(500)]: { flexDirection: 'column' } }}>
          <Typography
            color="text.primary"
            sx={[typographyStyle, { mr: 1.2 }]}
          >
            Hi I'm
          </Typography>
            <motion.div 
              style={{ display: 'flex' }}
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <Typography 
                color="text.primary" 
                sx={[typographyStyle, { overflow: 'hidden' }]}
              >
                Guilherme
              </Typography>
            </motion.div>
          
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        viewport={{ once: true }}
      >
        <Typography
          color="text.secondary"
          sx={{
            width: "50%",
            mb: 5,
            typography: { xs: "subtitle1", sm: "h6", md: "h5" },
          }}
        >
          Fullstack Developer
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 3 }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{ typography: { xs: "body2", sm: "body1", md: "h6" }, mb: 10 }}
          color="text.disabled"
        >
          I am 18 years old and a programming student passionate about the world
          of technology. I live in Macaúbas-BA, Brazil, and have been studying
          programming for two years. I am always seeking new knowledge and
          challenges to develop professionally.
          <br /> <br />I am excited about the possibility of showcasing my
          projects and skills in my portfolio, and I hope that my enthusiasm and
          dedication for programming can be evident in every line of code I write.
          My goal is to contribute to the creation of technological solutions that
          can make a difference in people's and companies' lives.
        </Typography>
      </motion.div>
    </>
  );
}
