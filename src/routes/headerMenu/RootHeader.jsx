import { useNavigate } from 'react-router-dom';
import style from './header.module.css';

const RootHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className={style.headerMenu}>
      <button className={style.menuItem} onClick={() => handleNavigation('/shop')}>
        New & Featured
      </button>
      <button className={style.menuItem} onClick={() => handleNavigation('/shop')}>
        Men
      </button>
      <button className={style.menuItem} onClick={() => handleNavigation('/shop')}>
        Women
      </button>
      <button className={style.menuItem} onClick={() => handleNavigation('/shop')}>
        Kids
      </button>
      <button className={style.menuItem} onClick={() => handleNavigation('/shop')}>
        Sale
      </button>
      <button className={style.menuItem} onClick={() => handleNavigation('/shop')}>
        SNKRS
      </button>
    </nav>
  );
};

export default RootHeader;
