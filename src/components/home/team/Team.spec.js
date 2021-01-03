import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';
import toJson from 'enzyme-to-json';

describe('Team', () => {
    it("should render Team component", () => {
        const component = shallow(<Team />);
        const wrapper = component.find(".main__team");
        expect(wrapper.length).toBe(1);
    });

    it("should render Team snapshot", () => {
        const component = shallow(<Team />);
        expect(toJson(component)).toMatchSnapshot();
    });
});