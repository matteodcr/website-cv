import { ActionIcon, Group, rem, Stack, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { IconFileTypeDoc } from '@tabler/icons-react';
import AnimatedPage from '@/components/AnimatedPage';
import CurriculumCard, { CurriculumProps } from '@/components/CurriculumCard';
import { useNavigationStore } from '@/store/Navigation.store';

import polytechLogo from '../assets/experience/polytech-logo.png';
import fitLogo from '../assets/experience/fit-logo.jpg';
import etsLogo from '../assets/experience/ets-logo.png';
import mcnLogo from '../assets/experience/mcn-logo.jpg';

import polytechBg from '../assets/experience/polytech-bg.jpg';
import fitBg from '../assets/experience/fit-bg.jpg';
import etsBg from '../assets/experience/ets-bg.png';
import mcnBg from '../assets/experience/mcn-bg.jpg';

const formationData: CurriculumProps[] = [
  {
    title: 'Maitrise en génie logiciel',
    description: '',
    link: 'https://www.etsmtl.ca/etude/deuxieme-cycle/maitrise-genie-logiciel',
    image: etsLogo,
    date: 'Depuis 2023',
    place: 'ETS Montréal, Canada',
    backgroundImage: etsBg,
  },
  {
    title: 'Ingénieur en Informatique',
    description: '',
    link: 'https://polytech.grenoble-inp.fr/fr/formations/informatique-1',
    image: polytechLogo,
    date: 'Depuis 2021',
    place: 'Polytech Grenoble - INP UGA, France',
    backgroundImage: polytechBg,
  },
];

const experienceData: CurriculumProps[] = [
  {
    title: 'Conseiller en IA',
    description: '',
    link: 'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique',
    image: mcnLogo,
    date: 'Depuis mai 2024',
    place: 'Stage - CEI3A, Ministère de la Cybersécurité et du Numérique, Montréal, Canada',
    backgroundImage: mcnBg,
  },
  {
    title: 'Développeur en vision par ordinateur',
    description: '',
    link: 'https://fit.cvut.cz/en/science-and-research/facilities/laboratories/8357-image-processing-laboratory-improlab',
    image: fitLogo,
    date: 'De mai à juillet 2023',
    place: 'Stage - ImproLab - FIT CTU, Prague, Tchéquie',
    backgroundImage: fitBg,
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
            onClick={() =>
              window.open(
                'https://docs.google.com/document/d/1D-tLcVnSyjpBRY2gj7bouo9WOf_YJR1eCTuDnF-UDBg/edit',
                '_blank',
                'noopener noreferrer'
              )
            }
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
