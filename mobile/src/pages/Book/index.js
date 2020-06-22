import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import api from '../../services/api';

export default function Book () {
    const [rockets, setRocket] = useState();
    const [loading, setLoading] = useState();
    const [page, setPage] = useState();

    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();   
    }

    function handleNavigateDetails() {
        navigation.navigate('Details');
    }

    async function loadRockets() {
        if(loading){
            return;
        }

        setLoading(true);

        const response = await api.get('rockets', {
            params: { page }
        });

        setRocket([... rockets, ...response.data]);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadRockets();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleNavigateBack}> 
                        <Icon name="arrow-left" color="#FFF" size={24} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Foguetes</Text>
                <Text style={styles.description}>Encontre o foguete ideal para a sua viagem</Text>

                <View style={styles.rocketContainer}>
                    <FlatList 
                        data={rockets}
                        style={styles.rocketList}
                        keyExtractor={rocket => String(rocket.id)}
                        showsVerticalScrollIndicator={false}
                        onEndReached={loadRockets}
                        onEndReachedThreshold={0.2}
                        renderItem={({item: rocket}) => (
                            <View style={styles.rocket}>
                                <Text style={styles.rocketName}>Modelo:</Text>
                                <Text style={styles.rocketValue}>{rocket.model}</Text>

                                <Text style={styles.rocketName}>Data</Text>
                                <Text style={styles.rocketValue}>{rocket.dates_available}</Text>

                                <Text style={styles.rocketName}>Valor</Text>
                                <Text style={styles.rocketValue}>{rocket.price}</Text>

                                <Text style={styles.rocketName}>Fica disponível:</Text>
                                <Text style={styles.rocketValue}>{rocket.sits_available}</Text>

                                <Text style={styles.rocketName}>Reservas Disponiveis:</Text>
                                <Text style={styles.rocketValue}>{rocket.available_booking}</Text>

                                <TouchableOpacity style={styles.detailsButton}  onPress={handleNavigateDetails}>
                                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                                    <Icon name="arrow-right" size={16} color="#1499ff" />
                                </TouchableOpacity>
                            </View> 
                        )}
                    />
                </View>
            </View>
        </>
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

    rocketList: {
        marginTop: 32,
    },

    rocket: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    rocketName: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    rocketValue: {
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


