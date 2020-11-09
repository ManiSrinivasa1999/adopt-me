import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Lune" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="M" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
