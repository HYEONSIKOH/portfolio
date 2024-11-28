import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const total = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  height: max-content;
  width: 100vw;
  justify-content: space-between;
  padding: 36px 6% 30px 6%;
  cursor: pointer;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
`;
export const myName = styled.div`
  cursor: pointer;
  font-size: 24px;
  width: max-content;
  &:hover {
    font-weight: bold;
  }
`;
export const MenuTotal = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  ${media[2]} {
    display: none;
  }
`;
export const Menu = styled(myName)`
  width: max-content;
  font-size: 20px;
  text-align: right;
  padding-left: 24px;
  padding-right: 20px;
  white-space: nowrap;
`;
export const subImg = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 24px;
  margin-right: 20px;
`;
export const hamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  ${media[2]} {
    display: block;
  }
`;
export const subMenuTotal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  // background: #fff;
  padding: 50px 5% 0;
  visibility: 0s ease 0s, opacity 0.2s ease 0s;
`;
export const close = styled(IoMdClose)`
  position: fixed;
  right: 5%;
  top: 2%;
  width: 25px;
  height: 25px;
`;
export const subMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const subMenu = styled(Menu)`
  margin-bottom: 1.875rem;
  font-size: 1.375rem;
  line-height: 32px;
`;
export const subBottom = styled.div`
  position: fixed;
`;