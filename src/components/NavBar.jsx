import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, Platform } from 'react-native';

export default ({title, navigation}) => {
    return (
        <View style={{
            flexDirection: "row", height: Platform.OS === 'ios' ? 75 : 60,
            paddingBottom: Platform.OS === 'ios' ? 20 : 0, backgroundColor: "#608fff",
            justifyContent: "space-evenly", alignItems: "center",
            position: "absolute", bottom: 0, left: 0, right: 0,
        }}>
            <TouchableOpacity
                style={{
                    width: 45, height: 45, backgroundColor: title == "Home" ? "#fff" : "",
                    justifyContent: "center", alignItems: "center",
                    borderRadius: 8
                }}
                onPress={() => {navigation.navigate('Home', {name: 'Home'})}}
            >
                <Image source={require('../../assets/home.png')} style={{width: 30, height: 30, tintColor: title == "Home" ? "#608fff" : "#fff"}} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 45, height: 45, backgroundColor: title == "Favorite" ? "#fff" : "",
                    justifyContent: "center", alignItems: "center",
                    borderRadius: 8
                }}
                onPress={() => {navigation.navigate('Favorite', {name: 'Favorite'})}}
            >
                <Image source={require('../../assets/favorite.png')} style={{width: 30, height: 30, tintColor: title == "Favorite" ? "#608fff" : "#fff"}} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 45, height: 45, backgroundColor: title == "Archived" ? "#fff" : "",
                    justifyContent: "center", alignItems: "center",
                    borderRadius: 8
                }}
                onPress={() => {navigation.navigate('Archived', {name: 'Archived'})}}
            >
                <Image source={require('../../assets/archive.png')} style={{width: 30, height: 30, tintColor: title == "Archived" ? "#608fff" : "#fff"}} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 45, height: 45, backgroundColor: title == "Deleted" ? "#fff" : "",
                    justifyContent: "center", alignItems: "center",
                    borderRadius: 8
                }}
                onPress={() => {navigation.navigate('Deleted', {name: 'Deleted'})}}
            >
                <Image source={require('../../assets/trash.png')} style={{width: 30, height: 30, tintColor: title == "Deleted" ? "#608fff" : "#fff"}} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 45, height: 45, backgroundColor: title == "Profile" ? "#fff" : "",
                    justifyContent: "center", alignItems: "center",
                    borderRadius: 8
                }}
                onPress={() => {navigation.navigate('Profile', {name: 'Profile'})}}
            >
                <Image source={require('../../assets/user.png')} style={{width: 30, height: 30, tintColor: title == "Profile" ? "#608fff" : "#fff"}} />
            </TouchableOpacity>
        </View>
    )
}