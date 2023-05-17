import { createStackNavigator } from '@react-navigation/stack';
import { CourseDetailsScreen } from '../screens/education/CourseDetailsScreen';
import { CourseIndexScreen } from '../screens/education/CourseIndexScreen';
import { CourseVideoScreen } from '../screens/education/CourseVideoScreen';
import * as React from 'react'
const Stack = createStackNavigator();

function CourseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CourseIndex" component={CourseIndexScreen} options={{headerShown:false}}/>
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="CourseVideo" component={CourseVideoScreen} />
    </Stack.Navigator>
  );
} 

export { CourseStack }