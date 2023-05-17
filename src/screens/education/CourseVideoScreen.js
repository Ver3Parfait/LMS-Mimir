import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Layout, Text } from '@ui-kitten/components';

function CourseVideoScreen({ navigation }) {
  return (
    <Layout>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Retour</Text>
      </TouchableOpacity>
      <Text>Video</Text>
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

export { CourseVideoScreen }