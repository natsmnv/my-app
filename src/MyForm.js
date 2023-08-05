import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Виконати POST-запит на сервер
    fetch('http://localhost:5000/api/data1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Дані з POST-запиту:', data);
      })
      .catch(error => {
        console.error('Помилка POST-запиту:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введіть ім'я"
      />
      <button type="submit">Зберегти</button>
    </form>
  );
};

export default MyForm;
