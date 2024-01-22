import React from 'react';
import './App.css';
import Notifications  from '../Notifications/Notifications'
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import { getLatestNotification } from '../utils/utils';
import PropTypes from "prop-types"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer:false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
  }
  listCourses = [
    {id:1, name:"ES6", credit:60},
    {id:2, name:"Webpack", credit:20},
    {id:3, name:"React", credit:40}
  ];
  listNotifications = [
    {id:1, type:"default", value:"New course available"},
    {id:2, type:"urgent", value:"New resume available"},
    {id:3, type:"urgent", html:getLatestNotification()},
  ]
  static defaultProps = {
    logOut: () => {}
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    //only update if the displayDrawer prop changes
    return nextState.displayDrawer !== this.state.displayDrawer || nextProps.displayDrawer !== this.props.displayDrawer;
  }
  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault()
      // alert('Logging you out');
      this.props.logOut();
    }
  }
  handleDisplayDrawer() {
    this.setState({
      displayDrawer:true
    });
  }
  handleHideDrawer() {
    this.setState({
      displayDrawer:false
    });
  }
  render () {
    return (
      <>
      <Notifications listNotifications={this.listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
      <div className='App'>
       <Header/>

       <Login/>
       <Footer/>
      </div>
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () =>{
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
export default App;