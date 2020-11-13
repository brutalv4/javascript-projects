import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: null,
    };
  }

  componentDidCatch({ message: errorMessage }) {
    this.setState({ errorMessage });
  }

  render() {
    return this.state.errorMessage ? (
      <>
        <h1>{this.state.errorMessage}</h1>
      </>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
