import AppLogo from '../assets/AppLogo.svg';
import Vector from '../assets/adjustments.svg';

const Header = () => {
  return (
    <header className="bg-white px-4 py-2 flex items-center justify-between">
<img src={AppLogo} alt="App Logo" className="w-8 h-8" />
<img src={Vector} alt="App Logo" className="w-8 h-8" />
    </header>
  );
};

export default Header;


