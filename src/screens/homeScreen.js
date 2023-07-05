import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import './homeScreen.css'
import { theme } from '../theme/theme'
import { getTranslates } from '../localization/index'
import IconButton from '@material-ui/core/IconButton'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    divIcons: {
        marginTop: 25
    },
    iconBtn: {
        border: '2px solid #2e344e',
        borderRadius: 100,
        marginLeft: 10,
        marginRight: 10,
        transition: "0.5s",
        "&:hover":{
            color:theme.palette.primary.main,
            borderColor:theme.palette.primary.main,
            transition: "1s"
        }
    }
}))
export default function HomeScreen() {
    const classes = useStyles()
    const translate = getTranslates()
    return (

        <div className={classes.root}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Grid >
                <Typography variant='h1'>{translate.hi1}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
                <Typography variant='subtitle1'>{translate.desc}</Typography>
            
            <div className={classes.divIcons}>
                <IconButton href={"https://t.me/rezaasourii"} target={"_blank"} className={classes.iconBtn} color="secondary">
                    <TelegramIcon />
                </IconButton>
                <IconButton href={"https://www.linkedin.com/in/reza-souri-320235161"} target={"_blank"} className={classes.iconBtn} color="secondary">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href={"https://github.com/rezasouri"} target={"_blank"} className={classes.iconBtn} color="secondary">
                    <GitHubIcon />
                </IconButton>
            </div>
            </Grid>
        </div>
    )
}
