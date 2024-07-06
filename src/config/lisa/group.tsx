import { WebsiteContentLanguageGroup } from '@/config/structure';
import contentFR from '@/config/lisa/fr';
import contentEN from '@/config/lisa/en';

const contentLanguageGroup: WebsiteContentLanguageGroup = {
  fr: contentFR,
  en: contentEN,
} as WebsiteContentLanguageGroup;

export default contentLanguageGroup;
