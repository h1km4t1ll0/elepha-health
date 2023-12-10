import { HLSPlayerComponent } from 'shared/ui/LottieHLSPlayer/types';

export type MatrixPlayerComponent = {
  lottieType: 'rest' | 'balance' | 'activation',
  windowHeight: number,
} & HLSPlayerComponent;
