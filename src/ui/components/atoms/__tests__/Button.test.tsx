import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Color, colors } from 'ui/theme/colors';
import { View } from 'react-native';
import Button from '../Button';

describe('Button Atom', () => {
  describe('Render color', () => {
    Object.keys(colors).forEach((color: Color) => {
      it(`Render color: ${color}`, () => {
        const component = renderer
          .create(<Button color={color} label='Testing' />)
          .toJSON();
        expect(component).toMatchSnapshot();
      });
    });

    it('Render disabled', () => {
      const component = renderer
        .create(<Button disabled label='Testing' />)
        .toJSON();
      expect(component).toMatchSnapshot();
    });

    it('Render in loading', () => {
      const component = renderer
        .create(<Button loading label='Testing' />)
        .toJSON();
      expect(component).toMatchSnapshot();
    });

    it('should be able disabled while loading', () => {
      const { getByTestId } = render(
        <View testID='testing'>
          <Button loading label='Testing' />
        </View>
      );

      expect(
        getByTestId('testing').findByProps({ disabled: true })
      ).toBeTruthy();
    });
  });
});
