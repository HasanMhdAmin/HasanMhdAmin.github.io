import React from 'react';
import '../../../App.css';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ProjectsData from '../../../projectsResource/projects';
import AOS from 'aos';
import ToggleButtonGroup from "@mui/lab/ToggleButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/lab/ToggleButton";
import {makeStyles, withStyles} from "@mui/styles";


const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        background: "#ffffff",
        border: 'none',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

function Projects() {
    AOS.init();

    const [filterValue, setFilterValue] = React.useState("all");

    const projectsDate = ProjectsData
    const styles = {
        background: {
            backgroundColor: "#eeeeee",
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
            marginTop: 50,
            // paddingBottom: 50,
        },
        projectsSection: {
            marginTop: 20,
        },
        card: {},
        media: {
            height: 140,
        },
        paper: {
            display: "inline-block",
            border: `none`,
            flexWrap: 'wrap',
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
            maxWidth: 50,
            maxHeight: 25
        },
        companyLogo: {
            marginLeft: "auto",
            marginRight: 0,
        },
        mobileFix: {
            marginTop: "0px !important"
        }
    };

    const handleCategoryChange = (event, newAlignment) => {
        setFilterValue(newAlignment);
    };

    const handleChange = (event) => {
        setFilterValue(event.target.value);
    };


    return (
        <div id="projects" style={styles.background}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item md={4}>

                        <div className={"fontStyle"}
                             style={styles.titleSection}>

                            <h1 className={"subheading"}>Projects</h1>

                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}
                        // style={styles.contentSection}
                    >
                        <div className={"fontStyle"}>

                            <Paper
                                id={"landscape"}
                                // style={styles.paper}
                                style={Object.assign(styles.paper, styles.contentSection)}>

                                <StyledToggleButtonGroup
                                    value={filterValue}
                                    exclusive
                                    onChange={handleCategoryChange}
                                    aria-label="text alignment"
                                >
                                    <ToggleButton value="all" aria-label="centered">
                                        All
                                    </ToggleButton>
                                    <ToggleButton value="professional" aria-label="centered">
                                        Professional
                                    </ToggleButton>
                                    <ToggleButton value="personal" aria-label="centered">
                                        Personal
                                    </ToggleButton>
                                    <ToggleButton value="mobile" aria-label="centered">
                                        Mobile
                                    </ToggleButton>
                                    <ToggleButton value="web" aria-label="centered">
                                        Web
                                    </ToggleButton>
                                </StyledToggleButtonGroup>
                            </Paper>

                            <FormControl style={styles.mobileFix}
                                         id="mobile"
                                         variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                <Select
                                    value={filterValue}
                                    onChange={handleChange}
                                    label="Category"
                                >
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="professional">Professional</MenuItem>
                                    <MenuItem value="personal">Personal</MenuItem>
                                    <MenuItem value="mobile">Mobile</MenuItem>
                                    <MenuItem value="web">Web</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            style={styles.projectsSection}
                        >

                            {projectsDate.filter(pr => pr.filters.includes(filterValue) && pr.visible !== false).map(project => (
                                <Grid item xs={12} sm={6} md={4} key={projectsDate.indexOf(project)}>
                                    <Card style={styles.card}>
                                        <CardActionArea onClick={event => {
                                            let url = window.location.protocol + "//" + window.location.host + "#" + "/project/" + project.projectName;
                                            window.location.replace(url);
                                        }}>
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

                                            <div style={styles.companyLogo}>
                                                {project.companyLogo != null ?
                                                    <img
                                                        style={styles.cardIcon}
                                                        title={project.company}
                                                        src={process.env.PUBLIC_URL + project.companyLogo}
                                                        alt={"mobile icon"}/>
                                                    : ""
                                                }
                                            </div>

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
