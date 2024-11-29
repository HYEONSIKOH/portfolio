import React from "react";
import * as i from "./IntroduceStyle";
import Java from "../../assets/img/tech/java.svg"
import Spring_Boot from "../../assets/img/tech/spring_boot.svg"
import Sql_Black from "../../assets/img/tech/sql_black.svg"
import Sql_White from "../../assets/img/tech/sql_white.svg"
import Git from "../../assets/img/github.svg"
import Blog from "../../assets/img/blog.svg"
import Linux from "../../assets/img/tech/linux.svg"
import aws from "../../assets/img/tech/aws.svg"
import docker from "../../assets/img/tech/docker.svg"
import Kotiln from "../../assets/img/tech/kotlin.svg"


const Introduce = ({ theme }) => {
    const sqlTheme = theme.textColor === "black" ? Sql_Black : Sql_White;

    const TechSkillIcons = [
        Java,
        Spring_Boot,
        sqlTheme,
        Linux,
        aws,
        docker
    ];

    const LinkIcons = [
        Git,
        Blog,
    ];

    return (
        <i.Center>
            <i.Whole>
                <i.Title>{`Back-End Developer\n나는 행복합니다~~ `}</i.Title>
                <i.SubDescription>{`안녕하세요. 끊임없이 배우고, 발전하며 사용자 경험을 증진시키기 위해 노력하는\n개발자 오현식입니다.`}</i.SubDescription>
                <i.TechSkillTop>
                    <i.TechSKillTxt theme={theme}>{`Tech Stack | `}</i.TechSKillTxt>
                    {TechSkillIcons?.map(tech => <i.TechSKill src={tech}/>)}
                </i.TechSkillTop>
                <i.LinkTop>
                    <i.TechSKillTxt theme={theme}>{`Link | `}</i.TechSKillTxt>
                    <a href="https://github.com/HYEONSIKOH" target="_blank">
                        <i.TechSKill src={Git}/>
                    </a>
                    <a href="https://velog.io/@ks0689/posts" target="_blank">
                        <i.TechSKill src={Blog}/>
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