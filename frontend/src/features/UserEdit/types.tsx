import {RegisterData} from 'shared/api';

export type EditUserI = {
  user: {
    firstName: string;
    secondName: string;
    email: string;
    phoneNumber: string;
    password: string;
  },
  setUser: (user: {
    firstName: string;
    secondName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) => void,
};