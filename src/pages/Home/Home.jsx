"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { Box, Typography, Grid, Avatar, Paper, LinearProgress } from "@mui/material"
import { usePageTitle } from "../../context/PageTitleContext"
import CodeIcon from "@mui/icons-material/Code"
import JavascriptIcon from "@mui/icons-material/Javascript"
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver"
import DataObjectIcon from "@mui/icons-material/DataObject"
import "./Home.css"

import profileImage from "../../assets/images/icon.png"

const Home = () => {
  const { setPageTitle } = usePageTitle()
  const skillsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  
  //use memo for wrapping the skills array
  const finalSkills = useMemo(() => [
    { name: "C++", level: 90, icon: <CodeIcon /> },
    { name: "JavaScript", level: 85, icon: <JavascriptIcon /> },
    { name: "Communication", level: 75, icon: <RecordVoiceOverIcon /> },
    { name: "Data Annotation", level: 95, icon: <DataObjectIcon /> },
  ], []); 
  
  const [animatedSkills, setAnimatedSkills] = useState(
    finalSkills.map(skill => ({ ...skill, level: 0 }))
  )

  useEffect(() => {
    setPageTitle("Home")
  }, [setPageTitle])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const currentRef = skillsRef.current
    
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedSkills(finalSkills)
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, finalSkills])

  return (
    <Box className="home-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="profile-section">
            <Avatar alt="Areeba Atif" src={profileImage} sx={{ width: 150, height: 150, mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom>
              Areeba Atif
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Android App Developer | Data Annotator Intern 
            </Typography>
            <Typography variant="body1" paragraph>
              This is my portfolio showcasing my educational information, projects, skills set and contact information. As well as details of relevant experiences and awards in my career path.
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4 }} className="skills-bars-container" ref={skillsRef}>
            <Typography variant="h4" gutterBottom className="skills-title">
              Skill Level
            </Typography>
            <Box sx={{ mt: 3 }}>
              {animatedSkills.map((skill, index) => (
                <Box key={skill.name} sx={{ mb: 4 }} className={`skill-item skill-item-${index}`}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box className="skill-icon-container">
                        {skill.icon}
                      </Box>
                      <Typography variant="subtitle1" fontWeight="medium">
                        {skill.name}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="primary" className="skill-percentage">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level} 
                    sx={{ 
                      height: 10, 
                      borderRadius: 5,
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                        backgroundImage: 'linear-gradient(to right, rgb(229, 33, 243), rgb(246, 100, 231))',
                        transition: 'transform 1.5s ease-out',
                      }
                    }} 
                    className="skill-progress-bar"
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
