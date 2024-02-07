import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>User Email: {this.props.email}</h1>
        <p>Password: {this.props.password}</p>
        <p>Success: {this.props.success ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.data.email,
  password: state.data.password,
  success: state.data.success
});

export default connect(mapStateToProps)(MyComponent);
