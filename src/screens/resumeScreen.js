import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'
import { Button, Grid, Typography } from '@material-ui/core'
import Title from '../components/title'
import { getTranslates } from '../localization/index'
import Skill from '../components/skill'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import Mystepper from '../components/mystepper'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
    },
    skillGrid: {
        // position: 'relative',
        paddingTop: 60,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
            paddingRight: 5
        }
    },
    skillSecondTitle:{
        marginLeft: 15
    }
}))
export default function AboutScreen() {
    const classes = useStyles()
    const translate = getTranslates()
    return (
        <Grid justifyContent='flex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.skillGrid} container item xs={12}>
                <Title title={translate.myskills} />
            </Grid>
            <Grid container direction='row'  >
                <Grid item xs={12} md={6} >
                    <Skill value={80} title="HTML5" />
                    <Skill value={95} title="CSS" />
                    <Skill value={85} title="Java Script" />
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Skill value={75} title="React Js" />
                    <Skill value={90} title="React Native" />
                    <Skill value={85} title="Node Js" />
                </Grid>
            </Grid>
            <Grid className={classes.skillGrid} container item xs={12}>
                <Title title={translate.resume} />
                <Grid container direction='row' alignItems='center' justifyContent='flex-start'>
                    <BusinessCenterIcon style={{ fontSize: 34 }} />
                    <Typography className={classes.skillSecondTitle}  variant='h4'>{translate.workingexperience}</Typography>
                    <Grid container style={{ marginTop: 15, marginBottom: 30 }}>
                        <Mystepper steps={translate.workingSteps} />
                    </Grid>
                </Grid>
                <Grid container direction='row' alignItems='center' justifyContent='flex-start'>
                    <LocalLibraryIcon style={{ fontSize: 34 }} />
                    <Typography className={classes.skillSecondTitle}  variant='h4'>{translate.educationalqualifications}</Typography>
                    <Grid container style={{ marginTop: 15, marginBottom: 30 }}>
                        <Mystepper steps={translate.educationalSteps} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
