import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { config } from './config/config'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Component mounted');
    console.log('ENVIRONMENT VAR:', process.env.VITE_GATEWAY_BASEURL);
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${config.GATEWAY_BASEURL}/api/posts`);
      const data = await response.json();
      setData(data.message);
      console.log(data);
    } catch (error: any) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => fetchData()}>
          Get API Data
        </button>
        {data && <p>{data}</p>}
        {error && <p>{error}</p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
