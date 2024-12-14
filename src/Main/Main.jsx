import React, {useState, useRef, useEffect} from "react";
import * as c from "../Component/Common/CommonStyle";
import { GlobalStyle } from "../Component/Theme/GlobalStyle";
import Introduce from "../Component/Introduce/Introduce";
import AboutMe from "../Component/AboutMe/AboutMe";
import ToggleBtn from "../Component/Theme/ToggleBtn";
import Project from "../Component/Project/Project";
import ProjectDetail from "../Component/Project/ProjectDetail";
// import TechSkill from "../Component/TechSkill/TechSkill";

const Main = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const techSkillRef = useRef(null);

    useEffect(() => {
        const currentTheme = localStorage.getItem("OHS_PortfolioTheme");

        if (currentTheme === null) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

            const newTheme = mediaQuery.matches === true ? "dark" : "light";
            localStorage.setItem("OHS_PortfolioTheme", newTheme);
        }
    }, []);

    const scrollToSection = (ref) => {
        if (ref.current !== null) {
            const offset = ref.current.offsetTop-94;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    };


    return (
        <>
            <GlobalStyle/>
            <ToggleBtn/>
            {/*<Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} techSkillRef={techSkillRef} />*/}
            <c.total>
                <div ref={homeRef}>
                    <Introduce/>
                </div>
                <div ref={aboutRef}>
                    <AboutMe/>
                </div>
                <div ref={projectRef}>
                    <Project/>
                </div>
                <div style={{paddingBottom: '85px'}} />
            </c.total>
        </>
);
};

export default Main;