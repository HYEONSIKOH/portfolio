import styled from "@emotion/styled";
import HYEONSIKOH from "../../assets/img/introduce/ohs.jpg";

const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);


export const Center = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: calc(100vh - 101px);
  width: 100%;
  margin-top: 100px;
  ${media[2]} {
    flex-direction: column;
  }
`;

export const Whole = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: auto;
  margin-right: 10vw;
`;
export const Title = styled.div`
  font-size: 2.75rem;
  white-space: pre-wrap;
  line-height: 1.4;
  font-weight: 700;
  ${media[2]} {
    font-size: 1.75rem;
  }
`;
export const SubDescription = styled.div`
  color: #aeaeae;
  font-size: 1.12rem;
  white-space: pre-wrap;
  line-height: 1.5;
  margin-top: 6px;
  margin-bottom: 10px;
  ${media[2]} {
    font-size: 1rem;
  }
`;
export const MoreAbout = styled.div`
  cursor: pointer;
  font-size: 24px;
  &:hover {
    text-decoration: line-through;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media[2]} {
    margin-top: 2.5rem;
  }
`;
export const LiquidShape = styled.div`
  border: 2px solid ${(props) => props.theme.textColor};
  width: 250px;
  height: 250px;
  
  background-size: cover;
  background-image: url(${HYEONSIKOH});
  animation: liquid 8s ease-in-out infinite;

  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  @keyframes liquid {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
`;
export const TechSkillTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  max-width: 530px;
  margin-top: 1rem;
`;
export const TechSkillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const TechSkillDiv = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 5px;
  gap: 4px;
  padding: 6px 6px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
  white-space: nowrap;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, sans-serif;
`;
export const TechSKillSvg = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  flex: 0 0 16px;
`;
export const TechSKillName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #686d6f;
  line-height: 1px;
`;
export const TechSKillTxt = styled.div`
  margin-top: 8px;
  font-weight: 700;
  min-width: 47px;
  text-align: right;
  color: ${(props) => props.theme.textColor2};
`;
export const TechSKill = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px
  
`;
export const LinkTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 15px;
`;