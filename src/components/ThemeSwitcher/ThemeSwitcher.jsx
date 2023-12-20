import { useTheme } from '../Context/ThemaContext';

export default function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useTheme();
  const buttonStyles = {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#fff' : '#333',
    color: darkMode ? '#333' : '#fff',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const hoverStyles = {
    backgroundColor: darkMode ? '#eee' : '#444',
    color: darkMode ? '#444' : '#fff',
  };

  return (
    <button onClick={toggleTheme} style={{ ...buttonStyles, ...hoverStyles }}>
      {darkMode ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
    </button>
  );
}
