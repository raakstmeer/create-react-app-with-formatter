/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Section from './ContaxtAPI/Section';
import ThemeContext from './ContaxtAPI/themeContaxt';

export default class App extends React.Component {
  state = { theme: 'light' };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === 'light') {
        return {
          theme: 'dark',
        };
      }
      return {
        theme: 'light',
      };
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <button type="button">Clicked 0 times</button>
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>
        <br />
        <br />
        <classTodo />
      </div>
    );
  }
}
