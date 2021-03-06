import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";
import { employeeSave } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {

  createEmployee() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift: shift || "Monday" });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.createEmployee.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeSave })(EmployeeCreate);
