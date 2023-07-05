import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15
    },
    main: {
        padding: theme.spacing(8),
        border: "1px solid #2e344e",
        borderTop: "5px solid #2e344e",
        zIndex: 1,
        backgroundColor: '#191d2b',
        transition: "0.4s",
        '&:hover': {
            borderTopColor: theme.palette.primary.main,
            transition: "0.4s"
        }
    },
    title: {
        marginTop: 15,
        paddingBottom: 15,
        position: 'relative',
        '&::before': {
            content: "''",
            position: "absolute",
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 2,
            width: 50,
            background: '#2e344e',
        }
    },
    desc: {
        marginTop: 15
    }
}))
export default function Service({ desc, title, icon }) {
    const classes = useStyles()
    return (
        <Grid item lg={4} md={6} xs={12} className={classes.root}>
            <Grid container className={classes.main} direction='column' alignItems='flex-start'>
                {icon}
                <Typography className={classes.title} variant='h5'>{title}</Typography>
                <Typography className={classes.desc}>{desc}</Typography>
            </Grid>
        </Grid>
    )
}
