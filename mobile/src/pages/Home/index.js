import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, ImageBackground, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';


export default function Home() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const state = {login: '', password: '', error: ''};

	const navigation = useNavigation();

    function handleNavigationToCompany() {
      	navigation.navigate('Companys');
    }

    function handleNavigationToRegister() {

      	navigation.navigate('Register');
	}

	async function handleLogin() {
		const admin = await api.get('admin', { login, password });
		
		const user = await api.get('users', { login, password });
		
		login = state.login;
		password = state.password

		if(login === admin.password && password === admin.password) {
			return navigation.navigate('Edit');
		}else {
			return navigation.navigate('Companys');
		}

	}

	useEffect(() => {
		setLogin();
	}, []);

	useEffect(() => {
		setPassword();
	}, []);


    return (
        
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<ImageBackground 
				source={require('../../assets/rocket_background.jpg')} 
				style={styles.container} 
				width={600}
				height={600} 
			/>
			<View style={styles.main}>
				<View style={styles.footer}>
					<TextInput 
						style={styles.input}
						placeholder="Digite o seu login"
						onChangeText={() => {state.login}}
					/>

					<TextInput 
						style={styles.input} 
						secureTextEntry={true}   
						placeholder="Digite a sua senha"
						onChangeText={() => {state.password}}
					/>
					
					<RectButton style={styles.button} onPress={handleNavigationToCompany}>
						<View style={styles.buttonIcon}>
							<Text> 
								<Icon name="log-in" color="#FFF" size={24} />
							</Text>
						</View>
						<Text style={styles.buttonText}>
							Entrar
						</Text>
					</RectButton>

					<RectButton style={styles.button} onPress={handleNavigationToRegister}>
						<View style={styles.buttonIcon}>
							<Text> 
								<Icon name="clipboard" color="#FFF" size={24} />
							</Text>
						</View>
						<Text style={styles.buttonText}>
							Cadastrar-se
						</Text>
					</RectButton>	
				</View>
			</View>
		</KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      	flex: 1,
      	padding: 32,
      
	},
	
    main: {
      	flex: 1,
      	justifyContent: 'center',
      	backgroundColor: '#000',
    },
  
    footer: {},
  
    input: {
      	height: 60,
      	backgroundColor: '#FFF',
      	borderRadius: 10,
      	marginBottom: 8,
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
      	marginTop: 8,
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