import React from 'react';
import { IconProps } from './types';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors } from 'ui/theme/colors';
import { TouchableOpacity } from 'react-native';
import { scaleSize } from 'ui/theme/mixins';

const getIcon = ({
  ...props
}: Omit<IconProps, 'color' | 'onPress'> & { color: string }) => {
  switch (props.name) {
    case 'x-circle-outlined':
      return <Feather {...props} name='x-circle' />;
    case 'check-circle':
      return <Feather {...props} name='check-circle' />;
    case 'sync':
      return <Ionicons {...props} name='sync' />;
    case 'cloud-outline':
      return <Ionicons {...props} name='cloud-outline' />;
    case 'cloudy-night-outline':
      return <Ionicons {...props} name='cloudy-night-outline' />;
    case 'cloudy':
      return <Ionicons {...props} name='cloudy' />;
    case 'moon-outline':
      return <Ionicons {...props} name='moon-outline' />;
    case 'partly-sunny-outline':
      return <Ionicons {...props} name='partly-sunny-outline' />;
    case 'rainy-outline':
      return <Ionicons {...props} name='rainy-outline' />;
    case 'snow-outline':
      return <Ionicons {...props} name='snow-outline' />;
    case 'sunny-outline':
      return <Ionicons {...props} name='sunny-outline' />;
    case 'thunderstorm-outline':
      return <Ionicons {...props} name='thunderstorm-outline' />;
    case 'wind':
      return <Feather {...props} name='wind' />;
    case 'chevron-down':
      return <Ionicons {...props} name='chevron-down' />;
    case 'chevron-up':
      return <Ionicons {...props} name='chevron-up' />;
  }
};

export const iconNames: Array<IconProps['name']> = [
  'cloud-outline',
  'cloudy-night-outline',
  'cloudy',
  'sync',
  'x-circle-outlined',
  'check-circle',
  'moon-outline',
  'partly-sunny-outline',
  'rainy-outline',
  'snow-outline',
  'sunny-outline',
  'thunderstorm-outline',
  'wind',
  'chevron-down',
  'chevron-up',
];

const Icon = ({
  color = 'gray',
  size = 24,
  onPress,
  style,
  disabled,
  ...props
}: IconProps) => {
  const iconSize = scaleSize(size);

  const IconToRender = getIcon({
    ...props,
    size: iconSize,
    color: colors[color],
  });

  return (
    <TouchableOpacity
      style={[style, { width: iconSize }]}
      onPress={onPress}
      disabled={!onPress || disabled}
    >
      {IconToRender}
    </TouchableOpacity>
  );
};

export default Icon;
