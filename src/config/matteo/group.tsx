import { WebsiteContentLanguageGroup } from '@/config/structure';
import contentFR from '@/config/matteo/fr';
import contentEN from '@/config/matteo/en';

const contentLanguageGroup: WebsiteContentLanguageGroup = {
  fr: contentFR,
  en: contentEN,
} as WebsiteContentLanguageGroup;

export default contentLanguageGroup;
