import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from "aphrodite"

const styles = StyleSheet.create({
  Appheader: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.4rem",
    color:"#e0354b",
    borderBottom: "3px solid #e0354b",
  },
  img: {
    width:"200px",
    height:"200px",
  },
});
function Header(){
    return <header className={css(styles.Appheader)}>
    <img src={logo} className={css(styles.img)} alt="logo" />
    <h1>School dashboard</h1>
  </header>
}
export default Header;