import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const namesArr = [
    { nome: 'Ana' },
    { nome: 'Vitor' },
    { nome: 'Henrique' },
    { nome: 'Cesar' },
  ];
  const [search, setSearch] = useState('');
  const searchEngine = (arr) => {
    return arr.filter((items) => items.nome.toLowerCase().indexOf(search) > -1);
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.trim())}
      />
      {searchEngine(namesArr).map((item) => (
        <ul>
          <li>{item.nome}</li>
        </ul>
      ))}
    </>
  );
}
