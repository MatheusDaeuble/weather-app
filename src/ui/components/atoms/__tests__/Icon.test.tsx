import React from 'react';
import renderer from 'react-test-renderer';
import { Color, colors } from 'ui/theme/colors';
import Icon, { iconNames } from '../Icon';
import { IconName } from '../Icon/types';

describe('Icon Atom', () => {
  describe('Render Name', () => {
    iconNames.forEach((name: IconName) => {
      it(`Render name: ${name}`, () => {
        const component = renderer.create(<Icon name={name} />).toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render size', () => {
    const sizes = [...Array(10).keys()];
    sizes.forEach(size => {
      it(`Render size: ${size}`, () => {
        const component = renderer
          .create(<Icon size={16 + size * 4} name={'cloudy'} />)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render color', () => {
    Object.keys(colors).forEach((color: Color) => {
      it(`Render color: ${color}`, () => {
        const component = renderer
          .create(<Icon name={'cloudy'} color={color} />)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });
});
