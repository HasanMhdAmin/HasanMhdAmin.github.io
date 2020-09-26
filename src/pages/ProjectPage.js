import React from 'react';
import '../App.css';
import Container from "@material-ui/core/Container";
import ProjectsData from '../projectsResource/projects';
import {useParams} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import {Link} from "react-scroll";
import Button from "@material-ui/core/Button";

function ProjectPage() {

    const projectsDate = ProjectsData
    let {name} = useParams();


    const styles = {
        projectContent: {
            marginTop: 100
        },
        heroImage: {
            width: "inherit"
        },
        title: {
            fontSize: 30,
            fontWeight: 600
        },
        company: {
            fontSize: 20,
            marginTop: 7,
            lineHeight: 1.5,
            color: "#8c8c8c",
            textDecoration: "none",
        },
        desc: {
            fontSize: 18,
        },
        tagsContainer: {
            marginBottom: 100,
        },
        tagsTitle: {
            fontSize: 20,
        },
        tags: {
            color: "black",
            padding: 4,
            paddingRight: 10,
            paddingLeft: 10,
            marginRight: 5,
            marginBottom: 5,
            fontSize: 12,
        }
    };

    const getProject = projectsDate.filter(project => project.projectName === name)[0];


    return (
        <div style={styles.background} className={"fontStyle"}>
            <AppBar position="fixed" style={styles.appBar}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Box style={styles.name}>
                            Hasan Mhd Amin
                        </Box>

                        <Box style={styles.topMenu}>

                            <Link to="home" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Home
                                </Button>
                            </Link>
                            <Link to="skills" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Skills
                                </Button>
                            </Link>
                            <Link to="experience" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Experience
                                </Button>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Projects
                                </Button>
                            </Link>
                            <Link to="education" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Education
                                </Button>
                            </Link>
                        </Box>

                    </Toolbar>
                </Container>

            </AppBar>

            <Container style={styles.projectContent} maxWidth="sm">

                <img style={styles.heroImage}
                     src={process.env.PUBLIC_URL + "/images/projects/" + getProject.heroImage}
                     alt={"mobile icon"}/>

                <div style={styles.title}>{getProject.projectName}</div>
                <a style={styles.company} href={getProject.companyUrl}
                   target={"blank"}>
                    <div>{getProject.company}</div>
                    <div>{getProject.duration}</div>
                </a>


                <div style={styles.desc} dangerouslySetInnerHTML={{__html: getProject.HtmlDesc}}/>


                <div style={styles.tagsContainer}>

                    <div style={styles.tagsTitle}>
                        Used methods and tools:
                    </div>
                    {getProject.tags.map(tag => (

                        <Button style={styles.tags} variant="contained" disabled>
                            {tag}
                        </Button>

                    ))}

                </div>


            </Container>
        </div>

    );
}

export default ProjectPage;
