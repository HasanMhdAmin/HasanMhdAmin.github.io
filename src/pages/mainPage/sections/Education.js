import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SchoolIcon from '@material-ui/icons/School';

function Education() {
    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 24,
        },
        topMenu: {
            marginLeft: 30
        },
        cvHeader: {
            // marginTop: 100,
            paddingTop: 100,
            backgroundColor: "#eeeeee"
        },
        userAvatar: {
            margin: "auto",
            width: 270,
            height: 270,
        },
        titleSection: {
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 25
        },
        contentSection: {
            marginTop: 50
        },
        description: {
            fontSize: 18
        },
        detailedCV: {
            marginLeft: 18
        },
        paper: {
            textAlign: 'center',
            whiteSpace: 'nowrap',
        },
        uni: {
            fontSize: 25,
            marginLeft: 10,
            lineHeight: 0,
        },
        uniSub: {
            fontSize: 20,
            marginLeft: 50,
            color: "#8c8c8c",
            textDecoration: "none",
        },
        uniIcon: {
            marginBottom: -7
        }

    };

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={4}>

                        <div className={"fontStyle"}
                             style={Object.assign(styles.titleSection, styles.paper)}>

                            <h1>Education</h1>

                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className={"fontStyle"} style={styles.contentSection}>

                            <div>
                                <SchoolIcon fontSize="large" style={styles.uniIcon}/> <span style={styles.uni}> M.Sc. in Computer Engineering, 2020</span>
                                <br/>
                                <a style={styles.uniSub} href={"https://www.uni-due.de/"} target={"blank"}>
                                    University of Duisburg-Essen
                                </a>

                            </div>
                            <div>
                                <SchoolIcon fontSize="large" style={styles.uniIcon}/> <span style={styles.uni}> B.Sc. in Informatics Engineering, 2016</span>
                                <br/>
                                <a style={styles.uniSub} href={"https://www.aiu.edu.sy/"} target={"blank"}>
                                    Arab International University
                                </a>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Education;
