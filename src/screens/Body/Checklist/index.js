import React, { Component } from 'react';
import { List, ListItem, CheckBox, Text } from 'native-base';

class Checklist extends Component {
  constructor() {
    super();

    this.state = {
      daily: true,
      discussion: false,
      finish: true,
    };

    this.check = this.check.bind(this);
  }

  check(check) {
    switch(check) {
      case 'daily':
        this.setState({ daily: !this.state.daily });
        break;
      case 'discussion':
        this.setState({ discussion: !this.state.discussion });
        break;
      case 'finish':
        this.setState({ finish: !this.state.finish });
        break;
    }
  }

  render() {
    return (
      <List>
        <ListItem>
          <CheckBox onPress={() => this.check('daily')} checked={this.state.daily}/>
          <Text> Daily Stand Up</Text>
        </ListItem>
        <ListItem>
          <CheckBox onPress={() => this.check('discussion')} checked={this.state.discussion}/>
          <Text> Discussion with Client</Text>
        </ListItem>
        <ListItem>
          <CheckBox onPress={() => this.check('finish')} checked={this.state.finish} color="green"/>
          <Text> Finish list Screen</Text>
        </ListItem>
      </List>
    );
  }
}

export default Checklist;
