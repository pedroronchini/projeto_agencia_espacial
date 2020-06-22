import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';



export default function Company() {
    const navigation = useNavigation();

    function handleNavigateToBook() {
        navigation.navigate('Book');
    }

    function handleNavigateToBack() {
        navigation.goBack();
    }

    function handleNavigateToCreateCompany() {
        navigation.navigate('CreateCompany');
    }

    function hanldeNavigateToEdit() {
        navigation.navigate('Edit')
    }

    return(
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Button style={styles.styleButton} title="Sair" onPress={handleNavigateToBack}/>
                        <Button style={styles.styleButton} title="Editar Foguetes" onPress={hanldeNavigateToEdit}/>
                        <Button style={styles.styleButton} title="Criar" onPress={handleNavigateToCreateCompany}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Bem-vindo</Text>
                <Text style={styles.description}>Escolha a empresa ideal para te levar a Marte</Text>

                <ScrollView style={styles.companyList} >
                    <View style={styles.company}>
                        <Text style={styles.companyName}>Empresa:</Text>
                        <Text style={styles.companyValue}>XPsA</Text>

                        <Text style={styles.companyName}>Avaliação:</Text>
                        <Text style={styles.companyValue}>0</Text>

                        <Text style={styles.companyName}>Reservas disponíveis</Text>
                        <Text style={styles.companyValue}>5</Text>

                        <TouchableOpacity style={styles.detailsButton}  onPress={handleNavigateToBook}>
                            <Text style={styles.detailsButtonText}>Ver foguetes</Text>
                            <Icon name="arrow-right" size={16} color="#1499ff" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                
                    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:"#000"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    styleButton: {},

    title: {
        fontSize: 30,
        fontFamily:'Ubuntu_700Bold',
        marginBottom: 16,
        marginTop: 48,
        color: '#FFF',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        lineHeight: 24,
        color: '#edeff0',
    },

    companyList: {
        marginTop: 32,
    },

    company: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    companyName: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    companyValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#1499ff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});