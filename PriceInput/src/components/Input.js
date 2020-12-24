import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CurrencyInput from 'react-native-currency-input';

const InputPrice = () => {
    const [amount, setAmount] = useState('');
    
    return (
        <View>
            <CurrencyInput 
                value={amount}
                onChangeValue = {setAmount}
                unit="RM "
                delimiter=","
                separator="."
                precision={2}
                placeholder="RM 0.00"
                keyboardType="numeric"
            />
        </View>
    )
}
    
const styles = StyleSheet.create ({
   
})

export default InputPrice;