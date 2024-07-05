import { useEffect } from 'react';
import { getWebsiteContent } from '@/config/structure';
import getCurrentRoute from '@/utils/getCurrentRoute';

const PageWrapper = ({ children }) => {
  useEffect(() => {
    const { pageTitle, routes } = getWebsiteContent();
    document.title = `${pageTitle} · ${getCurrentRoute(routes, window.location.pathname)?.name}`;
  }, []);
  return <div style={{ margin: '2%' }}>{children}</div>;
};

export default PageWrapper;
