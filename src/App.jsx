import React, { useState, useEffect } from 'react';

function App() {
  const [korisnici, setKorisnici] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setKorisnici(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Korisnici</h1>
      <ul>
        {korisnici.map((korisnik, index) => (
          <li key={index}>{korisnik.ime} {korisnik.prezime}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
