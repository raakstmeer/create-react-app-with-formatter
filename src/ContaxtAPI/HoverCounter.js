/* eslint-disable jsx-a11y/mouse-events-have-key-events */
export default function HoverCounter({ count, incrementcount, theme, switchTheme }) {
  const style = theme === 'dark' ? { backgroundColor: 'tomato', color: '#fff' } : null;
  return (
    <div>
      <h1 onMouseOver={incrementcount} style={style}>
        Hovered {count} times
      </h1>
      <button type="button" onClick={switchTheme}>
        Change Theme
      </button>
    </div>
  );
}
