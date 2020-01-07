import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './components/Pages/SplashScreen';
import ArtistPage from './components/Pages/ArtistPage';
import MainPage from './components/Pages/MainPage';
import PaintingPage from './components/Pages/PaintingPage';
import FullscreenImage from './components/Pages/FullscreenImagePage';
import Menu from './components/Menu';

const AppNavigator = createStackNavigator(
  {
    Home: SplashScreen,
    ArtistPage: ArtistPage,
    MainPage: MainPage,
    PaintingPage: PaintingPage,
    FullscreenImagePage: FullscreenImage,
    Menu: Menu
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = createAppContainer(AppNavigator);
export default App;
