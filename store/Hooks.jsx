import { Button, StyleSheet, Text, View } from "react-native";
import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";


// pozwala na nierenderowanie komponentu, jeśli jego props się nie zmieniły
const NestedComponent = memo(({ onPress }) => {
  console.log("Nested component");
  return <Button title="Test" onPress={onPress} />;
});

const Hooks = () => {
  // generuje property do odczytu stanu i funkcję do zmiany stanu
  // pozwala na zdefiniowanie stanu, który przetrwa odświeżenie widoku, zmiana stanu powoduje odświeżenie widoku

  const [value, setValue] = useState(0);

  const increment = () => {
    // setValue(value + 1);
    setValue((currentValue) => currentValue + 1);
  };

  // umożliwia wykonanie operacji powodujących side effects

  /*useEffect(() => {
    console.log('wykonanie w momencie zamontowania komponentu (jednorazowa inicjalizacja)');
  }, []);*/

  /* useEffect(() => {
     console.log( 'wykonanie w momencie zamontowania komponentu i w momencie kiedy zmienia się jego wskazany stan',);
   }, [value]);*/

  /*useEffect(() => {
    console.log( 'wykonanie w momencie zamontowania komponentu i w momencie kiedy zmienia się jego wskazany stan',);
    return () => {
      console.log('wykonanie w momencie odmontowania komponentu (jednorazowe sprzątanie)');
    };
  }, [value]);*/

  /*useEffect(() => {
    console.log('wykonanie w momencie zamontowania komponentu (jednorazowa inicjalizacja) i przy każdym rerenderowaniu komponentu');
  });*/

  /*useLayoutEffect(() => {
    console.log('wykonanie w momencie zamontowania komponentu (przed useEffect) i w momencie kiedy zmienia się jego stan przed repaintem');
  }, []);*/ // drugi parametr jak przy useEffect

  // zachowuje instancje obiektu między odświeżeniami widoku, zmiana stanu obiektu nie powoduje odświeżenia widoku

  const data = useRef({
    value: 0,
    update() {
      this.value += 1;
      console.log(`Value after update: ${this.value}`);
    },
  });

  const incrementDataValue = () => {
    data.current.update();
  };

  //const callback = () => console.log('Pressed');
  const callback = useCallback(() => console.log("Pressed"), []);

  const [otherValue, setOtherValue] = useState(0);

  // umożliwia cachowanie wyników, może być resetowane, jeśli uzależnimy go od stanu komponentu

  const valuePower = useMemo(() => {
    console.log("Calculating counter power");
    return otherValue ** 2;
  }, [otherValue]);

  const incrementOtherValue = () => {
    setOtherValue(otherValue + 1);
  };

  // prosta implementacja redux'a

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        throw new Error("Illegal argument exception");
    }
  };

  const [state, dispatch] = useReducer(reducer, 0, () => {
    console.log("Init state");
    return 0;
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.counter}>Value: {value}</Text>
        <Button title="Increment" onPress={increment} />
      </View>
      <View style={styles.container}>
        <Text style={styles.counter}>Data value: {data.current.value}</Text>
        <Button title="Increment data value" onPress={incrementDataValue} />
      </View>
      <View style={styles.container}>
        <Text style={styles.counter}>Value power: {valuePower}</Text>
        <Button title="Increment other value" onPress={incrementOtherValue} />
      </View>
      <View style={styles.container}>
        <NestedComponent onPress={callback} />
      </View>
      <View style={styles.container}>
        <Button title="Decrement" onPress={() => dispatch({ type: "decrement" })} />
        <Text style={styles.counter}>State: {state}</Text>
        <Button title="Increment" onPress={() => dispatch({ type: "increment" })} />
      </View>
    </>
  );
};

export default Hooks;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 12,
  },
});
