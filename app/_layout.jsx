import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={DefaultTheme}>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack> */}
      {/* <View> */}

      <Drawer
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1c222b',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#1c222b',
          },
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#1c8fff',
          drawerInactiveBackgroundColor: '#1c222b',
          drawerLabelStyle: {
            fontWeight: '900',
            color: 'white',
            lineHeight: 20,
          },
        }}
      >
        {/* make  a card on top of the navbar */}

        <Drawer.Screen
          name='modal' // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Today',
            title: 'Today',

            drawerIcon: ({ color }) => (
              // <FontAwesome name='calendar' color={'#1c8fff'} size={20} />
              <Ionicons name='calendar' size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name='(tabs)'
          options={{
            drawerLabel: 'Your Statistics',
            title: 'Your Stats',
            drawerIcon: ({ color }) => (
              <FontAwesome name='bar-chart' color={'#1c8fff'} size={20} />
            ),
          }}
        />
        <Drawer.Screen
          name='challenges'
          options={{
            drawerLabel: 'Challenges',
            title: 'Challenges',
            drawerIcon: ({ color }) => (
              <FontAwesome name='trophy' color={'#1c8fff'} size={20} />
            ),
          }}
        />
      </Drawer>

      {/* </View> */}
    </ThemeProvider>
  );
}
