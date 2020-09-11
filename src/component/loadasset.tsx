import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import Constants from 'expo-constants';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export type FontSource = Parameters<typeof Font.loadAsync>[0];

// const usePromiseAll = (promises: Promise<void>[], cb: () => void) =>
//   useEffect(() => {
//     (async () => {
//       await Promise.all(promises);
//       cb();
//     })();
//   });

// const useLoadAssets = (fonts: FontSource): boolean => {
//   const [ready, setReady] = useState(false);
//   usePromiseAll(
//     [Font.loadAsync(fonts)],
//     () => setReady(true)
//   );
//   return ready;
// };

interface LoadAssetsProps {
  fonts?: FontSource;
  // assets?: number[];
  children: ReactElement;
}

const LoadAssets = ({ fonts, children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  // const ready = useState(fonts || {});
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          PERSISTENCE_KEY
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state)),
    []
  );
  
  // if (!ready || !isNavigationReady) {
  //   return <ActivityIndicator />;
  // }
  if (!isNavigationReady) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;



// export default function App() {
//   const [isReady, setIsReady] = React.useState(false);
//   const [initialState, setInitialState] = React.useState();

//   React.useEffect(() => {
//     const restoreState = async () => {
//       try {
//         const initialUrl = await Linking.getInitialURL();

//         if (Platform.OS !== 'web' && initialUrl == null) {
//           // Only restore state if there's no deep link and we're not on web
//           const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
//           const state = savedStateString ? JSON.parse(savedStateString) : undefined;

//           if (state !== undefined) {
//             setInitialState(state);
//           }
//         }
//       } finally {
//         setIsReady(true);
//       }
//     };

//     if (!isReady) {
//       restoreState();
//     }
//   }, [isReady]);

//   if (!isReady) {
//     return <ActivityIndicator />;
//   }

//   return (
//     <NavigationContainer
//       initialState={initialState}
//       onStateChange={(state) =>
//         AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
//       }
//     >
//       {/* ... */}
//     </NavigationContainer>
//   );
// }