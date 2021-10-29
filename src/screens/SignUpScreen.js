import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Touchable } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    return (
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer />
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                // for password
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            { state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) : null }
            <Spacer>
            <Button
                title= "Sign up"
                onPress={() => signup({ email, password })}
            />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.link}>Already have an account? Sign in instead!</Text>
            </TouchableOpacity>
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250

    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
    link: {
        color: 'blue'
    }
});

export default SignUpScreen;