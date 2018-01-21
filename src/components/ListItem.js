import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.employees;
    const { textStyle } = styles;

    return (
      <CardSection>
        <Text
          style={textStyle}
        >
          {name}
        </Text>
      </CardSection>
    );
  }

}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default ListItem;
