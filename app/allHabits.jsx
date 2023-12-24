import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const AllHabits = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges</Text>
    </View>
  );
};

export default AllHabits;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
