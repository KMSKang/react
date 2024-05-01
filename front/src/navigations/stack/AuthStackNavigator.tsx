import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {authNavigations} from '../../constants';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignScreen from '../../screens/auth/SignupScreen';

export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGNUP]: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
    return (
        // <Stack.Navigator>
        <Stack.Navigator screenOptions = {{
                         cardStyle: {
                             backgroundColor: 'white'
                         },
                         headerStyle: {
                             backgroundColor: 'white',
                             shadowColor: 'red'
                         },
                         headerTitleStyle: {
                             fontSize: 30
                         },
                         headerTintColor: 'red'
        }}>
            <Stack.Screen name={authNavigations.AUTH_HOME}
                          component={AuthHomeScreen} 
                          options={{
                              headerTitle: '',
                              headerShown: false
                          }} />
            <Stack.Screen name={authNavigations.LOGIN}
                          component={LoginScreen}
                          options={{
                              headerTitle: '로그인'
                          }} />
            <Stack.Screen name={authNavigations.SIGNUP}
                          component={SignScreen}
                          options={{
                              headerTitle: '회원가입'
                          }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;