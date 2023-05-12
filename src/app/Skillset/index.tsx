import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillsetBox from "../../components/SkillsetComponents/SkillsetBox";

export default function Skillset() {
  return (
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
        I organize my skills into four groups, which are the following
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
      </Box>
    </Box>
  );
}
