import React from 'react'
import { shallow } from 'enzyme';
import Team from './Team';

describe('Team', () => {
    it("should render Team component", () => {
        const component = shallow(<Team />);
        const wrapper = component.find(".main__team");
        expect(wrapper.length).toBe(1);
    });
});