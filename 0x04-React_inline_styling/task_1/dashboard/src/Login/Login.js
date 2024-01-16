import React, {useRef} from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  Appbody: {
    height: "50vh",
    paddingLeft: "32px",
    borderBottom: "2px solid #d6204e"
  },
  input :{
    marginRight:"10px"
  }
})
export function Login(){
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleFocus = (inputRef) => {
      inputRef.current.focus()
    }
    return <div className={css(styles.Appbody)}>
    <p>Login to access the full dashboard</p>
    <div>
    <label onClick={()=>handleFocus(emailRef)}>Email:</label>
    <input ref={emailRef} type="email" name="email" className={css(styles.input)}/>
    <label onClick={()=>handleFocus(passwordRef)}>Password:</label>
    <input ref={passwordRef} type="password" name="password" className={css(styles.input)}/>
    <button>OK</button>
    </div>
  </div>
}