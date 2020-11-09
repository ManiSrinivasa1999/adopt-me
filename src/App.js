const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Luna'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'Luna'),
  ]);
};

const App = () => {
  return React.createElement(
    'div', // what kind of tag is it
    { id: 'something-important' }, // its for attributes
    [
      React.createElement('h1', {}, 'Adopt me !'),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
    ] // children whatever we want to pass in
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
