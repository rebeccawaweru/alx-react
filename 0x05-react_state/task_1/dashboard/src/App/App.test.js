/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import {shallow , mount} from "enzyme";

describe('<App/>', () => {
    //ensure it renders without crashing
    it('renders without crashing', () => {
        shallow(<App/>)
    });
    // it('renders div with class .App-header', () => {
    //     const wrapper = shallow(<App/>)
    //     expect(wrapper.find('.App-header')).toHaveLength(1)
    // })
    // it('renders div with the class App-body', () => {
    //     const wrapper = shallow(<App/>)
    //     expect(wrapper.find('.App-body')).toHaveLength(1)
    // })
    // it('renders div with the class App-footer', () => {
    //     const wrapper = shallow(<App/>)
    //     expect(wrapper.find('.App-footer')).toHaveLength(1)
    // })

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