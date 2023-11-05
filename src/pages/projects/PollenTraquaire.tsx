import React from 'react';
import { Project } from '../Projects';
import Markdown from 'markdown-to-jsx';
import Image from '../../assets/pollen.png';

import ArticleCard from '../../components/ArticleCard';
import ArticleFooter from '../../components/ArticleFooter';
import { Box } from '@mui/material';

class PollenTraquaire implements Project {
  title = 'Pollen Traquaire';
  description = 'Traqueur de concentration en pollen';
  color: string = '#fdb600';
  image_url: string = Image;
  techList = ['Rust'];
  creationDate: string = '2023-10-08';
  lastModifiedDate: string = '2023-10-08';

  content: () => React.ReactNode = () => {
    const markdownContent = `
Pollen Traquaire est un site web permettant de savoir la concentration actuelle des differents pollens en fonction du département en France. Il récupère les données du [RNSA](https://www.pollens.fr/), les déserialise et les affiche. 

Ce site est en Rust et utilise [Rocket](https://rocket.rs/).

- [Dépôt GitHub](https://github.com/matteodcr/pollen_traquaire)
 
 `;

    return (
      <Box>
        <ArticleCard
          title={this.title}
          image_url={this.image_url}
          color={this.color}
          content={this.content}
          description={this.description}
          techList={this.techList}
        />
        <div className="markdown-body">
          <Markdown className="markdown-body">{markdownContent}</Markdown>
        </div>
        <ArticleFooter />
      </Box>
    );
  };
}

export default PollenTraquaire;
