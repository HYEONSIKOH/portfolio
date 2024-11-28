import styled from "@emotion/styled";

export const total = styled.div`
  padding: 0px 6%;
  min-height: 100vh;
  min-width: 100vw;
  box-sizing : border-box;
  overflow-x : hidden;
`;
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FlexCenter = styled(Flex)`
  align-items: center;
`;
export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: columns;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content repeat(1, 1fr);
`;