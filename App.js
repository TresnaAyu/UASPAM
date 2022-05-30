import React from "react";
import halaman_depan from "./screens/halaman_depan"
import hasil_searching from "./screens/hasil_searching"
import halaman_detail from "./screens/halaman_detail"
import halaman_kategori from './screens/halaman_kategori'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
        name="halaman_depan"
        component={halaman_depan}
        />
        <Stack.Screen
        name="hasil_searching"
        component={hasil_searching}
        />
        <Stack.Screen
        name="halaman_kategori"
        component={halaman_kategori}
        />
        <Stack.Screen
        name="halaman_detail"
        component={halaman_detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
