import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Contact() {

    const styles = {
        background: {
            paddingTop: 70,
            backgroundColor: "#eeeeee",
            paddingBottom: 50
        },
        title: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'center',
        },
        footer: {
            marginTop: 70,
            textAlign: "center"
        },
        hasanName: {
            textDecoration: "none",
            color: "#777777",
            fontWeight: "bold"
        },

    };

    return (

        <div className={"footer"}>

            <div className={"footerContent"}>
                <div id="contact" style={styles.background} className={"fontStyle"}>
                    <Container maxWidth="sm">
                        <div className={"fontStyle"} style={styles.title}>
                            <h1 className={"subheading"}>Contact</h1>
                        </div>

                        <Grid container spacing={3}>
                            < Grid item lg={2}>
                                <div style={styles.item}>
                                    <a href="mailto:hasan.mhd.amin@gmail.com" target="_blank">
                                        <EmailIcon color="primary" style={{fontSize: 50}}/>
                                    </a>
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                                <a href="https://www.linkedin.com/in/hasanmhdamin/" target="_blank">
                                    <LinkedInIcon color="primary" style={{fontSize: 50}}/>
                                </a>
                            </Grid>
                            <Grid item lg={2}>
                                <a href="https://github.com/hasanMhdAmin" target="_blank">
                                    <GitHubIcon color="primary" style={{fontSize: 50}}/>
                                </a>
                            </Grid>
                            <Grid item lg={2}>
                                <a href="skype:hasan.mhd.amin?chat" target="_blank">
                                    <img style={{width: 50}} src={process.env.PUBLIC_URL + "/images/skype.svg"}
                                         alt={"skype icon"} s/>
                                </a>
                            </Grid>
                            <Grid item lg={2}>
                                <a href="https://www.facebook.com/Hasan.Mhd.Amin/" target="_blank">
                                    <FacebookIcon color="primary" style={{fontSize: 50}}/>
                                </a>
                            </Grid>
                            <Grid item lg={2}>
                                <a href="https://www.instagram.com/hasan.mhd.amin/" target="_blank">
                                    <InstagramIcon color="primary" style={{fontSize: 50}}/>
                                </a>
                            </Grid>
                        </Grid>


                        <div style={styles.footer}>
                            Developed️ by <a style={styles.hasanName} href="https://itshasan.de">me</a> using <a style={styles.hasanName} href="https://reactjs.org/"
                                              target="_blank">ReactJs</a>
                        </div>

                    </Container>
                </div>

            </div>


        </div>


    );
}

export default Contact;
