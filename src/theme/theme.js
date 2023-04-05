import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#111111',
            light: '#f50519',
            dark: '#0b7529',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#a62633',
            light: '#0b7529',
            dark: '#741a23',
        },
        error: {
            main: '#f0000c',
        },
        
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
    },
});