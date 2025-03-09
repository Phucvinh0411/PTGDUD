import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RenderItem from './RenderItem.jsx';

function App() {
  const [array, setArray] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://67cd3623dd7651e464eda7d9.mockapi.io/user');
        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Too many requests. Please try again later.');
          }
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArray(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <ul className='menu'>
          <RenderItem array={array} />
        </ul>
      )}
      <div>
        <button>add Item</button>
      </div>
    </>
  );
}

export default App;