import React, { useContext } from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { TasksContext } from '../contexts/tasks.context';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';

export default ({navigation, route}) => {
    const {tasks, SetTasks} = useContext(TasksContext);
    return (
        <View style={{flex: 1}}>
            <Header title="Favorite Tasks" />
            <SafeAreaView style={{flex: 1, backgroundColor: "#e6effc"}}>
                <StatusBar hidden={true} />
                <ScrollView style={{flex: 1, backgroundColor: "#e6effc", paddingTop: 10}}>
                    <TaskList page="Favorite" />
                </ScrollView>
                <TaskInput/>
            </SafeAreaView>
            <NavBar title={route.name} navigation={navigation} />
        </View>
    )
}