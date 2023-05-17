import { StyleSheet,} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Layout, Text } from '@ui-kitten/components';

function CourseDetailsScreen({ navigation }) {
  return (
    <Layout>
      <Text>Details</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Retour</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CourseVideo')}>
        <Text>CourseVideo</Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});

export { CourseDetailsScreen }