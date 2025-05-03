"use client"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, useTheme, useMediaQuery } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import { usePageTitle } from "../../context/PageTitleContext"

const drawerWidth = 240

const navItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Education", icon: <SchoolIcon />, path: "/education" },
  { text: "Projects", icon: <WorkIcon />, path: "/projects" },
  { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
]

const SideNav = ({ open, onClose }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const location = useLocation()
  const { setPageTitle } = usePageTitle()

  const handleNavClick = (text) => {
    setPageTitle(text)
    if (isMobile) {
      onClose()
    }
  }

  const drawer = (
    <>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={() => handleNavClick(item.text)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                "& .MuiListItemIcon-root": {
                  color: theme.palette.primary.contrastText,
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  )

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default SideNav
