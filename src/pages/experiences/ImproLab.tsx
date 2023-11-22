import WorkIcon from '@mui/icons-material/Work';
import ExperienceModel, { ExperienceModelProps } from './ExperienceModel.tsx';

export default function ImproLab(url: string) {
  const content: ExperienceModelProps = {
    cardTitle: 'Développeur en vision par ordinateur',
    media: url,
    mediaCaption: 'Batiment du FIT',

    cardDetailedText: (
      <ul>
        <li>Détecter les principaux défauts d’un système existant</li>
        <li>Présenter et mettre en perspective les solutions envisagées</li>
        <li> Programmer un système autonome interagissant avec SSH</li>
        <li> Apprendre de nouvelles techniques de vision par ordinateur</li>
        <li>
          Prendre part à des expériences afin de délivrer des résultats à un
          client
        </li>
      </ul>
    ),
    cardIcon: <WorkIcon />,
    subtitle: 'Image Processing Laboratory (ImproLab), Prague, Tchéquie',
    title: 'Mai à Juillet 2023',
    link: 'https://fit.cvut.cz/en/science-and-research/facilities/laboratories/8357-image-processing-laboratory-improlab',
  };
  return ExperienceModel(content);
}
