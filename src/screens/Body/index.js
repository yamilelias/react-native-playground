import React, { Component } from 'react';
import {
  Root,
  Container,
  Content,
  Button,
  Text,
  ActionSheet
} from 'native-base';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

class MainContent extends Component {
  render() {
    return (
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
    )
  }
}

export default MainContent;
