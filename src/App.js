import React from 'react';
import Button from './Button';

const App = () => {
  const handleClickButton1 = () => {
    alert('I am button 1 clicked');
  };

  const handleClickButton2 = () => {
    alert('I am button 2 clicked');
  };

  return (
    <div>
      <Button
        buttonText="Button 1"
        buttonStyle={{ color: 'white', background: 'red' }}
        onClick={handleClickButton1}
      />

      <Button
        buttonText="Button 2"
        buttonStyle={{ color: 'white', background: 'blue' }}
        onClick={handleClickButton2}
      />
    </div>
  );
};

export default App;
