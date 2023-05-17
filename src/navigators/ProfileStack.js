import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

function ProfileStack() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
    </Drawer.Navigator >
  );
}
export { ProfileStack }