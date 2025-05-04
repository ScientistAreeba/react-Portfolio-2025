import { Box, Typography, TextField, Button, Grid, Container, InputAdornment } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"

const Footer = ({ drawerOpen, drawerWidth = 240 }) => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 5000)
  }

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        background: (theme) => 
          theme.palette.mode === 'light' 
            ? "linear-gradient(45deg, #673ab7 30%, #e91e63 90%)"
            : "linear-gradient(45deg, #4527a0 30%, #ad1457 90%)",
        color: "white",
        width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
        ml: { sm: drawerOpen ? `${drawerWidth}px` : 0 },
        transition: (theme) => theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Stay Updated
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to my newsletter for the latest updates.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
              <TextField
                size="small"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  flexGrow: 1,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            {subscribed && (
              <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
                Thank you for subscribing!
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Typography variant="body2" sx={{ mt: { xs: 2, md: 0 } }}>
              © {new Date().getFullYear()} Areeba Atif. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
