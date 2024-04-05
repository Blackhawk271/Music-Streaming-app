import React from 'react';
import '../EmployeeForm.css';


class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Here you can handle the form submission. For example, you can send the state to a server.
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} onChange={this.handleInputChange} />
        <input name="email" value={this.state.email} onChange={this.handleInputChange} />
        <input name="title" value={this.state.title} onChange={this.handleInputChange} />
        <input name="department" value={this.state.department} onChange={this.handleInputChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EmployeeForm;