import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [error, setError] = useState('');

  const definitions = {
    "React": "A JavaScript library for building user interfaces.",
    "Component": "A reusable building block in React.",
    "State": "An object that stores data for a component."
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError('Please enter a search term');
      setDefinition('');
      return;
    }

    const searchTermLowerCase = searchTerm.toLowerCase();

    const foundDefinition = Object.entries(definitions).find(([word]) =>
      word.toLowerCase().includes(searchTermLowerCase)
    );

    if (foundDefinition) {
      setError('');
      setDefinition(foundDefinition[1]);
    } else {
      setError('Word not found in the dictionary.');
      setDefinition('');
    }
  };

  return (
    <div className="DictionaryApp">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-cy="search-input"
        />
        <button onClick={handleSearch} data-cy="search-button">Search</button>
      </div>

      <p className="definition" data-cy="definition">Definition: {definition} {error}</p>
    </div>
  );
};

export default App;
