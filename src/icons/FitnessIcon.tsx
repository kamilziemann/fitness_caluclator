import React, { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import { ReactComponent as EditSVG } from './assets/FitnessIcon.svg';

const FitnessIcon: FC<Omit<IconProps, 'css'>> = (props) => {
  return <Icon {...props} as={EditSVG} />;
};

export default FitnessIcon;