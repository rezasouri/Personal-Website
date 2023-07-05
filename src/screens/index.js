import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import profileImage from '../assets/images/profile.jpg'
import { getTranslates, changeLanguage, lang } from '../localization/index'
import { Button } from '@material-ui/core';
import HomeScreen from './homeScreen'
import AboutScreen from './aboutScreen'
import ResumeScreen from './resumeScreen'
import PortfolioScreen from './portfolioScreen'
import ContactScreen from './contactScreen'
import '../screens/index.css'

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        position: 'fixed',
        top: 20,
        border: "1px solid #2e344e",
        color: "#a4acc4",
        borderRadius: 0,
        backgroundColor: theme.palette.primary.backgroundColor,
        margin: theme.spacing(2),
        marginLeft: 0,
        zIndex: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    drawerTop: {
        width: "100%",
        padding: 20,
        textAlign: 'center',
        borderBottom: "1px solid #2e344e",
    },
    profileImage: {
        maxWidth: "100%",
        width: 200,
        height: 200,
        borderRadius: 100,
        border: "7px solid #2e344e",
        verticalAlign: 'middle'
    },
    drawerPaper: {
        width: drawerWidth,
        height: "100vh",
        backgroundColor: "#10121b",
        borderRight: "1px solid #2e344e"
    },
    centerDrawer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerBottom: {
        padding: 15,
        borderTop: "1px solid #2e344e",
        width: "100%"
    },
    content: {
        flexGrow: 1,
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        position: 'relative'
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [page, setPage] = React.useState(0)
    const translate = getTranslates()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div className={classes.drawerTop} >
                <img src={profileImage} alt={translate.name} className={classes.profileImage} />
            </div>
            <Divider />
            <div className={classes.centerDrawer}>
                <List style={{ width: "100%" }}>
                    <ListItem className={page === 0 ? null : "listItem"} style={{ backgroundColor: page === 0 ? "#037fff" : 'transparent', paddingLeft: 0, paddingRight: 0 }} onClick={() => { setPage(0); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className='listItemText' style={{ color: page === 0 ? "#FFF" : "#a4acc4" }} variant='body2'>{translate.home}</Typography>}
                        />
                        <div className="overlay" />
                    </ListItem>
                    <ListItem className={page === 1 ? null : "listItem"} style={{ backgroundColor: page === 1 ? "#037fff" : 'transparent', paddingLeft: 0, paddingRight: 0 }} onClick={() => { setPage(1); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className='listItemText' style={{ color: page === 1 ? "#FFF" : "#a4acc4" }} variant='body2'>{translate.about}</Typography>}
                        />
                        <div className="overlay" />
                    </ListItem>
                    <ListItem className={page === 2 ? null : "listItem"} style={{ backgroundColor: page === 2 ? "#037fff" : 'transparent', paddingLeft: 0, paddingRight: 0 }} onClick={() => { setPage(2); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className='listItemText' style={{ color: page === 2 ? "#FFF" : "#a4acc4" }} variant='body2'>{translate.resume}</Typography>}
                        />
                        <div className="overlay" />
                    </ListItem>
                    <ListItem className={page === 3 ? null : "listItem"} style={{ backgroundColor: page === 3 ? "#037fff" : 'transparent', paddingLeft: 0, paddingRight: 0 }} onClick={() => { setPage(3); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className='listItemText' style={{ color: page === 3 ? "#FFF" : "#a4acc4" }} variant='body2'>{translate.portfolios}</Typography>}
                        />
                        <div className="overlay" />
                    </ListItem>
                    <ListItem className={page === 4 ? null : "listItem"} style={{ backgroundColor: page === 4 ? "#037fff" : 'transparent', paddingLeft: 0, paddingRight: 0 }} onClick={() => { setPage(4); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className='listItemText' style={{ color: page === 4 ? "#FFF" : "#a4acc4" }} variant='body2'>{translate.contact}</Typography>}
                        />
                        <div className="overlay" />
                    </ListItem>
                </List>
            </div>
            <div className={classes.drawerBottom}>
                <Button variant="contained" color={lang === 'fa' ? 'primary' : 'secondary'} onClick={() => changeLanguage('fa')}>فارسی</Button>
                {"|"}
                <Button variant="contained" color={lang === 'en' ? 'primary' : 'secondary'} onClick={() => changeLanguage('en')}>English</Button>
            </div>

            <Divider />

        </>
    );
    const getPage = () => {
        switch (page) {
            case 0:
                return <HomeScreen />
            case 1:
                return <AboutScreen />
            case 2:
                return <ResumeScreen />
            case 3:
                return <PortfolioScreen />
            case 4:
                return <ContactScreen />

            default:
                return <HomeScreen />
        }
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <span className="list1" />
                <span className="list2" />
                <span className="list3" />
                <span className="list4" />
                {getPage()}
            </main>
        </div>
    );
}



export default ResponsiveDrawer;