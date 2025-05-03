"use client"

import React, { useEffect } from "react"
import { Box, Typography, Grid, TextField, Button, Paper, Alert } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useFormik } from "formik"
import * as yup from "yup"
import { usePageTitle } from "../../context/PageTitleContext"
import "./Contact.css"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"

const validationSchema = yup.object({
  name: yup.string().required("Name is required").min(2, "minimum 2 char length"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  message: yup.string().required("Message is required").min(5, "minimum 10 char length"),
})

const Contact = () => {
  const { setPageTitle } = usePageTitle()
  const [submitted, setSubmitted] = React.useState(false)

  useEffect(() => {
    setPageTitle("Contact")
  }, [setPageTitle])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      
      console.log("Form has been submitted:", values)
      setSubmitted(true)
      resetForm()
      setTimeout(() => setSubmitted(false), 5000)
    },
  })

  return (
    <Box className="contact-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to reach out to me using the form provided and Inshallah, I will get back to you.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you!
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }} className="contact-form-paper">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Full Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Message details"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} fullWidth>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }} className="contact-info-paper">
            <Typography variant="h5" gutterBottom>
              Here is the Contact Information and other platforms links.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Email
              </Typography>
              <Typography variant="body1">areebaaatif0@gmail.com</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Phone
              </Typography>
              <Typography variant="body1">+92-032347890</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Location
              </Typography>
              <Typography variant="body1">Lahore, Pakistan</Typography>
            </Box>
                      <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Social Media
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button 
                variant="contained" 
                size="medium"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/areebaaatif/" 
                target="_blank"
                sx={{ 
                  bgcolor: "#0077b5", 
                  "&:hover": { bgcolor: "#006097" }
                }}
              >
                LinkedIn
              </Button>
              <Button 
                variant="contained" 
                size="medium"
                startIcon={<GitHubIcon />}
                href="https://github.com/ScientistAreeba" 
                target="_blank"
                sx={{ 
                  bgcolor: "#333", 
                  "&:hover": { bgcolor: "#2b2b2b" }
                }}
              >
                GitHub
              </Button>
              <Button 
                variant="contained" 
                size="medium"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/areeba__atif?igsh=MWV0bjF5bHptMXU5ag==" 
                target="_blank"
                sx={{ 
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", // Instagram gradient
                  "&:hover": { 
                    background: "linear-gradient(45deg, #e08429 0%, #d25e36 25%, #c9243c 50%, #b9205c 75%, #a9167a 100%)" 
                  }
                }}
              >
                Instagram
              </Button>
            </Box>
          </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
