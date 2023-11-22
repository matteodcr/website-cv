import SchoolIcon from '@mui/icons-material/School';
import ExperienceModel, { ExperienceModelProps } from './ExperienceModel.tsx';

export default function ETS(url: string) {
  const content: ExperienceModelProps = {
    cardTitle: 'Maitrise en Génie Logiciel',
    media: url,
    mediaCaption: "Batiment A de l'ETS",

    cardDetailedText: (
      <ul>
        <li>
          Contribuer de façon significative au développement et à la maintenance
          de logiciels en entreprise
        </li>
        <li>
          Développer des compétences techniques couvrant divers aspects tels que
          l’analyse, la conception, les tests, l’assurance qualité, etc
        </li>
        <li>Développer des compétences en gestion de projets logiciels</li>
      </ul>
    ),
    cardIcon: <SchoolIcon />,
    subtitle: 'École de Technologie Supérieure (ETS), Montréal, Canada',
    title: '2023 - En cours',
    link: 'https://www.etsmtl.ca/etudes/deuxieme-cycle/maitrise-genie-logiciel',
  };
  return ExperienceModel(content);
}
