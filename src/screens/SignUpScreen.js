import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Touchable } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    


    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({ email, password }) => signup({ email, password })}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.link} >Already have an account? Sign in instead!</Text>
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