const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    'div', // what kind of tag is it
    { id: 'something-important' }, // its for attributes
    [
      React.createElement('h1', {}, 'Adopt me !'),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'Dog',
        breed: 'Havanese',
      }),
      React.createElement(Pet, {
        name: 'Pepper',
        animal: 'Bird',
        breed: 'Cockatiel',
      }),
      React.createElement(Pet, {
        name: 'Doink',
        animal: 'Cat',
        breed: 'Mixed',
      }),
    ] // children whatever we want to pass in
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
