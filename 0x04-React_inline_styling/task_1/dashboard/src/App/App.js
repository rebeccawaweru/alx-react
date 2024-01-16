import React from 'react';
import {StyleSheet, css} from 'aphrodite'
import Notifications  from '../Notifications/Notifications'
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

const styles = StyleSheet.create({
   App: {
    height: "100vh",
    maxWidth: "100vw",
    position:"relative",
    fontFamily: "Arial, Helvetica, sans-serif",
   },
});
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
      // alert('Logging you out');
      this.props.logOut();
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
      <div className='heading-section'>
      <Notifications/>
       <Header/>
       </div>
       <Login/>
       <Footer/>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
