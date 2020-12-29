import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import InputPrice from '../components/Input';

const HomeScreen = () => {
  const [masked, setMasked] = useState(555);
  function onValueChange(value) {
    console.log(value);
    setMasked(value);
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputPrice 
            onValueChange={onValueChange} 
            value={masked} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
