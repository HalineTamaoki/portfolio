import { createTheme } from "@mui/material";
import { commonTheme } from "./commonTheme";
import { deepmerge } from "@mui/utils";

export const lightTheme = createTheme(deepmerge(commonTheme, {
    palette: {
        mode: 'light',
        background: {
            paper: '#FFFFFF',
            default: '#D9D9D9'
        },
        text: {
            primary: '#1D1D1D',
            secondary: '#FFFFFF'
        },
        error: {
            main: '#c70039',
        }
    },
}))