import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
// import { View, Text } from './Themed';
import { View, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={
          {
            // backgroundColor: '#8200d6'
          }
        }
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../assets/images/blue-bg.jpg')}
            style={{
              padding: 20,
            }}
          >
            {/* <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          /> */}
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                // fontFamily: 'Roboto-Medium',
                marginBottom: 5,
                fontWeight: '700',
              }}
            >
              Start a new streak by completing habits
            </Text>
            <View>
              <Text
                style={{
                  color: '#fff',
                  // fontFamily: 'Roboto-Regular',
                  fontSize: 20,
                  // fontWeight: '900',
                  //make text large and tall
                }}
              >
                0 days
              </Text>
              <Text
                style={{
                  color: '#fff',
                  // fontFamily: 'Roboto-Regular',
                  marginRight: 5,
                }}
              >
                Your current streak
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='share-social-outline' size={22} color={'#1c8fff'} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 20,

                color: '#fff',
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='exit-outline' size={22} color={'#1c8fff'} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 20,
                color: '#fff',
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    // add border radius and overflow hidden for bottom
    // borderRadius: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
});
