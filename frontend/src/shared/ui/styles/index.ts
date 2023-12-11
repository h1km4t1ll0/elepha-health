import React, { useContext } from 'react';
import {colorMap} from 'shared/ui/styles/colorMap';

type styleObject = {
  color: typeof colorMap,
};

const StyleContext = React.createContext<styleObject | null>(null);

export function useCurrentStyle() {
  return useContext(StyleContext);
}

// export default StyleContext.Provider;
