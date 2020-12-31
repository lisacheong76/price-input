import React, {useCallback} from 'react';
import {View, TextInput} from 'react-native';
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
      //const {key, keyCode} = e;
      const key = e.nativeEvent.key;
      const keyCode = '';
      console.log('key', e.nativeEvent);
      if (
        (value === 0 && !VALID_FIRST.test(key)) ||
        (value !== 0 && !VALID_NEXT.test(key) && key !== 'Backspace')
      ) {
        return;
      }
      
      const valueString = value.toString();
      let nextValue;
      if (key !== 'Backspace') {
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
      console.log('nv', nextValue);
      onValueChange(nextValue);
    },
    [max, onValueChange, value],
  );

  const handleChange = useCallback(() => {
    // DUMMY TO AVOID REACT WARNING
  }, []);

  const valueDisplay = (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'MYR'
  });
  console.log('valueDisplay', valueDisplay);

  return (
      <TextInput
        className={className}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={style}
        value={valueDisplay}
        keyboardType="numeric"
      />
    
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

export default InputPrice;
