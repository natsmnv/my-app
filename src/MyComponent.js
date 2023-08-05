import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data1')
      .then(response => response.json())
      .then(data => setData1(data))
      .catch(error => console.error('Помилка:', error));

    fetch('http://localhost:5000/api/data2')
      .then(response => response.json())
      .then(data => setData2(data))
      .catch(error => console.error('Помилка:', error));

    fetch('http://localhost:5000/api/data3')
      .then(response => response.json())
      .then(data => setData3(data))
      .catch(error => console.error('Помилка:', error));
  }, []);

  return (
    <div>
      <p>Дані з data1.json:</p>
      <ul>
        {data1.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <p>Дані з data2.json:</p>
      <ul>
        {data2.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <p>Дані з data3.json:</p>
      <ul>
        {data3.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
