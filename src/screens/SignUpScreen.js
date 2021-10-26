import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <Text>SignUp Screen</Text>
            <Button
                title= "Sign in"
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title= "Main flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignUpScreen;