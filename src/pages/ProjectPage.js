import React from 'react';
import '../App.css';
import Container from "@mui/material/Container";
import ProjectsData from '../projectsResource/projects';
import {useParams} from 'react-router-dom'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileAppBarProjectPage from "./MobileAppBarProjectPage";
import Markdown from "markdown-to-jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ProjectPage() {

    const projectsDate = ProjectsData
    let {name} = useParams();
    const [projectDesc, setProjectDesc] = React.useState("")
    const currentProject = projectsDate.filter(project => project.projectName === name)[0];

    React.useEffect(() => {
        window.scrollTo(0, 0) // scroll to top when loading the
        fetch(process.env.PUBLIC_URL + "/markdown/" + currentProject.mdDesc)
            .then((r) => r.text())
            .then(text => {
                setProjectDesc(text);
            })

    }, []);

    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 30,
            cursor: "pointer",
        },
        topMenu: {
            marginLeft: 30
        },
        projectContent: {
            marginTop: 70
        },
        heroImage: {
            width: "inherit",
            marginTop: 20
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
        platformsContainer: {
            marginTop: 10,
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

    function getContent() {
        if (currentProject.HtmlDesc == null)
            return <Markdown>
                {projectDesc}
            </Markdown>
        return <div style={styles.desc} dangerouslySetInnerHTML={{__html: currentProject.HtmlDesc}}/>;
    }

    return (
        <div style={styles.background} className={"fontStyle"}>
            <AppBar id="landscapeFlex" position="fixed" style={styles.appBar}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Box style={styles.name} onClick={() => {
                            let url = window.location.protocol + "//" + window.location.host;
                            window.location.replace(url);
                        }}>
                            Hasan Mhd Amin
                        </Box>

                        <Box style={styles.topMenu}>

                            <Button color="inherit" onClick={() => {
                                let url = window.location.protocol + "//" + window.location.host;
                                window.location.replace(url);
                            }}>
                                Home
                            </Button>
                            <Button color="inherit" onClick={() => {
                                let url = window.location.protocol + "//" + window.location.host + "#/home/skills";
                                window.location.replace(url);
                            }}>
                                Skills
                            </Button>
                            <Button color="inherit" onClick={() => {
                                let url = window.location.protocol + "//" + window.location.host + "#/home/experience";
                                window.location.replace(url);
                            }}>
                                Experience
                            </Button>
                            <Button color="inherit" onClick={() => {
                                let url = window.location.protocol + "//" + window.location.host + "#/home/projects";
                                window.location.replace(url);
                            }}>
                                Projects
                            </Button>
                            <Button color="inherit" onClick={() => {
                                let url = window.location.protocol + "//" + window.location.host + "#/home/education";
                                window.location.replace(url);
                            }}>
                                Education
                            </Button>
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
                        </Box>

                    </Toolbar>
                </Container>

            </AppBar>

            <MobileAppBarProjectPage/>

            <Container style={styles.projectContent} maxWidth="sm">

                <Button color="primary"  startIcon={<ArrowBackIcon/>} onClick={() => {
                    let url = window.location.protocol + "//" + window.location.host + "#/home/projects";
                    window.location.replace(url);
                }}>
                    Projects
                </Button>

                <img style={styles.heroImage}
                     src={process.env.PUBLIC_URL + "/images/projects/" + currentProject.heroImage}
                     alt={"mobile icon"}/>

                <div style={styles.title}>{currentProject.projectName}</div>
                <a style={styles.company} href={currentProject.companyUrl}
                   target={"blank"}>
                    <div>{currentProject.company}</div>
                    <div>{currentProject.duration}</div>
                </a>


                <div style={styles.platformsContainer}>

                    <div style={styles.tagsTitle}>
                        Platforms:
                    </div>
                    {currentProject.platforms.map(tag => (

                        <Button style={styles.tags} variant="contained" disabled>
                            {tag}
                        </Button>

                    ))}

                </div>

                {getContent()}

                <div style={styles.tagsContainer}>

                    <div style={styles.tagsTitle}>
                        Used methods and tools:
                    </div>
                    {currentProject.tags.map(tag => (

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
