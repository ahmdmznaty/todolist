import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TasksContextProvider from './contexts/tasks.context';
import HomePage from './pages/Home';
import FavoritePage from './pages/Favorite';
import ArchivedPage from './pages/Archived';
import DeletedPage from './pages/Deleted';
import ProfilePage from './pages/Profile';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <TasksContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home" component={HomePage}
                            options={{
                                headerBackVisible:false, headerShown: false, animation: 'none'
                            }}
                        />
                        <Stack.Screen
                            name="Favorite" component={FavoritePage}
                            options={{
                                headerBackVisible:false, headerShown: false, animation: 'none'
                            }}
                        />
                        <Stack.Screen
                            name="Archived" component={ArchivedPage}
                            options={{
                                headerBackVisible:false, headerShown: false, animation: 'none'
                            }}
                        />
                        <Stack.Screen
                            name="Deleted" component={DeletedPage}
                            options={{
                                headerBackVisible:false, headerShown: false, animation: 'none'
                            }}
                        />
                        <Stack.Screen
                            name="Profile" component={ProfilePage}
                            options={{
                                headerBackVisible:false, headerShown: false, animation: 'none'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </TasksContextProvider>
        </GestureHandlerRootView>
    );
}