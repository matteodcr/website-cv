import { Chrono } from 'react-chrono';
import ImageFIT from '../assets/fit.webp';
import ImagePolytech from '../assets/polytech.jpg';
import ImageUGA from '../assets/uga.jpg';
import ETS from '../pages/experiences/ETS.tsx';
import ImageETS from '../assets/ets.jpg';
import ImproLab from './experiences/ImproLab.tsx';
import Polytech from './experiences/Polytech.tsx';
import Peip from './experiences/Peip.tsx';
import { useTheme } from '@mui/material/styles';

const Curriculum = () => {
  const theme = useTheme();
  const items = [
    ETS(ImageETS),
    ImproLab(ImageFIT),
    Polytech(ImagePolytech),
    Peip(ImageUGA),
  ];
  return (
    <Chrono
      mode="VERTICAL"
      items={items}
      theme={{
        primary: theme.palette.text.primary,
        secondary: theme.palette.text.primary,
        cardBgColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        titleColorActive: theme.palette.background.paper,
      }}
      hideControls
      useReadMore
    />
  );
};

export default Curriculum;
