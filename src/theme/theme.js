import { createTheme } from '@material-ui/core/styles'
import palette from './palette'
import { getDirections, getFont } from '../localization/index'
export let theme = createTheme()
theme = createTheme({
    palette: palette,
    direction: getDirections(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: getDirections() === 'rtl' ? 50 : 52,
            lineHeight: "4rem",
            fontFamily: getFont(),
            color: 'white',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 40 : 42,
            }
        },
        h2: {
            fontWeight: 700,
            fontSize: getDirections() === 'rtl' ? 39 : 41,
            lineHeight: "3.2857rem",
            fontFamily: getFont(),
            color: 'white',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 32 : 34,
            }
        },
        h3: {
            fontWeight: 600,
            fontSize: getDirections() === 'rtl' ? 30 : 32,
            lineHeight: "2.7rem",
            fontFamily: getFont(),
            textAlign: 'left',
            color: 'white',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 28 : 30,
            }
        },
        h4: {
            fontWeight: 700,
            fontSize: getDirections() === 'rtl' ? 25 : 27,
            lineHeight: "2.43rem",
            fontFamily: getFont(),
            color: 'white',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 22 : 24,
            }
        },
        h5: {
            fontWeight: 600,
            fontSize: getDirections() === 'rtl' ? 20 : 22,
            lineHeight: "2.14rem",
            fontFamily: getFont(),
            color: "white",
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 18 : 20,
            }
        },
        h6: {
            fontWeight: 400,
            fontSize: getDirections() === 'rtl' ? 16 : 18,
            lineHeight: "1.857rem",
            fontFamily: getFont(),
            color: 'white',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 14 : 16,
            }
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: getDirections() === 'rtl' ? 18 : 20,
            lineHeight: "2rem",
            fontFamily: getFont(),
            marginTop: 15,
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 15 : 17,
            }
        },
        body1: {
            fontWeight: 400,
            fontSize: getDirections() === 'rtl' ? 16 : 18,
            lineHeight: "1.8rem",
            fontFamily: getFont(),
            color: "#a4acc4",
            textAlign: getDirections() === 'rtl' ? "justify" : 'left',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 13 : 15,
            }
        },
        body2: {
            fontWeight: 600,
            fontSize: getDirections() === 'rtl' ? 13 : 15,
            lineHeight: "1.8rem",
            width: "100%",
            letterSpacing: 1,
            fontFamily: getFont(),
            color: "#a4acc4",
            textAlign: 'center',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 11 : 13,
            }
        },
        button: {
            fontSize: getDirections() === 'rtl' ? 12 : 14,
            letterSpacing: 2,
            fontFamily: getFont(),
            fontWeight: 400,
            color: "#FFF",
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirections() === 'rtl' ? 12 : 14,
            }
        }
    }
})