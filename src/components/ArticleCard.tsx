import Typography from '@mui/material/Typography';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import { Project } from '../pages/Projects.tsx';
import React from 'react';
import createTechChip from './Tags.tsx';

const ArticleCard = (project: Project) => {
  return (
    <Card
      sx={{
        marginY: 2,
        borderRadius: 3,
        border: `1px solid ${project.color}`,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={project.image_url}
          alt={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {project.title}
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {project.description}
            </Typography>
          </Typography>

          <Stack direction="row" spacing={1}>
            {project.techList.map((tech, index) => (
              <React.Fragment key={index}>
                {createTechChip(tech)}
              </React.Fragment>
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
