import React, {FC} from 'react';
import {MatrixPresentation} from 'entities/matrix/ui';
import {MatrixWidgetComponent} from 'widgets/MatrixWidget/types';
import {MatrixPlayer} from 'features/MatrixPlayer';
import {View} from 'react-native';
import { Divider } from 'shared/ui/Divider'

export const MatrixWidget: FC<MatrixWidgetComponent> = (props) => (
    <View className='flex justify-center'>
        <MatrixPresentation
            titleColor={props.titleColor}
            backgroundColor={props.backgroundColor}
            name={props.name}
            description={props.description}
            recommendations={props.recommendations}
        />

        <View className='mt-[15px] mb-[15px]'>
          <Divider height='h-[3px]' />
        </View>

        <MatrixPlayer
            audioUrl={props.audioUrl}
            lottieType={props.lottieType}
            windowHeight={props.windowHeight}
        />

        <View className='mt-[15px] mb-[25px]'>
          <Divider height='h-[3px]' />
        </View>
    </View>
);
