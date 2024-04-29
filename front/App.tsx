import React, { useState } from 'react';
// import {StyleSheet} from 'react-native';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import AuthStackNavigator from './src/navigations/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';

function App() {
  // const [name, setName] = useState('');

  // const handleChangeInput = (text: string) => {
  //   setName(text);
  // }

  return (
      <NavigationContainer>
        {/* <AuthStackNavigator /> */}
        <RootNavigator />
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'black',
//     height: 50,
//     width: 100
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   }
// });

export default App;
