import Navbar from "../../app/Navbar";
import Home from "../../app/Home";
import Skillset from "../../app/Skillset";
import AppBox from "../../components/MuiCustomComponents/AppBox";
import Projects from "../../app/Projects";
import Contact from "../../app/Contact";
import Message from "../../app/Message";

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
