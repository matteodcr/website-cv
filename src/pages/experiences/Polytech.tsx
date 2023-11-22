import SchoolIcon from '@mui/icons-material/School';
import ExperienceModel, { ExperienceModelProps } from './ExperienceModel.tsx';

export default function Polytech(url: string) {
  const content: ExperienceModelProps = {
    cardTitle: "Diplôme d'ingénieur en Informatique",
    media: url,
    mediaCaption: 'Batiment de Polytech',

    cardDetailedText: (
      <ul>
        <li>Gérer et piloter un projet logiciel</li>
        <li>Concevoir, développer et intégrer des briques logicielles</li>
        <li>Automatiser le traitement d’information</li>
        <li>Administrer des infrastructures informatiques</li>
      </ul>
    ),
    cardIcon: <SchoolIcon />,
    subtitle: '          Polytech Grenoble, France\n',
    title: '2021 - En cours',
    link: 'https://www.polytech-grenoble.fr/menu-principal/formations/informatique-ex-ricm-/informatique-815886.kjsp',
  };
  return ExperienceModel(content);
}
