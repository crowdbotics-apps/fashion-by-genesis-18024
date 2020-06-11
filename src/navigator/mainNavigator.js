import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile65490Navigator from '../features/UserProfile65490/navigator';
import Tutorial65489Navigator from '../features/Tutorial65489/navigator';
import NotificationList65461Navigator from '../features/NotificationList65461/navigator';
import Settings65460Navigator from '../features/Settings65460/navigator';
import Settings65452Navigator from '../features/Settings65452/navigator';
import UserProfile65450Navigator from '../features/UserProfile65450/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile65490: { screen: UserProfile65490Navigator },
Tutorial65489: { screen: Tutorial65489Navigator },
NotificationList65461: { screen: NotificationList65461Navigator },
Settings65460: { screen: Settings65460Navigator },
Settings65452: { screen: Settings65452Navigator },
UserProfile65450: { screen: UserProfile65450Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
