import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email" />
            <Input label="Password" />
            <Spacer>
            <Button
                title= "Sign up"
                onPress={() => navigation.navigate('Signin')}
            />
            </Spacer>
            <Spacer>
            <Button
                title= "Main flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default SignUpScreen;