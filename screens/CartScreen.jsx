import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CartContext} from '../store/CartContext';
import {DISHES} from '../data/Data';

const CartScreen = () => {
  const cart = useContext(CartContext);
  const dishesInCart = DISHES.filter(dish => cart.ids.includes(dish.id));

  const CartItem = dish => {
    return (
      <View style={styles.cartItem}>
        <Text>{dish.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={dishesInCart} renderItem={data => CartItem(data.item)} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  cartItem: {
    padding: 8,
  },
});
