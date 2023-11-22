import ExperienceModel, { ExperienceModelProps } from './ExperienceModel.tsx';
import WorkIcon from '@mui/icons-material/Work';

export default function Peip(url: string) {
  const content: ExperienceModelProps = {
    cardTitle: 'PeiP A en Mathématiques et en Informatique',
    media: url,
    mediaCaption: "Bibliothèque de l'UGA",

    cardDetailedText: '',
    cardIcon: <WorkIcon />,
    subtitle: 'Polytech Grenoble, France\n',
    title: '2019 à 2021',
    link: 'https://www.polytech-grenoble.fr/menu-principal/formations/parcours-des-ecoles-d-ingenieurs-polytech-peip--185953.kjsp',
  };
  return ExperienceModel(content);
}
