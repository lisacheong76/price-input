import React, {useCallback} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
// import CurrencyInput from 'react-native-currency-input';

const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;

const InputPrice = ({
  className = '',
  max = Number.MAX_SAFE_INTEGER,
  onValueChange,
  style = {},
  value,
}) => {
  const valueAbsTrunc = Math.trunc(Math.abs(value));
  if (
    value !== valueAbsTrunc ||
    !Number.isFinite(value) ||
    Number.isNaN(value)
  ) {
    console.log(`invalid value property`);
  }

  const handleKeyPress = useCallback(
    (e) => {
      const {key, keyCode} = e;
      if (
        (value === 0 && !VALID_FIRST.test(key)) ||
        (value !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)
      ) {
        return;
      }

      const valueString = value.toString();
      let nextValue;
      if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString = value === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
      } else {
        const nextValueString = valueString.slice(0, -1);
        nextValue =
          nextValueString === '' ? 0 : Number.parseInt(nextValueString, 10);
      }
      if (nextValue > max) {
        return;
      }
      onValueChange(nextValue);
    },
    [max, onValueChange, value],
  );

  const handleChange = useCallback(() => {
    // DUMMY TO AVOID REACT WARNING
  }, []);

  const valueDisplay = (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'MYR',
  });
  console.log('valueDisplay', valueDisplay);

  return (
    <View>
      <TextInput
        className={className}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={style}
        value={valueDisplay}
        keyboardType="numeric"
      />
    </View>
  );
};
// const InputPrice = () => {
//     const [amount, setAmount] = useState('');

//     return (
//         <View>
//             <CurrencyInput
//                 value={amount}
//                 onChangeValue = {setAmount}
//                 unit="RM "
//                 delimiter=","
//                 separator="."
//                 precision={2}
//                 placeholder="RM 0.00"
//                 keyboardType="numeric"
//             />
//         </View>
//     )
// }

const styles = StyleSheet.create({});

export default InputPrice;
