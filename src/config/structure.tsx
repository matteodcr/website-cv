import React, { ReactNode } from 'react';

import { Technologies } from '@/config/technologies';
import contentLanguageGroupMatteo from '@/config/matteo/group';
import contentLanguageGroupLisa from '@/config/lisa/group';
import { getLanguage } from '@/config/language';

export interface Route {
  path: string;
  name: string;
  element: React.ReactNode;
  icon: ReactNode;
}

export interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface HomeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface ExperienceListProps {
  icon: string;
  description: string;
}

export interface CurriculumProps {
  backgroundImage: string;
  image: string;
  date: string;
  title: string;
  place: string;
  description: string;
  descriptionList?: ExperienceListProps[];
  link: string;
  contract?: string;
}
export interface CurriculumSectionProps {
  title: string;
  data: CurriculumProps[];
}
export interface ProjectProps {
  name: string;
  font?: string;
  fontColor: string;
  description: string;
  link: string;
  image?: string;
  backgroundColor?: string;
  technologies: Technologies[];
}
interface WebsiteContent {
  routes: { [key: string]: Route };
  homeLinks: HomeCardProps[];
  curriculumData: CurriculumSectionProps[];
  projectData: ProjectProps[];
  socialLinksData: SocialLinkProps[];

  pageTitle: string;
  logo: string;
  notFoundPicture: string;
  URL_CV: string;
  introSentence: string;
  fullName: string;
  position: string;
}

export interface WebsiteContentLanguageGroup {
  fr: WebsiteContent;
  en?: WebsiteContent;
}

const users: { [key: string]: WebsiteContentLanguageGroup } = {
  matteo: contentLanguageGroupMatteo,
  lisa: contentLanguageGroupLisa,
};

export function getWebsiteContent(): WebsiteContent {
  return users[import.meta.env.VITE_TO_BUILD][getLanguage()];
}

export default WebsiteContent;
