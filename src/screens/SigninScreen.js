import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <NavigationEvents 
                        onWillFocus = {clearErrorMessage}
                    />
                    <AuthForm 
                        headerText = "Sign In to Your Account"
                        errorMessage = {state.errorMessage}
                        onSubmit = {signin}
                        submitButtonText = "Sign In"
                    />
                    <NavLink
                        text = "Don't have an account? Sign up instead!"
                        routeName = "Signup"
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

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

export default SigninScreen;