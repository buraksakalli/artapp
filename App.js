import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './components/Pages/SplashScreen';
import ArtistPage from './components/Pages/ArtistPage';
import MainPage from './components/Pages/MainPage';

const AppNavigator = createStackNavigator({
  Home: SplashScreen,
  ArtistPage: ArtistPage,
  MainPage: MainPage
},
  {
    initialRouteName: "Home",
    headerMode: "none"
  });

const App = createAppContainer(AppNavigator);
export default App;
