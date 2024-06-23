import React from 'react';
import '../App.css';
import Button from "@mui/material/Button";


import clsx from "clsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {makeStyles} from "@mui/styles";

function MobileAppBarProjectPage() {
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
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host;
                        window.location.replace(url);
                    }}>
                        Home
                    </Button>
                </ListItem>

                <ListItem button key={"skills"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/skills";
                        window.location.replace(url);
                    }}>
                        Skills
                    </Button>
                </ListItem>
                <ListItem button key={"experience"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/experience";
                        window.location.replace(url);
                    }}>
                        Experience
                    </Button>
                </ListItem>
                <ListItem button key={"projects"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/projects";
                        window.location.replace(url);
                    }}>
                        Projects
                    </Button>
                </ListItem>
                <ListItem button key={"education"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/education";
                        window.location.replace(url);
                    }}>
                        Education
                    </Button>
                </ListItem>
                <ListItem button key={"contact"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/contact";
                        window.location.replace(url);
                        setTimeout(() => {
                            window.scrollTo({
                                behavior: document.body.scrollHeight ? "smooth" : "auto",
                                top: document.body.scrollHeight
                            });
                        }, 1000);
                    }}>
                        Contact
                    </Button>
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

export default MobileAppBarProjectPage;
