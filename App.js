import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import {
  Root,
  Container,
} from 'native-base';
import AppHeader from './src/screens/Header';
import AppFooter from './src/screens/Footer';
import MainContent from './src/screens/Body';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };

    this.mountEverything = this.mountEverything.bind(this);
  }

  async mountEverything() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.mountEverything}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Root>
        <Container padder>
          <AppHeader/>
          <MainContent/>
          <AppFooter/>
        </Container>
      </Root>
    );
  }
}
