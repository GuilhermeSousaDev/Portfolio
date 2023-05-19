import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillsetBox from "../../components/SkillsetComponents/SkillsetBox";
import { motion } from "framer-motion";

export default function Skillset() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(200px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ delay: 0.1, duration: 1 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{ mt: 10 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="text.primary" variant="h3">
          Skillset
        </Typography>
        <Typography
          color="text.primary"
          variant="h6"
          sx={{ textAlign: "center", width: "auto", mb: 8, mt: 2 }}
        >
          I organize my skills into five groups, which are the following
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <SkillsetBox skillName="frontend" />
          <SkillsetBox skillName="backend" />
          <SkillsetBox skillName="mobile" />
          <SkillsetBox skillName="database" />
          <SkillsetBox skillName="others" />
        </Box>
      </Box>
    </motion.div>
  );
}
