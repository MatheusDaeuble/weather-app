import React from 'react';
import renderer from 'react-test-renderer';
import { Color, colors } from 'ui/theme/colors';
import Loading, { LoadingProps } from '../Loading';

describe('Loading Atom', () => {
  describe('Render color', () => {
    Object.keys(colors).forEach((color: Color) => {
      it(`Render color: ${color}`, () => {
        const component = renderer.create(<Loading color={color} />).toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('Render size', () => {
    ['small', 'large'].forEach(size => {
      it(`Render size: ${size}`, () => {
        const component = renderer
          .create(<Loading size={size as LoadingProps['size']} />)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });
  });
});
