import './App.css';
import {useState} from 'react'

function App() {

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('Male')


  const handleSubmit = (e) => {
    e.preventDefault()
    setFirst(first)
    
  }
  return (
    <div className="create">
        <h1>Form Application</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type='text'
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type='text'
            required
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
          <label>Email Address</label>
          <input
            type='text'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Choose Not To Say'>Choose Not To Say</option>
          </select>
          <button>Submit Information</button>
        </form>
        <div>
          {first}
        </div>
    </div>
  );
}

export default App;
