import Picker from "react-native-picker-select";

import {PickerI} from "shared/ui/Picker/types";
import React, {FC} from "react";

export const ElephaPicker: FC<PickerI> = (props) => (
    <Picker
        style={{
          viewContainer: {
            width: '100%',
            height: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
            marginBottom: '10%',
            backgroundColor: props?.backgroundColor ? props?.backgroundColor : "rgba(168, 168, 166, 0.3)",
            ...(props.viewContainerStyles as object),
            ...(props.style as object),
          }, inputIOS: {
            fontSize: 18,
            color: '#0A6C74',
            fontFamily: 'Montserrat_400Regular',
            ...(props.textStyles as object),
          },
          inputAndroid: {
            fontSize: 18,
            color: '#0A6C74',
            fontFamily: 'Montserrat_400Regular',
            ...(props.textStyles as object),
          },
        }}
        placeholder={
            {
                label: props.placeholder,
                value: '0',
            }
        }
        items={props.pickerProps}
        onValueChange={props.onChange}
    />
);