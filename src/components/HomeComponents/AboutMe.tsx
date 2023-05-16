import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          color="text.primary"
          sx={{ typography: { xs: "h4", sm: "h3", md: "h2" } }}
        >
          Hi, I'm Guilherme
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: 'translateX(-100px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 1, delay: 1 }}
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
        transition={{ duration: 1, delay: 1.5 }}
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
