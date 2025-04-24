import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#F4B8E4',
            main: '#d726c2',
            dark: '#4B1248',
        },
        secondary: {
            light: '#D9D9D9',
            main: '#3E3E3E',
        },
        common: {
            black: '#1D1D1D',
        },
    },
    typography: {
        fontFamily:"'Lato', sans-serif",
        h1: {
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: '2em'
        },
        h2: {
            fontSize: '1.5em',
            fontWeight: 600
        },
        h3: {
            fontSize: '1.15em',
            fontWeight: 600
        },
        body1: {
            lineHeight: 1.75
        },
        subtitle1: {
            fontWeight: 600
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                ".swiper-button-next, .swiper-button-prev": {
                  color: theme.palette.primary.main,
                },
                ".swiper-pagination": {
                    position: 'relative',
                    marginTop: 10
                },
                ".swiper-pagination-bullet-active": {
                    backgroundColor: `${theme.palette.primary.main} !important`,
                },
                ".swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled": {
                    color: theme.palette.secondary.light,
                },
                ".swiper-slide": {
                    height: 'unset !important'
                },
            }),
        }
    }
});

export const commonTheme = responsiveFontSizes(theme);