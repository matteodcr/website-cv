import { Route } from '@/Router';
import { SocialLinkProps } from '@/components/SocialLink';
import { CurriculumProps } from '@/components/CurriculumCard';
import { ProjectProps } from '@/components/ProjectCard';
import { HomeCardProps } from '@/components/HomeCard';

import contentMatteo from '@/config/matteo/fr';

// import contentLisa from '@/config/lisa/fr';

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
    return contentMatteo;
}

export default WebsiteContent;
