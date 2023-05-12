import Navbar from "./Navbar";
import Home from "./Home";
import Skillset from "./Skillset";
import AppBox from "../components/MuiCustomComponents/AppBox";
import Projects from "./Projects";
import Contact from "./Contact";
import Message from "./Message";

export default function Main() {
  return (
    <AppBox>
        <Navbar />
        <Home />
        <Skillset />
        <Projects />
        <Message />
        <Contact />
    </AppBox>
  );
}
