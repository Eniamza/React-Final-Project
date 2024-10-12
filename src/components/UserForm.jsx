import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserForm() {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);  // Set the name in context
    window.history.pushState({}, '', '/quiz');  // Change the URL without reloading the page
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);  // Dispatch a navigation event
  }

  return (
    <>
    
    <h2>Enter your name to start the quiz:</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)} // Here we are storing each keystrokes in the Input field. The function needs an e target event input to, we are wrapping the function in an arrow function to pass the event object.
      />
      <button type="submit">Start</button>
    </form>

    </>
  );
}