import { useState } from 'react';
import whiteLogo from '../../assets/white_logo.svg';
import blackLogo from '../../assets/black_logo.svg';

function Logo(): JSX.Element {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setDarkMode(event.matches);
    });

    return (
        <img
            src={darkMode ? whiteLogo : blackLogo}
            alt="logo"
        />
    );
};

export default Logo;