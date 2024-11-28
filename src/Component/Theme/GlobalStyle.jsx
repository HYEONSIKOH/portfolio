import { css, Global } from "@emotion/react";

export const GlobalStyle = ({ theme }) => (
    <Global styles={css`
      body {
        background-color: ${theme.backgroundColor};
        color: ${theme.textColor};
      }
    `}
    />
);
