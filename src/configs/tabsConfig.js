import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { APP_ROUTES, UI } from "../constants";

/**
 * The top tabs configurations.
 */
export const TOP_TABS_CONFIG = [
  {
    text: UI.TOP_MENU_TITLES.SEARCH,
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
  {
    text: UI.TOP_MENU_TITLES.THEME,
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
  {
    text: UI.TOP_MENU_TITLES.NOTIFICATIONS,
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
  {
    text: UI.TOP_MENU_TITLES.HOME,
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
];

export const STUDENTS_TOP_TABS_CONFIG = [
  {
    key: "1",
    label: "Matematicas",
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
  {
    key: "2",
    label: "Lenguaje",
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
]

export const SIDEBAR_TABS_CONFIG = [
  {
    key: `root-${UI.SIDEBAR_MENU_TITLES.GAMES}`,
    label: UI.SIDEBAR_MENU_TITLES.GAMES,
    path: APP_ROUTES.GAMES,
    icon: <TwitterOutlined />
    // resource and screenName properties are pending.
  },
  {
    key: `root-${UI.SIDEBAR_MENU_TITLES.PARTICIPANTS}`,
    label: UI.SIDEBAR_MENU_TITLES.PARTICIPANTS,
    path: APP_ROUTES.PARTICIPANTS,
    icon: <GithubOutlined />
    // resource and screenName properties are pending.
  },
  {
    key: `root-${UI.SIDEBAR_MENU_TITLES.SCHEDULING}`,
    label: UI.SIDEBAR_MENU_TITLES.SCHEDULING,
    path: APP_ROUTES.SCHEDULING,
    icon: <TwitterOutlined />
    // resource and screenName properties are pending.
  },
  {
    key: `root-${UI.SIDEBAR_MENU_TITLES.CONTROLLERS}`,
    label: UI.SIDEBAR_MENU_TITLES.CONTROLLERS,
    path: APP_ROUTES.CONTROLLERS,
    icon: <GithubOutlined />
    // resource and screenName properties are pending.
  },
  {
    key: `root-${UI.SIDEBAR_MENU_TITLES.REPORTS}`,
    label: UI.SIDEBAR_MENU_TITLES.REPORTS,
    path: APP_ROUTES.REPORTS,
    icon: <TwitterOutlined />
    // resource and screenName properties are pending.
  },
  {
    key: `root-${UI.SIDEBAR_MENU_TITLES.SETTINGS}`,
    label: UI.SIDEBAR_MENU_TITLES.SETTINGS,
    path: APP_ROUTES.HOME,
    icon: <GithubOutlined />
    // resource and screenName properties are pending.
  },
]

export const GAMES_TABS_CONFIG = [
  {
    key: `games-${UI.GAMES_MENU_TITLES.ALL}`,
    label: UI.GAMES_MENU_TITLES.ALL,
    path: APP_ROUTES.GAMES_ALL,
    // resource and screenName properties are pending.
  },
  {
    key: `games-${UI.GAMES_MENU_TITLES.AVAILABLE}`,
    label: UI.GAMES_MENU_TITLES.AVAILABLE,
    path: APP_ROUTES.GAMES_AVAILABLE,
    // resource and screenName properties are pending.
  },
  {
    key: `games-${UI.GAMES_MENU_TITLES.NEW_RELEASES}`,
    label: UI.GAMES_MENU_TITLES.NEW_RELEASES,
    path: APP_ROUTES.GAMES_RELEASES,
    // resource and screenName properties are pending.
  },
]