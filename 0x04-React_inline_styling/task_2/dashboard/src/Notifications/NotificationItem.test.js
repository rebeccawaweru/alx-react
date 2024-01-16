import React from "react";
import {shallow} from 'enzyme'
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('rendering components', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem/>);
        expect(wrapper.exists()).toBe(true)
    });

    it('renders correct html from props', () => {
        const wrapper = shallow(<NotificationItem/>);
        wrapper.setProps({type:"default", value:"test"});
        expect(wrapper.html()).toEqual('<li class="default_1tsdo2i" data-notification-type="default">test</li>');
    });

    it('renders correct html from <u> props', () => {
        const wrapper = shallow(<NotificationItem/>);
        wrapper.setProps({ html: "<u>test</u>" });
        expect(wrapper.html()).toEqual('<li data-urgent="true" class="urgent_137u7ef"><u>test</u></li>');
    });
});

describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
        const wrapper = shallow(<NotificationItem/>);
        const spy = jest.fn();

        wrapper.setProps({ value: "test item", markAsRead: spy, id: 1});
        wrapper.find("li").props().onClick();
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(1);
        spy.mockRestore();
    });
});