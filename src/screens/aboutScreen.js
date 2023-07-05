import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'
import { Button, Grid, Typography } from '@material-ui/core'
import Title from '../components/title'
import { getTranslates } from '../localization/index'
import main from '../assets/images/main.jpg'
import Service from '../components/service'
import WebIcon from '@material-ui/icons/Web'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import CodeIcon from '@material-ui/icons/Code'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
    },
    abotGrid: {
        // position: 'relative',
        paddingTop: 60,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 0
    },
    mainGrid: {
        // paddingRight:theme.spacing(4),
        // paddingLeft:theme.spacing(4)
        // position: 'relative',
    },
    image: {
        width: "100%",
        height: "100%"
    },
    imageGrid: {
        // height: 400,
        position: 'relative',
        "&::after": {
            content: "''",
            position: 'absolute',
            left: 'auto',
            top: "auto",
            bottom: 0,
            right: 0,
            height: "65%",
            width: 15,
            background: 'rgba(3,127,255,.6)'
        },
        "&::before": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            height: "65%",
            width: 15,
            background: "rgba(3,127,255,.6)"
        }
    },
    nameText: {
        color: theme.palette.primary.main,
    },
    aboutTextGrid: {
        paddingLeft: 30,
        paddingRight: 10,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: 15,
            marginBottom: 15
        }
    },
    iconStyle: {
        fontSize: 46,
        color: theme.palette.primary.main
    }
}))
export default function AboutScreen() {
    const classes = useStyles()
    const translate = getTranslates()
    return (
        <Grid justifyContent='flex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.abotGrid} container item xs={12}>
                <Title title={translate.aboutme} />
            </Grid>
            <Grid container direction='row' className={classes.mainGrid} >
                <Grid item xs={12} md={6} className={classes.imageGrid}>
                    <img src={main} alt={translate.name} className={classes.image} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.aboutTextGrid} >
                    <Typography variant='h3'>{translate.hi1}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
                    <Typography variant='body1' style={{ marginTop: 20 }}>{translate.desc}</Typography>
                    <Typography style={{ marginTop: 12 }}>
                        <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.fullname}</b>
                        {' : '}
                        {translate.name}
                    </Typography>
                    <Typography style={{ marginTop: 6 }}>
                        <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.age}</b>
                        {' : '}
                        23 {translate.years}
                    </Typography>
                    <Typography style={{ marginTop: 6 }}>
                        <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.nationality}</b>
                        {' : '}
                        {translate.iranian}
                    </Typography>
                    <Typography style={{ marginTop: 6 }}>
                        <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.languages}</b>
                        {' : '}
                        {translate.persian},{translate.english}
                    </Typography>
                    <Typography style={{ marginTop: 6 }}>
                        <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.phone}</b>
                        {' : '}
                        (+98)9384610490
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'left', marginTop: 20, height: 50, }}>
                        <Button variant='contained' color='primary'>{translate.downloadcv}</Button>
                    </div>
                </Grid>
            </Grid>
            <Grid className={classes.abotGrid} container item xs={12}>
                <Title title={translate.services} />
                <Grid container direction='row'>
                    <Service icon={<WebIcon className={classes.iconStyle} />} title={translate.webdesign} desc={translate.servicedesc} />
                    <Service icon={<CodeIcon className={classes.iconStyle} />} title={translate.webdevelopement} desc={translate.servicedesc} />
                    <Service icon={<PhoneAndroidIcon className={classes.iconStyle} />} title={translate.mobileapplication} desc={translate.servicedesc} />
                </Grid>
            </Grid>
        </Grid>
    )
}
