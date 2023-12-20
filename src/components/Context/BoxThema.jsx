import styles from './Box.module.scss';
import { useTheme } from './ThemaContext';

const BoxThema = ({ children }) => {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? styles.darkTheme : styles.lightTheme}>
      {children}
    </div>
  );
};

export default BoxThema;
