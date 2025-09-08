import React, {useEffect, useState} from "react";
import * as c from "../Common/CommonStyle";
import * as a from "./AboutMeStyle";
import AboutMeJson from "../../assets/json/AboutMe.json";
import Email from "../../assets/img/common/email.svg";
import Email_light from "../../assets/img/common/email_light.svg";
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
                        <a.Icon src={storedTheme === "dark" ? Email_light : Email}/>
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
                    `\uD83C\uDF31 새로운 도전으로 문제 해결을 즐기는 개발자 \n\n\uD83D\uDD0D 경계를 확장하는 개발자 \n\n🤝 지식을 공유하며 함께 성장하는 개발자`
                }</a.DetailAboutMe>
                <a.Title theme={theme} >{`경험`}</a.Title>
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