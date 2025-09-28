import React from "react";
import * as i from "./IntroduceStyle";

// Lang
import Java from "../../assets/img/tech/java.svg"
import Kotlin from "../../assets/img/tech/kotlin.svg"
import JS from "../../assets/img/tech/javascript.svg"

// Framework
import Spring from "../../assets/img/tech/spring.svg"
import Spring_Boot from "../../assets/img/tech/spring_boot.svg"
import ReactSvg from "../../assets/img/tech/react.svg"

// DB
import Sql from "../../assets/img/tech/sql_white.svg"
import MariaDB from "../../assets/img/tech/mariadb.svg"

// Broker
import Kafka from "../../assets/img/tech/kafka.svg"
import Redis from "../../assets/img/tech/redis.svg"

// DevOps
import Nginx from "../../assets/img/tech/nginx.svg"
import docker from "../../assets/img/tech/docker.svg"
import Linux from "../../assets/img/tech/linux.svg"
import Github_Actions from "../../assets/img/tech/GitHub_Actions.svg"

// Cloud
import AWS from "../../assets/img/tech/aws.svg"

// ETC
import Git from "../../assets/img/github.svg"
import Blog from "../../assets/img/blog.svg"

const Introduce = () => {
    const storedTheme = localStorage.getItem("OHS_PortfolioTheme");

    const techStack = [
        [Java, "Java"],
        [Kotlin, "Kotlin"],
        //[JS, "JavaScript"],
        [Spring, "Spring"],
        [Spring_Boot, "Spring Boot"],
        //[ReactSvg, "React"],
        [Sql, "MySQL"],
        [MariaDB, "MariaDB"],
        [Kafka, "Kafka"],
        [Redis, "Redis"],
        [docker, "Docker"],
        [Nginx, "Nginx"],
        [Github_Actions, "GitHub Actions"],
        [Linux, "Linux"],
        [AWS, "AWS"]
    ];

    return (
        <i.Center>
            <i.Whole>
                <i.Title>{`Back-End Developer\nHyeonsik Oh `}</i.Title>
                <i.SubDescription>{`서비스 흐름을 이해하고, 효율적인 아키텍처를 설계하는 개발자`}</i.SubDescription>
                <i.LinkTop>
                    <i.TechSKillTxt>{`Link | `}</i.TechSKillTxt>
                    <a href="https://github.com/HYEONSIKOH" target="_blank">
                        <i.TechSKill src={Git}/>
                    </a>
                    <a href="https://velog.io/@ks0689/posts" target="_blank">
                        <i.TechSKill src={Blog}/>
                    </a>
                </i.LinkTop>
                <i.TechSkillTop>
                    <i.TechSKillTxt>{`Tech | `}</i.TechSKillTxt>
                    <i.TechSkillRow>
                        {techStack?.map(tech =>
                            <i.TechSkillDiv>
                                <i.TechSKillSvg src={tech[0]}/>
                                <i.TechSKillName>{tech[1]}</i.TechSKillName>
                            </i.TechSkillDiv>
                        )}
                    </i.TechSkillRow>
                </i.TechSkillTop>
            </i.Whole>
            <i.Container>
                <i.LiquidShape></i.LiquidShape>
            </i.Container>
        </i.Center>
    );
};
export default Introduce;