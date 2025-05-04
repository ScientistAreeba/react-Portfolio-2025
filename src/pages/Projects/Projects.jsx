"use client"

import { useEffect } from "react"
import { Box, Typography, Grid } from "@mui/material"
import ProjectCard from "../../components/ui/ProjectCard"
import { usePageTitle } from "../../context/PageTitleContext"

import geneLensImage from "../../assets/images/gene.jpg"
import weatherAppImage from "../../assets/images/weather.png"
import islamicologyImage from "../../assets/images/logo.png"
import portfolioImage from "../../assets/images/portfolio.png"

import "./Projects.css"

const Projects = () => {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Projects")
  }, [setPageTitle])

  
  const projects = [
    {
      id: 1,
      title: "GeneLens",
      description: "A distributed DNA analysis system where the concepts of Protien folding are applied to detect genetic disesase.",
      image: geneLensImage, 
      technologies: ["C++", "SQL", "OpenCV", "Socket Programming"],
      githubLink: "https://github.com/ScientistAreeba/GeneLens",
    },
    {
      id: 2,
      title: "Islamicology Android App",
      description: "An engaging islamic learning app for beginners to understand and incorporate their deen in their daily lives.",
      image: islamicologyImage, 
      technologies: ["Java", "Android Studio", "Google Firebase"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website built with simple html and css as a start of web dev course to learn the basics.",
      image: portfolioImage, 
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/ScientistAreeba/Portfolio-2025",
      liveLink: "https://scientistareeba.github.io/Portfolio-2025/",
    },
    {
      id: 4,
      title: "Weather App",
      description: "A weather application that shows current weather and forecasts as requested by the user according to location(city)",
      image: weatherAppImage, 
      technologies: ["Java", "OpenWeather API", "Flutter"],
    },
  ];

  return (
    <Box className="projects-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" paragraph>
        These are some of my personal projects that I have worked on to develop my skills and apply what I have learn through courses.
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects
