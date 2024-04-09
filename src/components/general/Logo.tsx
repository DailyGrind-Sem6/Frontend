import { useState, useEffect } from 'react';
import whiteLogo from '../../assets/white_logo.svg';
import blackLogo from '../../assets/black_logo.svg';

function Logo(): JSX.Element {
    const [darkMode, setDarkMode] = useState<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event: MediaQueryListEvent) => {
            setDarkMode(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        // Cleanup function
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <img
            src={darkMode ? whiteLogo : blackLogo}
            alt="logo"
        />
    );
};

export default Logo;