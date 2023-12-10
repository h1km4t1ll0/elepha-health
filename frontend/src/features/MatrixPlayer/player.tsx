import { FC } from 'react';
import { MatrixPlayerComponent } from 'features/MatrixPlayer/types';
import { LottieHLSPlayer } from 'shared/ui/LottieHLSPlayer';

export const MatrixPlayer: FC<MatrixPlayerComponent> = (props) => (
  <LottieHLSPlayer
    audioUrl={props.audioUrl}
    lottieType={props.lottieType}
    windowHeight={props.windowHeight}
  />
);
