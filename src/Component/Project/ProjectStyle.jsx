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
export const Headername = styled.div`
  color: #4f66e3;
  font-weight: 700;
  font-size: 1.3rem;
  ${media[2]} {
    margin-top: 2rem;
  }
`;
export const MoreTxt = styled.div``;
export const HeaderDescript = styled.div`
  margin-top: 1rem;
  color: #707070;
  font-weight: 500;
`;
export const TotalProject = styled.div`
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 5.3rem;
  ${media[1]} {
    flex-direction: column;
  }
`;
export const DetailProject = styled.div`
  margin-left: 3rem;
  width: 405px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media[2]} {
    margin-left: 1rem;
    margin-top: 1rem;
    width: calc(405px - 10%);
  }
  ${media[1]} {
    margin-left: 0rem;
  }
`;
export const ProjectName = styled.div`
  font-weight: 600;
  margin-bottom: calc(1.5rem - 5px);
  text-align: center;
  overflow: visible;
  cursor: pointer;
  box-sizing: border-box;
  &::after {
    display: block;
    content: "";
    margin-top: 5px;
    border-bottom: solid 4px #5144eb;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
`;
export const ProjectDescript = styled.div`
  color: #525252;
  font-weight: 500;
  line-height: 1.7rem;
  text-align: center;
  white-space: pre-wrap;
  padding: 0px 6%;
`;
export const ProjectImg = styled.img`
  width: 250px;
  height: auto;
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
`;
export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  margin-top: 1.5rem;
`;
export const UseLanguage = styled.div`
  font-weight: 600;
  margin-right: 0.7rem;
`;
export const Links = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: ${(props) => (props.isCenter ? "space-between" : "center")};
  align-items: center;
  width: 60%;
`;
export const LinkImg = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const LinkTxt = styled.div`
  /* margin-right: 1.4rem; */
  margin-left: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #525252;
  cursor: pointer;
`;
export const MoreInfoBox = styled.div`
  border-radius: 16px;
  background-color: #333;
  color: #fff;
  border: 1px solid #333;
  padding: 5px 15px;
  margin-top: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;
export const MoreInfoText = styled.div``;