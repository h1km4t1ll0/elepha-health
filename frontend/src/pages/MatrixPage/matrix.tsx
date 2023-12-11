import React, { FC, useEffect, useState } from 'react';
import { RootStackScreenProps } from 'app/navigators/types';
import { MatrixPlayerComponent } from 'features/MatrixPlayer/types';
import { MatrixComponent } from 'entities/matrix/ui/types';
import { MatrixWidget } from 'widgets/MatrixWidget';
import { Dimensions, ScrollView, View } from 'react-native';
import { getMatrix } from 'shared/api';
import { Text } from 'shared/ui/Text';
import { colorMap } from 'shared/ui/styles/colorMap';
import { Button } from 'shared/ui/Button';
import { PageContainer } from 'shared/ui/Containers';
import { MatrixData } from 'pages/MatrixPage/types';
import { TallPageContainer } from 'shared/ui/Containers/PageContainer/tallPageContainer'
import { Divider } from 'shared/ui/Divider'
import { MiddlePageContainer } from 'shared/ui/Containers/PageContainer/middlePageContainer'

const getPulseType = (pulse: number): string => {
  if (pulse < 60) {
    return 'activation';
  }
  else if (pulse >= 60 && pulse <= 80) {
    return 'balance';
  }
  else {
    return 'rest';
  }
};

const getMatrixData = (type: string): MatrixData => {
  const windowHeight = Dimensions.get('window').height;
  if (type === 'rest') {
    return {
      backgroundColor: 'rgba(168, 168, 166, 0.3)',
      titleColor: 'white',
      name: 'Матрица\nна восстановление',
      lottieType: 'rest',
      windowHeight,
    };
  } else if (type === 'balance') {
    return {
      backgroundColor: 'rgba(252, 210, 185, 0.3)',
      titleColor: 'white',
      name: 'Матрица\nна внутренний баланс',
      lottieType: 'balance',
      windowHeight,
    };
  }

  return {
    backgroundColor: 'rgba(168, 168, 166, 0.3)',
    titleColor: 'white',
    name: 'Матрица\nна активацию работы мозга',
    lottieType: 'activation',
    windowHeight,
  };
};

export const MatrixPage: FC<RootStackScreenProps<'Matrix'>> = ({ navigation, route }) => {
  const { pulse } = route.params;
  const [currentMatrix, setCurrentMatrix] = useState<MatrixComponent & MatrixPlayerComponent | null>(null);

  useEffect(() => {
    (async () => {
      if (currentMatrix === null) {
        const type = getPulseType(+pulse);
        const { data } = (await getMatrix(type));
        if (data) {
          const matrixData = getMatrixData(type);
          const newMatrix = ({ ...(data as object), ...(matrixData as object) }) as MatrixComponent & MatrixPlayerComponent;
          setCurrentMatrix(newMatrix);
        }
      }
    })()
  }, []);

  console.log(currentMatrix?.audioUrl)
  if (!currentMatrix) {
    return <Text>Загрузка...</Text>;
  }

  return (
    <MiddlePageContainer>
      <ScrollView style={{ flex: 1, width: '100%', }}>
        <View style={{ alignItems: 'center' }}>

          <MatrixWidget
              backgroundColor={currentMatrix.backgroundColor}
              titleColor={currentMatrix.titleColor}
              lottieType={currentMatrix.lottieType}
              windowHeight={Dimensions.get('window').height}
              name={currentMatrix.name}
              description={currentMatrix.description}
              recommendations={currentMatrix.recommendations}
              audioUrl={currentMatrix.audioUrl}
          />

          <View className='w-[80%]'>
            <Button
                textStyles={{ fontSize: 20 }}
                isRound
                type="filled"
                onPress={() => navigation.navigate('Compare', { pulse })}
            >
              Измерить результат
            </Button>
          </View>
        </View>
      </ScrollView>
    </MiddlePageContainer>
  )
};