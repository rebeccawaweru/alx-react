import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'
import {useRef} from 'react'
function App() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const handleFocus = (inputRef) => {
    inputRef.current.focus()
  }
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div>
        <label for="email" onClick={()=>handleFocus(emailRef)}>Email:</label>
        <input ref={emailRef} type="email" name="email"/>
        <label for="password" onClick={()=>handleFocus(passwordRef)}>Password:</label>
        <input ref={passwordRef} type="password" name="password"/>
        <button>OK</button>
        </div>
    
      </div>
      <div className='App-footer'>
        <p><i>Copyright {getFullYear()} - {getFooterCopy()}</i></p>
      </div>
    </div>
  );
}

export default App;
