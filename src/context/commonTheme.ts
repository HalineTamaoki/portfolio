import { createTheme } from "@mui/material";

export const commonTheme = createTheme({
    palette: {
        primary: {
            light: '#F4B8E4',
            main: '#d726c2',
            dark: '#4B1248',
        },
        secondary: {
            light: 'D9D9D9',
            main: '#3E3E3E'
        }
    },
    typography: {
        fontFamily:"'Lato', sans-serif",
        h1: {
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600
        }
    }
})