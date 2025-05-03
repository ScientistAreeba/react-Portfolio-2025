import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Areeba Atif. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer
