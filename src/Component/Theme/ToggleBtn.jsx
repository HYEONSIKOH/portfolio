import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./Theme";

const Toggles = styled.div`
    width: 40px;
    height: 25px;
    border: 2px solid black;
    border-radius: 25px;
    cursor: pointer;
    background-color: ${(props: { theme: any }) => (props.theme === darkTheme ? "#2c3e50" : "#ced6e0")};

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
`;

const ToggleCircle = styled.div`
    background-color: ${(props: { theme: any }) => (props.theme === darkTheme ? "#ecf0f1" : "#f5f6fa")};
    border: 2px solid black;
    border-radius: 30px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -6%;
    transition: all 0.3s ease-in-out;
    ${(props: { theme: any }) => (props.theme === darkTheme ? "transform: translate(16px, 0);" : "none")}
`;


function ToggleBtn() {
    const storedTheme = localStorage.getItem("OHS_PortfolioTheme");
    const [theme, setTheme] = useState(storedTheme === "dark" ? darkTheme : lightTheme);

    useEffect(() => {
        const updateTheme = () => {
            const currentTheme = localStorage.getItem("OHS_PortfolioTheme");
            setTheme(currentTheme === "dark" ? darkTheme : lightTheme);
        };

        window.addEventListener("storage", updateTheme);

        return () => {
            window.removeEventListener("storage", updateTheme);
        };
    }, []);

    const onToggle = () => {
        const currentTheme = localStorage.getItem("OHS_PortfolioTheme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("OHS_PortfolioTheme", newTheme);

        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div style={{position: "absolute", top: 20, right: 20 }} >
            <Toggles onClick={onToggle} theme={theme}>
                <ToggleCircle theme={theme} />
            </Toggles>
        </div>
    );
}

export default ToggleBtn;