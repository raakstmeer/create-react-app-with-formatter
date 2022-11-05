import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import themeContext from './themeContaxt';

export default class Content extends React.Component {
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const { theme, switchTheme } = this.context;
    return (
      <div>
        <h1>This is Content</h1>
        <Counter
          render={(count, incrementcount) => (
            <HoverCounter
              count={count}
              incrementcount={incrementcount}
              theme={theme}
              switchTheme={switchTheme}
            />
          )}
        />
      </div>
    );
  }
}

Content.contextType = themeContext;
