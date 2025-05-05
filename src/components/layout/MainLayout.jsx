"use client"

import { useState, useEffect } from "react"
import { Box, useMediaQuery, useTheme } from "@mui/material"
import Header from "./Header"
import SideNav from "./SideNav"
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(!isMobile)

  // Update drawer state when screen size changes
  useEffect(() => {
    setDrawerOpen(!isMobile)
  }, [isMobile])

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header toggleDrawer={toggleDrawer} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <SideNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerOpen && !isMobile ? 240 : 0}px)` },
            ml: { sm: drawerOpen && !isMobile ? "240px" : 0 },
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Box sx={{ mt: 8, mb: 8 }}>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
