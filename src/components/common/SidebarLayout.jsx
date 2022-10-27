import { useNavigate } from 'react-router-dom';
import { Divider, Layout, Menu } from 'antd';
import { SIDEBAR_TABS_CONFIG } from '../../configs';

const { Sider } = Layout;

/**
 * SidebarLayout component
 * @returns SidebarLayout component.
 */
export const SidebarLayout = () => {
  const navigate = useNavigate();

  const handleNavigation = ({ key }) => {
    navigate(SIDEBAR_TABS_CONFIG.find((tab) => tab.key === key).path);
  }

  return (
    <Sider
      style={{
        borderRadius: "10px",
        backgroundColor: "#3a2fb1",
      }}
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Divider
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        mode='inline'
        style={{
          backgroundColor: "#3a2fb1",
          color: "#fff",
          border: "none",
        }}
        defaultSelectedKeys={[`${SIDEBAR_TABS_CONFIG[0].key}`]}
        items={SIDEBAR_TABS_CONFIG}
        onClick={handleNavigation}
      />
    </Sider>
  )
}
export default SidebarLayout