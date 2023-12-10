import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { EditUserButtonI } from './types';

export const EditUserButton: FC<EditUserButtonI> = (props) => (
  <TouchableOpacity onPress={props.onClick}>
    <MaterialCommunityIcons name="pencil" size={26} color="#000000" />
  </TouchableOpacity>
);
