import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { BiLogoPython } from 'react-icons/bi';
import { FaJava, FaRust } from 'react-icons/fa6';
import { SiCplusplus, SiReact, SiTypescript } from 'react-icons/si';

import { Box, Chip, chipClasses } from '@mui/material';
interface techContent {
  color: string;
  icon: JSX.Element;
  onClick: () => void;
}

const techDictionary: Record<string, techContent> = {
  JavaScript: {
    color: '#F7DF1E',
    icon: <IoLogoJavascript />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  Python: {
    color: '#396f9e',
    icon: <BiLogoPython />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  Java: {
    color: '#0d89c5',
    icon: <FaJava />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  'C++': {
    color: '#085d9e',
    icon: <SiCplusplus />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  React: {
    color: '#2dd8fb',
    icon: <SiReact />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  'React Native': {
    color: '#65d9f9',
    icon: <IoLogoReact />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  Typescript: {
    color: '#377bc6',
    icon: <SiTypescript />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  Rust: {
    color: '#f55108',
    icon: <FaRust />,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
};

const createTechChip = (techName: string): JSX.Element | null => {
  const color = techDictionary[techName].color;
  const icon = techDictionary[techName].icon;

  if (!color) {
    return null;
  }

  return (
    <Box>
      <Chip
        icon={icon}
        label={techName}
        sx={{
          [`& .${chipClasses.icon}`]: {
            color: 'black',
          },
          margin: 0,
          padding: 0,
          backgroundColor: color,
          color: 'black',
        }}
      />
    </Box>
  );
};

export default createTechChip;
