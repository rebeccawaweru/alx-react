import React from 'react';
import './App.css';
import Notifications  from '../Notifications/Notifications'
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    logOut: () => {}
  }
  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  render () {
    return (
      <>
      <Notifications/>
      <div className='App'>
       <Header/>
       <Login/>
       <Footer/>
      </div>
      </>
    )
  }
}

export default App;
