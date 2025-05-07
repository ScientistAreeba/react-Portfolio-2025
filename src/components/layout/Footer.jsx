import { Box, Typography, Grid, } from "@mui/material"

const Footer = ({ drawerOpen, drawerWidth = 240 }) => {

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 6,
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
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Typography variant="body2" sx={{ mt: { xs: 2, md: 0 } }}>
              © {new Date().getFullYear()} Areeba Atif. All rights reserved.
            </Typography>
          </Grid>
    </Box>
  )
}

export default Footer
