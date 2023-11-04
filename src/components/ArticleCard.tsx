import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSmartcrop } from 'use-smartcrop';
import Skeleton from '@mui/material/Skeleton';

interface ArticleCardProp {
  title: string;
  image_url: string;
}

const ArticleCard = ({ title, image_url }: ArticleCardProp) => {
  const [cropped, error] = useSmartcrop(
    { src: image_url },
    {
      width: 1920,
      height: 800,
      minScale: 0.2,
      ruleOfThirds: false,
    },
  );

  if (error) {
    console.error(error);
  }

  return (
    <Paper>
      {cropped ? (
        <img src={cropped} alt={title} style={{ width: '100%' }} />
      ) : (
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width="100%"
          height={400}
        />
      )}
      <Typography variant="h4" style={{ marginLeft: 10 }} gutterBottom>
        {title}
      </Typography>
    </Paper>
  );
};

export default ArticleCard;
