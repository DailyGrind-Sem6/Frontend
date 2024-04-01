import whiteLogo from '../../assets/white_logo.svg';
import blackLogo from '../../assets/black_logo.svg';

function Logo(): JSX.Element {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <img
            src={darkMode ? whiteLogo : blackLogo}
            alt="logo"
        />
    );
};

export default Logo;