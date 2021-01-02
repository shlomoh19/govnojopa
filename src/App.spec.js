import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import App from './App';

describe('App', () => {
    it("should render App component", () => {
        const component = shallow(<App />);
        const wrapper = component.find(".content-wrapper");
        expect(wrapper.length).toBe(1);
    });

    it('renders correctly', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})
