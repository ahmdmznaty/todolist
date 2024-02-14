import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { uid } from 'uid';
import { TasksContext } from '../contexts/tasks.context';

export default ({}) => {
    const {setTasks} = useContext(TasksContext);
    const [newTask, setNewTask] = useState({
        checked: false, content: "", favorite: false, archived: false, deleted: false,
    });
    const submitTask = () => {
        const taskToAdd = {...newTask, id: uid(20)};
        setTasks(tasks => {
            const newTasks = [...tasks, taskToAdd];
            return newTasks;
        })
        newTask.content = "";
    }
    return (
        <View style={{height: 60, flexDirection: "row", alignItems: "center", marginHorizontal: 10, marginTop: 10, marginBottom: Platform.OS == "ios" ? 50 : 70, padding: 0, borderColor: "#608fff", borderWidth: 1, borderRadius: 5}}>
            <TextInput
                placeholder="Add a new task"
                defaultValue={newTask.content}
                onChangeText={(value) => setNewTask({...newTask, content: value})}
                onSubmitEditing={() => {submitTask()}}
                placeholderTextColor={"#999"}
                style={{
                    fontSize: 18, color: "#333", marginLeft: 10, width: "85%", height: "100%",
                }}
            />
            <TouchableOpacity onPress={() => {submitTask()}} >
                <Image
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/9131/9131510.png",
                        width: 30, height: 30,
                    }}
                    style={{width: 30, height: 30}}
                />
            </TouchableOpacity>
        </View>
    )
}