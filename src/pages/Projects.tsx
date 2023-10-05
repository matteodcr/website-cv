import React from 'react';
import {Grid, Card, CardContent, Typography, CardActionArea, Button, CardMedia} from '@mui/material';
import {styled} from '@mui/system';

interface Project {
    title: string;
    description: string;
}

const projects: Project[] = [
    {title: 'Projet 1', description: 'Description du projet 1'},
    {title: 'Projet 2', description: 'Description du projet 2'},
    // Ajoutez plus de projets ici
];

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const cardColor = `hsl(${Math.random() * 360}, 100%, 95%)`;

    const StyledCard = styled(Card)(({theme}) => ({
        backgroundColor: cardColor,
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
            background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${cardColor} 100%)`,
            zIndex: 2,
        },
    }));

    return (
        <Grid item xs={12}>
            <StyledCard>
                <CardActionArea onClick={() => console.log(`Vous avez cliqué sur ${project.title}`)}>
                    <StyledCardMedia
                        image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
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
            </StyledCard>
        </Grid>
    );
};

const ProjectGrid: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}
        </Grid>
    );
};

export default ProjectGrid;