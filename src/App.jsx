import {useState} from 'react';
import './App.css'

function App() {
    const [url, setUrl] = useState('https://')
    const [result, setResult] = useState('здесь будет ваша ссылка')

    const onSubmit = async (_) => {
        _.preventDefault();
        if (!url.trim()) return;

        const response = await fetch(
            '/gen',
            {
                method: "POST",
                body: JSON.stringify({"link": url}),
                headers: {'Content-Type': 'application/json'}
            })
        const data = await response.json()
        setResult(`sh.osi.im/${data.uid}`)

    }
    return (
        <>
            <h1>Сокращатель ссылок</h1>
            <form onSubmit={onSubmit}>
                    <input type="text" id='url' aria-label="url" placeholder='https://' value={url} onChange={e => setUrl(e.target.value)}/>
                    <input type="submit" value="Сократить"/>
            </form>
            <div className='result'>
                <span>Результат: </span>
                <a href={url && `https://${result}`}>{result}</a>
            </div>
        </>
    )
}

export default App
