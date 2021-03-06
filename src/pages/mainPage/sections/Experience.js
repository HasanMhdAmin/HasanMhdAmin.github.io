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
import AOS from 'aos';

import Paper from '@material-ui/core/Paper';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '20px 20px',
        marginTop: "10px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function Experience() {
    AOS.init();
    const classes = useStyles();

    const styles = {
        background: {
            backgroundColor: "#ffffff",
            paddingBottom: 50,
        },
        titleSection: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'right',
        },
        contentSection: {
            // marginTop: 50
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
            marginTop: 5,
        },
        image: {
            float: "right",
            maxWidth: 160,
            maxHeight: 60,
            marginBottom: 4,
        },
    };

    const deichmann = <Paper elevation={3} className={classes.paper}>

        <Grid container spacing={3}>
            <Grid item xs={10}>
                <div style={styles.jobTitle}>Software Engineer | Android Developer</div>
                <a style={styles.company} href={"https://deichmann.com/"} target={"blank"}>
                    Deichmann, Essen
                    <br/>
                    February 2021 – <b>Today</b>
                </a>
            </Grid>
            <Grid item xs={2}>
                <a href={"https://deichmann.com/"} target={"blank"}>
                    <img style={styles.image} src={process.env.PUBLIC_URL + "/images/logos/deichmann.jpeg"} alt={"deichmann logo"}/>
                </a>
            </Grid>
        </Grid>

    </Paper>


    const imgly = <Paper elevation={3} className={classes.paper}>

        <Grid container spacing={3}>
            <Grid item xs={10}>
                <div style={styles.jobTitle}>Android Developer</div>
                <a style={styles.company} href={"https://photoeditorsdk.com/"} target={"blank"}>
                    img.ly GmbH, Bochum
                    <br/>
                    October 2019 – September 2020
                </a>
            </Grid>
            <Grid item xs={2}>
                <a href={"https://photoeditorsdk.com/"} target={"blank"}>
                    <img style={styles.image} src={process.env.PUBLIC_URL + "/images/logos/imgly.png"} alt={"img.ly logo"}/>
                </a>
            </Grid>
        </Grid>

        <div style={styles.responsibilities}>
            Responsibilities include:
            <ul>
                <li> Implement new features to PhotoEditor SDK and VideoEditor
                    SDK in the <b>Android</b> version.
                </li>
                <li> Create plugins for <b>Cordova</b> and <b>Ionic</b> to wrap the
                    native
                    PhotoEditor SDK and VideoEditor SDK to make it easily used and
                    integrated with apps built using Cordova and Ionic without
                    forcing the developers to leave their <b>JavaScript</b> tooling
                    and
                    programming environment.
                </li>
            </ul>
        </div>

        <div style={styles.responsibilities}>
            <i>Used methods and tools:</i>
            <div>
                Android Studio, Visual Studio Code, Java, Kotlin, Cordova, Ionic,
                C++, OpenGl.
            </div>
        </div>


    </Paper>

    const ude = <Paper elevation={3} className={classes.paper}>

        <Grid container spacing={3}>
            <Grid item xs={10}>
                <div style={styles.jobTitle}>Android & Backend Developer</div>
                <a style={styles.company} href={"https://interactivesystems.info/"}
                   target={"blank"}>
                    University of Duisburg-Essen <br/> interactive systems Group, Duisburg
                    <br/>
                    August 2018 – September 2020
                </a>
            </Grid>
            <Grid item xs={2} >
                <a href={"https://interactivesystems.info/"} target={"blank"}>
                    <img style={styles.image} src={process.env.PUBLIC_URL + "/images/logos/interactive_systems.png"} alt={"interactive systems logo"}/>
                    <img style={styles.image} src={process.env.PUBLIC_URL + "/images/logos/uni_due.png"} alt={"Uni DUE logo"}/>
                </a>
            </Grid>
        </Grid>

        <div style={styles.responsibilities}>
            Responsibilities include:
            <ul>
                <li> Implement an <b>Android</b> application designed to study and
                    compare
                    various mood measures and interactive designs.
                </li>
                <li> Implement an Android application that I developed as the
                    platform for running research studies. It tracks user behavior
                    and <b>smartphone sensor</b> data.
                </li>
                <li> Implement the <b>backend</b> for this two previous Android
                    application
                    using <b>Spring Boot</b> and design the <b>database</b>.
                </li>
            </ul>
        </div>
        <div style={styles.responsibilities}>
            <i>Used methods and tools:</i>
            <div>
                Android Studio, Java, Spring Boot, JSON, ContentResolver,
                ActivityRecognitionClient, AlarmManager, AccessibilityService,
                Device Sensors, Firebase, ORM database, Git, Postman, Runtime
                permissions, MySQL, PHP.
            </div>
        </div>
    </Paper>

    const cloudAppers = <Paper elevation={3} className={classes.paper}>

        <Grid container spacing={3}>
            <Grid item xs={10}>
                <div style={styles.jobTitle}>Android Developer</div>
                <a style={styles.company} href={"http://cloudappers.com/"}
                   target={"blank"}>
                    CloudAppers, Damascus
                    <br/>
                    February 2016 – August 2017
                </a>
            </Grid>
            <Grid item xs={2} >
                <a href={"http://cloudappers.com/"} target={"blank"}>
                <img style={styles.image} src={process.env.PUBLIC_URL + "/images/logos/cloudappers.png"} alt={"interactive systems logo"}/>
               </a>
            </Grid>
        </Grid>
        <div style={styles.responsibilities}>
            Responsibilities include:
            <ul>
                <li> Implement an <b>Android</b> application for "Roads and
                    Transport
                    Authority" for <b>Dubai E-Government</b> that allows the user to
                    book
                    parking, renew or replace driver’s license, renew vehicle
                    registration, book a taxi, and too many other services.
                </li>
                <li> Implement an <b>Android</b> application for the <b>Department
                    of Culture
                    and Tourism</b> in Abu Dhabi, this application contains a good
                    deal
                    of information about Abu Dhabi city like Hotels & Resorts,
                    Attractions, Culture & Heritage, Restaurants, and Spas, etc.
                </li>
                <li> Implement an intermediate Real Estate <b>Android</b> mobile
                    application that helps the users connect with agents.
                </li>
            </ul>
        </div>
        <div style={styles.responsibilities}>
            <i>Used methods and tools:</i>
            <div>
                Java, JSON, XML, Android Studio, Google Maps, Firebase, Git, ArcGIS
                Maps, Real Time Messaging.
            </div>
        </div>
    </Paper>

    return (
        <div id="experience" style={styles.background}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={4}>

                        <div className={"fontStyle"}
                            // style={Object.assign(styles.titleSection, styles.paper)}>
                             style={styles.titleSection}>

                            <h1 className={"subheading"}>Professional<br/>Experience</h1>

                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <div id="landscape" className={"fontStyle"} style={styles.contentSection}>

                            <Timeline align="left">
                                <TimelineItem
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                    data-aos-duration="500"
                                >
                                    <TimelineOppositeContent style={styles.removeOppositeContent}/>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {deichmann}
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                    data-aos-duration="500"
                                >
                                    <TimelineOppositeContent style={styles.removeOppositeContent}/>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {imgly}
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                    data-aos-duration="500"
                                >
                                    <TimelineOppositeContent style={styles.removeOppositeContent}/>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {ude}
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                    data-aos-duration="500"
                                >
                                    <TimelineOppositeContent style={styles.removeOppositeContent}/>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {cloudAppers}
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </div>

                        <div id="mobile" className={"fontStyle"} style={styles.contentSection}>
                            {deichmann}
                            {imgly}
                            {ude}
                            {cloudAppers}
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Experience;
