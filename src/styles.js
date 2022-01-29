export const blueColor = "#25A2F9"
export const redColor = "#ED2166"
export const purColor = "#9D15B0"

export const blueLowColor = "#1C8BD8"
export const redLowColor = "#D84476"
export const purLowColor = "#9E35AD"

// export const darkHue = "#25A2F9";
// export const hue = "#9E35AD";

export const darkBg = "rgb(30, 30, 30)"
export const bg = "white";

export const hueStyler = (darkMode) => {
    return darkMode ? purColor : blueColor;
}

export const bgStyler = (darkMode) => {
    return darkMode ? darkBg : bg;
}

export const btnStyler = (darkMode) => {
    return darkMode ? "black" : "white";
}

export const GlobalBgStyler = (darkMode) => {
    return darkMode ? "rgb(15, 15, 15)" : "rgb(255, 255, 255)";
}