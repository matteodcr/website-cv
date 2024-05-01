import { Stack, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import AnimatedPage from '@/components/AnimatedPage';
import CurriculumCard, { CurriculumProps } from '@/components/CurriculumCard';
import { useNavigationStore } from '@/store/Navigation.store';

const formationData: CurriculumProps[] = [
  {
    title: 'Maitrise en génie logiciel',
    description: '',
    link: 'https://www.etsmtl.ca/etude/deuxieme-cycle/maitrise-genie-logiciel',
    image:
      'https://journalmetro.com/wp-content/uploads/2022/02/ETS-7x5-150DPI.jpg?resize=1051%2C591',
    date: 'Depuis 2023',
    place: 'ETS Montréal, Canada',
    backgroundImage: 'https://www.etsmtl.ca/uploads/Logo_ETS_SansTypo_FR.png',
  },
  {
    title: 'Ingénieur en Informatique',
    description: '',
    link: 'https://polytech.grenoble-inp.fr/fr/formations/informatique-1',
    image: 'https://polytech.grenoble-inp.fr/medias/photo/accueil-polytech_1701769211778-jpg',
    date: 'Depuis 2021',
    place: 'Polytech Grenoble - INP UGA, France',
    backgroundImage:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/359424328_603814998402194_5827317466664852925_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1SooXDtwv80Ab5xnfSn&_nc_ht=scontent-lga3-1.xx&oh=00_AfA_lGi4IyZP_33WcYaBnq2LR7O29RNDA15r0ngJ9fByDw&oe=663659EB',
  },
];

const experienceData: CurriculumProps[] = [
  {
    title: 'Développeur en vision par ordinateur',
    description: '',
    link: 'https://fit.cvut.cz/en/science-and-research/facilities/laboratories/8357-image-processing-laboratory-improlab',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/CVUT_Fakulta_architektury_Dejvice_6528.JPG',
    date: 'De mai à juillet 2023',
    place: 'ImproLab - FIT CTU, Prague',
    backgroundImage:
      'https://media.licdn.com/dms/image/C4E0BAQE806_Y32KtmQ/company-logo_200_200/0/1657807571444/fit_ctu_in_prague_logo?e=2147483647&v=beta&t=Tn5aa6zQccNFzp7jbDWmnTgdbrOGNYo5HKeol6-D4xE',
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
      <Title>Curriculum</Title>
      <CategoryTitle title="Formation" />
      <Stack>
        <Stack gap="xl">
          {formationData.map((props, index) => (
            <CurriculumCard key={index} {...props} />
          ))}
        </Stack>
      </Stack>
      <CategoryTitle title="Expériences" />

      <Stack>
        <Stack gap="xl">
          {experienceData.map((props, index) => (
            <CurriculumCard key={index} {...props} />
          ))}
        </Stack>
      </Stack>
    </AnimatedPage>
  );
});
