import React from 'react';
import { memo, useState, useMemo } from 'react';

const Button = memo(({ onClick }) => {
  console.log(`Компонент Button отрисован в ${new Date().toLocaleTimeString()}`);
  return <button onClick={onClick}>Нажми меня</button>;
});

const Greeting = memo(({ name }) => {
  console.log(`Компонент Greeting отрисован в ${new Date().toLocaleTimeString()}`);

  return <h3>{`Hello, ${name}!`}</h3>;
});

const App = () => {
  const [name, setName] = useState('');
  const buttonHandler = useMemo(() => () => setName('world'), []);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Greeting name={name} />
      <Button onClick={buttonHandler} />
    </>
  );
};

export default App;