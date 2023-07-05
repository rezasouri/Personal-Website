import React, { useEffect, useState } from 'react'
import { LinearProgress, makeStyles, Typography } from '@material-ui/core'
import { theme } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: 10,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    progresDiv: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: "center",
        width: "100%",
        // paddingLeft:
    },
    progres: {
        width: "100%",
        marginLeft: 15,
        height: 6,
        backgroundColor: "#2e344e"
    }
}))

export default function Skill({ value, title }) {
    const classes = useStyles()
    const [val, setVal] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (val === value) {
                return
            }
            setVal(val => val + 5)
        }, 100)
    }, [val])
    // useEffect(()=>{
    //     setTimeout(()=>{setVal(value)},500)
    // },[])
    return (
        <div className={classes.root}>
            <Typography variant='h6'>{title}</Typography>
            <div className={classes.progresDiv}>
                <Typography variant='body1'>{value}%</Typography>
                <LinearProgress className={classes.progres} variant='determinate' value={val}></LinearProgress>
            </div>
        </div>
    )
}
