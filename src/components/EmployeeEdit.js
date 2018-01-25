import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Button, Confirm } from "./common";
import { employeeEdit, employeeDelete } from "../actions";
import Communications from "react-native-communications";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  state = { isModalShown: false };

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your next shift is on ${shift}`);
  }

  saveEmployee() {
    const { name, phone, shift, employee } = this.props;

    this.props.employeeEdit({ name, phone, shift, uid: employee.uid });
  }

  firePress() {
    this.setState({isModalShown: !this.state.isModalShown});
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({uid});
  }

  onDecline() {
    this.setState({isModalShown: false});
  }

  render() {
    const { name } = this.props;

    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.saveEmployee.bind(this)}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Employee
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.firePress.bind(this)}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.isModalShown}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Do you want to fire {name}?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeEdit, employeeDelete })(EmployeeEdit);
