import {
  Button,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useContext} from 'react';
import {CartContext} from '../store/CartContext';

function DishCell({id, name, image}) {
  const cart = useContext(CartContext);
  const isInCart = cart.ids.includes(id);

  return (
    <View style={styles.mealItem}>
      <Pressable style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={image} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            {!isInCart && (
              <Button title="Add" onPress={() => cart.addDish(id)} />
            )}
            {isInCart && (
              <Button title="Remove" onPress={() => cart.removeDish(id)} />
            )}
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default DishCell;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    margin: 8,
  },
  nameInCart: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    margin: 8,
    color: 'red',
  },
});
