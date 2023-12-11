import React, {useCallback} from 'react';
import {
    NavigationAction,
    NavigationContainer,
    NavigationContainerProps,
} from '@react-navigation/native';

import {RootNavigator} from './RootNavigator';
import {linkingConfiguration} from './linkingConfiguration';

export const Navigation = () => {
    const onUnhandledAction: NavigationContainerProps['onUnhandledAction'] = useCallback((action: NavigationAction) => {
        console.error('onUnhandledAction NavigationContainer', action);
    }, []);

    return (
        <NavigationContainer
            linking={linkingConfiguration}
            onUnhandledAction={onUnhandledAction}
        >
            <RootNavigator/>
        </NavigationContainer>
    );
};

