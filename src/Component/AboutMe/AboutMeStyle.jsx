import styled from "@emotion/styled";


const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Center = styled.div`
  display: flex;
  justify-content: center;
  //padding: 0px 20% 5% 20%;
  min-height: calc(100vh - 101px);
  width: 100%;
  ${media[2]} {
    padding: 0px 0px 5% 0px;
  }
`;
export const Whole = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: ${(props)=>props.isEnName && '1.5rem'};
  margin-bottom: 1.6rem;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
export const InfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;
export const DetailAboutMe = styled.div`
  margin-top: 1rem;
  white-space: pre-wrap;
  line-height: 1.5rem;
  font-weight: 500;
`;
export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: #999; // 요기
  margin-top: 2.35rem;
  margin-bottom: 0.5rem;
`;
export const Date = styled(Title)`
  color: ${(props) => props.theme.textColor2};
  margin-top: 0.7rem;
  margin-bottom: 0;
  font-size: 0.98rem;
  width: max-content;
`;
export const Descript = styled(Date)`
  margin-left: 1.2rem;
`
export const Detail = styled(Date)`
  white-space: pre-wrap;
`