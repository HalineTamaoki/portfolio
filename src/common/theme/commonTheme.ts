import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#F4B8E4',
            main: '#d726c2',
            dark: '#4B1248',
        },
        secondary: {
            light: 'D9D9D9',
            main: '#3E3E3E'
        },
        common: {
            black: '#1D1D1D',
        }
    },
    typography: {
        fontFamily:"'Lato', sans-serif",
        h1: {
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: '2em'
        },
        h2: {
            fontSize: '1.2em',
            fontWeight: 600
        },
        body1: {
            lineHeight: 1.75
        }
    }
});

export const commonTheme = responsiveFontSizes(theme);