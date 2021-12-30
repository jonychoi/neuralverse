export const darkHue = "#9D15B0";
export const hue = "#25A2F9";

// export const darkHue = "#25A2F9";
// export const hue = "#9E35AD";

export const darkBg = "rgb(30, 30, 30)"
export const bg = "white";

export const hueStyler = (darkMode) => {
    return darkMode ? darkHue : hue;
}

export const bgStyler = (darkMode) => {
    return darkMode ? darkBg : bg;
}

export const btnStyler = (darkMode) => {
    return darkMode ? "black" : "white";
}

export const blueColor = "#25A2F9"
export const redColor = "#ED2166"
export const purColor = "#9D15B0"

export const blueLowColor = "#1C8BD8"
export const redLowColor = "#D84476"
export const purLowColor = "#9E35AD"