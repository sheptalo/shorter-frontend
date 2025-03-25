import {useState} from 'react';
import './App.css'

function App() {
    const [url, setUrl] = useState('')
    const [result, setResult] = useState('')

    const onSubmit = async () => {
        if (!url.trim()) return;

        const response = await fetch(
            '/gen',
            {
                    method: "POST",
                    body: JSON.stringify({"link": url}),
                    headers: {'Content-Type': 'application/json'}
                })
        const data = await response.json()
        setResult(`https://sh.osi.im/${data.uid}`)

    }
    return (
        <>
            <h1>Сокращатель ссылок</h1>
            <form onSubmit={_ => {
                _.preventDefault();
                onSubmit()
            }}>
                <input type="text" value={url} onChange={e => setUrl(e.target.value)}/>
                <input type="submit" value="SH.."/>
            </form>
            <div className='result'>
                <span>Сокращенный url: </span>
                <a href={result}>{result}</a>
            </div>
        </>
    )
}

export default App
