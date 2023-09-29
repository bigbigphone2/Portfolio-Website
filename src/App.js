import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ExperienceDetails from "./components/ExperienceDetails";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(187, 204, 221, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openExperienceDetail, setOpenExperienceDetail] = useState({ state: false, experience: null });
  const [openProjectDetail, setOpenProjectDetail] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience  openModal={openExperienceDetail} setOpenModal={setOpenExperienceDetail} />
          </Wrapper>  
          <Education />
          <Wrapper>
            <Projects openModal={openProjectDetail} setOpenModal={setOpenProjectDetail} />
          </Wrapper>
          <Footer />
          {openExperienceDetail.state &&
            <ExperienceDetails openModal={openExperienceDetail} setOpenModal={setOpenExperienceDetail} />
          }
          {openProjectDetail.state &&
            <ProjectDetails openModal={openProjectDetail} setOpenModal={setOpenProjectDetail} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
