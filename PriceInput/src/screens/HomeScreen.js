import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import InputPrice from '../components/Input';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <InputPrice />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;