import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile135480Navigator from '../features/UserProfile135480/navigator';
import Settings135479Navigator from '../features/Settings135479/navigator';
import Settings135477Navigator from '../features/Settings135477/navigator';
import SignIn2135475Navigator from '../features/SignIn2135475/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
