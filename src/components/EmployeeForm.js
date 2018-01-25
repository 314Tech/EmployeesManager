import _ from "lodash";
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { employeeCreate } from "../actions";
import { Input, CardSection, Chooser } from "./common";

class EmployeeForm extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeCreate( {prop,value} );
    });
  }

  render() {
    const { name, phone, shift } = this.props;

    return (
      <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={ name }
          onChangeText={value => this.props.employeeCreate({ prop: "name", value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone Number"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={value => this.props.employeeCreate({ prop: "phone", value })}
        />
      </CardSection>
      <CardSection>
        <Chooser
          selectedValue={shift}
          onValueChange={value => this.props.employeeCreate({ prop: "shift", value })}
        />
      </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeForm);
