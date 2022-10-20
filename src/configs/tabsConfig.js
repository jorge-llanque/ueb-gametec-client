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

export const SIDEBAR_TABS_CONFIG = [
  {
    text: UI.SIDEBAR_MENU_TITLES.GAMES,
    link: APP_ROUTES.GAMES,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLES.PARTICIPANTS,
    link: APP_ROUTES.PARTICIPANTS,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLES.SCHEDULING,
    link: APP_ROUTES.SCHEDULING,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLES.CONTROLLERS,
    link: APP_ROUTES.CONTROLLERS,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLES.REPORTS,
    link: APP_ROUTES.REPORTS,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLES.SETTINGS,
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
]

export const GAMES_TABS_CONFIG = [
  {
    text: UI.GAMES_MENU_TITLES.ALL,
    link: APP_ROUTES.GAMES_ALL,
    active: true,
    // resource and screenName properties are pending.
  },
  {
    text: UI.GAMES_MENU_TITLES.AVAILABLE,
    link: APP_ROUTES.GAMES_AVAILABLE,
    // resource and screenName properties are pending.
  },
  {
    text: UI.GAMES_MENU_TITLES.NEW_RELEASES,
    link: APP_ROUTES.GAMES_RELEASES,
    // resource and screenName properties are pending.
  },
]