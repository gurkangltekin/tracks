import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <NavigationEvents 
                        onWillFocus = {clearErrorMessage}
                    />
                    <AuthForm
                        headerText = "Sign Up for Tracker"
                        errorMessage = {state.errorMessage}
                        submitButtonText = "Sign Up"
                        onSubmit = {signup}
                    />
                    <Navlink
                        routeName = "Signin"
                        text = "Already have an account? Sign in instead!"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    contentContainerStyle: {
        paddingVertical: 150
    }
});

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

export default SignupScreen;