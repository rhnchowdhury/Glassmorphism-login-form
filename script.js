const themes = [
    {
        background: "#643843",
        color: "#FFFFFF",
        primaryColor: "#99627A",
    },
    {
        background: "#765827",
        color: "#FFFFFF",
        primaryColor: "#65451F",
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1",
    },
    {
        background: "#461111",
        color: "#FFF",
        primaryColor: "#A13333",
    },
    {
        background: "#183D3D",
        color: "#FFF",
        primaryColor: "#5C8374",
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430",
    },
];

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

displayThemeButtons();
