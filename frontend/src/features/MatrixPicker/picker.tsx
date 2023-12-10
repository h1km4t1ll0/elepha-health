import React, {FC} from 'react';
import {View} from 'react-native';
import {PageContainer} from 'shared/ui/Containers';
import {Text} from 'shared/ui/Text';
import {Button} from 'shared/ui/Button';
import {MatrixPickerComponent} from 'features/MatrixPicker/types';

export const MatrixPicker: FC<MatrixPickerComponent> = (props) => (
    <PageContainer>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            // alignItems: 'center',
            width: '80%'
        }}
        >
            {props.buttons.map(
                (button, id) => (
                    <View
                        style={
                            {
                                width: '100%',
                                margin: 0,
                                marginTop: 0,
                                marginBottom: 0
                            }
                        }
                        key={id}>
                        <Button
                            type="filled"
                            backgroundColor={button.backgroundColor}
                            onPress={() => button.onClick(button.callback)}
                            viewStyle={{marginTop: 40, marginBottom: 5, height: 70}}
                        >
                            <Text type="big">
                                {button.name}
                            </Text>
                        </Button>
                    </View>
                ),
            )}
        </View>
    </PageContainer>
);
