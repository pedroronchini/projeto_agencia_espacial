import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/pages/Home';
import Book from '../src/pages/Book';
import Companys from '../src/pages/Companys';
import Register from '../src/pages/Register';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator  headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#f0f0f5' } }}>

                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Companys" component={Companys} /> 
                <AppStack.Screen name="Book" component={Book} />
                <AppStack.Screen name="Register" component={Register} />

            </AppStack.Navigator>

        </NavigationContainer>

    );
}