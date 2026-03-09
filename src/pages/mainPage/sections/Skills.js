import React, { useEffect, useRef, useState } from 'react';
import '../../../App.css';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import AOS from 'aos';
import SkillsData from '../../../projectsResource/skills';

/* ─── Animated Marquee & Counter ─── */
function useCountUp(target, duration = 1500) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = Math.ceil(duration / target);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
        }, step);
        return () => clearInterval(timer);
    }, [started, target, duration]);

    return [count, setStarted];
}

const SKILLS_LIST = [
    "Software Engineering",
    "Android Development",
    "Spring Boot",
    "Database",
    "Kotlin",
    "Flutter"
];

function ExperienceHero() {
    const ref = useRef(null);
    const [count, setStarted] = useCountUp(10, 1200);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [setStarted]);

    return (
        <div ref={ref} style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            padding: '100px 0',
            backgroundColor: 'transparent',
            userSelect: 'none',
            marginBottom: 60,
            marginTop: 40,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {/* Background Marquee Rows */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                <div className="marquee-container" style={{ margin: 0 }}>
                    <div className="marquee-content">
                        {SKILLS_LIST.map((item, i) => (
                            <span key={i} className={`marquee-item ${i % 2 === 0 ? 'solid' : ''}`}>{item}</span>
                        ))}
                    </div>
                    <div className="marquee-content" aria-hidden="true">
                        {SKILLS_LIST.map((item, i) => (
                            <span key={i} className={`marquee-item ${i % 2 === 0 ? 'solid' : ''}`}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="marquee-container" style={{ margin: 0 }}>
                    <div className="marquee-content reverse" style={{ animationDuration: '40s' }}>
                        {SKILLS_LIST.map((item, i) => (
                            <span key={i} className={`marquee-item ${i % 2 !== 0 ? 'solid' : ''}`}>{item}</span>
                        ))}
                    </div>
                    <div className="marquee-content reverse" aria-hidden="true" style={{ animationDuration: '40s' }}>
                        {SKILLS_LIST.map((item, i) => (
                            <span key={i} className={`marquee-item ${i % 2 !== 0 ? 'solid' : ''}`}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="marquee-container" style={{ margin: 0 }}>
                    <div className="marquee-content" style={{ animationDuration: '45s' }}>
                        {SKILLS_LIST.slice().reverse().map((item, i) => (
                            <span key={i} className={`marquee-item ${i % 2 === 0 ? 'solid' : ''}`}>{item}</span>
                        ))}
                    </div>
                    <div className="marquee-content" aria-hidden="true" style={{ animationDuration: '45s' }}>
                        {SKILLS_LIST.slice().reverse().map((item, i) => (
                            <span key={i} className={`marquee-item ${i % 2 === 0 ? 'solid' : ''}`}>{item}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Foreground Counter */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                color: '#0a549f',
                padding: '40px',
                background: 'rgba(238, 238, 238, 0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
            }}>
                <div style={{
                    fontSize: 'clamp(72px, 14vw, 120px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-4px',
                    fontFamily: "'Inter', sans-serif",
                }}>
                    +{count}
                </div>
                <div style={{
                    fontSize: 'clamp(20px, 4vw, 32px)',
                    fontWeight: 800,
                    letterSpacing: '2px',
                    marginTop: 12,
                    textTransform: 'uppercase',
                }}>
                    Years of Experience
                </div>
            </div>
        </div>
    );
}

function Skills() {
    useEffect(() => { AOS.init(); }, []);

    const skillsData = SkillsData;
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
            padding: 22,
            paddingTop: 10,
            minHeight: 170,
        },
        chipBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginTop: 12,
        },
        responsibilities: {
            fontSize: 18,
        }
    };

    return (
        <div id="skills" style={styles.background} className={"fontStyle"}>
            <ExperienceHero />

            <Container maxWidth="lg">
                <div className={"fontStyle"} style={styles.title}>
                    <h1 className={"subheading"}>Skills</h1>
                </div>
            </Container>

            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {skillsData.focus.map((focusItem, index) => (
                        <Grid item md={12 / skillsData.focusItemInRow} xs={12}
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 400 + 400}
                            data-aos-duration="1000">
                            <div style={styles.item}>
                                <img style={styles.image} src={process.env.PUBLIC_URL + focusItem.image}
                                    alt={focusItem.alt} />
                                <h1 className={"subheading"}>{focusItem.title}</h1>
                            </div>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={3}>
                    {skillsData.fields.map((field, index) => (
                        <Grid item md={6} xs={12}
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index % 2 === 0 ? 400 : 800}
                            data-aos-duration="1000">
                            <Paper elevation={3} style={styles.section}>
                                <h1 className={"subheading"}>{field.title}</h1>
                                <div style={styles.responsibilities}>
                                    {field.description}
                                </div>
                                {field.tech && field.tech.length > 0 && (
                                    <div style={styles.chipBox}>
                                        {field.tech.map((t, i) => (
                                            <Chip key={i} label={t} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </div>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </div>
    );
}

export default Skills;
