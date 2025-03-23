import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/actions/theme.action';
import { selectTheme } from '../redux/selector';
import { Moon, MoonIcon, SunMedium } from 'lucide-react';


const ThemeToggle = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="flex items-center justify-center p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
       <SunMedium/>
      ) : (
        <MoonIcon/>
      )}
    </button>
  );
};

export default ThemeToggle;