import { useTheme } from 'next-themes';

export const ThemeButton = () => {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button onClick={handleTheme} className='theme-btn'>
      <input type='checkbox' id='theme' defaultChecked={theme === 'dark'} />
      <span></span>
    </button>
  );
};
