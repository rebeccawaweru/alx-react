import React from "react";
import {shallow} from 'enzyme'
import NotificationItem from "./NotificationItem";

describe('<NotificationItem/>', () => {
    it('NotificationItem renders without crashing', () => {
        shallow(<NotificationItem/>)
    });

    it('Renders the correct html with props', () => {
        // Warning: .prop(key) only returns values for props that exist in the root node.
        const dummyHtml = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem type="default" value="test"/>);
        const wrapperhtml = shallow(<NotificationItem html={dummyHtml}/>)
        expect(wrapper.find('li').prop("data-notification-type")).toEqual("default")
        expect(wrapper.find('li').text()).toEqual("test")
        // expect(wrapperhtml.find('li').html()).toContain('<u>test</u>')
        // expect(wrapperhtml.containsMatchingElement(<li><u>test</u></li>))
    })
})