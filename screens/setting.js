import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

export default function Setting({route, navigation}) {
    return(
        <View style={styles.container}>
            <Text>Setting</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})
