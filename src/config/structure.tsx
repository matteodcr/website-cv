import { Route } from '@/Router';
import { SocialLinkProps } from '@/components/SocialLink';
import { CurriculumProps } from '@/components/CurriculumCard';
import { ProjectProps } from '@/components/ProjectCard';
import { HomeCardProps } from '@/components/HomeCard';

import content from '@/config/matteo/fr';

interface WebsiteContent {
    routes: { [key: string]: Route },
    homeLinks: HomeCardProps[],
    formationData: CurriculumProps[],
    experienceData: CurriculumProps[],
    projectData: ProjectProps[],
    socialLinksData: SocialLinkProps[],

    logo: string,
    notFoundPicture: string,
    URL_CV: string
}

export function getWebsiteContent(): WebsiteContent {
    return content;
}

export default WebsiteContent;
