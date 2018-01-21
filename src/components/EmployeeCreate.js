import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Chooser } from './common';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeCreate extends Component {

  createEmployee() {
    const { name, phone, shift } = this.props;

      this.props.employeeSave({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    const { name, phone, shift } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='Jane'
            value={name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone Number'
            placeholder='555-555-5555'
            value={phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Chooser
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          />
        </CardSection>
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

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave
 })(EmployeeCreate);
