import { Accordion, ActionIcon, em, Group, rem, Stack, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { IconChevronDown, IconFileTypeDoc } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import classes from '@/pages/Curriculum.module.css';
import AnimatedPage from '@/components/AnimatedPage';
import CurriculumCard from '@/components/CurriculumCard';
import { useNavigationStore } from '@/store/Navigation.store';
import { getWebsiteContent } from '@/config/structure';

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
  const isMobile = useMediaQuery(`(max-width: ${em(1500)})`);

  const { experienceData, formationData } = getWebsiteContent();
  const { URL_CV } = getWebsiteContent();

  return (
    <AnimatedPage direction={store.routePosition}>
      <Group> <Title>Curriculum</Title>
        {(URL_CV !== undefined && URL_CV !== '') ? <ActionIcon
          size={42}
          onClick={() =>
            window.open(
                URL_CV,
                '_blank',
                'noopener noreferrer'
            )
        }
          variant="default"
          aria-label="ActionIcon with size as a number">
          <IconFileTypeDoc
            style={{
                width: rem(24),
                height: rem(24),
              }}
          />
                                                   </ActionIcon> : null}
      </Group>

      <CategoryTitle title="Expériences" />
      <Stack>
        <Stack gap="xl">
            <Accordion classNames={classes} chevron={isMobile ? '' : <IconChevronDown className={classes.icon} />}>
              {experienceData.map((props, index) => (
                  <CurriculumCard key={index} {...props} />
              ))}
            </Accordion>
        </Stack>
      </Stack>

      <CategoryTitle title="Formation" />

      <Stack>
        <Stack gap="xl">
            <Accordion classNames={classes} chevron={isMobile ? '' : <IconChevronDown className={classes.icon} />}>
          {formationData.map((props, index) => (
              <CurriculumCard key={index} {...props} />
          ))}
            </Accordion>
        </Stack>
      </Stack>
    </AnimatedPage>
  );
});
