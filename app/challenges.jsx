import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const Challenges = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges</Text>
    </View>
  );
};

export default Challenges;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
