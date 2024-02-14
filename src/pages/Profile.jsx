import React, { useContext } from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { TasksContext } from '../contexts/tasks.context';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export default ({navigation, route}) => {
    const {tasks} = useContext(TasksContext);
    return (
        <View style={{flex: 1}}>
            <Header title="User Profile" />
            <SafeAreaView style={{flex: 1, backgroundColor: "#e6effc"}}>
                <StatusBar hidden={true} />
                <ScrollView style={{flex: 1, backgroundColor: "#e6effc", paddingTop: 10}}>
                    <Text>Profile</Text>
                </ScrollView>
            </SafeAreaView>
            <NavBar title={route.name} navigation={navigation} />
        </View>
    )
}