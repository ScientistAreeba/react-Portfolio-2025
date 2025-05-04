
import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

import MainLayout from "./components/layout/MainLayout"
import { PageTitleProvider } from "./context/PageTitleContext"
import { ThemeProvider } from "./context/ThemeContext" 

//lazy load pages 
const Home = lazy(() => import("./pages/Home/Home"))
const Education = lazy(() => import("./pages/Education/Education"))
const Projects = lazy(() => import("./pages/Projects/Projects"))
const Contact = lazy(() => import("./pages/Contact/Contact"))

function App() {
  return (
    <ThemeProvider> 
      <PageTitleProvider>
        <Router>
          <MainLayout>
            <Suspense
              fallback={
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                  <CircularProgress />
                </Box>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </Router>
      </PageTitleProvider>
    </ThemeProvider>
  )
}

export default App
