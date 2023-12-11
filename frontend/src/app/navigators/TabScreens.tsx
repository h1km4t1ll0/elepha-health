import React, {FunctionComponent} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ProfilePage} from 'pages/ProfilePage';
import {FuturePage} from 'pages/FuturePage';
import {PulsePage} from "pages/PulsePage";

const Tab = createBottomTabNavigator();

export const CustomTabBar = ({state, navigation}: BottomTabBarProps) => (
    <View style={{ ...styles.tabBar, backgroundColor: 'rgb(225, 241, 241, 0.8)' }} className='rounded-t-xl'>
        {state.routes.map((route: { key: string | number; name: string; }, index: React.Key | null | undefined) => {
            const isFocused = state.index === index;

            const onPress = () => {
                navigation.navigate(route.name as any);
            };

            let iconName = '';

            if (route.name === 'Home4') {
                iconName = 'account';
            } else if (route.name === 'Home2') {
                iconName = 'headphones';
            } else if (route.name === 'Home3') {
                iconName = 'view-grid';
            }

            return (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.tabItem,
                    ]}
                    onPress={onPress}
                >
                    <Icon name={iconName as string} color={isFocused ? '#00797D' : '#92B1B2'} size={36}/>
                </TouchableOpacity>
            );
        })}
    </View>
);

export const TabScreens = () => (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home4" component={ProfilePage as FunctionComponent<{}>} options={{headerShown: false}}/>
        <Tab.Screen name="Home2" component={PulsePage as FunctionComponent<{}>} options={{headerShown: false}}/>
        <Tab.Screen name="Home3" component={FuturePage as FunctionComponent<{}>} options={{headerShown: false}}/>
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 80,
        borderTopWidth: 0,
        zIndex: 1000
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 30,
        marginVertical: 20,

    },
});

