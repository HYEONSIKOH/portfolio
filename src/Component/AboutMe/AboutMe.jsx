import React from "react";
import * as c from "../Common/CommonStyle";
import * as a from "./AboutMeStyle";
import AboutMeJson from "../../assets/json/AboutMe.json";
import Email from "../../assets/img/common/email.svg";
import Github from "../../assets/img/github.svg";

const AboutMe = () => {
    return (
        <a.Center>
            <a.Whole>
                <c.Flex>
                    <a.Name>{`오현식`}</a.Name>
                    <a.Name isEnName={true}>{`HYEONSIK OH`}</a.Name>
                </c.Flex>
                <c.Flex>
                    <a href="mailto:leesoyun4206@icloud.com" style={{ display: "flex", alignItems: "center", color : "#333", textDecoration : "none", marginBottom : "10px" }}>
                        <a.Icon src={Email}/>
                        <a.InfoText>{`ks06891@naver.com`}</a.InfoText>
                    </a>
                </c.Flex>
                <c.Flex>
                    <a href="https://github.com/HYEONSIKOH" target="_blank" style={{ display: "flex", alignItems: "center", color : "#333", textDecoration : "none" }}>
                        <a.Icon src={Github}/>
                        <a.InfoText>{`@HYEONSIKOH`}</a.InfoText>
                    </a>
                </c.Flex>
                <a.DetailAboutMe>{`💣 일상에서 마주한 불편함을 바탕으로 더 나은 사용자 경험을 이끌기 위해 노력합니다.\n\n📡 구현한 코드에 안주하지 않고 더 나은 코드를 구현하기 위해 다른 개발자들과의 소통을 즐깁니다.\n\n📝 문제를 해결하고, 거기에서 느끼는 성취감을 좋아합니다. \n\n💻 새롭게 알게 된 점을 정리하고, 기록하여 나의 것으로 만드는 것을 좋아합니다.`}</a.DetailAboutMe>
                <a.Title>{`이력`}</a.Title>
                {AboutMeJson.project.experience.map((val) => (
                    <c.Flex>
                        <a.Date>{val.date}</a.Date>
                        <a.Descript>{val.descript}</a.Descript>
                    </c.Flex>
                ))}
                <a.Title>{`수상내역`}</a.Title>
                {AboutMeJson.project.award.map((val) => (
                    <c.Flex>
                        <a.Date>{val.date}</a.Date>
                        <a.Descript>{val.descript}</a.Descript>
                    </c.Flex>
                ))}
                <a.Title>{`자격증`}</a.Title>
                {AboutMeJson.project.certificate.map((val) => (
                    <c.Flex>
                        <a.Date>{val.date}</a.Date>
                        <a.Descript>{val.descript}</a.Descript>
                    </c.Flex>
                ))}
            </a.Whole>
        </a.Center>
    );
};
export default AboutMe;