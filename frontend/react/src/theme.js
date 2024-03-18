import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"


export const tokens = (mode) => ({
    ...(mode === 'dark') ? {
        darkgrey: {
            100: "#fbfbfb",
            200: "#f7f7f7",
            300: "#f4f4f4",
            400: "#f0f0f0",
            500: "#ececec",
            600: "#bdbdbd",
            700: "#8e8e8e",
            800: "#5e5e5e",
            900: "#2f2f2f"
        },
        lightgrey: {
            100: "#fefdfd",
            200: "#fcfcfc",
            300: "#fbfafa",
            400: "#f9f9f9",
            500: "#f8f7f7",
            600: "#c6c6c6",
            700: "#959494",
            800: "#636363",
            900: "#323131"
        },
        yellow: {
            100: "#fff8de",
            200: "#fff1bd",
            300: "#ffe99b",
            400: "#ffe27a",
            500: "#ffdb59",
            600: "#ccaf47",
            700: "#998335",
            800: "#665824",
            900: "#332c12"
        },

        pink: {
            100: "#fdf0f3",
            200: "#fbe1e6",
            300: "#fad2da",
            400: "#f8c3cd",
            500: "#f6b4c1",
            600: "#c5909a",
            700: "#946c74",
            800: "#62484d",
            900: "#312427"
        },

        blue: {
            100: "#eff7fa",
            200: "#deeff5",
            300: "#cee8ef",
            400: "#bde0ea",
            500: "#add8e5",
            600: "#8aadb7",
            700: "#688289",
            800: "#45565c",
            900: "#232b2e"
        },

        black: {
            100: "#d8d8d8",
            200: "#b1b1b1",
            300: "#8b8a8b",
            400: "#646364",
            500: "#3d3c3d",
            600: "#313031",
            700: "#252425",
            800: "#181818",
            900: "#0c0c0c"
        }
    }
        : {
            darkgrey: {
                100: "#2f2f2f",
                200: "#5e5e5e",
                300: "#8e8e8e",
                400: "#bdbdbd",
                500: "#ececec",
                600: "#f0f0f0",
                700: "#f4f4f4",
                800: "#f7f7f7",
                900: "#fbfbfb",
            },
            lightgrey: {
                100: "#323131",
                200: "#636363",
                300: "#959494",
                400: "#c6c6c6",
                500: "#f8f7f7",
                600: "#f9f9f9",
                700: "#fbfafa",
                800: "#fcfcfc",
                900: "#fefdfd",
            },
            yellow: {
                100: "#332c12",
                200: "#665824",
                300: "#998335",
                400: "#ccaf47",
                500: "#ffdb59",
                600: "#ffe27a",
                700: "#ffe99b",
                800: "#fff1bd",
                900: "#fff8de",
            },

            pink: {
                100: "#312427",
                200: "#62484d",
                300: "#946c74",
                400: "#c5909a",
                500: "#f6b4c1",
                600: "#f8c3cd",
                700: "#fad2da",
                800: "#fbe1e6",
                900: "#fdf0f3",
            },

            blue: {
                100: "#232b2e",
                200: "#45565c",
                300: "#688289",
                400: "#8aadb7",
                500: "#add8e5",
                600: "#bde0ea",
                700: "#cee8ef",
                800: "#deeff5",
                900: "#eff7fa",
            },

            black: {
                100: "#0c0c0c",
                200: "#181818",
                300: "#252425",
                400: "#313031",
                500: "#3d3c3d",
                600: "#646364",
                700: "#8b8a8b",
                800: "#b1b1b1",
                900: "#d8d8d8",
            }
        }
});


export const themeSetting = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark')
                ? {
                    primary: {
                        main: colors.blue[500]
                    },
                    secondary: {
                        main: colors.pink[500]
                    },
                    neutral: {
                        dark: colors.lightgrey[700],
                        light: colors.lightgrey[500],
                        main: colors.lightgrey[100]
                    },
                    background: {
                        default: colors.darkgrey[500]
                    }
                }
                : {
                    primary: {
                        main: colors.blue[100]
                    },
                    secondary: {
                        main: colors.pink[500]
                    },
                    neutral: {
                        dark: colors.lightgrey[700],
                        light: colors.lightgrey[500],
                        main: colors.lightgrey[100]
                    },
                    background: {
                        default: colors.darkgrey[200]
                    }
                }
        },
        typography: {
            fontFamily: ['Montserrat'].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ['Montserrat'].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Montserrat'].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Montserrat'].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Montserrat'].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Montserrat'].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Montserrat'].join(","),
                fontSize: 14,
            },
        },
    };
};


export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
        ), [])

    const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
    return [theme, colorMode];
}

