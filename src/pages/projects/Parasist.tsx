import React from 'react';
import { Project } from '../Projects';
import Markdown from 'markdown-to-jsx';
import Image from '../../assets/parasist.png';

import ArticleCard from '../../components/ArticleCard';
import ArticleFooter from '../../components/ArticleFooter';
import { Box } from '@mui/material';

class Parasist implements Project {
  title = 'Parasist';
  description = 'Jeu à choix - Ludun Dare 46';
  color: string = '#16142f';
  image_url: string = Image;
  techList = ['Typescript'];
  creationDate: string = '2023-10-08';
  lastModifiedDate: string = '2023-10-08';

  content: () => React.ReactNode = () => {
    const markdownContent = `
Parasist est un jeu réalisé pour la 46ème édition du Ludum Dare. Le thème était "Keep it alive", nous avons donc créé un jeu où vous êtes un parasite qui fait des choix pour l'animal qui vous héberge, afin de le garder en vie le plus longtemps possible, pour que vous puissiez vous-même survivre.

L'objectif est de maintenir en vie votre parasite. En contrôlant votre hôte, vous devrez faire face à différentes situations, faire des choix et essayer d'être le plus sain possible. Le seul moyen pour vous de savoir à quoi vous êtes confronté est d'utiliser les indications sur votre écran et votre imagination...
## Jouer

Le jeu est disponible [en ligne](https://parasist.wp-corp.eu.org/).

- [Page sur Ludum Dare](https://ldjam.com/events/ludum-dare/46/$192299)
- [Dépôt GitHub](https://github.com/WartaPoirier-corp/ludumdare46)
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

export default Parasist;
