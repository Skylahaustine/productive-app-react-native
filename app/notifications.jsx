import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges</Text>
    </View>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
