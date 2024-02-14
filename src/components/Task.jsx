import React, { useContext } from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import CheckBox from '@react-native-community/checkbox';
import { Text, TouchableOpacity, Image, Dimensions, View } from 'react-native';
import { TasksContext } from '../contexts/tasks.context';

export default ({id, checked, content, favorite, archived, deleted}) => {
    const {setTasks} = useContext(TasksContext);
    const changeChecked = (id) => {
        setTasks(tasks => {
            return tasks.map(task => {
                if (task.id === id) task.checked = !task.checked;
                return task;
            });
        })
    }
    const checkFavorite = (id) => {
        setTasks(tasks => {
            return tasks.map(task => {
                if (task.id === id) task.favorite = !task.favorite;
                return task;
            });
        })
    }
    const archiveTask = (id) => {
        setTasks(tasks => {
            return tasks.map(task => {
                if (task.id === id) task.archived = !task.archived;
                return task;
            });
        })
    }
    const deleteTask = (id) => {
        setTasks(tasks => {
            return tasks.map(task => {
                if (task.id === id) task.deleted = !task.deleted;
                return task;
            });
        })
    }

    const isPressed = useSharedValue(false);
    const offset = useSharedValue({ x: 0 });
    const screen = Dimensions.get("screen");
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { scale: withSpring(isPressed.value ? 1.01 : 1) },
            ],
            opacity: isPressed.value ? 0.6 : 1
        };
    });
    const start = useSharedValue({ x: 0 });
    const panGesture = Gesture
        .Pan()
        .activateAfterLongPress(70)
        .onUpdate((e) => {
            offset.value = { x: e.translationX + start.value.x };
        })
        .onEnd(() => {
            if (offset.value.x < -screen.width / 2) {
                offset.value = { x: -screen.width };
                runOnJS(archiveTask)(id);
            }
            else if(offset.value.x > screen.width / 2) {
                offset.value = { x: screen.width };
                runOnJS(deleteTask)(id);
            }
            else {
                offset.value = { x: 0 };
            }
        })
        .onFinalize(() => {
            isPressed.value = false;
        });
    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[{height: 54, flexDirection: "row", alignItems: "center", marginHorizontal: 25, marginVertical: 10, padding: 10, borderColor: "#608fff", borderWidth: 1, borderRadius: 5}, animatedStyles]}>
                <View style={{width: 40, height: 40, borderRadius: 25, position: "absolute", right: -80, top: 7, backgroundColor: "#608fff", justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/archive.png')} style={{width: 26, height: 26, tintColor: "#fff"}} />
                </View>
                <View style={{width: 40, height: 40, borderRadius: 25, position: "absolute", left: -80, top: 7, backgroundColor: "#608fff", justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/trash.png')} style={{width: 26, height: 26, tintColor: "#fff"}} />
                </View>
                <CheckBox value={checked} onChange={() => {changeChecked(id)}} />
                <Text style={{flex: 1, fontSize: 18, color: "#333", marginLeft: 10}}>{content}</Text>
                <TouchableOpacity
                    style={{width: 40, height: 40, marginRight: 8}}
                    onPress={() => {checkFavorite(id)}}
                >
                    <Image
                        source={favorite ? require("../../assets/star-filled.png") : require("../../assets/star-empty.png")}
                        style={{width: 25, height: 25, margin: 7.5}}
                    />
                </TouchableOpacity>
            </Animated.View>
        </GestureDetector>
    )
}