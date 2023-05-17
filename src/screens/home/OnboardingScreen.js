import React from 'react'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Learn from '../../assets/svg/learn.svg';
import { Layout, Text } from '@ui-kitten/components';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Layout style={{ marginTop: 20 }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          LMS Mimir
        </Text>
      </Layout>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Learn
          width={300}
          height={300}
          style={{ transform: [{ rotate: '-15deg' }] }}
        />
      </Layout>
      <TouchableOpacity
        style={{
          backgroundColor: '#0d47a1',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Commencer
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;