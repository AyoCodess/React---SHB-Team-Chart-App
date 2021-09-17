import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          We have an error please refresh or contact us at
          info@stopholdingback.org
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
