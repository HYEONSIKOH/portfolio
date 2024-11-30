import React, { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../Theme/Theme";
import * as i from "./IntroduceStyle";
import Java from "../../assets/img/tech/java.svg"
import Spring_Boot from "../../assets/img/tech/spring_boot.svg"
import Sql_Black from "../../assets/img/tech/sql_black.svg"
import Sql_White from "../../assets/img/tech/sql_white.svg"
import Git from "../../assets/img/github.svg"
import Git_light from "../../assets/img/github_light.svg"
import Blog from "../../assets/img/blog.svg"
import Blog_light from "../../assets/img/blog_light.svg"
import Linux from "../../assets/img/tech/linux.svg"
import aws from "../../assets/img/tech/aws.svg"
import Aws_light from "../../assets/img/tech/aws_light.svg"
import docker from "../../assets/img/tech/docker.svg"
import Kotiln from "../../assets/img/tech/kotlin.svg"


const Introduce = () => {
    const storedTheme = localStorage.getItem("OHS_PortfolioTheme");
    const [theme, setTheme] = useState(storedTheme === "dark" ? darkTheme : lightTheme);
    const [sqlTheme, setSqlTheme] = useState(Sql_White); // 초기값 설정
    const [awsTheme, setAwsTheme] = useState(Sql_White); // 초기값 설정
    const [gitTheme, setGitTheme] = useState(Sql_White); // 초기값 설정
    const [blogTheme, setBlogTheme] = useState(Sql_White); // 초기값 설정

    const TechSkillIcons
        = [ Java, Spring_Boot, sqlTheme, Linux, awsTheme, docker];

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

    useEffect(() => {
        // 0.3초 뒤에 sqlTheme 업데이트
        const timer = setTimeout(() => {
            const newSqlTheme = theme.textColor === "black" ? Sql_Black : Sql_White;
            const newAwsTheme = theme.textColor === "black" ? aws : Aws_light;
            const newGitTheme = theme.textColor === "black" ? Git : Git_light;
            const newBlogTheme = theme.textColor === "black" ? Blog : Blog_light;

            setSqlTheme(newSqlTheme);
            setAwsTheme(newAwsTheme);
            setGitTheme(newGitTheme);
            setBlogTheme(newBlogTheme);
        }, 300);

        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => clearTimeout(timer);
    }, [theme]); // `theme`가 변경될 때 실행

    return (
        <i.Center>
            <i.Whole>
                <i.Title>{`Back-End Developer\nHYEONSIK OH `}</i.Title>
                <i.SubDescription>{`안녕하세요. 끊임없이 배우고, 발전하며 사용자 경험을 증진시키기 위해 노력하는\n개발자 오현식입니다.`}</i.SubDescription>
                <i.TechSkillTop>
                    <i.TechSKillTxt theme={theme}>{`Tech Stack | `}</i.TechSKillTxt>
                    {TechSkillIcons?.map(tech => <i.TechSKill src={tech}/>)}
                </i.TechSkillTop>
                <i.LinkTop>
                    <i.TechSKillTxt theme={theme}>{`Link | `}</i.TechSKillTxt>
                    <a href="https://github.com/HYEONSIKOH" target="_blank">
                        <i.TechSKill src={gitTheme}/>
                    </a>
                    <a href="https://velog.io/@ks0689/posts" target="_blank">
                        <i.TechSKill src={blogTheme}/>
                    </a>
                </i.LinkTop>
            </i.Whole>
            <i.Container>
            <i.LiquidShape theme={theme}></i.LiquidShape>
            </i.Container>
        </i.Center>
    );
};
export default Introduce;