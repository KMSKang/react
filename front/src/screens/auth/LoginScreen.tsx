import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils';

function LoginScreen() {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: '',
    // });
    // const [touched, setTouched] = useState({
    //     email: false,
    //     password: false,
    // });

    // const handleChangeText = (name: string, text: string) => {
    //     setValues({
    //         ...values,
    //         [name]: text,
    //     });
    // };

    // const handleBlur = (name: string) => {
    //     setTouched({
    //         ...touched,
    //         [name]: true,
    //     });
    // };

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
                            error={'이메일을 입력하세요'}
                            // touched={touched.email}
                            touched={login.touched.email}
                            inputMode="email"
                            // value={values.email}
                            // onChangeText={text => handleChangeText('email', text)}
                            // onBlur={() => handleBlur('email')}
                            {...login.getTextInputProps('email')}/>
                <InputField placeholder="비밀번호"
                            error={'비밀번호를 입력하세요'}
                            // touched={touched.password}
                            touched={login.touched.password}
                            secureTextEntry
                            // value={values.password}
                            // onChangeText={text => handleChangeText('password', text)}
                            // onBlur={() => handleBlur('password')}
                            {...login.getTextInputProps('password')}/>
            </View>
            <CustomButton label="로그인"
                          variant="filled"
                          size="large"
                          onPress={handleSubmit}/>
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