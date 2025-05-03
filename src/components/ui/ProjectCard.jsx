import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubLink, liveLink } = project

  return (
    <Card className="project-card" elevation={3}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {technologies.map((tech, index) => (
            <Typography
              key={index}
              variant="caption"
              sx={{
                bgcolor: "primary.light",
                color: "primary.contrastText",
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        {githubLink && (
          <Button size="small" startIcon={<GitHubIcon />} href={githubLink} target="_blank">
            GitHub
          </Button>
        )}
        {liveLink && (
          <Button size="small" startIcon={<LaunchIcon />} href={liveLink} target="_blank">
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default ProjectCard
