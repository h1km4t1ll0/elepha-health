import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {WelcomePage} from 'pages/WelcomePage'
import {LoginPage} from 'pages/LoginPage';
import {RegisterPage} from 'pages/RegisterPage';
import {TabScreens} from './TabScreens';
import {ProfilePage} from 'pages/ProfilePage';
import { RootStackParamList } from './types';
import {EditProfilePage} from "pages/EditProfilePage";
import { MatrixPage } from 'pages/MatrixPage'
import { ComparePage } from 'pages/ComparePage'
import { ResetPasswordPage } from 'pages/ResetPage'

const RootStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  title: 'Elepha Health',
  headerShown: false,
};

export const RootNavigator: FC = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      options={screenOptions}
      name="Welcome"
      component={WelcomePage}
    />

    <RootStack.Screen
      options={screenOptions}
      name="Login"
      component={LoginPage}
    />

    <RootStack.Screen
        options={screenOptions}
        name="Reset"
        component={ResetPasswordPage}
    />

    <RootStack.Screen
      options={screenOptions}
      name="Profile"
      component={TabScreens}
    />

    <RootStack.Screen
        options={screenOptions}
        name="Matrix"
        component={MatrixPage}
    />

    <RootStack.Screen
        options={screenOptions}
        name="Compare"
        component={ComparePage}
    />

    {/*<RootStack.Screen*/}
    {/*  options={screenOptions}*/}
    {/*  name="Rec"*/}
    {/*  component={TabScreens}*/}
    {/*/>*/}
    <RootStack.Screen
      options={screenOptions}
      name="Register"
      component={RegisterPage}
    />
    {/*<RootStack.Screen*/}
    {/*  options={screenOptions}*/}
    {/*  name="Reset"*/}
    {/*  component={Reset}*/}
    {/*/>*/}
    <RootStack.Screen
      options={screenOptions}
      name="EditProfile"
      component={EditProfilePage}
    />
    {/*<RootStack.Screen*/}
    {/*  options={screenOptions}*/}
    {/*  name="Feedback"*/}
    {/*  component={FeedbackPage}*/}
    {/*/>*/}

  </RootStack.Navigator>
);

// export default RootNavigator;
