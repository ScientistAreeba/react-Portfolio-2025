"use client"

import React, { useEffect } from "react"
import { Box, Typography, Grid, TextField, Button, Paper, Alert } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useFormik } from "formik"
import * as yup from "yup"
import { usePageTitle } from "../../context/PageTitleContext"
import "./Contact.css"

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
      // In a real application, you would send the form data to a server
      console.log("Form submitted:", values)
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
        Feel free to reach out to me using the form below or through my social media profiles.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you for your message! I will get back to you.
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
                    label="Name"
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
                    label="Email"
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
                    label="Message"
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
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }} className="contact-info-paper">
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Email
              </Typography>
              <Typography variant="body1">areebaaatif6@gmail.com</Typography>
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
                {/* Replace with actual social media icons and links */}
                <Button variant="outlined" size="small">
                  LinkedIn
                </Button>
                <Button variant="outlined" size="small">
                  GitHub
                </Button>
                <Button variant="outlined" size="small">
                  Twitter
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
