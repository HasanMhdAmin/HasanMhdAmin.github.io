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
            paddingBottom: 50,
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
            // paddingBottom: 70,
        },
        responsibilities: {
            fontSize: 18,
        }
    };

    return (
        <div id="skills" style={styles.background} className={"fontStyle"}>
            <Container maxWidth="lg">
                <div className={"fontStyle"} style={styles.title}>
                    <h1 className={"subheading"}>Skills</h1>
                </div>

                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="1000">
                        <div style={styles.item}>
                            <img style={styles.image} src={process.env.PUBLIC_URL + "/images/android.svg"} alt={"Android icon"}/>
                            <h1 className={"subheading"}>Android</h1>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}
                          data-aos="fade-up"
                          data-aos-delay="800"
                          data-aos-duration="1000">
                        <div style={styles.item}>
                            <img style={styles.image} src={process.env.PUBLIC_URL + "/images/frontend.svg"} alt={"Full Stack icon"}/>
                            <h1 className={"subheading"}>Full Stack</h1>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}
                          data-aos="fade-up"
                          data-aos-delay="1200"
                          data-aos-duration="1000">
                        <div style={styles.item}>
                            <img style={styles.image} src={"https://blog.jetbrains.com/wp-content/uploads/2019/01/kotlin_logotype.svg"} alt={"Java icon"}/>
                            <h1 className={"subheading"}>Kotlin</h1>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="1000">
                        <Paper elevation={3} style={styles.section}>
                            <h1 className={"subheading"}>Mobile Application Technologies</h1>
                            <div style={styles.responsibilities}>
                                Android Studio, Java, Kotlin, Flutter, MVVM, Firebase, Room DB, Dagger DI,
                                Create plugins for (Ionic & Cordova), Google Maps, REST, JSON, XML.
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}
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
                    <Grid item md={6} xs={12}  style={styles.sectionWrapper}
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-duration="1000">
                        <Paper elevation={3} style={styles.section}>
                            <h1 className={"subheading"}>Backend Technologies</h1>
                            <div style={styles.responsibilities}>
                                Spring Boot, ASP.Net Core, webAPI, C#, MSSQL, MySQL, Oracle, SQLite,
                                MS Entity Framework, Hibernate, JPA, LINQ, MongoDB, Postman.
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}
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
