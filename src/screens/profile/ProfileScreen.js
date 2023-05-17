import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Ionicons style={{ position: "absolute", top: 50, left: 25 }} size={50} name="grid-outline" onPress={() => navigation.openDrawer()} />
    </SafeAreaView>
  )
}

export { ProfileScreen };