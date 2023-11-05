import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Stack,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import createTechChip from '../components/Tags.tsx';

export interface Project {
  title: string;
  description: string;
  color: string;
  image_url: string;
  techList: string[];
  content: () => React.ReactNode;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const StyledCard = styled(Card)(() => ({
    border: `1px solid ${project.color}`,
    borderRadius: 10,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: `${project.color}`,
      opacity: 0.8,
    },
  }));

  const StyledCardMedia = styled(CardMedia)(() => ({
    position: 'relative',
    height: '140px',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 2,
    },
  }));

  const theme = useTheme();

  return (
    <Grid item xs={12} marginTop={2} marginBottom={0}>
      <StyledCard>
        <Link
          to={`/projects/${project.title.toLowerCase()}`}
          style={{ textDecoration: 'none', color: theme.palette.text.primary }}
        >
          <CardActionArea
            onClick={() => console.log(`Vous avez cliqué sur ${project.title}`)}
          >
            <StyledCardMedia image={project.image_url} />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Stack direction="row" spacing={1}>
                {project.techList.map((tech, index) => (
                  <React.Fragment key={index}>
                    {createTechChip(tech)}
                  </React.Fragment>
                ))}
              </Stack>
            </CardContent>
          </CardActionArea>
        </Link>
      </StyledCard>
    </Grid>
  );
};

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
