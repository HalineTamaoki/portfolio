import { createTheme } from "@mui/material";
import { commonTheme } from "./commonTheme";
import { deepmerge } from "@mui/utils";

export const darkTheme = createTheme(deepmerge(commonTheme, {
    palette: {
        mode: 'dark',
        background: {
            paper: '#D9D9D9',
            default: '#1D1D1D'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#1D1D1D'
        },
        error: {
            main: '#FF4C4C',
        }
    }
}))