import React, { useState, useRef } from "react";
import * as h from "./HeaderStyle";
import GitLogo from "../../assets/img/github.svg";
import Velog from "../../assets/img/velog.svg";

const Header = ({ scrollToSection, homeRef, aboutRef, projectRef, techSkillRef }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleScrollMenu = (menu,sub) => {
        scrollToSection(menu,sub);
        setSubMenuOpen(false);
    }
    return (
        <>
            {subMenuOpen && (
                <h.subMenuTotal>
                    <h.close onClick={() => setSubMenuOpen(false)} />
                    <h.subMenus>
                        <h.subMenu onClick={() => handleScrollMenu(homeRef)}>{`HOME`}</h.subMenu>
                        <h.subMenu onClick={() => handleScrollMenu(aboutRef)}>{`ABOUT ME`}</h.subMenu>
                        <h.subMenu onClick={() => handleScrollMenu(projectRef)}>{`PROJECT`}</h.subMenu>
                        <h.subMenu onClick={() => handleScrollMenu(techSkillRef)}>{`TECH SKILL`}</h.subMenu>
                    </h.subMenus>
                    <h.subBottom></h.subBottom>
                </h.subMenuTotal>
            )}
            <h.total>
                <h.myName onClick={() => scrollToSection(homeRef)}>{`HYEONSIK OH`}</h.myName>
                <h.hamburgerMenu onClick={() => setSubMenuOpen(true)} />
                <h.MenuTotal>
                    <h.Menu onClick={() => scrollToSection(homeRef)}>{`HOME`}</h.Menu>
                    <h.Menu onClick={() => scrollToSection(aboutRef)}>{`ABOUT ME`}</h.Menu>
                    <h.Menu onClick={() => scrollToSection(projectRef)}>{`PROJECT`}</h.Menu>
                    <h.Menu onClick={() => scrollToSection(techSkillRef)}>{`TECH SKILL`}</h.Menu>
                    <a href="https://github.com/HYEONSIKOH" target="_blank">
                        <h.subImg src={GitLogo} />
                    </a>
                    <a href="https://velog.io/@ks0689/posts" target="_blank">
                        <h.subImg src={Velog} />
                    </a>
                </h.MenuTotal>
            </h.total>
        </>
    );
};
export default Header;