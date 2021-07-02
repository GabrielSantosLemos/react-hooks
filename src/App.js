import React, { useState, useEffect } from 'react';

export default function App() {

  const [repositories, setRepositories] = useState([])

  //function handleAddRepository () {
  //  setRepositories([
  //    ...repositories, 
  //    {id: Math.random(), name: 'Novo repo'}
  //  ])
  //}

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/GabrielSantosLemos/repos');
    const data = await response.json();
    setRepositories(data);
  }, []);

  return (
    <div className="App">
      <ul>
        { repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        )) }
      </ul>
    </div>
  );
}