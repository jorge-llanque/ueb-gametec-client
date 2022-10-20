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
    text: UI.SIDEBAR_MENU_TITLE.GAMES,
    link: APP_ROUTES.GAMES,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLE.PARTICIPANTS,
    link: APP_ROUTES.PARTICIPANTS,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLE.SCHEDULING,
    link: APP_ROUTES.SCHEDULING,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLE.CONTROLLERS,
    link: APP_ROUTES.CONTROLLERS,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLE.REPORTS,
    link: APP_ROUTES.REPORTS,
    // resource and screenName properties are pending.
  },
  {
    text: UI.SIDEBAR_MENU_TITLE.SETTINGS,
    link: APP_ROUTES.HOME,
    // resource and screenName properties are pending.
  },
]