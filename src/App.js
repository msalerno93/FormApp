import './App.css';
import {useState} from 'react'

function App() {

  const [text, setText] = useState('')

  const clickHandle = (e) => {
    e.preventDefault()
    setText(text)
    setText('')
  }

  return (
    <h1 className="App">
        Form Application
        <div>
          <form onChange={(e) => setText(e.target.value)} value={text} placeholder='Type Here'>
            <input>
            </input>
          </form><br></br>
          <button onSubmit={clickHandle}>Submit</button>
        </div>
        <p>
          {text}
        </p>
    </h1>
  );
}

export default App;
