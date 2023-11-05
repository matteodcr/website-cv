import React from 'react';
import { Project } from '../Projects';
import Box from '@mui/material/Box';
import Markdown from 'markdown-to-jsx';

import ArticleCard from '../../components/ArticleCard';
import ArticleFooter from '../../components/ArticleFooter';

class TurtleRTK implements Project {
  title = 'TurtleRTK';
  description = 'Un client GNSS RTK pour smartphones';
  color: string = '#d2bfaf';
  image_url: string =
    'https://images.unsplash.com/photo-1628155933410-8f2a84bb8076?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  techList = ['Typescript', 'React Native'];
  creationDate: string = '2023-10-08';
  lastModifiedDate: string = '2023-10-08';

  content: () => React.ReactNode = () => {
    const markdownContent = `
Une application mobile GNSS RTK a été développée avec React Native) et [TypeScript](https://fr.wikipedia.org/wiki/TypeScript). Cette application utilise la technologie GNSS RTK (Global Navigation Satellite System Real Time Kinematic), une technique de positionnement par satellite de haute précision.

L'application a été développée en utilisant TypeScript, un langage de programmation fortement typé qui se base sur JavaScript, offrant un meilleur outillage à n'importe quelle échelle.

L'application manipule plusieurs protocoles tels que [NTRIP](https://en.wikipedia.org/wiki/Networked_Transport_of_RTCM_via_Internet_Protocol) (Networked Transport of RTCM via Internet Protocol) pour le streaming des corrections GPS sur Internet, [BLE](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) (Bluetooth Low Energy) pour la communication sans fil à faible consommation d'énergie, [NMEA](https://en.wikipedia.org/wiki/NMEA_0183) (National Marine Electronics Association) pour la communication entre les équipements marins tels que les récepteurs GPS, et [RTCM](https://www.rtcm.org/publications) pour les corrections différentielles GPS.

L'interface utilisateur est intuitive et facile à utiliser, avec des fonctionnalités telles que la visualisation en temps réel des données GNSS, le suivi de la position, l'enregistrement des données et bien plus encore.
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

export default TurtleRTK;
