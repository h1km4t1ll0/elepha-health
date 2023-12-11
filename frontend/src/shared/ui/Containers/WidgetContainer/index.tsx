import {FunctionComponent} from 'react';
import * as React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export const WidgetContainer: FunctionComponent<{
    color: string,
    children: React.ReactNode,
    style?: StyleProp<ViewStyle> | undefined
}> = (props) => (
    <View style={{
        backgroundColor: props.color,
        borderRadius: 15,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        ...(props.style as object),
    }}>
        {props.children}
    </View>
);

