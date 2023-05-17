import { View, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
function DrawerContent(props) {
const [isDarkTheme, setIsDarkTheme] = React.useState(false);

const toggleTheme = () => {
  setIsDarkTheme(!isDarkTheme);
}

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Nom Prénom</Title>
                <Caption style={styles.caption}>@ID</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>

          </View>
          <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={size}
            />
          )}
          label="Acceuil"
          onPress={() => { props.navigation.navigate('Home')}} />
                <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="happy-outline"
              color={color}
              size={size}
            />
          )}
          label="Compte"
          onPress={() => {props.navigation.navigate('Home') }} />
                <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="bookmarks-outline"
              color={color}
              size={size}
            />
          )}
          label="Favoris"
          onPress={() => {props.navigation.navigate('Home') }} />
                <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="settings-outline"
              color={color}
              size={size}
            />
          )}
          label="Paramètres"
          onPress={() => { props.navigation.navigate('Home')}} />
                <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="help-outline"
              color={color}
              size={size}
            />
          )}
          label="Support"
          onPress={() => { props.navigation.navigate('Home')}} />
          </Drawer.Section>
          <Drawer.Section title="Préferences">
            <TouchableRipple onPress={() => {toggleTheme()}}>
              <View style={styles.preference}>
                <Text>Thème Sombre</Text>
                <View pointerEvents="none">
                <Switch value={isDarkTheme}/>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="exit-outline"
              color={color}
              size={size}
            />
          )}
          label="Déconnexion"
          onPress={() => { }} />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})

export { DrawerContent }