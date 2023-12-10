import { registerRootComponent } from 'expo';
import App from 'app/index';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

registerRootComponent(App);
