import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps135527Navigator from '../features/Maps135527/navigator';
import Settings135505Navigator from '../features/Settings135505/navigator';
import Settings135490Navigator from '../features/Settings135490/navigator';
import NotificationList135489Navigator from '../features/NotificationList135489/navigator';
import Maps135488Navigator from '../features/Maps135488/navigator';
import Settings135487Navigator from '../features/Settings135487/navigator';
import UserProfile135480Navigator from '../features/UserProfile135480/navigator';
import Settings135479Navigator from '../features/Settings135479/navigator';
import Settings135477Navigator from '../features/Settings135477/navigator';
import SignIn2135475Navigator from '../features/SignIn2135475/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps135527: { screen: Maps135527Navigator },
Settings135505: { screen: Settings135505Navigator },
Settings135490: { screen: Settings135490Navigator },
NotificationList135489: { screen: NotificationList135489Navigator },
Maps135488: { screen: Maps135488Navigator },
Settings135487: { screen: Settings135487Navigator },
UserProfile135480: { screen: UserProfile135480Navigator },
Settings135479: { screen: Settings135479Navigator },
Settings135477: { screen: Settings135477Navigator },
SignIn2135475: { screen: SignIn2135475Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
