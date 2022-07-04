import React from 'react';
import * as Illustrations from './illustrations';
import { IllustrationProps } from './types';
import { pascalize } from 'humps';

const Illustration = ({ name, ...props }: IllustrationProps) => {
  const Illustration = Illustrations[pascalize(name)];

  return <Illustration {...props} />;
};

export default Illustration;
