export function getLanguage(): string {
  console.log('LOADED', localStorage.getItem('language'));
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language') as string;
  }
  const { language } = navigator;
  return language.substring(0, 2);
}
