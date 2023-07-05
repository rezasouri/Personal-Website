import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    main: {
        marginTop:20,
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
        textAlign:'left',
        
    },
    desc: {
        cursor:"pointer",
        transition:"0.4s",
        '&:hover':{
            color:theme.palette.primary.main,
            transition: "0.4s"
        }
    },
    divIcon:{
        border:"1px solid #2e344e"
    },
    divText:{
        marginRight:10,
        marginLeft:35
    }
}))
export default function Contact({ text1, text2, title, icon }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container className={classes.main} direction='row' alignItems='center'>
                <div className={classes.divIcon}>
                    {icon}
                </div>
                <div className={classes.divText}>
                    <Typography className={classes.title} variant='h6'>{title}</Typography>
                    <Typography className={classes.desc}>{text1}</Typography>
                    <Typography className={classes.desc}>{text2}</Typography>
                </div>
            </Grid>
        </div>
    )
}
