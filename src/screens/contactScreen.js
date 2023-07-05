import { Grid, TextField, Typography,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Title from '../components/title'
import { getTranslates } from '../localization/index'
import { theme } from '../theme/theme'
import './contactScreen.css'
import Contact from '../components/contact'
import CallIcon from '@material-ui/icons/CallOutlined'
import MailIcon from '@material-ui/icons/MailOutlineOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh"
    },
    contactGrid: {
        paddingTop: 60,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
    getintouch:{
        textAlign:'left'
    },
    formGrid:{
        padding:5
    },
    detailGrid:{
        padding:15,
    },
    iconStyle: {
        fontSize: 60,
        display:"flex",
        alignItems:"center"
    }
}))
export default function ContactScreen() {
    const classes = useStyles()
    const translate = getTranslates()
    return (
        <Grid container className={classes.root}>
            <Grid className={classes.contactGrid} container item xs={12}>
                <Title title={translate.contactme} />
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={12} md={6} className={classes.formGrid} >
                    <Typography className={classes.getintouch} variant='h4'>{translate.getintouch}</Typography>
                    <TextField
                        label={translate.enteryourname}
                        required
                        style={{ marginTop: 25 }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label={translate.enteryouremail}
                        required
                        style={{ marginTop: 8 }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label={translate.enteryoursubject}
                        required
                        style={{ marginTop: 8 }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label={translate.enteryourmessage}
                        required
                        style={{ marginTop: 8, }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={6}
                    />
                    <div style={{ display: 'flex', alignItems: 'left', marginTop: 20, height: 50,}}>
                        <Button variant='contained' color='primary'>{translate.sendmail}</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.detailGrid}>
                    <Contact icon={<CallIcon className={classes.iconStyle} />} title={translate.phone} text1="+012-3456-7891" text2="+012-3456-7891"/>
                    <Contact icon={<MailIcon className={classes.iconStyle} />} title={translate.email} text1="admin.sitename@example.com" text2="info.sitename@example.com"/>
                    <Contact icon={<RoomIcon className={classes.iconStyle} />} title={translate.address} text1={translate.adstreet} text2=""/>
                </Grid>
            </Grid>
        </Grid>
    )
}
