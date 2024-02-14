import React from 'react';
import { View, Text, Platform } from 'react-native';

export default ({title}) => {
    return (
        <View style={{
            paddingHorizontal: 20, backgroundColor: "#608fff",
            marginBottom: 0, paddingBottom: 10,
            paddingTop: Platform.OS === "ios" ? 55 : 10,
            height: Platform.OS === "ios" ? 100 : 60,
            justifyContent: "center", alignItems: "center",
        }}>
            <Text style={{fontSize: 22, color: "#fff", fontWeight: "800"}}>{title}</Text>
        </View>
    )
}