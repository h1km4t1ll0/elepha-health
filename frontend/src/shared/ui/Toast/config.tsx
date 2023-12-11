import {ErrorToast, SuccessToast} from "react-native-toast-message";
import React from "react";
import {Platform} from "react-native";


export const toastConfig = {
    error: (props:any) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 20,
                color: '#008386'
            }}
            text2Style={{
                fontSize: 17,
                color: '#008386'
            }}
            touchableContainerProps={{backgroundColor: 'white'}}
            style={
                {
                    marginTop: '10%',
                    borderLeftColor: '#7e0c0c',
                    borderLeftWidth: 10,
                    backgroundColor:  'rgba(255,255,255,0.9)',
                    color: 'white',
                }
            }/>
    ),

    success: (props:any) => (
        <SuccessToast
            {...props}
            text1Style={{
                fontSize: 20,
                color: 'white'
            }}
            text2Style={{
                fontSize: 17,
                color: 'white'
            }}
            style={
                {
                    marginTop: '10%',
                    borderLeftColor: '#EB823F',
                    backgroundColor: 'rgb(68,136,138)',
                    borderLeftWidth: 10,
                    color: 'white',
                }
            }/>
    )
};