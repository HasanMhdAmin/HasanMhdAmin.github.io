import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ProjectsData from '../../../projectsResource/projects';
import AOS from 'aos';

function Projects() {
    AOS.init();

    const [filterValue, setFilterValue] = React.useState("all");

    const projectsDate = ProjectsData
    const styles = {
        background: {
            backgroundColor: "#eeeeee",
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
            marginTop: 50,
            paddingLeft: 40,
        },
        projectsSection: {
            marginTop: 20,
            // paddingLeft: 40,
        },
        card: {
            maxWidth: 245,
        },
        media: {
            height: 140,
        },
        title: {
            fontSize: 21
        },
        desc: {
            fontSize: 16,
            lineHeight: 1.5,
            color: "#949494",
            minHeight: 70
        },
        cardIcon: {
            maxWidth: 25
        }
    };

    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ]

    const onAll = () => {
        setFilterValue("all")
    };
    const onProfessional = () => {
        setFilterValue("professional")
    };

    return (
        <div style={styles.background}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={4}>

                        <div className={"fontStyle"}
                             style={styles.titleSection}>

                            <h1 className={"subheading"}>Projects</h1>

                        </div>
                    </Grid>
                    <Grid item xs={8} style={styles.contentSection}>
                        <div className={"fontStyle"}>

                            <ButtonGroup variant="contained" color="primary"
                                         aria-label="contained primary button group">
                                <Button onClick={onAll}>All</Button>
                                <Button onClick={onProfessional}>Professional</Button>
                                <Button onClick={() => setFilterValue("personal")}>Personal</Button>
                                <Button onClick={() => setFilterValue("mobile")}>Mobile</Button>
                                <Button onClick={() => setFilterValue("web")}>Web</Button>
                            </ButtonGroup>
                        </div>

                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            style={styles.projectsSection}
                        >

                            {projectsDate.filter(pr => pr.filters.includes(filterValue)).map(project => (
                                <Grid item xs={12} sm={6} md={4} key={data.indexOf(project)}
                                    // data-aos="zoom-in"
                                    // data-aos-delay="400"
                                    // data-aos-duration="1000"
                                >
                                    <Card style={styles.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                style={styles.media}
                                                image={process.env.PUBLIC_URL + "/images/projects/" + project.heroImage}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <div className={"fontStyle"} style={styles.title}>
                                                    {project.projectName}
                                                </div>
                                                <div className={"fontStyle"} style={styles.desc}>
                                                    {project.shortDesc}
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>

                                            {project.filters.includes("mobile")
                                                ? <img style={styles.cardIcon}
                                                       src={process.env.PUBLIC_URL + "/images/mobile.svg"}
                                                       alt={"mobile icon"}/>
                                                : ""
                                            }
                                            {project.filters.includes("web")
                                                ? <img style={styles.cardIcon}
                                                       src={process.env.PUBLIC_URL + "/images/web.svg"}
                                                       alt={"web icon"}/>
                                                : ""
                                            }

                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Projects;
