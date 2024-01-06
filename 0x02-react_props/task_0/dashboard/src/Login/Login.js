import './Login.css'
import {useRef} from 'react'
export function Login(){
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleFocus = (inputRef) => {
      inputRef.current.focus()
    }
    return <div className='App-body'>
    <p>Login to access the full dashboard</p>
    <div>
    <label onClick={()=>handleFocus(emailRef)}>Email:</label>
    <input ref={emailRef} type="email" name="email"/>
    <label onClick={()=>handleFocus(passwordRef)}>Password:</label>
    <input ref={passwordRef} type="password" name="password"/>
    <button>OK</button>
    </div>
  </div>
}