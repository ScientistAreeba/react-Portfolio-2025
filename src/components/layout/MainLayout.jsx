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

  
  useEffect(() => {
    setDrawerOpen(!isMobile)
  }, [isMobile])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
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
            display: "flex",
            flexDirection: "column",
            p: 3,
            width: { sm: `calc(100% - ${drawerOpen ? 240 : 0}px)` },
            ml: { sm: drawerOpen ? "240px" : 0 },
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Box sx={{ mt: 8, mb: 8, flex: 1 }}>{children}</Box>
        </Box>
      </Box>
      <Footer drawerOpen={drawerOpen} drawerWidth={240} />
    </Box>
  )
}

export default MainLayout
