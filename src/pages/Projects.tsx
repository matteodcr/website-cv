import React from 'react';
import {Grid, Card, CardContent, Typography, CardActionArea, CardMedia} from '@mui/material';
import {styled} from '@mui/system';
import {Link} from "react-router-dom";

export interface Project {
    title: string;
    description: string;
    color: string;
    image_url: string;
    content: () => React.ReactNode;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {

    const StyledCard = styled(Card)(({theme}) => ({
        backgroundColor: project.color,
    }));

    const StyledCardMedia = styled(CardMedia)(({theme}) => ({
        position: 'relative',
        height: '140px',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${project.color} 100%)`,
            zIndex: 2,
        },
    }));

    return (
        <Grid item xs={12} marginTop={2} marginBottom={0}>
            <StyledCard>
                <Link to={`/projects/${project.title.toLowerCase()}`} style={{textDecoration: 'none'}}>
                    <CardActionArea onClick={() => console.log(`Vous avez cliqué sur ${project.title}`)}>
                        <StyledCardMedia
                            image={project.image_url}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Typography variant="body2">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>

            </StyledCard>
        </Grid>
    );
};

interface ProjectGridProps {
    projects: Project[]
}

const ProjectGrid: React.FC<ProjectGridProps> = (projects) => {
    return (
        <Grid container spacing={0}>
            {projects.projects.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}
        </Grid>
    );
};

export default ProjectGrid;