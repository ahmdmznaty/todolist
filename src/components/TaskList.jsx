import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Task from './Task';
import { TasksContext } from '../contexts/tasks.context';

export default ({page}) => {
    const {tasks} = useContext(TasksContext);
    const list = tasks.filter(task => {
        if(page == "Favorite") {
            return task.favorite && !(task.archived || task.deleted)
        }
        else if(page == "Archived") {
            return task.archived && !(task.deleted)
        }
        else if(page == "Deleted") {
            return task.deleted
        }
        else {
            return !task.archived && !task.deleted
        }
    });
    return (
        <>
            {
                list.length != 0 ?
                    list.map(task => {
                        return (
                            <Task
                                id={task.id}
                                checked={task.checked}
                                content={task.content}
                                key={task.id}
                                favorite={task.favorite}
                                archived={task.archived}
                                deleted={task.deleted}
                            />
                        )
                    }) :
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center",
                        paddingTop: list.length == 0 ? (Platform.OS === "ios" ? 100 : 60) : 0, opacity: 0.5,
                    }}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/4196/4196322.png",
                                width: 200, height: 200,
                            }}
                            style={{width: 200, height: 200, marginVertical: 20}}
                        />
                        <Text style={{fontSize: 20, color: "#333"}}>Add Tasks & Track Your Life</Text>
                    </View>
            }
        </>
    )
}