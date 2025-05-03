"use client"

import { useEffect } from "react"
import { Box, Typography, Grid, Avatar, Paper } from "@mui/material"
import { usePageTitle } from "../../context/PageTitleContext"
import "./Home.css"


import profileImage from "../../assets/images/icon.png"

const Home = () => {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Home")
  }, [setPageTitle])

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
              Web Developer
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to my portfolio! I'm a passionate web developer with expertise in React, Material UI, and
              responsive design. I love creating beautiful and functional web applications.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Grid container spacing={2}>
              {["React", "JavaScript", "HTML/CSS", "Material UI", "Node.js", "Git"].map((skill) => (
                <Grid item key={skill} xs={6} sm={4}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                    }}
                  >
                    {skill}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home