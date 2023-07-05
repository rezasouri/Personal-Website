import { Grid, Modal, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15
    },
    image: {
        width: "100%",
        cursor: "pointer",
        "&:hover": {
            transform: "rotate(360deg)",
            transition: "1s"
        }

    },
    title: {
        textAlign: 'left',
        '& a': {
            textDecoration: "none",
            color: "white",
            transition: "0.4S",
            '&:hover': {
                color: theme.palette.primary.main,
                transition: "0.4S"
            }
        }
    },
    imageModal: {
        width: "100%",
        height: "100%"
    },
    modal: {
        height: "80%",
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 60,
        [theme.breakpoints.down('xs')]: {
            height: "50%",
            width: "90%",
        }
    }

}))
export default function Portfolio({ title, desc, image }) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    return (
        <>
            <Grid item lg={4} className={classes.root}>
                <img
                    onClick={() => setOpen(true)}
                    className={classes.image} src={image} />
                <Typography variant='h5' className={classes.title}><a target="_blank" href="https://reactdeveloper.ir/">{title}</a></Typography>
                <Typography variant='body1'>{desc}</Typography>
            </Grid>
            <Modal className={classes.modal} open={open} onClose={() => setOpen(false)}>
                <img className={classes.imageModal} src={image} />
            </Modal>
        </>
    )
}
