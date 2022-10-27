import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { GAMES_TABS_CONFIG } from '../../configs';


export const GamesNavbar = () => {
  const navigate = useNavigate();

  /**
   * Handles the click event on the menu item.
   * @param {*} e 
   */
  const handleNavigation = ({ key }) => {
    navigate(GAMES_TABS_CONFIG.find(tab => tab.key === key).path);
  }
  return (
    <Menu
      mode="horizontal"
      onClick={handleNavigation}
      defaultSelectedKeys={[`${GAMES_TABS_CONFIG[0].key}`]}
      items={GAMES_TABS_CONFIG}
    />
  )
}
