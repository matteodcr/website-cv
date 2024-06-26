import { ActionIcon, Group, rem, Stack, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { IconFileTypeDoc } from '@tabler/icons-react';
import AnimatedPage from '@/components/AnimatedPage';
import CurriculumCard, { CurriculumProps } from '@/components/CurriculumCard';
import { useNavigationStore } from '@/store/Navigation.store';

import polytechLogo from '../assets/experience/polytech-logo.png';
import iaeLogo from '../assets/experience/iae-logo.png';
import chuLogo from '../assets/experience/chu-logo.jpg';
import hugLogo from '../assets/experience/hug-logo.png';
import sopraLogo from '../assets/experience/sopra-logo.png';

import polytechBg from '../assets/experience/polytech-bg.jpg';
import iaeBg from '../assets/experience/iae-bg.jpg';
import chuBg from '../assets/experience/chu-bg.jpg';
import hugBg from '../assets/experience/hug-bg.jpg';
import sopraBg from '../assets/experience/sopra-bg.jpg';

const formationData: CurriculumProps[] = [
  {
    title: 'Management et Administration des Entreprises (MAE)',
    description: '',
    link: 'https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-management-et-administration-des-entreprises-IDIV4XI5.html',
    image: iaeLogo,
    date: 'De 2018 à 2020',
    place: 'IAE Grenoble INP-UGA, France',
    backgroundImage: iaeBg,
  },
  {
    title: "Ingénieure en Technologies de l'Information pour la Santé",
    description: '',
    link: 'https://polytech.grenoble-inp.fr/fr/formations/technologies-de-linformation-pour-la-sante-1#page-presentation',
    image: polytechLogo,
    date: 'De 2016 à 2019',
    place: 'Polytech Grenoble - INP UGA, France',
    backgroundImage: polytechBg,
  },
];

const experienceData: CurriculumProps[] = [
  {
    title: 'Business Analyst / Experte fonctionnelle (MOE)',
    description: '',
    link: 'https://www.soprasteria.com/fr/secteurs-activite/assurance-protection-sociale',
    image: sopraLogo,
    date: 'Depuis avril 2019',
    place: 'Sopra Steria, Grenoble, France',
    backgroundImage: sopraBg,
  },
  {
    title: "Développement d'une application mobile",
    description: '',
    link: 'https://www.hug.ch/',
    image: hugLogo,
    date: 'De mai à août 2018',
    place: 'Hôpitaux Universitaires Genève, Suisse',
    backgroundImage: hugBg,
  },
  {
    title: "Observation de l'équipe médicale",
    description: '',
    link: 'https://www.chu-grenoble.fr/',
    image: chuLogo,
    date: '2017',
    place: 'Centre Hospitalier Universitaire de Grenoble, France',
    backgroundImage: chuBg,
  },
];

interface categoryTitleProps {
  title: string;
}

function CategoryTitle({ title }: categoryTitleProps) {
  return (
    <Title pt="xl" pb="sm" order={3} lineClamp={1}>
      {title}
    </Title>
  );
}

export const CurriculumPage = observer(() => {
  const store = useNavigationStore();

  return (
    <AnimatedPage direction={store.routePosition}>
      <Group>
        <Title>Curriculum</Title>
        <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
          <IconFileTypeDoc
            onClick={() => window.open('', '_blank', 'noopener noreferrer')}
            style={{
              width: rem(24),
              height: rem(24),
            }}
          />
        </ActionIcon>
      </Group>
      <CategoryTitle title="Formation" />
      <Stack>
        <Stack gap="xl">
          {experienceData.map((props, index) => (
            <CurriculumCard key={index} {...props} />
          ))}
        </Stack>
      </Stack>

      <CategoryTitle title="Expériences" />

      <Stack>
        <Stack gap="xl">
          {formationData.map((props, index) => (
            <CurriculumCard key={index} {...props} />
          ))}
        </Stack>
      </Stack>
    </AnimatedPage>
  );
});
