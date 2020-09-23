import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '20px 20px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function Experience() {
    const classes = useStyles();

    const styles = {

        titleSection: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'right',
        },
        contentSection: {
            marginTop: 50
        },
        jobTitle: {
            fontSize: 30,
            lineHeight: 1,
        },
        company: {
            fontSize: 20,
            marginTop: 7,
            lineHeight: 1.5,
            color: "#8c8c8c",
            textDecoration: "none",
        },
        uniIcon: {
            marginBottom: -7
        },
        removeOppositeContent: {
            flex: 0,
            content: "",
        },
        responsibilities: {
            fontSize: 18,
            marginLeft: 18,
        }
    };

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={4}>

                        <div className={"fontStyle"}
                            // style={Object.assign(styles.titleSection, styles.paper)}>
                             style={styles.titleSection}>

                            <h1 className={"subheading"}>Professional<br/>Experience</h1>

                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className={"fontStyle"} style={styles.contentSection}>

                            <Timeline align="left">
                                <TimelineItem>
                                    <TimelineOppositeContent style={styles.removeOppositeContent}/>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <div style={styles.jobTitle}>Android Developer</div>
                                            <a style={styles.company} href={"https://www.uni-due.de/"} target={"blank"}>
                                                img.ly GmbH, Bochum
                                                <br/>
                                                October 2019 – September 2020
                                            </a>
                                            <div style={styles.responsibilities}>
                                                Responsibilities include:
                                                <ul>
                                                    <li> Implement new features in PhotoEditor SDK and VideoEditro
                                                        SDK.
                                                    </li>
                                                    <li> Create plugins for Cordova and Ionic to wrap the native
                                                        PhotoEditor SDK and VideoEditor SDK to make it easily used and
                                                        integrated with apps built using Cordova and Ionic without
                                                        forcing the developers to leave their JavaScript tooling and
                                                        programming environment.
                                                    </li>
                                                </ul>

                                            </div>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent style={styles.removeOppositeContent}/>

                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">
                                                Code
                                            </Typography>
                                            <Typography>Because it&apos;s awesome!</Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Experience;
