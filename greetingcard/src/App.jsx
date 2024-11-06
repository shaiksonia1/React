import React from 'react';
import Card from './components/card';
import wishes from './wishes';

function App() {
  return (
    <div>
      {wishes.map((wish) => (
        <Card key={wish.key} quote={wish.quote}  image1 = {wish.image1}/>
      ))}
    </div>
  );
}

export default App;
