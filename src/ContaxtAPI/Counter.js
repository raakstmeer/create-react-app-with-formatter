import React from 'react';

export default class Counter extends React.Component {
  state = { count: 0 };

  incrementcount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { render } = this.props;
    return render(count, this.incrementcount);
  }
}
