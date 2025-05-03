"use client"

import { useEffect } from "react"
import { Box, Typography, Grid } from "@mui/material"
import ProjectCard from "../../components/ui/ProjectCard"
import { usePageTitle } from "../../context/PageTitleContext"
import "./Projects.css"

const Projects = () => {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Projects")
  }, [setPageTitle])

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "Weather App",
      description: "A weather application that shows current weather and forecasts",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "OpenWeather API", "CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A task management application with drag and drop functionality",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Firebase", "Material UI"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Material UI",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Material UI", "CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
  ]

  return (
    <Box className="projects-container">
      <Typography variant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" paragraph>
        Here are some of the projects I've worked on. Click on the cards to learn more.
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
