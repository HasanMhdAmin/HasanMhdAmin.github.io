import React from 'react';
import '../App.css';
import Button from "@mui/material/Button";
import {makeStyles} from '@mui/styles';
import clsx from "clsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";


function MobileAppBar() {
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 30,
            cursor: "pointer",
        },
        hamburger: {
            marginRight: 10,
        },
        item: {
            width: 230,
        }
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            // className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={"home"}>
                    <Link to="home" spy={true} smooth={true} duration={1000} offset={-50} style={styles.item}>
                        <Button color="inherit">
                            Home
                        </Button>
                    </Link>
                </ListItem>

                <ListItem button key={"skills"}>
                    <Link to="skills" spy={true} smooth={true} duration={1000} offset={-50} style={styles.item}>
                        <Button color="inherit">
                            Skills
                        </Button>
                    </Link>
                </ListItem>
                <ListItem button key={"experience"}>
                    <Link to="experience" spy={true} smooth={true} duration={1000} offset={-50} style={styles.item}>
                        <Button color="inherit">
                            Experience
                        </Button>
                    </Link>
                </ListItem>
                <ListItem button key={"projects"}>
                    <Link to="projects" spy={true} smooth={true} duration={1000} offset={-50} style={styles.item}>
                        <Button color="inherit">
                            Projects
                        </Button>
                    </Link>
                </ListItem>
                <ListItem button key={"education"}>
                    <Link to="education" spy={true} smooth={true} duration={1000} offset={-50} style={styles.item}>
                        <Button color="inherit">
                            Education
                        </Button>
                    </Link>
                </ListItem>
                <ListItem button key={"contact"}>
                    <div style={styles.item} onClick={() => {
                        window.scrollTo({
                            behavior: document.body.scrollHeight ? "smooth" : "auto",
                            top: document.body.scrollHeight
                        });
                    }}>

                        Contact

                    </div>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <AppBar id="mobile" position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        style={styles.hamburger}
                        color="inherit" aria-label="menu"
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box style={styles.name} onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host;
                        window.location.replace(url);
                    }}>
                        Hasan Mhd Amin
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </>

    );
}

export default MobileAppBar;
