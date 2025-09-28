import React, {useEffect, useState} from "react";
import * as c from "../Common/CommonStyle";
import * as a from "./AboutMeStyle";
import AboutMeJson from "../../assets/json/AboutMe.json";
import Email from "../../assets/img/common/email.svg";
import Email_light from "../../assets/img/common/email_light.svg";
import Git from "../../assets/img/github.svg"
import Git_light from "../../assets/img/github_light.svg"
import {darkTheme, lightTheme} from "../Theme/Theme";
import ReactMarkdown from "react-markdown";


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
                    <a href="mailto:hyeonsik0407@gmail.com" style={{ display: "flex", alignItems: "center", color : theme.textColor2, textDecoration : "none", marginBottom : "10px" }}>
                        <a.Icon src={storedTheme === "dark" ? Email_light : Email}/>
                        <a.InfoText>{'hyeonsik0407@gmail.com'}</a.InfoText>
                    </a>
                </c.Flex>
                <c.Flex>
                    <a href="https://github.com/HYEONSIKOH" target="_blank" style={{ display: "flex", alignItems: "center", color : theme.textColor2, textDecoration : "none" }}>
                        <a.Icon src={storedTheme === "dark" ? Git_light : Git}/>
                        <a.InfoText>{`@HYEONSIKOH`}</a.InfoText>
                    </a>
                </c.Flex>
                <a.DetailAboutMe>
                    <ReactMarkdown>
                        {
                           "다양한 분야를 경험하며, 서비스 전체 흐름을 볼 수 있는 시야를 가지게 되었습니다.\n" +
                            "1. " + "**Java & Spring Boot**를 통해 Restful API 제작 및 안정성을 고려한 환경을 구축하였습니다.\n" +
                            "2. **JavaScript & React**를 통한 웹 UI를 제작하며,\n**Axios**를 통해 JSON 기반 통신을 구현하여 프론트와 백엔드 간 상호작용을 경험했습니다.\n" +
                            "3. **PyTorch** 기반 객체 탐지 딥러닝 모델을 직접 학습시켜 서비스 품질을 기존 대비 15% 개선했습니다. \n또한 **Flask**로 API 서버를 구축하여 실시간 객체 탐지를 구현했습니다.\n" +
                            "4. **Docker & GitHub Actions**를 통해 CI/CD 파이프라인을 구축하며 테스트와 배포를 자동화했습니다.\n" +
                            "5. **AWS EC2, CloudType, Vercel** 및 자체 홈서버 등 다양한 환경에서 리눅스를 통한 서비스를 배포했습니다.\n" +
                            "\n" +
                            "다양한 개발 경험을 바탕으로 서비스 전반적인 흐름을 이해하고, 효율적인 아키텍처를 설계해 안정적인 서비스를 개발하겠습니다."
                        }
                    </ReactMarkdown>
                </a.DetailAboutMe>
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