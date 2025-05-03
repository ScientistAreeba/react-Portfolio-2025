"use client"

import { useEffect } from "react"
import { Box, Typography, Paper } from "@mui/material"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab" 
import SchoolIcon from "@mui/icons-material/School"
import { usePageTitle } from "../../context/PageTitleContext"
import "./Education.css"

const Education = () => {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Education")
  }, [setPageTitle])

  
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Information Technology Univeristy ~ ITU",
      year: "2023 - 2027",
      description: "Studied computer science with a focus on web development and andorid development course",
    },
    {
      id: 2,
      degree: "A-levels",
      institution: "International School Lahore ~ ISL",
      year: "2021-2023",
      description: "Intensive 2-year journey studying sciences and mathematics with 100% merit scholarship.",
    },
    {
      id: 3,
      degree: "O-levels",
      institution: "School for Contemporary Learning and Islamic Learning ~ SCIL",
      year: "2018 - 2021",
      description: "Acheived good grades.",
    },
  ]

  return (
    <Box className="education-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Education
      </Typography>
      <Typography variant="body1" paragraph>
        Qualification Summary.
      </Typography>

      <Timeline position="alternate">
        {educationData.map((edu) => (
          <TimelineItem key={edu.id}>
            <TimelineOppositeContent color="text.secondary">{edu.year}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              {edu.id !== educationData.length && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }} className="education-paper">
                <Typography variant="h6" component="h2">
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {edu.institution}
                </Typography>
                <Typography variant="body2">{edu.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  )
}

export default Education
