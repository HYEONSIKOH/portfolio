import React, {useEffect, useState} from "react";
import * as c from "../Common/CommonStyle";
import * as a from "./AboutMeStyle";
import AboutMeJson from "../../assets/json/AboutMe.json";
import Email from "../../assets/img/common/email.svg";
import Git from "../../assets/img/github.svg"
import Git_light from "../../assets/img/github_light.svg"
import {darkTheme, lightTheme} from "../Theme/Theme";

const AboutMe = () => {
    const storedTheme = localStorage.getItem("OHS_PortfolioTheme");
    const [theme, setTheme] = useState(storedTheme === "dark" ? darkTheme : lightTheme);

    useEffect(() => {
        // 테마 변경 함수
        const updateTheme = () => {
            const currentTheme = localStorage.getItem("OHS_PortfolioTheme");
            setTheme(currentTheme === "dark" ? darkTheme : lightTheme);
        };

        // storage 이벤트 감지
        window.addEventListener("storage", updateTheme);

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener("storage", updateTheme);
        };
    }, []);

    return (
        <a.Center>
            <a.Whole>
                <c.Flex>
                    <a.Name>{`오현식`}</a.Name>
                    <a.Name isEnName={true}>{`HYEONSIK OH`}</a.Name>
                </c.Flex>
                <c.Flex>
                    <a href="mailto:ks06891@naver.com" style={{ display: "flex", alignItems: "center", color : theme.textColor2, textDecoration : "none", marginBottom : "10px" }}>
                        <a.Icon src={Email}/>
                        <a.InfoText>{`ks06891@naver.com`}</a.InfoText>
                    </a>
                </c.Flex>
                <c.Flex>
                    <a href="https://github.com/HYEONSIKOH" target="_blank" style={{ display: "flex", alignItems: "center", color : theme.textColor2, textDecoration : "none" }}>
                        <a.Icon src={storedTheme === "dark" ? Git_light : Git}/>
                        <a.InfoText>{`@HYEONSIKOH`}</a.InfoText>
                    </a>
                </c.Flex>
                <a.DetailAboutMe>{
                    `📝 문제의 코드 속에서 답을 찾는 재미를 느끼는 개발자 \n\n 🎮 개발을 게임처럼 즐기고 성취감을 느끼는 개발자 \n\n ‍🔬 기술을 탐구하며, 동시에 새로운 도전을 즐기는 개발자`
                }</a.DetailAboutMe>
                <a.Title theme={theme} >{`이력`}</a.Title>
                {AboutMeJson.project.experience.map((val) => (
                    <c.Flex>
                        <a.Date theme={theme}>{val.date}</a.Date>
                        <a.Descript theme={theme}>{val.descript}</a.Descript>
                    </c.Flex>
                ))}
                <a.Title theme={theme} >{`수상내역`}</a.Title>
                {AboutMeJson.project.award.map((val) => (
                    <c.Flex>
                        <a.Date theme={theme}>{val.date}</a.Date>
                        <a.Descript theme={theme}>{val.descript}</a.Descript>
                    </c.Flex>
                ))}
                <a.Title theme={theme} >{`자격증`}</a.Title>
                {AboutMeJson.project.certificate.map((val) => (
                    <c.Flex>
                        <a.Date theme={theme}>{val.date}</a.Date>
                        <a.Descript theme={theme}>{val.descript}</a.Descript>
                    </c.Flex>
                ))}
            </a.Whole>
        </a.Center>
    );
};
export default AboutMe;