
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    stepConnector: {
        padding: 0,
        marginBottom: 0,
        marginTop: 0,
        "& span": {
            borderLeft: "3px solid #2e344e"
        }
    },
    stepContent: {
        borderLeft: "3px solid #2e344e",
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
    },
    spanStyle: {
        width: 16,
        height: 16,
        border: "3px solid #2e344e",
        borderRadius: 8,
        marginLeft: 6
    },
    stepLabel: {
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center'
        }
    },
    title: {
        color: theme.palette.primary.main
    },
    line: {
        marginRight: 15,
        left: 0,
        top: 15,
        height: 1,
        width: 30,
        backgroundColor: '#2e344e',
        // marginLeft:50
    },
    date: {
        width: 200,
        textAlign: 'left'
    },
    stepper: {
        backgroundColor: 'transparent',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
            paddingLeft: 0
        }
    }
}));



export default function Mystepper({ steps }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepper connector={<StepConnector className={classes.stepConnector} />} className={classes.stepper} orientation="vertical">
                {steps.map((step) => step.id >= 0 ? (
                    <Step active={true} key={step.id}>
                        <StepLabel
                            classes={{ label: classes.label }}
                            className={classes.stepLabel} icon={<span className={classes.spanStyle} />}>
                            <Typography className={classes.date} variant='h6'>{step.date}</Typography>
                            <Hidden xsDown>
                                <span className={classes.line}></span>
                            </Hidden>
                            <Typography className={classes.title} variant='h5'>{step.title}</Typography>
                        </StepLabel>
                        <StepContent className={classes.stepContent}>
                            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 15 }}>
                                <Hidden xsDown>
                                    <div style={{ width: 242 }}></div>
                                </Hidden>
                                <div style={{ flex: 1 }}>
                                    <Typography variant='h6' align='left'>{step.subtitle}</Typography>
                                    <Typography variant='body1'>{step.content}</Typography>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ) : step.id === -2 ? (
                    <Step active={true} key={step.id}>
                        <StepLabel icon={null}></StepLabel>
                    </Step>
                ) : (null)
                )}
            </Stepper>
        </div>
    );
}