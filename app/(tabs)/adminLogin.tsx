import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native';

const logo = require('@/assets/images/Temple.png');

export default function AdminLogin() {
    const [rememberMe, setRememberMe] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login button pressed'); // Debugging step
        const universalUsername = 'admin';
        const universalPassword = 'password123';

        if (username === universalUsername && password === universalPassword) {
            Alert.alert(
                'Login Successful!',
                'You can now go to the Admin Panel to edit pages or add events.',
                [{ text: 'OK' }]
            );
        } else {
            Alert.alert(
                'Invalid Credentials',
                'The username or password you entered is incorrect. Please try again.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Admin Login</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="USERNAME"
                    value={username}
                    onChangeText={setUsername}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.rememberView}>
                <View style={styles.switch}>
                    <Switch
                        value={rememberMe}
                        onValueChange={setRememberMe}
                        trackColor={{ true: 'green', false: 'gray' }}
                    />
                    <Text style={styles.rememberText}>Remember Me</Text>
                </View>
            </View>

            <View style={styles.buttonView}>
                {/* Try using TouchableOpacity instead of Pressable */}
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 70,
    },
    image: {
        height: 160,
        width: 170,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 40,
        color: 'red',
    },
    inputView: {
        gap: 15,
        width: '100%',
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 7,
    },
    rememberView: {
        width: '100%',
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    switch: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    rememberText: {
        fontSize: 13,
    },
    buttonView: {
        width: '100%',
        paddingHorizontal: 50,
    },
    button: {
        backgroundColor: 'red',
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
