import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedPageProps {
  children: ReactNode;
  direction: 'left' | 'right'; // Prop pour spécifier la direction de transition
}

const AnimatedPage = ({ children, direction }: AnimatedPageProps) => {
  const customEase = [0.6, 0.05, 0.19, 1]; // Courbe de Bezier personnalisée

  // Définir les animations en fonction de la direction
  const animations = {
    initial: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
      transition: { type: 'spring', duration: 0.5, ease: customEase },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', duration: 0.4, ease: customEase },
    },
    exit: {
      x: direction === 'left' ? '-100%' : '100%', // Utilise la direction pour définir la sortie
      opacity: 0,
      transition: { type: 'spring', duration: 0.4, ease: customEase },
    },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, when: 'beforeChildren' }} // Déclencher l'entrée et la sortie en même temps
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
