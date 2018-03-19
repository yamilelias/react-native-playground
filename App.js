import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import {
  Root,
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  ActionSheet
} from 'native-base';
import AppHeader from './src/screens/Header';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

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
          <Content padder>
            <Text>
              This is Content Section
            </Text>
            <Button
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: 'Testing ActionSheet'
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}
            >
              <Text>ActionSheet</Text>
            </Button>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Root>
    );
  }
}
