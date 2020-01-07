import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './components/Pages/SplashScreen';
import ArtistPage from './components/Pages/ArtistPage';
import MainPage from './components/Pages/MainPage';
import PaintingPage from './components/Pages/PaintingPage';
import FullscreenImage from './components/Pages/FullscreenImagePage';
import Menu from './components/Menu';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

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

const RootComponent = createAppContainer(AppNavigator);
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://192.168.1.35:4001/graphql',
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    }
  }),
});
const App = () => (
  <ApolloProvider client={client}>
    <RootComponent />
  </ApolloProvider>
);

export default App;
