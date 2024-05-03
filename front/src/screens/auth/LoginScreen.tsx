import React, { useState, useRef } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils';

function LoginScreen() {
    const passwordRef = useRef<TextInput | null>(null);

    const login = useForm({
        initialValue: {email: '', password: ''},
        validate: validateLogin,
    });

    const handleSubmit = () => {
        console.log('login.values', login.values);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputField placeholder="이메일"
                            autoFocus
                            error={'이메일을 입력하세요'}
                            touched={login.touched.email}
                            inputMode="email"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            onSubmitEditing={() => passwordRef.current?.focus()}
                            {...login.getTextInputProps('email')} />
                <InputField placeholder="비밀번호"
                            error={'비밀번호를 입력하세요'}
                            touched={login.touched.password}
                            secureTextEntry
                            returnKeyType="join"
                            ref={passwordRef}
                            onSubmitEditing={handleSubmit}
                            {...login.getTextInputProps('password')} />
            </View>
            <CustomButton label="로그인"
                          variant="filled"
                          size="large"
                          onPress={handleSubmit} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
      },
      inputContainer: {
        gap: 20,
      },
});

export default LoginScreen;