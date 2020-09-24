import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AOS from 'aos';

function Skills() {
    AOS.init();

    const styles = {
        background: {
            paddingTop: 70,
            backgroundColor: "#eeeeee",
        },
        title: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'center',
        },
        item: {
            textAlign: "center",
        },
        image: {
            textAlign: "center",
            maxWidth: 160,
        },
        section: {
            padding: 18,
            paddingTop: 3,
            minHeight: 170
        },
        sectionWrapper: {
            paddingBottom: 70,
        },
        responsibilities: {
            fontSize: 18,
        }
    };

    return (
        <div style={styles.background} className={"fontStyle"}>
            <Container maxWidth="lg">
                <div className={"fontStyle"} style={styles.title}>
                    <h1 className={"subheading"}>Skills</h1>
                </div>

                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4}
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="1000">
                        <div style={styles.item}>
                            <img style={styles.image} src={process.env.PUBLIC_URL + "/images/android.svg"}/>
                            <h1 className={"subheading"}>Android</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}
                          data-aos="fade-up"
                          data-aos-delay="800"
                          data-aos-duration="1000">
                        <div style={styles.item}>
                            <img style={styles.image} src={process.env.PUBLIC_URL + "/images/frontend.svg"}/>
                            <h1 className={"subheading"}>Full Stack</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}
                          data-aos="fade-in"
                          data-aos-delay="1200"
                          data-aos-duration="1000">
                        <div style={styles.item}>
                            <img style={styles.image} src={process.env.PUBLIC_URL + "/images/java.svg"}/>
                            <h1 className={"subheading"}>Java</h1>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="1000">
                        <Paper elevation={3} style={styles.section}>
                            <h1 className={"subheading"}>Mobile Application Technologies</h1>
                            <div style={styles.responsibilities}>
                                Android Studio, Java, Kotlin, MVVM, Firebase, Create plugins for (Ionic & Cordova),
                                Google Maps, REST, JSON, XML.
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}
                          data-aos="fade-up"
                          data-aos-delay="600"
                          data-aos-duration="1000">
                        <Paper elevation={3} style={styles.section}>
                            <h1 className={"subheading"}>Frontend Technologies</h1>
                            <div style={styles.responsibilities}>
                                ReactJS, JavaScript, TypeScript, HTML5, CSS, ASP.Net, Bootstrap, WordPress, Joomla.
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6} style={styles.sectionWrapper}
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="1000">
                        <Paper elevation={3} style={styles.section}>
                            <h1 className={"subheading"}>Backend Technologies</h1>
                            <div style={styles.responsibilities}>
                                Spring Boot, ASP.Net webAPI, C#, MSSQL, MySQL, Oracle, SQLite, MS Entity Framework,
                                Hibernate, JPA, LINQ, MongoDB, Postman.
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}
                          data-aos="fade-up"
                          data-aos-delay="600"
                          data-aos-duration="1000">
                        <Paper elevation={3} style={styles.section}>
                            <h1 className={"subheading"}>Project management tools</h1>
                            <div style={styles.responsibilities}>
                                Git, Jira, Trello, Slack, Agile methodology.
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>

    );
}

export default Skills;
