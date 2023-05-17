import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import { Layout, Text } from '@ui-kitten/components';

const DATA = [
  {
    id: '1',
    title: 'React',
    image: require('../../assets/images/course.jpg')
  },
  {
    id: '2',
    title: 'React Native',
    image: require('../../assets/images/course.jpg')
  },
  {
    id: '3',
    title: 'Synphony',
    image: require('../../assets/images/course.jpg')
  },
];

const renderItem = ({ item }) => (
  <Layout style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Image source={item.image} style={{ width: 50, height: 50 }} />
  </Layout>
);

function CourseIndexScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 32,
  },
});
export { CourseIndexScreen }