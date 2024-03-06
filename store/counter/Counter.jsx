import {Button, StyleSheet, Text, View} from 'react-native';
import { decrement, increment, incrementAsync, incrementBy, selectCounter } from "./counterSlice";
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Text style={styles.counter}>{counter}</Text>
      {/*<Button title="Increment" onPress={() => dispatch(incrementBy(4))} />*/}
      <Button title="Increment" onPress={() => dispatch(incrementAsync(3))} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 12,
  },
});
