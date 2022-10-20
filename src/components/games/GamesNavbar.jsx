import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { GAMES_TABS_CONFIG } from '../../configs';


export const GamesNavbar = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(GAMES_TABS_CONFIG.map((tab, idx) => {
      return {
        key: idx,
        label: <Link to={tab.link}>{tab.text}</Link>,
      }
    }));
  }, []);



  /**
   * Handles the click event on the menu item.
   * @param {*} e 
   */
  const handleClick = e => {
    console.log('click ', e)
  }
  return (
    <Menu
      mode="horizontal"
      onClick={handleClick}
      items={tabs}
    />
  )
}
