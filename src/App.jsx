import { useState } from 'react';
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState('')

  const onSubmit = async() => {
    if (!url.trim()) return;

    const response = await fetch('/gen', {method: "POST", body: JSON.stringify({"link": url})})
    const data = await response.json()
    setResult(data.uid)

  }
  return (
    <>
      <form onSubmit={_ => {_.preventDefault(); onSubmit()}}>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)}/>
        <input type="submit" value="Сократить" />
      </form>
      <div className='result'>
        <p>Сокращенный url: <span>{result}</span></p>
      </div>
    </>
  )
}

export default App
