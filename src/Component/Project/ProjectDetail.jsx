import React, {useEffect, useRef} from "react";
import { useParams,useLocation, useNavigate } from "react-router-dom";
import * as p from "./ProjectStyle";
import * as c from "../Common/CommonStyle";
import * as pd from "./ProjectDetailStyle";
import ProjectDetailJson from "../../assets/json/ProjectDetail.json";
import PhoneTool from "../../assets/img/common/phoneTool.jpg";
import Check from "../../assets/img/common/check.png";
import Dbdbdeep from "../../assets/img/project/dbdbdeep/mainLogo.png";
import OFI from "../../assets/img/project/ofi/useImg.png";
import Havebin1 from "../../assets/img/project/havebin/havebin1.jpeg";
import GoBack from "../../assets/img/common/goback.png";

const Geeks = () => {
    const projectParamsName = useParams();
    let ProjectPhoto = [Dbdbdeep,OFI,Havebin1];
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
            <pd.Goback src={GoBack} onClick={()=>handleBack()}/>
            <pd.Center>
                <p.Whole>
                    <pd.ProjectName>{project.name}</pd.ProjectName>
                    <pd.Date>{project.date}</pd.Date>
                    <c.FlexBetween>
                        <pd.PhoneTool src={PhoneTool} />
                        <pd.InnerImg src={ProjectPhoto[project?.photoNum]} />
                        <pd.DetailExplain>
                            {project.details?.map((detail) => (
                                <>
                                    <pd.Title>{detail.title}</pd.Title>
                                    <pd.Descript>{detail.detail}</pd.Descript>
                                    {detail.useReason?.map((reason) => (
                                        <c.Flex>
                                            <pd.Check src={Check}/>
                                            <pd.Reason>{reason}</pd.Reason>
                                        </c.Flex>
                                    ))}
                                </>
                            ))}
                        </pd.DetailExplain>
                    </c.FlexBetween>
                </p.Whole>
            </pd.Center>
        </>
    );
};
export default Geeks;