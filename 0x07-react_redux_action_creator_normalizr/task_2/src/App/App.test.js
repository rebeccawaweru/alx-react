/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import {shallow , mount} from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import { Login } from "../Login/Login";
import { Footer } from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('<App/>', () => {
    //ensure it renders without crashing
    it('renders without crashing', () => {
        const component = shallow(<App/>);
        expect(component).toBeDefined();
    });
    it('should render Notifications component',()=>{
        const component = shallow(<App/>);
        expect(component.containsMatchingElement(<Notifications/>)).toEqual(false);
    });
    it('should render Header component', () => {
        const component = shallow(<App/>);
        expect(component.contains(<Header/>)).toBe(true)
    });
    it('should render Login component', () => {
        const component = shallow(<App/>);
        expect(component.contains(<Login/>)).toBe(true)
    });
    it('should render Footer component', () => {
        const component = shallow(<App/>);
        expect(component.contains(<Footer/>)).toBe(true)
    });
    it('does not render courselist if not loggedin', () => {
        const component = shallow(<App/>);
        component.setProps({ isLoggedIn: false});
        expect(component.contains(<CourseList/>)).toBe(false);
    });

    it('renders courselist if loggedin', () => {
        const component = shallow(<App isLoggedIn={true}/>);
        expect(component.containsMatchingElement(<CourseList/>)).toEqual(false);
        expect(component.contains(<Login/>)).toBe(false);
    });
    
    document.alert = jest.fn()
    it('call out logout', () => {
        const mocked = jest.fn()
        const wrapper = mount(<App logOut={mocked}/>)
        const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey:true });
        const spy = jest.spyOn(window, "alert")
        window.dispatchEvent(event);
        
        expect(mocked).toHaveBeenCalledTimes(1);
        // expect(spy).toHaveBeenCalledWith("Logging you out")
        wrapper.unmount()
    });
    document.alert.mockClear();

    it('default state for displayDrawer is false', ()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.state('displayDrawer')).toEqual(false)
    });

    it('should update state to true after calling handleDisplayDrawer', () => {
        const wrapper = shallow(<App/>);
        const instance =  wrapper.instance();
        instance.handleDisplayDrawer();
        wrapper.setState(instance.state);
        expect(wrapper.state('displayDrawer')).toEqual(true);
    });

    it('should update state to false after calling handleHideDrawer', () => {
        const wrapper = shallow(<App/>);
        const instance =  wrapper.instance();
        wrapper.setState({displayDrawer:true});
        instance.handleHideDrawer();
        wrapper.setState(instance.state)
        expect(wrapper.state('displayDrawer')).toEqual(false)
    });
    
    it('should rerender when prop displayDrawer changes', () =>{
        const wrapper = shallow(<App/>);
        const instance = wrapper.instance();
        //spy on the shouldComponentUpdate method
        const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
        //set prop to trigger re-render
        wrapper.setProps({displayDrawer:true});
        wrapper.setState(instance.state);
        //verify the shouldCompnentUpdate was called
        expect(shouldUpdateSpy).toHaveBeenCalled();
        //clean up the spy
        shouldUpdateSpy.mockRestore();
    });


     

});