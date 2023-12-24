import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomDrawer from '../components/CustomDrawer';

const MyDrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1c222b',
        },
        labelStyle: {
          fontWeight: 'bold',
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
          color: 'white',
          lineHeight: 21,
        },
      }}
    >
      <Drawer.Screen
        name='index'
        options={{
          drawerLabel: 'Today',
          title: 'Today',

          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name='calendar'
              size={24}
              color={focused ? '#fff' : '#1c8fff'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='stats'
        options={{
          drawerLabel: 'Your Statistics',
          title: 'Your Stats',
          drawerIcon: ({ color, focused }) => (
            <FontAwesome
              name='bar-chart'
              color={focused ? '#fff' : '#1c8fff'}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='challenges'
        options={{
          drawerLabel: 'Challenges',
          title: 'Challenges',
          drawerIcon: ({ color, focused }) => (
            <FontAwesome
              name='trophy'
              color={focused ? '#fff' : '#1c8fff'}
              size={20}
            />
          ),
        }}
      />
    </Drawer>
  );
};

export default MyDrawerLayout;
