import { css, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./Theme";

export const GlobalStyle = () => {
    const storedTheme = localStorage.getItem("OHS_PortfolioTheme");
    const [theme, setTheme] = useState(storedTheme === "dark" ? darkTheme : lightTheme);
    const [testNum, setTestNum] = useState(0);

    useEffect(() => {
        // 테마 변경 함수
        const updateTheme = () => {
            const currentTheme = localStorage.getItem("OHS_PortfolioTheme");
            setTheme(currentTheme === "dark" ? darkTheme : lightTheme);
        };

        // storage 이벤트 감지
        window.addEventListener("storage", updateTheme);

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener("storage", updateTheme);
        };
    }, []);


    return (
        <Global
            styles={css`
                body {
                    background-color: ${theme.backgroundColor};
                    color: ${theme.textColor};
                    transition: all 0.3s;
                }
            `}
        />
    );
}
