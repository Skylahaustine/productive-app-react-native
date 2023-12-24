import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges</Text>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
