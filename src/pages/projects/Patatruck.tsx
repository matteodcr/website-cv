import React from 'react';
import { Project } from '../Projects';
import Markdown from 'markdown-to-jsx';
import Image from '../../assets/Patatruck.png';

import ArticleCard from '../../components/ArticleCard';
import ArticleFooter from '../../components/ArticleFooter';
import { Box } from '@mui/material';

class Patatruck implements Project {
  title = 'Patatruck';
  description = 'Un jeu cooperatif basé sur des automates';
  color: string = '#ea6c82';
  image_url: string = Image;
  techList = ['Java'];
  creationDate: string = '2023-10-08';
  lastModifiedDate: string = '2023-10-08';

  content: () => React.ReactNode = () => {
    const markdownContent = `
Un projet de jeu vidéo où deux joueurs doivent gérer un food-truck qui cuisine pendant qu'il se déplace dans une ville générée procéduralement.
Chaque entité est modelisée par un automate qui peut etre modifié a tout moment. Voici un exemple d'automate:

\`\`\`
KitchenPlayer(Init){
  * (Init):
  | Key(z) &! Cell(N, O) ? Wizz(N):(Init)
  | Key(q) &! Cell(W, O) ? Wizz(W):(Init)
  | Key(s) &! Cell(S, O) ? Wizz(S):(Init)
  | Key(d) &! Cell(E, O) ? Wizz(E):(Init)
  | Key(SPACE) ? Pop(F):(Init)  
}

\`\`\`
## Deux mondes
- Un conducteur dans une ville vue de haut avec une physique de conduite qui doit éviter les obstacles et ramasser les ingrédients sur la route.  La conduite du camion influence la cuisine (accélération, freinage, chocs).
- Un cuisinier dans le camion, qui doit préparer les plats selon les commandes des clients. La cuisine influence la conduite (fumée, huile, cafards).

## Liens
- [Dépôt GitHub](https://github.com/matteodcr/Patatruck)
 
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
        <ArticleFooter></ArticleFooter>
      </Box>
    );
  };
}

export default Patatruck;
