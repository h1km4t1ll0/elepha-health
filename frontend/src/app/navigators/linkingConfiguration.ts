/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {RootStackParamList} from 'app/navigators/types';

const prefix = Linking.createURL('/');

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
    prefixes: [prefix],
    config: {
        initialRouteName: 'Welcome',
        screens: {
            Welcome: '/',
            Matrix: '/matrix',
            Login: '/email',
            Reset: '/reset',
            Register: '/register',
            Profile: '/profile',
            TabScreens: '/tabScreens',
            EditProfile: '/editProfile',
            Edited: '/edited',
            Future: '/feedback',
        },
    },
};

// export default linkingConfiguration;
