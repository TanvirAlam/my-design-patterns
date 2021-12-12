import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default interval => WrappedComponent => {
  class Counter extends React.Component {
    state = { counter: 0 };

    componentDidMount() {
      setInterval(
        () => this.setState({ 
          counter: this.state.counter + 1
        })
      );
    }

    render() {
      return (
        <WrappedComponent counter={this.state.counter} />
      );
    }
  }

  return Counter;
}