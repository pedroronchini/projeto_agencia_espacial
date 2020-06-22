import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

export default function Register() {
    const navigation = useNavigation();
    
    function handleNavigateToBack() {
        navigation.goBack();
    }

    function handleNavigationToHome() {
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateToBack}> 
                    <Icon name="arrow-left" color="#FFF" size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View style={styles.footer}>
                    <TextInput style={styles.input} placeholder="Login" />
                    <TextInput style={styles.input} placeholder="Senha" />

                    <RectButton style={styles.button} onPress={handleNavigationToHome}>
                        <View style={styles.buttonIcon}>
                            <Text> 
                                <Icon name="check" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Cadastrar
                        </Text>
                    </RectButton>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#282928',
    },

    main: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#282928',
    },
    
    footer: {},
    
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 30,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    
    button: {
        backgroundColor: '#1499ff',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 20,
    },
    
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});
    