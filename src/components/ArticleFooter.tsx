import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';

/*
interface ArticleCardProp {
    modification_date: string,
}
*/

const ArticleFooter = () => {
  const shareUrl = window.location.href; // Remplacez par l'URL que vous souhaitez partager
  const title = 'Matteo Decorsaire' + window.location.href; // Remplacez par le titre que vous souhaitez partager

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2 style={{ marginBottom: 0 }}>Partager sur</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ArticleFooter;
