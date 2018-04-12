import React, { Component } from 'react';
import {
  Body,
  Content,
  Button,
  Text,
  ActionSheet,
  Card,
  CardItem
} from 'native-base';
import Badges from './Badges';
import Checklist from './Checklist';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

class MainContent extends Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>
                This is Content Section
              </Text>
              <Button rounded success
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
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Badges/>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Checklist/>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default MainContent;
