/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import {shallow } from "enzyme";

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

})