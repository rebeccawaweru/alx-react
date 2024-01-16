/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import {shallow , mount} from "enzyme";
import {render} from '@testing-library/react';
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
    
    it('call out logout', () => {
        const mocked = jest.fn()
        const wrapper = mount(<App logOut={mocked}/>)
        const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey:true });
        const spy = jest.spyOn(window, "alert")
        window.dispatchEvent(event);
        
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith("Logging you out")
        wrapper.unmount()
    });

});