import React from 'react';
import {
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import CustomSwitch from '../../components/CustomSwitch';
import { Layout, Text } from '@ui-kitten/components';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 18 }}>
            Bonjour Nom Prénom
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ImageBackground
              source={require('../../assets/images/profile_image.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </Layout>

        <Layout
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Rechercher" />
        </Layout>

        <Layout
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18 }}>
            Les derniers cours
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Course')}>
            <Text style={{ color: '#0d47a1' }}>Tout voir</Text>
          </TouchableOpacity>
        </Layout>

        <Layout style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Les plus consulter"
            option2="Les dernières sorties"
          />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}
export { HomeScreen }