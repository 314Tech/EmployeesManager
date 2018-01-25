import React, { Component } from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {

  onEmployeePress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    const { textStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={this.onEmployeePress.bind(this)} >
        <View>
          <CardSection>
            <Text
              style={textStyle}
            >
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
