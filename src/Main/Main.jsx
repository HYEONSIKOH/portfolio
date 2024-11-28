import React, {useState, useRef} from "react";
import * as c from "../Component/Common/CommonStyle";
import Header from "../Component/Header/Header";
import { GlobalStyle } from "../Component/Theme/GlobalStyle";
import { darkTheme, lightTheme } from "../Component/Theme/Theme";
import Introduce from "../Component/Introduce/Introduce";
// import AboutMe from "../Component/AboutMe/AboutMe";
// import Project from "../Component/Project/Project";
// import ProjectDetail from "../Component/Project/ProjectDetail";
// import TechSkill from "../Component/TechSkill/TechSkill";

const Main = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const techSkillRef = useRef(null);
    const [theme, setTheme] = useState("dark");

    const scrollToSection = (ref) => {

        if (ref.current !== null) {
            const offset = ref.current.offsetTop-94;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    };

    const toggleTheme = () => {
        setTheme(() => {
            return theme === "dark" ? "dark" : "light";
        });
    };

    return (
        <>
            <GlobalStyle theme={theme === "dark" ? darkTheme : lightTheme}/>
            <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} techSkillRef={techSkillRef} />
            <c.total>
                <div ref={homeRef}>
                    <Introduce theme={theme === "dark" ? darkTheme : lightTheme} />
                </div>
                {/*<div ref={aboutRef}>*/}
                {/*    <AboutMe/>*/}
                {/*</div>*/}
                {/*<div ref={projectRef}>*/}
                {/*    <Project/>*/}
                {/*</div>*/}
                {/*<div ref={techSkillRef}>*/}
                {/*    <TechSkill/>*/}
                {/*</div>*/}
            </c.total>
        </>
    );
};

export default Main;