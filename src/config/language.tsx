export function getLanguage(): string {
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language') as string;
  }
  const { language } = navigator;
  return language.substring(0, 2);
}
