import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Homescreen from './src/Screens/Homescreen';
import Sidemenu from './src/Components/Sidemenu';
import LoginScreen from './src/Screens/LoginScreen';
import Follower from './src/Screens/Follower';
import GetFollower from './src/Screens/GetFollower';
import FollowerList from './src/Screens/FollowerList';
import SplashScreen from './src/Screens/SplashScreen';
import Likes from './src/Screens/Likes';
import GetLikes from './src/Screens/GetLikes';
import LikesList from './src/Screens/LikesList';
import Comments from './src/Screens/Comments';
import GetComments from './src/Screens/GetComments';
import Share from './src/Screens/Share';
import GetShare from './src/Screens/GetShare';
import ContactUs from './src/Screens/ContactUs';



const DrawerScreens = createDrawerNavigator(
  {
    Home: { screen: Homescreen },
    Follower: { screen: Follower },
    GetFollower: { screen: GetFollower },
    FollowerList: { screen: FollowerList },
    Likes: { screen: Likes },
    GetLikes: { screen: GetLikes },
    LikesList: { screen: LikesList },
    GetComments: { screen: GetComments },
    Comments: { screen: Comments },
    Share: { screen: Share },
    GetShare: { screen: GetShare },
    ContactUs: { screen: ContactUs }
  },
  {
    contentComponent: Sidemenu,
    drawerWidth: "80%",
  }
)


const SwitchedScreens = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  Login: LoginScreen,
  Sidemenu: DrawerScreens
}, {
  initialRouteName: "SplashScreen"
})

const All = createAppContainer(SwitchedScreens)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <All />
    );
  }
}
