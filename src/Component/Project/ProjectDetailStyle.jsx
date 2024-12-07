import styled from "@emotion/styled";

const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Goback = styled.img`
  padding: 36px 6% 30px 6%;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 20% 5% 20%;
  min-height: calc(100vh - 200px);
  width: 100%;
  ${media[1]} {
    padding: 0px 0px 5% 0px;
  }
`;
export const ProjectName = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
export const Date = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #111;
  font-weight: 400;
  padding-top: 2rem;
  margin-bottom: 60px;
`;
export const ImgCenter = styled.div`

`;
export const PhoneTool = styled.img`
  width: 290px;
  height: 500px;
  position: relative;
  z-index: 1;
`;
export const InnerImg = styled.img`
  position: absolute;
  z-index: 2;
  width: 290px;
  height: 500px;
  padding: 30px 15px 20px 15px;
  border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  -webkit-border-radius: 30px;
  ${media[1]} {
    margin: auto 0;
  }
`;
export const DesktopImg = styled.img`
  width: 50%;
`;

export const ReviewTitle = styled.div`
  font-size: 2rem;
  margin-top: 3rem;
`;
export const DetailExplain = styled.div`
  margin-left: 5.5rem;
  max-width: calc(70% - 150px);
  ${media[2]} {
    max-width: 100%;
    margin: 0px 2rem;
  }
`;
export const Title = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  ${media[2]} {
    margin-top: 30px;
  }
`;
export const Descript = styled.div`
  color: #7f7b7b;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  white-space: pre-wrap;
`;
export const Check = styled.img`
  width: 30px;
  height: 30px;
`;
export const Reason = styled.div`
  width: calc(100% - 30px - 1rem);
  color: #7f7b7b;
  line-height: 1.3rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;