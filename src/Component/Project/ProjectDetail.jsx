import React, {useEffect, useRef} from "react";
import { useParams,useLocation, useNavigate } from "react-router-dom";
import * as p from "./ProjectStyle";
import * as c from "../Common/CommonStyle";
import * as pd from "./ProjectDetailStyle";
import ProjectDetailJson from "../../assets/json/ProjectDetail.json";
import PhoneTool from "../../assets/img/common/phoneTool.jpg";
import Check from "../../assets/img/common/check.png";
import OFI from "../../assets/img/project/ofi/useImg.png";
import Havebin1 from "../../assets/img/project/havebin/havebin1.jpeg";
import Havebin_Architecture from "../../assets/img/project/havebin/architecture.png";
import DbdbDeep1 from "../../assets/img/project/dbdbdeep/dbdbdeep1.jpeg";
import WashPang1 from "../../assets/img/project/washpang/washpang1.png";
import SoundLink1 from "../../assets/img/project/soundlink/soundlink1.png";
import SoundLink_Architecture from "../../assets/img/project/soundlink/architecture.png";
import SoundLink_CiCd from "../../assets/img/project/soundlink/cicd.png";
import GoBack from "../../assets/img/common/goback.png";
import {discription} from "./ProjectDetailStyle";

const Geeks = () => {
    const projectParamsName = useParams();
    let ProjectPhoto = [DbdbDeep1, OFI, Havebin1, WashPang1, SoundLink1];
    let ProjectArchitecture = [undefined, undefined, Havebin_Architecture, undefined, SoundLink_Architecture];
    let CiCdArchitecture = [undefined, undefined, undefined, undefined, SoundLink_CiCd];
    let navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    var project = ProjectDetailJson.projectDetail?.find(val => val.bigTitle == projectParamsName.projectParamsName)

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <>
            <pd.Goback src={GoBack} onClick={() => handleBack()}/>
            <pd.Center>
                <p.Whole>
                    <pd.ProjectName>{project.name}</pd.ProjectName>
                    <pd.Date>{project.date}</pd.Date>
                    <c.FlexBetween>
                        <pd.PhoneTool src={PhoneTool}/>
                        <pd.InnerImg src={ProjectPhoto[project?.photoNum]}/>
                        <pd.DetailExplain>
                            {project.details?.map((detail) => (
                                <>
                                    <pd.Title>{detail.title}</pd.Title>
                                    <pd.Descript>{detail.detail}</pd.Descript>
                                    {detail.useReason?.map((reason) => (
                                        <c.Flex>
                                            <pd.Check src={Check}/>
                                            <pd.Reason>
                                                {reason.summary}
                                                <pd.discription>{reason.description}</pd.discription>
                                            </pd.Reason>
                                        </c.Flex>
                                    ))}
                                </>
                            ))}
                        </pd.DetailExplain>
                    </c.FlexBetween>
                    <div style={{marginTop: "3rem"}}>
                        <hr style={{color: "black"}}/>
                    </div>
                    <pd.Architecture> {project.Architecture} </pd.Architecture>
                    <pd.ArchitectureImg src={ProjectArchitecture[project?.photoNum]}/>
                    <pd.ArchitectureImg src={CiCdArchitecture[project?.photoNum]}/>
                </p.Whole>
            </pd.Center>
        </>
    );
};
export default Geeks;