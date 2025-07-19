import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import { ThemeProvider } from "./components/theme-provider";
import About from "./components/sections/About";
import CustomCursor from "./components/ui/CustomCursor";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import { Quote } from "./components/sections/Quote";
import Contact from "./components/sections/ContactMe";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Quote />
    </ThemeProvider>
  );
};

export default App;
