import { GestureResponderEvent } from 'react-native'

export interface ModalContainerProps {
  onClose?: ((event: GestureResponderEvent) => void) | undefined
}