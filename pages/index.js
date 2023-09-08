import Welcome from "../components/Welcome";
import About from "../components/About";
import Catalogue from "../components/Catalogue";
import Contact from "../components/Contact";

function Index() {
  return (
    <>
      <Welcome />
      <Catalogue />
      <About />
      <Contact />
    </>
  );
}

export default Index;
