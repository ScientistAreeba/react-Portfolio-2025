"use client"

import { useEffect } from "react"
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Chip
} from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
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
      institution: "Information Technology University ~ ITU",
      year: "2023 - 2027",
      description: "Studied computer science with a focus on web development and android development course",
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
      description: "Achieved good grades.",
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

      <TableContainer component={Paper} elevation={3} className="education-table-container">
        <Table sx={{ minWidth: 650 }} aria-label="education table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Degree</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Institution</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Year</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((edu, index) => (
              <TableRow 
                key={edu.id}
                sx={{ 
                  '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)', transition: 'background-color 0.3s ease' },
                  height: '80px',
                }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SchoolIcon color="primary" />
                    <Typography variant="subtitle1" fontWeight="medium">
                      {edu.degree}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="primary.dark">
                    {edu.institution}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    icon={<CalendarTodayIcon />} 
                    label={edu.year} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      color: 'primary.contrastText',
                      fontWeight: 'medium'
                    }} 
                  />
                </TableCell>
                <TableCell>{edu.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Education
