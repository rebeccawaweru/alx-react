import React from "react";
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Notifications/>', ()=> {
    //ensure it renders without crashing
    it('renders without crashing', ()=> {
        shallow(<Notifications/>)
    });

    it('renders the NotificationItem', () =>{
        const wrapper = shallow(<Notifications/>)
        expect(wrapper.find(NotificationItem)).toHaveLength(3)
        // const firstNotification = wrapper.find(NotificationItem).first();
        // expect(firstNotification.find('li').html).toContain("New course available"); // Update the expected HTML content
    })
    // it('renders three list items', ()=>{
    //     const wrapper = shallow(<Notifications/>);
    //     expect(wrapper.find('li')).toHaveLength(3);
    // })

    it('renders text', ()=>{
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.text()).toContain('Here is the list of notifications')
    })
})