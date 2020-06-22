import React from 'react';
import Programming from './components/Programming/Programming';

function App() {

  const progLangs = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'PHP' },
    { id: 4, name: 'Python' },
    { id: 5, name: 'C++' },
    { id: 6, name: 'C#' },
  ]

  return <Programming progLangs={progLangs} />;
}

export default App;
